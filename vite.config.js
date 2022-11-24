import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
// https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html#web-app-manifest
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";
// import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  //This is to dont need to import the functions of the test. It needs also Eslint
  test: { globals: true },
  plugins: [
    vue(),
    //Only to check the bundle size
    // visualizer({ open: true }),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Your Music",
        theme_color: "#ff5e3a",
        icons: [
          {
            src: "assets/img/pwa-192x192.png",
            size: "192x192",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,ico,}"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
