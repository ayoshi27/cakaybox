import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const BudgetSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const c = initContract();

export const budgetsContract = c.router({
  getList: {
    method: 'GET',
    path: '/budgets',
    responses: {
      200: BudgetSchema.array(),
    },
    summary: '支出元リストを取得する',
  },
});
