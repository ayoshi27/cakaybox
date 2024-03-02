"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteExpendItemContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const favoriteExpendItemSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    code: zod_1.z.string(),
    price: zod_1.z.number(),
    description: zod_1.z.string(),
    date: zod_1.z.string(),
    category: zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
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
const c = (0, core_1.initContract)();
exports.favoriteExpendItemContract = c.router({
    getList: {
        method: 'GET',
        path: '/favorite-expend-items',
        responses: {
            200: favoriteExpendItemSchema.array(),
        },
        summary: 'お気に入りリストを取得する',
    },
});
