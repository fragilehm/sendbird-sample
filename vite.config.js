import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        app: "./src/main.jsx",
      },
      output: {
        inlineDynamicImports: true,
      },
    },
  },
  base: "https://github.com/fragilehm/sendbird-sample",
});
