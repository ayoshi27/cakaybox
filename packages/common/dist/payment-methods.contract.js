"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentMethodsContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const PaymentMethodSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    payerId: zod_1.z.number()
});
const c = (0, core_1.initContract)();
exports.paymentMethodsContract = c.router({
    getList: {
        method: 'GET',
        path: '/payment-methods',
        responses: {
            200: PaymentMethodSchema.array(),
        },
        summary: '支払方法リストを取得する',
    },
});
