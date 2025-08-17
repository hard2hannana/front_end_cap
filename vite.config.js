import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/front_end_cap/',
  plugins: [react()],
   test: {
    environment: "jsdom",          // DOM for React components
    setupFiles: "./src/setupTests.js",
    globals: true, 
   },
})
