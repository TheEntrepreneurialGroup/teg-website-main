import { defineType, defineField } from "sanity";

/**
 * Testimonial section schema for quotes and testimonials
 */
export default defineType({
  name: "testimonialSection",
  title: "Testimonial Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "localeString",
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          name: "testimonial",
          fields: [
            defineField({
              name: "quote",
              title: "Quote",
              type: "localeString",
            }),
            defineField({
              name: "author",
              title: "Author Name",
              type: "string",
            }),
            defineField({
              name: "role",
              title: "Author Role/Title",
              type: "localeString",
            }),
            defineField({
              name: "image",
              title: "Author Photo",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "companyLogo",
              title: "Company Logo",
              type: "image",
            }),
          ],
          preview: {
            select: {
              title: "author",
              subtitle: "quote.de",
              media: "image",
            },
          },
        },
      ],
    }),
  ],
});
