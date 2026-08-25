import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import fs from "fs";
import path from "path";
import { PRERENDER_ROUTES } from "./src/seo/prerenderRoutes.mjs";

const marketingPdfPath = path.resolve(__dirname, "public/Information.pdf");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      additionalPrerenderRoutes: PRERENDER_ROUTES,
    }),
    {
      name: "marketing-pdf-download",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split("?")[0];
          if (url !== "/marketing" && url !== "/marketing/") {
            next();
            return;
          }

          if (!fs.existsSync(marketingPdfPath)) {
            res.statusCode = 404;
            res.end("Information.pdf not found");
            return;
          }

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader(
            "Content-Disposition",
            'attachment; filename="Information.pdf"',
          );
          fs.createReadStream(marketingPdfPath).pipe(res);
        });
      },
    },
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
