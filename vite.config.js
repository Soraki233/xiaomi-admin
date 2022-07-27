import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  publicDir: './public',
  base: './',
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    // https:true,
    proxy: {
      '/api': {
        target:"http://localhost:8080",
        // target: 'http://139.196.12.3:8094/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // '/data': {
      //   target:'http://139.196.12.3:8094/data',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/data/, '')
      // }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
