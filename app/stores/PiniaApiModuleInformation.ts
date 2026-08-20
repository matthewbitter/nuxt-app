export const usePiniaApiModuleInformationStore = defineStore("PiniaApiModuleInformationStore", {

    state: () => ({
        Name: "",
        Description: "",
        StatisticalData: { Version: "", Downloads: 0, Stars: 0, Forks: 0, Contributors: [] as { id: string, username: string, contributions: number }[], PublishedDate: "" },
        ViewCount: 0
    }),

    getters: {
        TotalContributors: state => state.StatisticalData.Contributors.length
    },

    actions: {
        async FetchData(): Promise<void>
        {

            const piniaModule = await $fetch<{ name: string, description: string, stats: { version: string, downloads: number, stars: number, forks: number, publishedAt: number }, contributors: { id: string, username: string, contributions: number }[] }>("https://api.nuxt.com/modules/pinia");

            this.Name = piniaModule.name;
            this.Description = piniaModule.description;
            this.StatisticalData.Version = piniaModule.stats.version;
            this.StatisticalData.Downloads = piniaModule.stats.downloads;
            this.StatisticalData.Stars = piniaModule.stats.stars;
            this.StatisticalData.Forks = piniaModule.stats.forks;
            this.StatisticalData.Contributors = piniaModule.contributors;
            this.StatisticalData.PublishedDate = new Date(piniaModule.stats.publishedAt).toLocaleString("en-US");

        },
        IncrementViewCount()
        {

            this.ViewCount++;

        }
    }

});