import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";

// https://vitejs.dev/config/
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
    exclude: ["react-apexcharts"],
  },
});
