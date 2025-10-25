import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  srcDir: 'app/',
  app: {
    head: {
      title: 'Cakaybox', // default fallback title
      htmlAttrs: {
        lang: 'ja',
      },
      link: [
        { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-icon.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: '/api'
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
      },
      allowedHosts: ['cakaybox.com']
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
