import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/vars" as *;`,
      },
    },
  },
});
