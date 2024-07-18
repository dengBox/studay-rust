import DefaultTheme from 'vitepress/theme'
import components from '../components'
import './index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.component('VueClickAwayExample', VueClickAwayExample)
    components.forEach(c => {
      app.component(c.name, c)
    })
  }
}
