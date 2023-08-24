import { defineConfig } from 'vitepress'
import markDown from 'markdown-it-mathjax3'

export interface DocFooter {
  prev?: string
  next?: string
}

export default defineConfig({
  base: '/studay-rust',
  title: 'Studay Rust',
  lastUpdated: true,
  description: 'Just playing around.',
  themeConfig: {
    lastUpdatedText: 'Updated Date',
    nav: [
      // { text: 'Guide', link: '/guide' },
      {
        text: '快速链接',
        items: [
          { text: 'Rust官网', link: 'https://www.rust-lang.org/zh-CN' },
        ]
      }
    ],
    sidebar: [
      {
        text: '快速开始',
        collapsible: true,
        items: [
          { text: '环境搭建', link: '/quick-start/index' },
          { text: 'cargo', link: '/quick-start/cargo' },
          { text: 'Hello World', link: '/quick-start/hello-world' }
        ]
      },
      {
        text: '语法学习',
        collapsed: true,
        collapsible: true,
        items: [
          { text: '变量', link: 'grammar/index' },
          { text: '数据类型', link: 'grammar/data-type' },
        ]
      },
      {
        text: 'cli开发',
        collapsed: true,
        collapsible: true,
        items: [
          { text: '创建环境', link: 'cli-app/index' },
        ]
      },
      {
        text: 'web开发',
        collapsed: true,
        collapsible: true,
        items: [
          { text: '创建环境', link: 'web-app/index' },
        ]
      },
      {
        text: '跨端开发',
        collapsed: true,
        collapsible: true,
        items: [
          { text: '环境搭建', link: '/straddle-end-app/index' },
        ]
      },
      {
        text: 'wasm开发',
        collapsed: true,
        collapsible: true,
        items: [
          { text: '创建环境', link: 'wasm-app/index' },
        ]
      },
      {
        text: '嵌入式开发',
        collapsed: true,
        collapsible: true,
        items: [
          { text: '创建环境', link: 'embedd-app/index' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dengBox/studay-rust.git' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present boshen'
    },
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
  },
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(markDown)
      md.linkify.set({ fuzzyEmail: false })
    }
  },
  vite: {
    configFile:'vite.config.js'
  }
})
