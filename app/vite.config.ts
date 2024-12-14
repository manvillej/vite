import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
const devConfig = {
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
}


export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (command === 'serve') {
    return devConfig
  } else if(command === 'build') {
    throw new Error("No production config for vite: " + command);
  } else {
    throw new Error("unexpected build command from vite: " + command);
  }
})