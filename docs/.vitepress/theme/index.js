import DefaultTheme from 'vitepress/theme'
import './index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.component('VueClickAwayExample', VueClickAwayExample)
  }
}
