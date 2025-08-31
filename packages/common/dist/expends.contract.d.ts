import { z } from "zod";
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
        method: "GET";
        path: "/expends";
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
    };
    createExpend: {
        summary: "支出を新規登録する";
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
    };
    updateExpend: {
        summary: "支出を更新する";
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
            description?: string | undefined;
            date?: string | undefined;
            processed?: boolean | undefined;
            price?: number | undefined;
            categoryId?: number | undefined;
            payerId?: number | undefined;
            budgetId?: number | undefined;
            paymentMethodId?: number | undefined;
        }, {
            description?: string | undefined;
            date?: string | undefined;
            processed?: boolean | undefined;
            price?: number | undefined;
            categoryId?: number | undefined;
            payerId?: number | undefined;
            budgetId?: number | undefined;
            paymentMethodId?: number | undefined;
        }>;
        path: "/expends/:id";
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
    };
    deleteExpend: {
        summary: "支出を削除する";
        method: "DELETE";
        body: null;
        path: "/expends/:id";
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
    };
    getAnnualCalculatedExpend: {
        query: z.ZodObject<{
            year: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            year: string;
        }, {
            year: string;
        }>;
        summary: "年間支出の計算結果を取得する";
        method: "GET";
        path: "/expends/annual-calculated";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                categoryName: z.ZodString;
                data: z.ZodArray<z.ZodNumber, "many">;
            }, "strip", z.ZodTypeAny, {
                categoryName: string;
                data: number[];
            }, {
                categoryName: string;
                data: number[];
            }>, "many">;
        };
    };
    getMonthlyCalculatedExpend: {
        query: z.ZodObject<{
            yearMonth: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            yearMonth: string;
        }, {
            yearMonth: string;
        }>;
        summary: "月間支出のカテゴリ別の計算結果を取得する";
        method: "GET";
        path: "/expends/monthly-calculated";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                categoryName: z.ZodString;
                price: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                id: number;
                price: number;
                categoryName: string;
            }, {
                id: number;
                price: number;
                categoryName: string;
            }>, "many">;
        };
    };
};
