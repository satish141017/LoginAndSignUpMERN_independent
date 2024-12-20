import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // This allows access from other devices
    port: 5173       // Default port, or change to your desired port
  },
  plugins: [react()],
})
