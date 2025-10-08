import { env } from "@/env";

export const appwriteConfig = {
  endpointUrl: env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
  projectId: env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: env.NEXT_PUBLIC_APPWRITE_DATABASE,
  usersTableId: env.NEXT_PUBLIC_APPWRITE_USERS_TABLE_ID,
  filesTableId: env.NEXT_PUBLIC_APPWRITE_FILES_TABLE_ID,
  bucketId: env.NEXT_PUBLIC_APPWRITE_BUCKET,
  secretKey: env.NEXT_APPWRITE_KEY,
};
