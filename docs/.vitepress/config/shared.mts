import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: "Levis",
  base: '/TestCreateRepo',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  // markdown: {
  //   math: true,
  //   codeTransformers: [
  //     // We use `[!!code` in demo to prevent transformation, here we revert it back.
  //     {
  //       postprocess(code) {
  //         return code.replace(/\[\!\!code/g, '[!code')
  //       }
  //     }
  //   ]
  // },

  // sitemap: {
  //   hostname: 'https://vitepress.dev',
  //   transformItems(items) {
  //     return items.filter((item) => !item.url.includes('migration'))
  //   }
  // },

  /* prettier-ignore */
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "../assets/favicon.ico"}],
    // ['meta', { name: 'theme-color', content: '#5f67ee' }],
    // ['meta', { property: 'og:type', content: 'website' }],
    // ['meta', { property: 'og:locale', content: 'en' }],
    // ['meta', { property: 'og:title', content: 'VitePress | Vite & Vue Powered Static Site Generator' }],
    // ['meta', { property: 'og:site_name', content: 'VitePress' }],
    // ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
    // ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
  ],
  themeConfig: {
    logo: 'assets/logo.png',
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jumpbox-academy/levis' }
    ],
    search: {
      provider: 'local'
    },
  //   search: {
  //     provider: 'algolia',
  //     options: {
  //       appId: '8J64VVRP8K',
  //       apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
  //       indexName: 'vitepress',
  //       locales: { ...thSearch }
  //     }
  //   },

  //   carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  }
})
