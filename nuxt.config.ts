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
    '@nuxt/content',
    '@nuxtjs/seo'
  ],
  image: {},
  content: {
    highlight: false,
    experimental: {
      search: true
    }
  },
  app: {
    head: {
      script: [
        {
          // <!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "02047a1b340248b3937f03af8f0efdbf"}'></script><!-- End Cloudflare Web Analytics -->
          defer: true,
          src: 'https://static.cloudflareinsights.com/beacon.min.js',
          'data-cf-beacon': '{"token": "02047a1b340248b3937f03af8f0efdbf"}',
          tagPosition: 'bodyClose'
        }
      ]
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
    '/docs/**': { isr: true }
  },
  nitro: {
    prerender: {
      failOnError: false,
      routes: [
        '/',
        '/sitemap.xml',
        '/robots.txt',
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
  },
  site: {
    url: 'https://octocon.app',
    name: 'Octocon',
    description:
      'The modern, all-in-one toolkit for people with DID and OSDD to manage their disorder and express themselves.',
    defaultLocale: 'en'
  },
  sitemap: {
    strictNuxtContentPaths: true
  }
})
