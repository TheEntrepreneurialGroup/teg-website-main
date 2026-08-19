/**
 * Vite plugin: mounts /api/booking/* during `vite dev` and `vite preview`.
 */
import { handleBookingApi } from "./booking-store.mjs";

export function bookingApiPlugin() {
  const middleware = (req, res, next) => {
    try {
      const host = req.headers.host || "localhost";
      const u = new URL(req.url || "/", `http://${host}`);
      if (!u.pathname.startsWith("/api/booking")) return next();
      return handleBookingApi(req, res, u.pathname, u.searchParams);
    } catch (e) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: String(e.message || e) }));
    }
  };

  return {
    name: "teg-booking-api",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}
