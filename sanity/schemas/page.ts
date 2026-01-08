import { defineType, defineField } from "sanity";

/**
 * Page schema - main document type for website pages
 */
export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta Title",
          type: "localeString",
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "localeString",
        }),
      ],
    }),
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "heroSection",
    }),
    defineField({
      name: "stats",
      title: "Stats Section",
      type: "statsSection",
    }),
    defineField({
      name: "features",
      title: "Features Section",
      type: "featureSection",
    }),
    defineField({
      name: "cta",
      title: "Call to Action Section",
      type: "ctaSection",
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials Section",
      type: "testimonialSection",
    }),
    defineField({
      name: "contact",
      title: "Contact Section",
      type: "contactSection",
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
    },
    prepare({ title, slug }) {
      return {
        title: title,
        subtitle: `/${slug}`,
      };
    },
  },
});
