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
    // Listen on all interfaces so phones on the same LAN can load the app
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: true,
    // HMR over LAN: client uses the page hostname (phone opens via 192.168.x.x)
    hmr: {
      protocol: "ws",
      clientPort: 5173,
    },
    watch: {
      ignored: ["**/.playwright-mcp/**", "**/respl/screenshots/**"],
    },
  },
});
