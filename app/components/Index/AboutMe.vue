<template>
    <UPageSection id="AboutMe" title="About Me" class="flex">
        <UPageCard :ui="{ header: 'flex justify-center w-full', description: 'space-y-4 flex-1 min-w-0' }">

            <template #header>
                <NuxtImg src="/Images/MyPhoto.jpg" height="500" alt="Matthew Bitter" class="rounded-full aspect-square object-cover object-[50%_20%]" />
            </template>

            <template #description>

                <p>
                    I am a Full-Stack Web Developer specializing in building high-performance, scalable, responsive applications using <span class="text-primary font-medium">Vue</span>,
                    <span class="text-primary font-medium">Nuxt</span>, and <span class="text-primary font-medium">TypeScript</span>. My core expertise lies in crafting seamless user interfaces integrated with robust cloud infrastructure.
                    From front-end state management to back-end Cloud Functions, I bridge the gap between pixel-perfect design and serverless
                    scalability.
                </p>

                <p>
                    While my primary focus is web development, I channel my problem-solving skills into <span class="text-primary font-medium">Unity</span> game development for at least one
                    week every year for the Global Game Jam. This intense sprint forces me to solve complex 3D math problems and optimize runtime
                    performance under a tight deadline. It is a creative reset that directly sharpens the logic and architecture I bring back to
                    my web applications.
                </p>

                <p>
                    My engineering philosophy is simple: <span class="text-primary font-medium">code is read more than it is written</span>. Whether
                    building a standalone feature or an enterprise ecosystem, I prioritize clean, consistent syntax. This ensures the systems I build
                    are not just functional today, but readable, maintainable, and reusable for teams tomorrow.
                </p>

                <h3 class="font-semibold">
                    💻 Core Stack & Expertise
                </h3>

                <UFormField label="Front-End">
                    <div class="flex flex-wrap gap-2">
                        <UBadge label="Vue" color="neutral" variant="subtle" icon="material-icon-theme:vue" />
                        <UBadge label="Nuxt" color="neutral" variant="subtle" icon="material-icon-theme:nuxt" />
                        <UBadge label="TypeScript" color="neutral" variant="subtle" icon="material-icon-theme:typescript" />
                        <UBadge label="Vuetify (Material Design)" variant="subtle" color="neutral" icon="devicon:vuetify" />
                        <UBadge label="Nuxt UI (Tailwind CSS)" color="neutral" variant="subtle" icon="material-icon-theme:nuxt" />
                        <UBadge label="Pinia" color="neutral" variant="subtle" icon="logos:pinia" />
                    </div>
                </UFormField>

                <UFormField label="Back-End">
                    <div class="flex flex-wrap gap-2">
                        <UBadge label="Cloud Functions (Firebase/GCP)" color="neutral" variant="subtle" icon="material-icon-theme:firebase" />
                        <UBadge label="Node.js" color="neutral" variant="subtle" icon="material-icon-theme:nodejs" />
                        <UBadge label="RESTful APIs" color="neutral" variant="subtle" icon="mdi:api" />
                    </div>
                </UFormField>

                <UFormField label="Database">
                    <div class="flex flex-wrap gap-2">
                        <UBadge label="Cloud Firestore" color="neutral" variant="subtle" icon="material-icon-theme:firebase" />
                        <UBadge label="Firebase Realtime Database" color="neutral" variant="subtle" icon="material-icon-theme:firebase" />
                        <UBadge label="MSSQL" color="neutral" variant="subtle" icon="mdi:database" />
                    </div>
                </UFormField>

                <UFormField label="Creative Side">
                    <div class="flex flex-wrap gap-2">
                        <UBadge label="Unity (C#)" color="neutral" variant="subtle" icon="material-icon-theme:unity" />
                        <UBadge label="Game Design & Development" color="neutral" variant="subtle" icon="mdi:google-gamepad" />
                    </div>
                </UFormField>

            </template>

        </UPageCard>
    </UPageSection>
</template>