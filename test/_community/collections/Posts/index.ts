import type { CollectionConfig } from "../../../../src/collections/config/types";
import { mediaSlug } from "../Media";

export const postsSlug = "posts";

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  fields: [
    {
      name: "text",
      type: "text",
    },
    {
      name: "as",
      type: "array",
      fields: [
        {
          name: "a",
          type: "relationship",
          relationTo: "a",
        },
      ],
    },
  ],
  versions: {
    drafts: {
      autosave: true,
    },
  },
};
