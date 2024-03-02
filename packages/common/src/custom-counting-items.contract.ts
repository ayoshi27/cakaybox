import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const CustomCountingItemsSchema = z.object({
  id: z.number(),
  name: z.string(),
  terms: z.array(
    z.object({
      sign: z.string(),
      coefficient: z.number(),
      categories: z.array(
        z.object({
          category: z.object({
            id: z.number(),
          }),
        }),
      ),
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
    }),
  ),
});

const c = initContract();

export const customCountingItemsContract = c.router({
  getList: {
    method: 'GET',
    path: '/custom-counting-items',
    responses: {
      200: CustomCountingItemsSchema.array(),
    },
    summary: 'カスタム集計項目リストを取得する',
  },
});
