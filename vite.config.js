import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr(), // Add SVGR plugin to handle SVG-to-React component transformation
  ],
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
});