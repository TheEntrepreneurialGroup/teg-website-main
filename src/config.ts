export const PUBLIC_CONFIG = {
  env: process.env.NEXT_PUBLIC_ENV,
};

if (process.env.NEXT_PUBLIC_ENV !== "production") {
  (globalThis as unknown as { __ENV__?: string }).__ENV__ = PUBLIC_CONFIG.env;
}
