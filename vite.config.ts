import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base: "./"' garante que o site funcione dentro de pastas (ex: seusite.com/moltbook)
  // sem quebrar os links de imagens e CSS.
  base: './', 
});