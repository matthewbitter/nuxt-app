<template>
    <UFooter>
        <template #left>
            © {{ new Date().getFullYear() }} Matthew Bitter
        </template>
        <template #right>
            <UButton icon="i-simple-icons-github" to="https://github.com/matthewbitter" target="_blank" color="neutral" variant="ghost" />
            <UButton icon="i-simple-icons-linkedin" to="https://www.linkedin.com/in/matthewbitterdeveloper" target="_blank" color="neutral" variant="ghost" />
        </template>
    </UFooter>
</template>