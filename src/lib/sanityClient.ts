import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

/**
 * Sanity client configuration
 *
 * IMPORTANT: Replace 'YOUR_PROJECT_ID' with your actual Sanity project ID
 * You can find this in your Sanity dashboard at https://www.sanity.io/manage
 */
export const sanityClient = createClient({
  projectId: "u51w3koe", // Replace with your project ID
  dataset: "production",
  useCdn: false, // Set to false for real-time updates during development
  apiVersion: "2024-01-01",
});

// Image URL builder for Sanity images
const builder = imageUrlBuilder(sanityClient);

/**
 * Generate optimized image URLs from Sanity image references
 *
 * @example
 * const imageUrl = urlFor(page.hero.backgroundImage).width(1920).url()
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Helper to get localized content based on current locale
 *
 * @example
 * const title = getLocalizedValue(page.hero.title, 'de') // returns German text
 */
export function getLocalizedValue(
  localeObj: { de?: string; en?: string } | null | undefined,
  locale: "de" | "en",
): string {
  if (!localeObj) return "";
  return localeObj[locale] || localeObj["de"] || localeObj["en"] || "";
}
