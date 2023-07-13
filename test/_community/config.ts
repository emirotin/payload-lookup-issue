import { buildConfig } from "../buildConfig";
import { PostsCollection, postsSlug } from "./collections/Posts";
import { MenuGlobal } from "./globals/Menu";
import { devUser } from "../credentials";
import { MediaCollection } from "./collections/Media";
import { A } from "./collections/A";

export default buildConfig({
  // ...extend config here
  collections: [PostsCollection, MediaCollection, A],
  globals: [
    MenuGlobal,
    // ...add more globals here
  ],
  graphQL: {
    schemaOutputFile: "./test/_community/schema.graphql",
  },

  onInit: async (payload) => {
    await payload.create({
      collection: "users",
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    });

    await payload.create({
      collection: postsSlug,
      data: {
        text: "example post",
      },
    });
  },
});
