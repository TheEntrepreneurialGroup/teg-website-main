import { defineType, defineField } from "sanity";

/**
 * Feature section schema for feature cards with icons
 */
export default defineType({
  name: "featureSection",
  title: "Feature Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "localeString",
    }),
    defineField({
      name: "subtitle",
      title: "Section Subtitle",
      type: "localeString",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          name: "feature",
          fields: [
            defineField({
              name: "title",
              title: "Feature Title",
              type: "localeString",
            }),
            defineField({
              name: "description",
              title: "Feature Description",
              type: "localeString",
            }),
            defineField({
              name: "icon",
              title: "Icon Name (lucide-react icon)",
              type: "string",
              description:
                'Enter a lucide-react icon name, e.g., "TrendingUp", "Building"',
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
    defineField({
      name: "images",
      title: "Section Images",
      type: "array",
      of: [
        {
          type: "object",
          name: "imageCard",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "altText",
              title: "Alt Text",
              type: "string",
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "localeString",
            }),
          ],
          preview: {
            select: {
              title: "caption.de",
              media: "image",
            },
          },
        },
      ],
    }),
  ],
});
