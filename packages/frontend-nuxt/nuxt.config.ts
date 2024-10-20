// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3001'
    }
  },
  modules: [
    "@nuxt/icon",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Noto Sans": [400, 700],
          Roboto: [400, 700],
          Inter: [400, 700],
        },
      },
    ],
    '@nuxt/test-utils/module'
  ],
  css: ["@/assets/styles/_tokens.css"],
});
