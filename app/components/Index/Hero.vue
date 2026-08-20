<template>
    <UPageHero id="Home" title="Matthew Bitter" description="Front-end web developer and Unity game developer based in Cincinnati, Ohio." headline="Open To Work" :links="HeroLinks" class="min-h-screen flex flex-col justify-center">
        <template #headline>
            <UButton label="Open To Work" variant="ghost">
                <template #leading>
                    <UIcon name="mdi:circle" class="absolute animate-ping" />
                    <UIcon name="mdi:circle" class="relative scale-66" />
                </template>
            </UButton>
        </template>
        <template #bottom>
            <UButton label="More" to="#AboutMe" variant="ghost" size="xl" trailing-icon="mdi:arrow-down" class="mx-auto" />
        </template>
    </UPageHero>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Imports
//---------------------------------------------------------------------------
import type { ButtonProps } from "@nuxt/ui";


//---------------------------------------------------------------------------
// Properties
//---------------------------------------------------------------------------

const linkSettings: ButtonProps = {
    target: "_blank",
    rel: "noopener noreferrer"
};

const HeroLinks = ref<ButtonProps[]>([{
    label: "GitHub",
    to: "https://github.com/matthewbitter",
    icon: "i-simple-icons-github",
    ...linkSettings
},
{
    label: "LinkedIn",
    to: "https://www.linkedin.com/in/matthewbitterdeveloper",
    icon: "i-simple-icons-linkedin",
    ...linkSettings
},
{
    label: "Resume",
    to: "/Resume.pdf",
    icon: "i-simple-icons-googledocs",
    ...linkSettings
}
]);

</script>