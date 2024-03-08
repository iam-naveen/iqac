import { defineConfig } from 'drizzle-kit'
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  schema: "./db/schema.ts",
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DB_URL!,
  },
  schemaFilter: ["iqac"],
  verbose: true,
  strict: true,
})
