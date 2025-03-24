import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

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
  originDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
});

const dc = () =>
  defineCollection({
    type: "content",
    schema: commonSchema,
  });

export const collections = {
  life: dc(),
  xyy: dc(),
  lab: dc(),
  do: dc(),
  // docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
