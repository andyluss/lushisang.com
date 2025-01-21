import { defineCollection, z } from "astro:content";

const commonSchema = z.object({
  title: z.string().max(20),
  subTitle: z.string().max(40).optional(),
  tags: z.string().array().default([]),
  level: z.number().default(0),
  top: z.number().default(0),
  description: z.string().optional(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
});

const life = defineCollection({
  type: "content",
  schema: commonSchema,
});

const xyy = defineCollection({
  type: "content",
  schema: commonSchema,
});

const lab = defineCollection({
  type: "content",
  schema: commonSchema,
});
export const collections = { life, xyy, lab };
