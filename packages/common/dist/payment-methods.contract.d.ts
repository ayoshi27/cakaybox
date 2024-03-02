import { z } from 'zod';
export declare const paymentMethodsContract: {
    getList: {
        summary: "支払方法リストを取得する";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                payerId: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
                payerId: number;
            }, {
                id: number;
                name: string;
                payerId: number;
            }>, "many">;
        };
        method: "GET";
        path: "/payment-methods";
    };
};
