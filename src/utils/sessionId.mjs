/**
 * Session id generation for analytics — never throws.
 * Prefer crypto.randomUUID; fall back for iOS / non-secure HTTP LAN.
 * Shared by analytics.ts and unit tests (same shipped function).
 *
 * @param {Crypto | undefined} cryptoApi
 * @returns {string}
 */
export function createSessionId(
  cryptoApi = typeof globalThis !== "undefined" ? globalThis.crypto : undefined,
) {
  try {
    if (cryptoApi && typeof cryptoApi.randomUUID === "function") {
      return cryptoApi.randomUUID();
    }
  } catch {
    /* non-secure context or broken impl */
  }

  try {
    if (cryptoApi && typeof cryptoApi.getRandomValues === "function") {
      const bytes = new Uint8Array(16);
      cryptoApi.getRandomValues(bytes);
      // RFC 4122 version 4
      bytes[6] = (bytes[6] & 0x0f) | 0x40;
      bytes[8] = (bytes[8] & 0x3f) | 0x80;
      const hex = Array.from(bytes, (b) =>
        b.toString(16).padStart(2, "0"),
      ).join("");
      return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
    }
  } catch {
    /* ignore */
  }

  return `teg-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}
