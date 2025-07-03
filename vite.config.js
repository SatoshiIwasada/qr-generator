import { defineConfig } from 'vite'

export default defineConfig({
  base: '/qr-generator/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})