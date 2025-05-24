import { defineConfig } from "vite";
import { resolve } from 'path';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  css: {
    postcss: {
      plugins: [
        // ... plugin lainnya
      ],
    },
    // Ini akan memproses CSS dari node_modules
    preprocessorOptions: {
      scss: {
        additionalData: `@import "aos/dist/aos.css";`
      }
    }
  },
  build: {
    rollupOptions: {
      external: ['aos'] // Pastikan AOS tidak di-bundle
    }
  }
  
});