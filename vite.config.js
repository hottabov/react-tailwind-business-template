import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite configuration — includes React plugin and path aliases
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // Ensure SCSS is processed automatically via sass devDependency
  css: {
    preprocessorOptions: {
      scss: {
        // Global variables / mixins can be injected here if needed
        additionalData: `@use "@/styles/variables" as *;`,
        api: 'modern-compiler', 
      },
    },
  },
  build: {
    sourcemap: false,
  },
});
