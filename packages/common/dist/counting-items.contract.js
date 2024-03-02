"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countingItemsContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const CountingItemsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    code: zod_1.z.string(),
    name: zod_1.z.string(),
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
});
const c = (0, core_1.initContract)();
exports.countingItemsContract = c.router({
    getList: {
        method: 'GET',
        path: '/counting-items',
        responses: {
            200: CountingItemsSchema.array(),
        },
        summary: '集計項目リストを取得する',
    },
});
