import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";

export default defineConfig({
  plugins: [
    react(),
    commonjs({
      filter(id) {
        if (id.includes("node_modules/list-of-cars")) {
          return true;
        }
      },
    }),
  ],
  optimizeDeps: {
    include: ["react-apexcharts"], // Pre-bundle react-apexcharts
  },
  build: {
    sourcemap: false, // Disable sourcemaps to reduce memory usage
    rollupOptions: {
      output: {
        manualChunks: undefined, // Reduce chunk splitting
      },
    },
  },
});
