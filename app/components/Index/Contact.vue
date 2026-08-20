<template>
    <UPageSection id="Contact" title="Contact">
        <UPageGrid class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            <UPageCard title="I'd like to hear from you!" description="If you have any inquiries or just want to say hi, please use the contact form.">
                <template #default>
                    <UIcon name="mdi:contact-mail" class="text-primary w-full size-32" />
                </template>
            </UPageCard>
            <UPageCard>
                <UAlert v-if="FormViewState === 'Submitted'" title="Submitted!" description="Thanks for reaching out! I got your message and will get back to you as soon as I can!" icon="mdi:success" color="success" variant="subtle" />
                <UAlert v-else-if="FormViewState === 'ErrorLoading' || FormViewState === 'ErrorSubmitting'" title="Error" description="An error has occurred. Please try again later." icon="mdi:error" color="error" variant="subtle" close @update:open="FormViewState = 'Loaded'" />
                <UForm v-else ref="ContactFormRef" :state="ContactForm" :schema="FormSchema" class="space-y-4" @submit.prevent="SubmitContactForm">
                    <UFormField name="Name" label="Name">
                        <UInput v-model="ContactForm.Name" class="w-full" />
                    </UFormField>
                    <UFormField name="PhoneNumber" label="Phone Number" class="hidden">
                        <UInput v-model="ContactForm.PhoneNumber" class="w-full" />
                    </UFormField>
                    <UFormField name="Email" label="Email">
                        <UInput v-model="ContactForm.Email" class="w-full" />
                    </UFormField>
                    <UFormField name="Message" label="Message">
                        <UTextarea v-model="ContactForm.Message" class="w-full" />
                    </UFormField>
                    <div class="flex">
                        <UButton type="submit" :loading="FormViewState === 'Submitting'" :disabled="FormViewState === 'Submitting'" class="ml-auto">
                            Submit
                        </UButton>
                    </div>
                    <UBadge color="neutral" variant="soft" icon="logos:recaptcha" size="sm" class="bg-transparent">
                        This site is protected by reCAPTCHA
                    </UBadge>
                </UForm>
            </UPageCard>
        </UPageGrid>
    </UPageSection>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Imports
//---------------------------------------------------------------------------
import type { Form, FormSubmitEvent } from "@nuxt/ui";
import z from "zod";


//---------------------------------------------------------------------------
// Properties
//---------------------------------------------------------------------------

const FormSchema = z.object({
    Name: z.string("Name is required").min(1, { message: "Name is required" }),
    PhoneNumber: z.any(),
    Email: z.string("Email is required").min(1, { message: "Email is required" }).pipe(z.email("Email is invalid")),
    Message: z.string("Message is required").min(1, { message: "Message is required" })
});

type Schema = z.output<typeof FormSchema>;

const ContactForm = reactive<Partial<Schema>>({
    Name: undefined,
    PhoneNumber: undefined,
    Email: undefined,
    Message: undefined
});

const ContactFormRef = ref<Form<typeof ContactForm>>();
const FormViewState = ref<"Loading" | "Loaded" | "Submitting" | "Submitted" | "ErrorLoading" | "ErrorSubmitting">("Loaded");

const { onLoaded, onError, proxy } = useScriptGoogleRecaptcha();


//---------------------------------------------------------------------------
/**
 * Triggers when Google Recaptcha errors
 */
//---------------------------------------------------------------------------
onError(() =>
{

    FormViewState.value = "ErrorLoading";

});


//---------------------------------------------------------------------------
/**
 * Submits the Contact Form
 */
//---------------------------------------------------------------------------
async function SubmitContactForm(event: FormSubmitEvent<Schema>): Promise<void>
{

    const token = await GetRecaptchaToken("ContactForm");

    try
    {

        FormViewState.value = "Submitting";

        const data = await $fetch("/api/ContactForm", { method: "POST", body: { ...ContactForm, token } });

        console.log(data, event);

        FormViewState.value = "Submitted";

    }
    catch (exception)
    {

        FormViewState.value = "ErrorSubmitting";

        console.log(exception);

    }
    finally
    {

        ClearForm();

    }

}


//---------------------------------------------------------------------------
/**
 * Returns the token to use for Recaptcha
 */
//---------------------------------------------------------------------------
async function GetRecaptchaToken(action: string): Promise<string | undefined>
{

    await WaitUntilRecaptchaReady();

    const siteKey = useRuntimeConfig().public.RecaptchaSiteKey;
    const token = await proxy.grecaptcha.execute(siteKey, { action }) as unknown as Promise<string>;

    return token;

}


//---------------------------------------------------------------------------
/**
 * Returns a promise for when recaptcha is ready to be used
 */
//---------------------------------------------------------------------------
function WaitUntilRecaptchaReady(): Promise<void>
{

    return new Promise<void>((resolve) =>
    {

        onLoaded(({ grecaptcha }) =>
        {

            grecaptcha.ready(async () =>
            {

                resolve();

            });

        });

    });

}


//---------------------------------------------------------------------------
/**
 * Clears the Contact Form
 */
//---------------------------------------------------------------------------
function ClearForm(): void
{

    ContactFormRef.value?.clear();

    ContactForm.Name = undefined;
    ContactForm.PhoneNumber = undefined;
    ContactForm.Email = undefined;
    ContactForm.Message = undefined;

}

</script>

<style>

.grecaptcha-badge { visibility: hidden; }

</style>