"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.budgetsContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const BudgetSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
const c = (0, core_1.initContract)();
exports.budgetsContract = c.router({
    getList: {
        method: 'GET',
        path: '/budgets',
        responses: {
            200: BudgetSchema.array(),
        },
        summary: '支出元リストを取得する',
    },
});
