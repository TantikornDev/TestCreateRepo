import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Levis",
  description: "Levis is a binary tool designed to simplify the deployment process for users who don’t need to focus on the complexities of Kubernetes objects.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'assets/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: 'docs/markdown-examples' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: 'docs/markdown-examples' },
          { text: 'Runtime API Examples', link: 'docs/api-examples' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jumpbox-academy/levis' }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/jumpbox-academy/levis/blob/main/LICENSE">MPLv2 </a>License.',
      copyright: 'Copyright © 2024 Jumpbox Co., Ltd.'
    }
  }
})
