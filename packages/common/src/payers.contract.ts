import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const PayerSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const c = initContract();

export const payersContract = c.router({
  getList: {
    method: 'GET',
    path: '/payers',
    responses: {
      200: PayerSchema.array(),
    },
    summary: '支払者リストを取得する',
  },
});
