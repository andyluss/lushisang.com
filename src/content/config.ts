import { defineCollection, z, type BaseSchema } from "astro:content";

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

type CommonSchema = typeof commonSchema;

const doSchema = commonSchema.extend({
  paradigmId: z.number().optional(),
});

const dc = (schema?: CommonSchema) =>
  defineCollection({
    type: "content",
    schema: schema ?? commonSchema,
  });

export const collections = {
  life: dc(),
  xyy: dc(),
  lab: dc(),
  do: dc(doSchema),
};
