import { z } from 'zod';
export declare const categoriesContract: {
    getList: {
        summary: "カテゴリーリストを取得する";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                limit: z.ZodNumber;
                colorCode: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
                limit: number;
                colorCode: string | null;
            }, {
                id: number;
                name: string;
                limit: number;
                colorCode: string | null;
            }>, "many">;
        };
        method: "GET";
        path: "/categories";
    };
};
