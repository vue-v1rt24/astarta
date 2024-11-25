// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },

  css: ['assets/css/index.css'],

  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'active',
    },
  },

  experimental: {
    typedPages: true,
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
});
