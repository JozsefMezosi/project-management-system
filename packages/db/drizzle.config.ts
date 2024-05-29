import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
config({ path: [".env.local", ".env"] });

export default defineConfig({
  schema: "./src/schemas/index.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: { url: process.env.CONNECTION_STRING! },
  verbose: true,
  strict: true,
});
