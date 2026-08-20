export default defineEventHandler(async (event) =>
{

    const body = await readBody(event);

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

    if (!secretKey)
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

    return {
        success: true
    };

});