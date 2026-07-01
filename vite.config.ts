import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// 部署到 GitHub Pages 项目站点：https://<user>.github.io/resume/
export default defineConfig({
  base: '/resume/',
  plugins: [tailwindcss(), vue()],
  server: {
    strictPort: true
  }
})
