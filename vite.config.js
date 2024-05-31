import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        app: './src/main.jsx',
      },
    },
  },
  base: 'https://github.com/fragilehm/sendbird-sample',
});
