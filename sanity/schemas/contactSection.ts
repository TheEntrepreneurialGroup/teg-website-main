import { defineType, defineField } from "sanity";

/**
 * Contact section schema for contact cards
 */
export default defineType({
  name: "contactSection",
  title: "Contact Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "localeString",
    }),
    defineField({
      name: "greeting",
      title: "Greeting Message",
      type: "localeString",
    }),
    defineField({
      name: "contacts",
      title: "Contact Persons",
      type: "array",
      of: [
        {
          type: "object",
          name: "contact",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "role",
              title: "Role/Title",
              type: "localeString",
            }),
            defineField({
              name: "email",
              title: "Email",
              type: "string",
            }),
            defineField({
              name: "linkedin",
              title: "LinkedIn URL",
              type: "url",
            }),
            defineField({
              name: "image",
              title: "Photo",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "role.de",
              media: "image",
            },
          },
        },
      ],
    }),
  ],
});
