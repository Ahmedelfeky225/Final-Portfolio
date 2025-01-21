import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // يضمن أن المسارات تعمل في بيئات النشر
  plugins: [react()],
})
