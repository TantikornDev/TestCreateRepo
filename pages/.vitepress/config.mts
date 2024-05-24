import { defineConfig, type DefaultTheme } from 'vitepress'

const pkg = require('../package.json')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Levis",
  outDir: '../docs',
  description: "Levis is a binary tool designed to simplify the deployment process for users who don’t need to focus on the complexities of Kubernetes objects.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'assets/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: 'docs/markdown-examples' },
      {
        text: pkg.version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/jumpbox-academy/levis/blob/main/CHANGELOG.md'
          },
          {
            text: 'Contributing',
            link: 'https://github.com/jumpbox-academy/levis/blob/main/.github/CONTRIBUTING.md'
          }
        ]
      }
    ],
    sidebar: {
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: 'docs/markdown-examples' },
      //     { text: 'Runtime API Examples', link: 'docs/api-examples' }
      //   ],

      // },
      '/docs/': { base: '/docs/', items: sidebarDocs()},
      '/contrib/': { base: '/contrib/', items: sidebarContribution()}
    },
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


function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'What is VitePress?', link: 'what-is-vitepress' },
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Routing', link: 'routing' },
        { text: 'Deploy', link: 'deploy' }
      ]
    },
    {
      text: 'Examples',
      collapsed: false,
      items: [
        { text: 'Using a Custom Theme', link: 'custom-theme' },
        {
          text: 'Extending the Default Theme',
          link: 'extending-default-theme'
        },
        { text: 'Build-Time Data Loading', link: 'data-loading' },
        { text: 'SSR Compatibility', link: 'ssr-compat' },
        { text: 'Connecting to a CMS', link: 'cms' }
      ]
    },
    { text: 'Contribution', base: '/contrib/', link: 'contrib' }
  ]
}
function sidebarContribution(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Contribution',
      collapsed: false,
      items: [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Getting Started', link: 'getting-started' },
            { text: 'Routing', link: 'routing' },
          ]
        },
        {
          text: 'Levis',
          collapsed: true,
          items: [
            { text: 'What is VitePress?', link: 'what-is-vitepress' },
            { text: 'Getting Started', link: 'getting-started' },
            { text: 'Routing', link: 'routing' },
            { text: 'Deploy', link: 'deploy' }
          ]
        },
        {
          text: 'Levis Document',
          collapsed: true,
          items: [
            { text: 'Getting Started', link: 'getting-started' },
            { text: 'What is VitePress?', link: 'what-is-vitepress' },
          ]
        },
        { text: 'Routing', link: 'routing' },
        { text: 'Deploy', link: 'deploy' }
      ]
    },
    {
      text: 'Architecture Decision Records (ADR)',
      collapsed: true,
      items: [
        { text: 'Overview', link: 'adr/index' },
        { text: 'ADR001: Architecture Decision Record (ADR) log', link: 'adr/adr001-add-adr-log' },
        { text: 'ADR002: xxx', link: 'frontmatter' }
      ]
    }
  ]
}
