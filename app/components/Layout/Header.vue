<template>
    <UHeader title="Matthew Bitter" to="/#Home" mode="slideover">
        <UNavigationMenu :items="NavigationLinks" />
        <template #body>
            <UNavigationMenu :items="NavigationLinks" orientation="vertical" />
        </template>
        <template #right>
            <UColorModeButton />
        </template>
    </UHeader>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Imports
//---------------------------------------------------------------------------
import type { NavigationMenuItem } from "@nuxt/ui";


//---------------------------------------------------------------------------
// Properties
//---------------------------------------------------------------------------

const NavigationLinks = ref<NavigationMenuItem[]>([
    {
        label: "Home",
        to: "#Home",
        icon: "mdi:home"
    },
    {
        label: "About Me",
        to: "#AboutMe",
        icon: "mdi:person"
    },
    {
        label: "Projects",
        to: "#Projects",
        icon: "mdi:folders"
    },
    {
        label: "Skills",
        to: "#Skills",
        icon: "mdi:code"
    },
    {
        label: "Testimonials",
        to: "#Testimonials",
        icon: "lucide:speech"
    },
    {
        label: "Contact",
        to: "#Contact",
        icon: "mdi:contact"
    }
]);

</script>