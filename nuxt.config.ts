// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxt/eslint",
        "@nuxt/ui",
        "@nuxt/image",
        "@nuxt/scripts",
        "@pinia/nuxt",
        "@nuxt/icon"
    ],

    devtools: {
        enabled: true
    },

    css: ["~/assets/css/main.css"],

    colorMode: {
        disableTransition: false
    },

    runtimeConfig: {
        // Private keys (Server-side only)
        RecaptchaSecretKey: "",
        FirebaseServiceAccountKey: "",
        ResendApiKey: "",
        PersonalEmail: "",
        NoReplyEmail: "",

        // Public keys (Server and Client-side)
        public: {
            RecaptchaSiteKey: "6Lep3IwtAAAAAMCXbo_3rXt3XVHC4zbs83_LHWHQ"
        }
    },

    routeRules: {
        "/": { prerender: true }
    },

    compatibilityDate: "2026-06-30",

    eslint: {
        config: {
            stylistic: {
                commaDangle: "never",
                braceStyle: "1tbs"
            }
        }
    },

    // Configure the underlying icon module
    icon: {
        clientBundle: {
            // Scans all your components to bundle icons into the client build
            scan: true,
            // Prevents bundling from breaking if you use many icons
            sizeLimitKb: 1024
        }
    },

    scripts: {
        registry: {
            googleRecaptcha: {
                siteKey: "6Lep3IwtAAAAAMCXbo_3rXt3XVHC4zbs83_LHWHQ",
                // Optional: triggers script load when Nuxt is ready
                trigger: "onNuxtReady"
            }
        }
    }

});