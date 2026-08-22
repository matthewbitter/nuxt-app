import { FieldValue } from "firebase-admin/firestore";
import { Resend } from "resend";

export default defineEventHandler(async (event) =>
{

    const body: ContactForm = await readBody(event);

    const clientIPAddress = getRequestIP(event, { xForwardedFor: true });
    const storageKey = `cache:form-submit:${clientIPAddress}`;

    const storage = useStorage("data");
    const lastSubmission = await storage.getItem(storageKey) as string | null;

    if (lastSubmission)
    {

        const lastSubmitDate = new Date(lastSubmission);
        const today = new Date();

        const isSameDay = lastSubmitDate.toDateString() === today.toDateString();

        if (isSameDay)
        {

            throw createError({
                statusCode: 429,
                statusMessage: "You have already submitted this form today. Please try again tomorrow."
            });

        }

    }

    if (body.PhoneNumber)
    {

        throw createError({
            statusCode: 400,
            statusMessage: "Invalid data"
        });

    }

    const secretKey = useRuntimeConfig(event).RecaptchaSecretKey;

    if (!secretKey || !body.token)
    {

        throw createError({
            statusCode: 500,
            statusMessage: "Missing key"
        });

    }

    const response: { success: boolean, action: string, score: number } = await $fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        body: new URLSearchParams({
            secret: secretKey,
            response: body.token
        })
    });

    if (!response.success || response.action !== "ContactForm" || response.score < 0.5)
    {

        throw createError({
            statusCode: 400,
            statusMessage: "reCAPTCHA verification failed"
        });

    }

    await storage.setItem(storageKey, new Date().toISOString());

    const database = FirestoreDatabase;
    const document = database.collection("ContactForm");

    delete body.token;

    await document.add({
        ...body,
        CreatedAt: FieldValue.serverTimestamp(),
        ClientIPAddress: clientIPAddress
    });

    const resendApiKey = useRuntimeConfig(event).ResendApiKey;
    const resend = new Resend(resendApiKey);

    body.Name = body.Name.replace(/<[^>]*>/g, "");
    body.Email = body.Email.replace(/<[^>]*>/g, "");
    body.Message = body.Message.replace(/<[^>]*>/g, "");

    await resend.emails.send(({
        from: useRuntimeConfig(event).PersonalEmail,
        to: useRuntimeConfig(event).PersonalEmail,
        subject: `Contact Form (${body.Name})`,
        html: `<p>${clientIPAddress}</p><p>${body.Email}</p><p>${body.Message}</p>`
    }));

    return {
        success: true
    };

});


interface ContactForm
{

    Name: string
    Email: string
    Message: string
    CreatedAt: FieldValue
    PhoneNumber?: string
    token?: string

}