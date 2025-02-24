import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const devApiUrl = "http://127.0.0.1:8000";

export default defineConfig({
  plugins: [vue()],
  root: "client",
  server: {
    port: 8080,
    proxy: {
      "/api/": {
        target: devApiUrl,
        changeOrigin: true,
      },
      "/attachments/": {
        target: devApiUrl,
        changeOrigin: true,
      },
      "/docs": {
        target: devApiUrl,
        changeOrigin: true,
      },
      "/openapi.json": {
        target: devApiUrl,
        changeOrigin: true,
      },
      "/health": {
        target: devApiUrl,
        changeOrigin: true,
      },
    },
  },
});
