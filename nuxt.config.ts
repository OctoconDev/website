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
  image: {
    provider: 'ipxStatic'
  },
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
    }
  },
  future: {
    typescriptBundlerResolution: true
  }
})
