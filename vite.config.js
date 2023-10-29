import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import ssr from 'vike/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ssr()],
})
