import { z } from 'zod';
export declare const favoriteExpendItemContract: {
    getList: {
        summary: "お気に入りリストを取得する";
        method: "GET";
        path: "/favorite-expend-items";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                code: z.ZodString;
                price: z.ZodNumber;
                description: z.ZodString;
                date: z.ZodString;
                category: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>;
                payer: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>;
                budget: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>;
                paymentMethod: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>;
                processed: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
                code: string;
                description: string;
                date: string;
                payer: {
                    id: number;
                    name: string;
                };
                budget: {
                    id: number;
                    name: string;
                };
                paymentMethod: {
                    id: number;
                    name: string;
                };
                processed: boolean;
                category: {
                    id: number;
                    name: string;
                };
                price: number;
            }, {
                id: number;
                name: string;
                code: string;
                description: string;
                date: string;
                payer: {
                    id: number;
                    name: string;
                };
                budget: {
                    id: number;
                    name: string;
                };
                paymentMethod: {
                    id: number;
                    name: string;
                };
                processed: boolean;
                category: {
                    id: number;
                    name: string;
                };
                price: number;
            }>, "many">;
        };
    };
};
