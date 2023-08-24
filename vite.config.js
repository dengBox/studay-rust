import { defineConfig } from 'vite'
// import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
// import vitePluginEslint from 'vite-plugin-eslint'

export default ({ mode }) => {
  return defineConfig({
    server: {
      open: true,
      host: '0.0.0.0',
      port: 8080,
      proxy: {}
    },
    plugins: [
      // viteCommonjs(),
      // vitePluginEslint()
    ]
  })
}
