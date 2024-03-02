"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customCountingItemsContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const CustomCountingItemsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    terms: zod_1.z.array(zod_1.z.object({
        sign: zod_1.z.string(),
        coefficient: zod_1.z.number(),
        categories: zod_1.z.array(zod_1.z.object({
            category: zod_1.z.object({
                id: zod_1.z.number(),
            }),
        })),
        payers: zod_1.z.array(zod_1.z.object({
            payer: zod_1.z.object({
                id: zod_1.z.number(),
            }),
        })),
        budgets: zod_1.z.array(zod_1.z.object({
            budget: zod_1.z.object({
                id: zod_1.z.number(),
            }),
        })),
        paymentMethods: zod_1.z.array(zod_1.z.object({
            paymentMethod: zod_1.z.object({
                id: zod_1.z.number(),
            }),
        })),
        processed: zod_1.z.array(zod_1.z.boolean()),
    })),
});
const c = (0, core_1.initContract)();
exports.customCountingItemsContract = c.router({
    getList: {
        method: 'GET',
        path: '/custom-counting-items',
        responses: {
            200: CustomCountingItemsSchema.array(),
        },
        summary: 'カスタム集計項目リストを取得する',
    },
});
