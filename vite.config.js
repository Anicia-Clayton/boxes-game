import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: './index.js',
      },
      output: {
        entryFileNames: '[name].pack.js',
      }
    }
  }
});
