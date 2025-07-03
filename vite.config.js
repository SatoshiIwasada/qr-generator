import { defineConfig } from 'vite'

export default defineConfig({
  base: '/gen_qr/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})