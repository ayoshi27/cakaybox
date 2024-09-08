"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expendsContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const ExpendSchema = zod_1.z.object({
    id: zod_1.z.number(),
    price: zod_1.z.number(),
    description: zod_1.z.string(),
    date: zod_1.z.string(),
    category: zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
        colorCode: zod_1.z.string().nullable(),
    }),
    payer: zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
    }),
    budget: zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
    }),
    paymentMethod: zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
    }),
    processed: zod_1.z.boolean(),
});
const ExpendCreateSchema = zod_1.z.object({
    id: zod_1.z.number(),
    price: zod_1.z.number(),
    description: zod_1.z.string(),
    date: zod_1.z.string(),
    categoryId: zod_1.z.number(),
    payerId: zod_1.z.number(),
    budgetId: zod_1.z.number(),
    paymentMethodId: zod_1.z.number(),
    processed: zod_1.z.boolean(),
});
const ExpendUpdateSchema = zod_1.z.object({
    id: zod_1.z.number(),
    price: zod_1.z.number(),
    description: zod_1.z.string(),
    date: zod_1.z.string(),
    categoryId: zod_1.z.number(),
    payerId: zod_1.z.number(),
    budgetId: zod_1.z.number(),
    paymentMethodId: zod_1.z.number(),
    processed: zod_1.z.boolean(),
});
const getAnnualCalculatedExpendSchema = zod_1.z.object({
    categoryName: zod_1.z.string(),
    data: zod_1.z.number().array(),
});
const c = (0, core_1.initContract)();
exports.expendsContract = c.router({
    getList: {
        method: "GET",
        path: "/expends",
        responses: {
            200: ExpendSchema.array(),
        },
        query: zod_1.z.object({
            yearMonth: zod_1.z.string(),
        }),
        summary: "支出を取得する",
    },
    createExpend: {
        method: "POST",
        path: "/expends",
        responses: {
            201: ExpendCreateSchema,
        },
        body: zod_1.z.object({
            price: zod_1.z.number(),
            description: zod_1.z.string(),
            date: zod_1.z.string(),
            categoryId: zod_1.z.number(),
            payerId: zod_1.z.number(),
            budgetId: zod_1.z.number(),
            paymentMethodId: zod_1.z.number(),
            processed: zod_1.z.boolean(),
        }),
        summary: "支出を新規登録する",
    },
    updateExpend: {
        method: "PATCH",
        path: `/expends/:id`,
        responses: { 200: ExpendUpdateSchema },
        body: zod_1.z.object({
            price: zod_1.z.number().optional(),
            description: zod_1.z.string().optional(),
            date: zod_1.z.string().optional(),
            categoryId: zod_1.z.number().optional(),
            payerId: zod_1.z.number().optional(),
            budgetId: zod_1.z.number().optional(),
            paymentMethodId: zod_1.z.number().optional(),
            processed: zod_1.z.boolean().optional(),
        }),
        summary: "支出を更新する",
    },
    deleteExpend: {
        method: "DELETE",
        path: `/expends/:id`,
        responses: {
            200: zod_1.z.object({ message: zod_1.z.string() }),
            404: zod_1.z.object({ message: zod_1.z.string() }),
        },
        body: null,
        summary: "支出を削除する",
    },
    getAnnualCalculatedExpend: {
        method: "GET",
        path: "/expends/annual-calculated",
        responses: {
            200: getAnnualCalculatedExpendSchema.array(),
        },
        query: zod_1.z.object({
            year: zod_1.z.string(),
        }),
        summary: "年間支出の計算結果を取得する",
    },
});
