import { defineCollection, z } from "astro:content";

const commonSchema = z.object({
  title: z.string(),
  tags: z.string().array().optional(),
  description: z.string().optional(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
});

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: commonSchema,
});

const xyy = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: commonSchema,
});

const dev = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: commonSchema,
});
export const collections = { blog, xyy, dev };
