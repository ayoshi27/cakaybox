import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  limit: z.number(),
});

const c = initContract();

export const categoriesContract = c.router({
  getList: {
    method: 'GET',
    path: '/categories',
    responses: {
      200: CategorySchema.array(),
    },
    summary: 'カテゴリーリストを取得する',
  },
});
