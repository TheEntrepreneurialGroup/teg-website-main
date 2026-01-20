import { defineType, defineField } from "sanity";

/**
 * Stats section schema for displaying statistics with values and labels
 */
export default defineType({
  name: "statsSection",
  title: "Stats Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "localeString",
    }),
    defineField({
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          name: "stat",
          fields: [
            defineField({
              name: "value",
              title: 'Value (e.g., "300+" or "41")',
              type: "localeString",
            }),
            defineField({
              name: "label",
              title: "Label/Description",
              type: "localeString",
            }),
          ],
          preview: {
            select: {
              title: "value.de",
              subtitle: "label.de",
            },
          },
        },
      ],
    }),
  ],
});
