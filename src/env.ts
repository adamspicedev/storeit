/* eslint-disable n/no-process-env */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NEXT_APPWRITE_KEY: z.string(),
  },
  client: {
    NEXT_PUBLIC_APPWRITE_PROJECT_ID: z.string(),
    NEXT_PUBLIC_APPWRITE_PROJECT_NAME: z.string(),
    NEXT_PUBLIC_APPWRITE_ENDPOINT: z.url(),
    NEXT_PUBLIC_APPWRITE_DATABASE: z.string(),
    NEXT_PUBLIC_APPWRITE_USERS_TABLE_ID: z.string(),
    NEXT_PUBLIC_APPWRITE_FILES_TABLE_ID: z.string(),
    NEXT_PUBLIC_APPWRITE_BUCKET: z.string(),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  // runtimeEnv: {

  // },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APPWRITE_PROJECT_ID:
      process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    NEXT_PUBLIC_APPWRITE_PROJECT_NAME:
      process.env.NEXT_PUBLIC_APPWRITE_PROJECT_NAME,
    NEXT_PUBLIC_APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    NEXT_PUBLIC_APPWRITE_DATABASE: process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
    NEXT_PUBLIC_APPWRITE_USERS_TABLE_ID:
      process.env.NEXT_PUBLIC_APPWRITE_USERS_TABLE_ID,
    NEXT_PUBLIC_APPWRITE_FILES_TABLE_ID:
      process.env.NEXT_PUBLIC_APPWRITE_FILES_TABLE_ID,
    NEXT_PUBLIC_APPWRITE_BUCKET: process.env.NEXT_PUBLIC_APPWRITE_BUCKET,
  },
});
