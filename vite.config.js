import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import alias from '@rollup/plugin-alias'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), alias({
    entries:  [{
      find: '@',
      replacement: path.resolve(path.resolve(__dirname), 'src')
    }]
  })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/helpers/functions.scss" as *;
        @use "@/styles/helpers/mixins.scss" as *;
        @use "@/styles/helpers/media.scss" as *;
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  }
})
