<template>
    <UApp>
        <UMain>
            <NuxtPage />
        </UMain>
    </UApp>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Page Setup
//---------------------------------------------------------------------------

useHead({
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
        { rel: "icon", href: "/favicon.ico" }
    ],
    htmlAttrs: {
        lang: "en"
    }
});

const title = "Matthew Bitter";
const description = "Front-end web developer and Unity game developer based in Cincinnati, Ohio.";

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterCard: "summary_large_image"
});

</script>