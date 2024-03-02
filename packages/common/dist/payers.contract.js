"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payersContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const PayerSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
const c = (0, core_1.initContract)();
exports.payersContract = c.router({
    getList: {
        method: 'GET',
        path: '/payers',
        responses: {
            200: PayerSchema.array(),
        },
        summary: '支払者リストを取得する',
    },
});
