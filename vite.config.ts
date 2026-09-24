import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Adds Tailwind v4 compilation to the build pipeline
    ],
    root: 'src',
    build: {
    outDir: '../dist', // Puts the build folder back out in the main project root
    emptyOutDir: true,
  }
})
