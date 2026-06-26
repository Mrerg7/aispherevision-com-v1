import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    publishedDate: z.date().optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
};
