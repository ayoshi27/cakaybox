import { resolve } from 'path'

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
  vite: {
    server: {
      fs: {
        allow: [
          resolve(__dirname),           // プロジェクトディレクトリ
          resolve(__dirname, '..'),     // ワークスペースルート
          resolve(__dirname, '../..'),     
        ]
      }
    }
  },
  modules: [
    "@nuxt/icon",
    '@vueuse/nuxt',
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
