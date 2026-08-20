<template>
    <UPageCard title="Pinia" icon="logos:pinia" description="The official state management library for Vue.js" :ui="{ footer: 'flex' }">
        <template #footer>
            <UModal v-model:open="PiniaModalOpened" title="Pinia State Management Example" :ui="{ footer: 'justify-end' }">
                <div @click.stop>
                    <UButton label="View Example" variant="ghost" @click="PiniaApiModuleInformation.IncrementViewCount" />
                </div>
                <template #body>

                    <UPageList>
                        <UPageCard variant="ghost">
                            <template #description>
                                This demonstrates calling the
                                <UButton to="https://api.nuxt.com/modules/pinia" target="_blank" variant="ghost" trailing-icon="mdi:open-in-new" size="xs">
                                    nuxt module api
                                </UButton> for Pinia via a store action and displaying some statistics
                                stored in store state. The Contributor count uses a Getter to get the length of an array of contributor
                                data. The View counter goes up by calling an Action in the store to increment the count every time this
                                modal is opened.
                            </template>
                        </UPageCard>
                        <UPageCard :title="ViewCount.toLocaleString()">
                            <template #description>
                                Time{{ ViewCount === 1 ? "" : "s" }} you've viewed this since last refresh
                            </template>
                            <template #footer>
                                <div class="flex flex-wrap gap-2">
                                    <UBadge color="neutral" variant="soft">
                                        Version: {{ StatisticalData.Version }}
                                    </UBadge>
                                    <UBadge color="neutral" variant="soft">
                                        Contributors: {{ TotalContributors }}
                                    </UBadge>
                                    <UBadge color="neutral" variant="soft">
                                        Last Updated: {{ StatisticalData.PublishedDate }}
                                    </UBadge>
                                </div>
                            </template>
                        </UPageCard>
                    </UPageList>

                </template>
                <template #footer>
                    <UButton label="Close" color="neutral" variant="outline" @click="PiniaModalOpened = false" />
                </template>
            </UModal>
            <UButton label="Visit Pinia" variant="ghost" to="https://pinia.vuejs.org" target="_blank" trailing-icon="mdi:open-in-new" />
        </template>
    </UPageCard>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Properties
//---------------------------------------------------------------------------
const PiniaModalOpened = ref(false);
const PiniaApiModuleInformation = usePiniaApiModuleInformationStore();


await callOnce(PiniaApiModuleInformation.FetchData);


const { StatisticalData, ViewCount, TotalContributors } = storeToRefs(PiniaApiModuleInformation);

</script>