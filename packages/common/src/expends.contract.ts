import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const ExpendSchema = z.object({
  id: z.number(),
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

const ExpendCreateSchema = z.object({
  id: z.number(),
  price: z.number(),
  description: z.string(),
  date: z.string(),
  categoryId: z.number(),
  payerId: z.number(),
  budgetId: z.number(),
  paymentMethodId: z.number(),
  processed: z.boolean(),
});

const ExpendUpdateSchema = z.object({
  id: z.number(),
  price: z.number(),
  description: z.string(),
  date: z.string(),
  categoryId: z.number(),
  payerId: z.number(),
  budgetId: z.number(),
  paymentMethodId: z.number(),
  processed: z.boolean(),
});

const c = initContract();

export const expendsContract = c.router({
  getList: {
    method: 'GET',
    path: '/expends',
    responses: {
      200: ExpendSchema.array(),
    },
    query: z.object({
      yearMonth: z.string(),
    }),
    summary: '支出を取得する',
  },
  createExpend: {
    method: 'POST',
    path: '/expends',
    responses: {
      201: ExpendCreateSchema,
    },
    body: z.object({
      price: z.number(),
      description: z.string(),
      date: z.string(),
      categoryId: z.number(),
      payerId: z.number(),
      budgetId: z.number(),
      paymentMethodId: z.number(),
      processed: z.boolean(),
    }),
    summary: '支出を新規登録する',
  },
  updateExpend: {
    method: 'PATCH',
    path: `/expends/:id`,
    responses: { 200: ExpendUpdateSchema },
    body: z.object({
      price: z.number().optional(),
      description: z.string().optional(),
      date: z.string().optional(),
      categoryId: z.number().optional(),
      payerId: z.number().optional(),
      budgetId: z.number().optional(),
      paymentMethodId: z.number().optional(),
      processed: z.boolean().optional(),
    }),
    summary: '支出を更新する',
  },
  deleteExpend: {
    method: 'DELETE',
    path: `/expends/:id`,
    responses: {
      200: z.object({ message: z.string() }),
      404: z.object({ message: z.string() }),
    },
    body: null,
    summary: '支出を削除する',
  },
});
