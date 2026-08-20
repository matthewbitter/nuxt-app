<template>
    <UPageSection id="Testimonials" title="Testimonials" :ui="{ container: 'derp' }">
        <UCarousel v-slot="{ item }" :items="items" :autoplay="{ delay: 5_000 }" loop dots :ui="{ viewport: 'bg-elevated/50', container: 'derp2' }">
            <UPageCTA :description="item.Testimonial" variant="naked" class="rounded-none [&_p]:my-4" :ui="{ description: 'max-w-xl mx-auto', container: 'sm:pa-6 lg:pa-12' }">
                <template #description>
                    <!-- eslint-disable-next-line vue/no-v-html -->
                    <span v-html="item.Testimonial" />
                </template>
                <UUser :name="item.Author" :description="item.Title" size="xl" class="justify-center" />
            </UPageCTA>
        </UCarousel>
    </UPageSection>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Properties
//---------------------------------------------------------------------------
const items = [
    {
        Author: "Michael Stanton",
        Title: "Lead Web Developer",
        Testimonial: "<p>\"I have known Matthew for more than 35 years and worked with him professionally for nearly half of that time. During that period, I had the opportunity to rely on his engineering judgment as he helped build clean, well-architected front-end systems using SOLID principles. His depth of experience makes him a dependable resource when complex problems need clear, practical solutions.</p><p>Matthew is especially strong in building reusable components and writing code that remains readable and maintainable over time. His commitment to best practices not only improves the quality of the codebase but also makes collaboration easier for everyone on the team.</p><p>His broad technical interests — from full-stack web development to game development — give him a versatile skill set and a wide perspective on engineering challenges. He is the kind of developer who adds real value in many different contexts, and he would be a strong asset to any team.</p><p>It has been a genuine pleasure working with Matthew over the years, and I look forward to doing so again in the future. I highly recommend him!\"</p>"
    }];

</script>