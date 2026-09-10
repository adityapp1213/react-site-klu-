import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'


export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  plugins: [
    tailwindcss(),
  ],
  plugins: [react()],
  base: "/book-landing-page/"
})



