import { defineConfig } from 'vitepress'
import markDown from 'markdown-it-mathjax3'

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
        items: [
          { text: '环境搭建', link: '/quick-start/' },
          { text: 'cargo', link: '/quick-start/cargo' },
          { text: 'Hello World', link: '/quick-start/hello-world' }
        ]
      },
      {
        text: '语法学习',
        collapsed: true,
        items: [
          { text: '变量', link: '/grammar/' },
          { text: '数据类型', link: '/grammar/data-type' },
          { text: '语句与表达式', link: '/grammar/statement' }
        ]
      },
      {
        text: 'cli开发',
        collapsed: true,
        collapsible: true,
        items: [
          { text: '创建环境', link: '/cli-app/' },
        ]
      },
      {
        text: 'web开发',
        collapsed: true,
        collapsible: true,
        items: [
          { text: '创建环境', link: '/web-app/' },
        ]
      },
      {
        text: '跨端开发',
        collapsed: true,
        collapsible: true,
        items: [
          { text: '环境搭建', link: '/straddle-end-app/' },
        ]
      },
      {
        text: 'wasm开发',
        collapsed: true,
        collapsible: true,
        items: [
          { text: '创建环境', link: '/wasm-app/' },
        ]
      },
      {
        text: '嵌入式开发',
        collapsed: true,
        collapsible: true,
        items: [
          { text: '创建环境', link: '/embedd-app/' },
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
