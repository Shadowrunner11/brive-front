import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles" as common;`,
        importer(...args) {
          if (args[0] !== "@/styles") {
            return;
          }

          return {
            file: `${path.resolve(__dirname, "./src/assets/styles")}`,
          };
        },
      },
    },
  }
})
