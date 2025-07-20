import { z } from 'zod';
export declare const budgetsContract: {
    getList: {
        summary: "支出元リストを取得する";
        method: "GET";
        path: "/budgets";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>, "many">;
        };
    };
};
