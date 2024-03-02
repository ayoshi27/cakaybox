import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const CountingItemsSchema = z.object({
  id: z.number(),
  code: z.string(),
  name: z.string(),
  payers: z.array(
    z.object({
      payer: z.object({
        id: z.number(),
      }),
    }),
  ),
  budgets: z.array(
    z.object({
      budget: z.object({
        id: z.number(),
      }),
    }),
  ),
  paymentMethods: z.array(
    z.object({
      paymentMethod: z.object({
        id: z.number(),
      }),
    }),
  ),
  processed: z.array(z.boolean()),
});

const c = initContract();

export const countingItemsContract = c.router({
  getList: {
    method: 'GET',
    path: '/counting-items',
    responses: {
      200: CountingItemsSchema.array(),
    },
    summary: '集計項目リストを取得する',
  },
});
