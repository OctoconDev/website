export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content'
  ],
  image: {},
  content: {
    experimental: {
      search: true
    }
  },
  routeRules: {
    '/docs': {
      redirect: '/docs/introduction'
    },
    '/docs/app': {
      redirect: '/docs/app/download'
    },
    '/docs/discord': {
      redirect: '/docs/discord/setup'
    },
    '/docs/community': {
      redirect: '/docs/community/getting-started'
    },
    '/docs/contributing': {
      redirect: '/docs/contributing/getting-started'
    },
    '/': { prerender: true },
    '/docs/**': { isr: true }
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/_ipx/f_webp&q_90&s_512x512/img/octocon-logo.png',
        '/_ipx/f_avif&q_90&s_256x256/img/octocon-logo.png',
        '/_ipx/f_webp&q_90&s_256x256/img/octocon-logo.png',
        '/_ipx/f_png&q_90&s_256x256/img/octocon-logo.png',
        '/_ipx/f_png&q_90&s_512x512/img/octocon-logo.png',
        '/_ipx/f_avif&q_90&s_512x512/img/octocon-logo.png'
      ]
    }
  },
  future: {
    typescriptBundlerResolution: true
  }
})
