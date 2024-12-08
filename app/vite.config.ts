import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
   },
   server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
    proxy: { // https://vite.dev/config/server-options#server-proxy
      '/api': {
          target: process.env.SERVICENOW_HOST,
          changeOrigin: true,
        },
    },
   }
})
