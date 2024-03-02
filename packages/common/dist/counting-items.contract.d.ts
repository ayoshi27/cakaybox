import { z } from 'zod';
export declare const countingItemsContract: {
    getList: {
        summary: "集計項目リストを取得する";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                code: z.ZodString;
                name: z.ZodString;
                payers: z.ZodArray<z.ZodObject<{
                    payer: z.ZodObject<{
                        id: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                    }, {
                        id: number;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    payer: {
                        id: number;
                    };
                }, {
                    payer: {
                        id: number;
                    };
                }>, "many">;
                budgets: z.ZodArray<z.ZodObject<{
                    budget: z.ZodObject<{
                        id: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                    }, {
                        id: number;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    budget: {
                        id: number;
                    };
                }, {
                    budget: {
                        id: number;
                    };
                }>, "many">;
                paymentMethods: z.ZodArray<z.ZodObject<{
                    paymentMethod: z.ZodObject<{
                        id: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                    }, {
                        id: number;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    paymentMethod: {
                        id: number;
                    };
                }, {
                    paymentMethod: {
                        id: number;
                    };
                }>, "many">;
                processed: z.ZodArray<z.ZodBoolean, "many">;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
                code: string;
                payers: {
                    payer: {
                        id: number;
                    };
                }[];
                budgets: {
                    budget: {
                        id: number;
                    };
                }[];
                paymentMethods: {
                    paymentMethod: {
                        id: number;
                    };
                }[];
                processed: boolean[];
            }, {
                id: number;
                name: string;
                code: string;
                payers: {
                    payer: {
                        id: number;
                    };
                }[];
                budgets: {
                    budget: {
                        id: number;
                    };
                }[];
                paymentMethods: {
                    paymentMethod: {
                        id: number;
                    };
                }[];
                processed: boolean[];
            }>, "many">;
        };
        method: "GET";
        path: "/counting-items";
    };
};
