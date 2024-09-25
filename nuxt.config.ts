// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
       sharedPrerenderData: false,
       compileTemplate: true,
       resetAsyncDataToUndefined: true,
       templateUtils: true,
       relativeWatchPaths: true,
       defaults: {
         useAsyncData: {
           deep: true
         }
       }
     },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
  ],
})