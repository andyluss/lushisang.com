import { defineCollection, z } from "astro:content";

const commonSchema = z.object({
  title: z.string(),
  tags: z.string().array().optional(),
  level: z.number().default(0),
  description: z.string().optional(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
});

const blog = defineCollection({
  type: "content",
  schema: commonSchema,
});

const xyy = defineCollection({
  type: "content",
  schema: commonSchema,
});

const dev = defineCollection({
  type: "content",
  schema: commonSchema,
});
export const collections = { blog, xyy, dev };
