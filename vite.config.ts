import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

import path from "path";
import { PRERENDER_ROUTES } from "./src/seo/prerenderRoutes.mjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      additionalPrerenderRoutes: PRERENDER_ROUTES,
      prerenderScript: path.resolve(__dirname, "./src/prerender.tsx"),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["lucide-react"],
  },
  server: {
    allowedHosts: true,
    watch: {
      ignored: ["**/.playwright-mcp/**", "**/respl/screenshots/**"],
    },
  },
});
