import { defineType, defineField } from "sanity";

/**
 * Hero section schema for page headers
 */
export default defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "since",
      title: 'Since Text (e.g., "Seit 1986.")',
      type: "localeString",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "localeString",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [
        {
          type: "object",
          name: "button",
          fields: [
            defineField({
              name: "text",
              title: "Button Text",
              type: "localeString",
            }),
            defineField({
              name: "link",
              title: "Button Link",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "text.de",
            },
          },
        },
      ],
    }),
  ],
});
