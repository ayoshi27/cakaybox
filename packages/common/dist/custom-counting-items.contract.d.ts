import { z } from 'zod';
export declare const customCountingItemsContract: {
    getList: {
        summary: "カスタム集計項目リストを取得する";
        method: "GET";
        path: "/custom-counting-items";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                terms: z.ZodArray<z.ZodObject<{
                    sign: z.ZodString;
                    coefficient: z.ZodNumber;
                    categories: z.ZodArray<z.ZodObject<{
                        category: z.ZodObject<{
                            id: z.ZodNumber;
                        }, "strip", z.ZodTypeAny, {
                            id: number;
                        }, {
                            id: number;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        category: {
                            id: number;
                        };
                    }, {
                        category: {
                            id: number;
                        };
                    }>, "many">;
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
                    sign: string;
                    coefficient: number;
                    categories: {
                        category: {
                            id: number;
                        };
                    }[];
                }, {
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
                    sign: string;
                    coefficient: number;
                    categories: {
                        category: {
                            id: number;
                        };
                    }[];
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
                terms: {
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
                    sign: string;
                    coefficient: number;
                    categories: {
                        category: {
                            id: number;
                        };
                    }[];
                }[];
            }, {
                id: number;
                name: string;
                terms: {
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
                    sign: string;
                    coefficient: number;
                    categories: {
                        category: {
                            id: number;
                        };
                    }[];
                }[];
            }>, "many">;
        };
    };
};
