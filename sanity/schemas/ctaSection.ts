import { defineType, defineField } from "sanity";

/**
 * Call to Action section schema
 */
export default defineType({
  name: "ctaSection",
  title: "Call to Action Section",
  type: "object",
  fields: [
    defineField({
      name: "items",
      title: "CTA Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "ctaItem",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "localeString",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "localeString",
            }),
            defineField({
              name: "buttonText",
              title: "Button Text",
              type: "localeString",
            }),
            defineField({
              name: "buttonLink",
              title: "Button Link",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "title.de",
              subtitle: "description.de",
            },
          },
        },
      ],
    }),
  ],
});
