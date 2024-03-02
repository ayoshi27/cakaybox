import { z } from 'zod';
export declare const payersContract: {
    getList: {
        summary: "支払者リストを取得する";
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
        method: "GET";
        path: "/payers";
    };
};
