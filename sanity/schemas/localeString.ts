import { defineType, defineField } from "sanity";

/**
 * Localized string type for German/English content
 * Usage: Use this type for any text field that needs translation
 */
export default defineType({
  name: "localeString",
  title: "Localized String",
  type: "object",
  fields: [
    defineField({
      name: "de",
      title: "German",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "en",
      title: "English",
      type: "text",
      rows: 3,
    }),
  ],
});
