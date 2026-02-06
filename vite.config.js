import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url'; // Для преобразования URL в путь
import { dirname } from 'path'; // Для получения имени директории

// 1. Получаем путь к текущему файлу (аналог __filename в ESM)
const __filename = fileURLToPath(import.meta.url);

// 2. Получаем имя директории (аналог __dirname в ESM)
const __dirname = dirname(__filename);


export default defineConfig({
  
  resolve: {
    alias: {
      // Теперь '@' корректно указывает на папку src, используя __dirname
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
  plugins: [react()], 
});