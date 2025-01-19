import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'github' ? '/fred-2025-restaurant-week/' : '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@config': path.resolve(__dirname, './src/config'),
        '@services': path.resolve(__dirname, './src/services'),
        '@pages': path.resolve(__dirname, './src/pages'),
      },
  
    },
  }
})