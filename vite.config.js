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
})
