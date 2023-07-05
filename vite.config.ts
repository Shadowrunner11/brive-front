import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const { BASE_URL } = process.env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ...(BASE_URL ? { base: BASE_URL }: {})
})
