import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const PaymentMethodSchema = z.object({
  id: z.number(),
  name: z.string(),
  payerId: z.number()
});

const c = initContract();

export const paymentMethodsContract = c.router({
  getList: {
    method: 'GET',
    path: '/payment-methods',
    responses: {
      200: PaymentMethodSchema.array(),
    },
    summary: '支払方法リストを取得する',
  },
});
