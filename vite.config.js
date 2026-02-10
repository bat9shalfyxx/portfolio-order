import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);


export default defineConfig({
  base: "/",
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/styles/variables.scss";
        `
      }
    }
  },
  
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },

  plugins: [react()], 
});