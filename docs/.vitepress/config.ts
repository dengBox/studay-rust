import { defineConfig } from 'vitepress'

interface SocialLink {
  icon: SocialLinkIcon
  link: string
}

export interface DocFooter {
  prev?: string
  next?: string
}

type NavItem = NavItemWithLink | NavItemWithChildren

type NavItemWithLink = {
  text: string
  link: string
  activeMatch?: string
}

interface NavItemWithChildren {
  text?: string
  items: NavItemWithLink[]
  activeMatch?: string
}

type Sidebar = SidebarGroup[] | SidebarMulti

interface SidebarMulti {
  [path: string]: SidebarGroup[]
}

interface SidebarGroup {
  text: string
  items: SidebarItem[]
  collapsible?: boolean
  collapsed?: boolean
}

interface SidebarItem {
  text: string
  link: string
}

type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'slack'
  | 'twitter'
  | 'youtube'

export default defineConfig({
  base: '/studay-rust',
  title: 'Studay Rust',
  lastUpdated: true,
  description: 'Just playing around.',
  themeConfig: {
    lastUpdatedText: 'Updated Date',
    nav: [
      { text: 'Guide', link: '/guide' },
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
          { text: 'Hello World', link: '/quick-start/hello-world' },
        ]
      },
      {
        text: '跨端开发',
        collapsed: true,
        collapsible: true,
        items: [
          { text: '环境搭建', link: '/cross-end/index' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dengBox/studay-rust.git' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present boshen'
    }
  },
  // docFooter: {
  //   prev: 'Pagina prior',
  //   next: 'Proxima pagina'
  // }
})
