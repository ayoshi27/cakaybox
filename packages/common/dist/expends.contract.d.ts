import { z } from 'zod';
export declare const expendsContract: {
    getList: {
        query: z.ZodObject<{
            yearMonth: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            yearMonth: string;
        }, {
            yearMonth: string;
        }>;
        summary: "支出を取得する";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                price: z.ZodNumber;
                description: z.ZodString;
                date: z.ZodString;
                category: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    colorCode: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                    colorCode: string | null;
                }, {
                    id: number;
                    name: string;
                    colorCode: string | null;
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
                    colorCode: string | null;
                };
                price: number;
            }, {
                id: number;
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
                    colorCode: string | null;
                };
                price: number;
            }>, "many">;
        };
        method: "GET";
        path: "/expends";
    };
    createExpend: {
        summary: "支出を新規登録する";
        responses: {
            201: z.ZodObject<{
                id: z.ZodNumber;
                price: z.ZodNumber;
                description: z.ZodString;
                date: z.ZodString;
                categoryId: z.ZodNumber;
                payerId: z.ZodNumber;
                budgetId: z.ZodNumber;
                paymentMethodId: z.ZodNumber;
                processed: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                id: number;
                description: string;
                date: string;
                processed: boolean;
                price: number;
                categoryId: number;
                payerId: number;
                budgetId: number;
                paymentMethodId: number;
            }, {
                id: number;
                description: string;
                date: string;
                processed: boolean;
                price: number;
                categoryId: number;
                payerId: number;
                budgetId: number;
                paymentMethodId: number;
            }>;
        };
        method: "POST";
        body: z.ZodObject<{
            price: z.ZodNumber;
            description: z.ZodString;
            date: z.ZodString;
            categoryId: z.ZodNumber;
            payerId: z.ZodNumber;
            budgetId: z.ZodNumber;
            paymentMethodId: z.ZodNumber;
            processed: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            description: string;
            date: string;
            processed: boolean;
            price: number;
            categoryId: number;
            payerId: number;
            budgetId: number;
            paymentMethodId: number;
        }, {
            description: string;
            date: string;
            processed: boolean;
            price: number;
            categoryId: number;
            payerId: number;
            budgetId: number;
            paymentMethodId: number;
        }>;
        path: "/expends";
    };
    updateExpend: {
        summary: "支出を更新する";
        responses: {
            200: z.ZodObject<{
                id: z.ZodNumber;
                price: z.ZodNumber;
                description: z.ZodString;
                date: z.ZodString;
                categoryId: z.ZodNumber;
                payerId: z.ZodNumber;
                budgetId: z.ZodNumber;
                paymentMethodId: z.ZodNumber;
                processed: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                id: number;
                description: string;
                date: string;
                processed: boolean;
                price: number;
                categoryId: number;
                payerId: number;
                budgetId: number;
                paymentMethodId: number;
            }, {
                id: number;
                description: string;
                date: string;
                processed: boolean;
                price: number;
                categoryId: number;
                payerId: number;
                budgetId: number;
                paymentMethodId: number;
            }>;
        };
        method: "PATCH";
        body: z.ZodObject<{
            price: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            date: z.ZodOptional<z.ZodString>;
            categoryId: z.ZodOptional<z.ZodNumber>;
            payerId: z.ZodOptional<z.ZodNumber>;
            budgetId: z.ZodOptional<z.ZodNumber>;
            paymentMethodId: z.ZodOptional<z.ZodNumber>;
            processed: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            price?: number | undefined;
            description?: string | undefined;
            date?: string | undefined;
            categoryId?: number | undefined;
            payerId?: number | undefined;
            budgetId?: number | undefined;
            paymentMethodId?: number | undefined;
            processed?: boolean | undefined;
        }, {
            price?: number | undefined;
            description?: string | undefined;
            date?: string | undefined;
            categoryId?: number | undefined;
            payerId?: number | undefined;
            budgetId?: number | undefined;
            paymentMethodId?: number | undefined;
            processed?: boolean | undefined;
        }>;
        path: "/expends/:id";
    };
    deleteExpend: {
        summary: "支出を削除する";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
            }, {
                message: string;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
            }, {
                message: string;
            }>;
        };
        method: "DELETE";
        body: null;
        path: "/expends/:id";
    };
};
