import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import fs from 'fs'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: true,
    port: 3000,
    https: fs.existsSync('./certs/key.pem') && fs.existsSync('./certs/cert.pem') ? {
      key: fs.readFileSync('./certs/key.pem'),
      cert: fs.readFileSync('./certs/cert.pem'),
    } : undefined,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
          ui: ['lucide-react']
        }
      }
    }
  }
})
