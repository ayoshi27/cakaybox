"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const CategorySchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    limit: zod_1.z.number(),
});
const c = (0, core_1.initContract)();
exports.categoriesContract = c.router({
    getList: {
        method: 'GET',
        path: '/categories',
        responses: {
            200: CategorySchema.array(),
        },
        summary: 'カテゴリーリストを取得する',
    },
});
