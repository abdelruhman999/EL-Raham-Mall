import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/EL-Raham-Moll/", // أضف هذه السطر
  server: {
    proxy: {
      '/api': {
        target: 'https://jsonapi.org',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

})
