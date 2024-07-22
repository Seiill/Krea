import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_PUBLIC_URL': JSON.stringify('/public'), 
  },
  build: {
    outDir: 'dist', 
  },
})
