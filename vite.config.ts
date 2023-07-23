import { defineConfig } from "vite";
import * as path from "path";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/animania",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@functions": path.resolve(__dirname, "./src/functions/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@util": path.resolve(__dirname, "./src/util/"),
      "@fetch": path.resolve(__dirname, "./src/fetch/"),
    },
  },
});
