import type { CollectionConfig } from "../../../../src/collections/config/types";

export const A: CollectionConfig = {
  slug: "a",
  fields: [
    {
      name: "title",
      type: "text",
    },
  ],
  admin: {
    useAsTitle: "title",
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
};
