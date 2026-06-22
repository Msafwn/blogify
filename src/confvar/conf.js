const conf = {
  appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

// Validate required environment variables
const missingVars = Object.entries(conf)
  .filter(([, value]) => !value || value === 'undefined')
  .map(([key]) => key);

if (missingVars.length > 0) {
  console.warn('Missing Appwrite configuration:', missingVars);
}

export default conf;
