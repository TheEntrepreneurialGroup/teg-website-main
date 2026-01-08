import { useState, useEffect } from "react";
import { sanityClient } from "../lib/sanityClient";

interface UseSanityContentResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * Custom hook for fetching content from Sanity CMS
 *
 * @param query - GROQ query string
 * @param params - Optional query parameters
 *
 * @example
 * const { data, loading, error } = useSanityContent<PageData>(
 *   `*[_type == "page" && slug.current == $slug][0]`,
 *   { slug: 'home' }
 * )
 */
export function useSanityContent<T>(
  query: string,
  params?: Record<string, unknown>,
): UseSanityContentResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const result = await sanityClient.fetch<T>(query, params);
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err : new Error("Failed to fetch content"),
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [query, JSON.stringify(params)]);

  return { data, loading, error };
}

/**
 * GROQ Queries for common content fetching patterns
 */
export const queries = {
  // Fetch a single page by slug
  pageBySlug: `*[_type == "page" && slug.current == $slug][0] {
    title,
    slug,
    seo,
    hero,
    stats,
    features,
    cta,
    testimonials,
    contact
  }`,

  // Fetch home page specifically
  homePage: `*[_type == "page" && slug.current == "home"][0] {
    title,
    hero,
    stats,
    features,
    cta
  }`,

  // Fetch for-students page
  forStudentsPage: `*[_type == "page" && slug.current == "for-students"][0] {
    title,
    hero,
    stats,
    features,
    cta,
    testimonials,
    contact
  }`,

  // Fetch for-companies page
  forCompaniesPage: `*[_type == "page" && slug.current == "for-companies"][0] {
    title,
    hero,
    features,
    cta,
    contact
  }`,
};
