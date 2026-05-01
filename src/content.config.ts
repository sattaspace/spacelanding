import { defineCollection, z } from 'astro:content';

/**
 * SattaSpace Content Collections
 *
 * Define schemas for any content collections used across the site.
 * Add new collections here as the site grows.
 */

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    published: z.date().optional(),
    updated: z.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  pages,
};
