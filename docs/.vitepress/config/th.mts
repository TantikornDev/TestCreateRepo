import { defineConfig, type DefaultTheme } from 'vitepress'

const pkg = require('../../package.json')


export const th = defineConfig({
  lang: 'th-TH',
  description: "Levis คือเครื่องมือที่ถูกออกแบบมาใช้สำหรับ deploy บน Kubernetes ที่ง่าย โดยที่ผู้ใช้ที่ไม่ต้องสนใจความซับซ้อนของ Kubernetes objects.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: nav(),
    sidebar: {
      '/th/docs/': { base: '/th/docs/', items: sidebarDocs()},
      '/th/contrib/': { base: '/th/contrib/', items: sidebarContribution()},
      '/th/arch/': { base: '/th/arch/', items: sidebarArchiving()}
    },


    footer: {
      message: 'Released under the <a href="https://github.com/jumpbox-academy/levis/blob/main/LICENSE">MPLv2 </a>License.',
      copyright: 'Copyright © 2024 Jumpbox Co., Ltd.'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/th', },
    { text: 'Examples', link: '/th/docs/getting-started', activeMatch: '/docs' },
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
  ]
}


function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started', link: 'getting-started',
      collapsed: false,
      items: [
        { text: 'What is VitePress?', link: 'what-is-vitepress' },
        { text: 'Routing', link: 'routing' },
        { text: 'Deploy', link: 'deploy' }
      ],
    },
    {
      text: 'Examples', link: 'levis-examples',
      collapsed: false,
      items: [
        { text: 'Using a Custom Theme', link: 'custom-theme' },
      ]
    },
    { text: 'Contribution', base: '/contrib/', link: 'index' }
  ]
}
function sidebarContribution(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Contribution', link: 'index',
      items: [
        {
          text: 'Levis',
          collapsed: false,
          items: [
            { text: 'Getting Started', link: '/levis/getting-started' },
            { text: 'Add New Command', link: '/levis/adding-command' }
          ]
        },
        {
          text: 'Levis Website',
          collapsed: true,
          items: [
            { text: 'Getting Started', link: '/web/getting-started' },
            { text: 'What is VitePress?', link: '/web/what-is-vitepress' },
          ]
        }
      ]
    },
    {
      text: 'Architecture Decision Records (ADR)',
      collapsed: true,
      items: [
        { text: 'Overview', link: 'adr/index' },
        { text: 'ADR001: Architecture Decision Record (ADR) log', link: 'adr/adr001-add-adr-log' },
        { text: 'ADR002: xxx', link: 'mdfile-name' },
      ]
    },
    { text: 'Archived Documents', base: '/arch/', link: 'index' }
  ]
}

function sidebarArchiving(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Archived Documents', link: 'index',
      items: [
        { text: 'Levis Instruction', link: 'levis-instruction' },
        { text: 'Levis Web Instruction', link: 'levis-web-instruction' }
      ]
    },
    { text: 'Contribution', base: '/contrib/', link: 'index' }
  ]
}
