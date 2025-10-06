/* eslint-disable n/no-process-env */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_APPWRITE_ENDPOINT: z.url(),
    NEXT_PUBLIC_APPWRITE_PROJECT: z.string(),
    NEXT_PUBLIC_APPWRITE_DATABASE: z.string(),
    NEXT_PUBLIC_APPWRITE_USERS_COLLECTION: z.string(),
    NEXT_PUBLIC_APPWRITE_FILES_COLLECTION: z.string(),
    NEXT_PUBLIC_APPWRITE_BUCKET: z.string(),
    NEXT_PUBLIC_APPWRITE_KEY: z.string(),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    NEXT_PUBLIC_APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    NEXT_PUBLIC_APPWRITE_PROJECT: process.env.NEXT_PUBLIC_APPWRITE_PROJECT,
    NEXT_PUBLIC_APPWRITE_DATABASE: process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
    NEXT_PUBLIC_APPWRITE_USERS_COLLECTION:
      process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION,
    NEXT_PUBLIC_APPWRITE_FILES_COLLECTION:
      process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION,
    NEXT_PUBLIC_APPWRITE_BUCKET: process.env.NEXT_PUBLIC_APPWRITE_BUCKET,
    NEXT_PUBLIC_APPWRITE_KEY: process.env.NEXT_PUBLIC_APPWRITE_KEY,
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});
