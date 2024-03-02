import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const favoriteExpendItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  code: z.string(),
  price: z.number(),
  description: z.string(),
  date: z.string(),
  category: z.object({
    id: z.number(),
    name: z.string(),
  }),
  payer: z.object({
    id: z.number(),
    name: z.string(),
  }),
  budget: z.object({
    id: z.number(),
    name: z.string(),
  }),
  paymentMethod: z.object({
    id: z.number(),
    name: z.string(),
  }),
  processed: z.boolean(),
});

const c = initContract();

export const favoriteExpendItemContract = c.router({
  getList: {
    method: 'GET',
    path: '/favorite-expend-items',
    responses: {
      200: favoriteExpendItemSchema.array(),
    },
    summary: 'お気に入りリストを取得する',
  },
});
