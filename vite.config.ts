import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'manifest.json',
          dest: '.' // copy to dist/
        },
        {
          src: 'public/icon.jpeg',
          dest: 'public' // optional: copy icons
        }
      ]
    })
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
