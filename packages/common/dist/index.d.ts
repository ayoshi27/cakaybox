export declare const contract: {
    expends: {
        getList: {
            query: import("zod").ZodObject<{
                yearMonth: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                yearMonth: string;
            }, {
                yearMonth: string;
            }>;
            summary: "支出を取得する";
            method: "GET";
            path: "/expends";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    price: import("zod").ZodNumber;
                    description: import("zod").ZodString;
                    date: import("zod").ZodString;
                    category: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        name: import("zod").ZodString;
                        colorCode: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        name: string;
                        colorCode: string | null;
                    }, {
                        id: number;
                        name: string;
                        colorCode: string | null;
                    }>;
                    payer: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        name: string;
                    }, {
                        id: number;
                        name: string;
                    }>;
                    budget: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        name: string;
                    }, {
                        id: number;
                        name: string;
                    }>;
                    paymentMethod: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        name: string;
                    }, {
                        id: number;
                        name: string;
                    }>;
                    processed: import("zod").ZodBoolean;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                price: import("zod").ZodNumber;
                description: import("zod").ZodString;
                date: import("zod").ZodString;
                categoryId: import("zod").ZodNumber;
                payerId: import("zod").ZodNumber;
                budgetId: import("zod").ZodNumber;
                paymentMethodId: import("zod").ZodNumber;
                processed: import("zod").ZodBoolean;
            }, "strip", import("zod").ZodTypeAny, {
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
                201: import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    price: import("zod").ZodNumber;
                    description: import("zod").ZodString;
                    date: import("zod").ZodString;
                    categoryId: import("zod").ZodNumber;
                    payerId: import("zod").ZodNumber;
                    budgetId: import("zod").ZodNumber;
                    paymentMethodId: import("zod").ZodNumber;
                    processed: import("zod").ZodBoolean;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                price: import("zod").ZodOptional<import("zod").ZodNumber>;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                date: import("zod").ZodOptional<import("zod").ZodString>;
                categoryId: import("zod").ZodOptional<import("zod").ZodNumber>;
                payerId: import("zod").ZodOptional<import("zod").ZodNumber>;
                budgetId: import("zod").ZodOptional<import("zod").ZodNumber>;
                paymentMethodId: import("zod").ZodOptional<import("zod").ZodNumber>;
                processed: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, "strip", import("zod").ZodTypeAny, {
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
                200: import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    price: import("zod").ZodNumber;
                    description: import("zod").ZodString;
                    date: import("zod").ZodString;
                    categoryId: import("zod").ZodNumber;
                    payerId: import("zod").ZodNumber;
                    budgetId: import("zod").ZodNumber;
                    paymentMethodId: import("zod").ZodNumber;
                    processed: import("zod").ZodBoolean;
                }, "strip", import("zod").ZodTypeAny, {
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
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        getAnnualCalculatedExpend: {
            query: import("zod").ZodObject<{
                year: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                year: string;
            }, {
                year: string;
            }>;
            summary: "年間支出の計算結果を取得する";
            method: "GET";
            path: "/expends/annual-calculated";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    categoryName: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                }, "strip", import("zod").ZodTypeAny, {
                    categoryName: string;
                    data: number[];
                }, {
                    categoryName: string;
                    data: number[];
                }>, "many">;
            };
        };
        getMonthlyCalculatedExpend: {
            query: import("zod").ZodObject<{
                yearMonth: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                yearMonth: string;
            }, {
                yearMonth: string;
            }>;
            summary: "月間支出のカテゴリ別の計算結果を取得する";
            method: "GET";
            path: "/expends/monthly-calculated";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    categoryName: import("zod").ZodString;
                    price: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
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
    budgets: {
        getList: {
            summary: "支出元リストを取得する";
            method: "GET";
            path: "/budgets";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>, "many">;
            };
        };
    };
    categories: {
        getList: {
            summary: "カテゴリーリストを取得する";
            method: "GET";
            path: "/categories";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    name: import("zod").ZodString;
                    limit: import("zod").ZodNumber;
                    colorCode: import("zod").ZodNullable<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
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
        };
    };
    payers: {
        getList: {
            summary: "支払者リストを取得する";
            method: "GET";
            path: "/payers";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>, "many">;
            };
        };
    };
    paymentMethods: {
        getList: {
            summary: "支払方法リストを取得する";
            method: "GET";
            path: "/payment-methods";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    name: import("zod").ZodString;
                    payerId: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    id: number;
                    name: string;
                    payerId: number;
                }, {
                    id: number;
                    name: string;
                    payerId: number;
                }>, "many">;
            };
        };
    };
    countingItems: {
        getList: {
            summary: "集計項目リストを取得する";
            method: "GET";
            path: "/counting-items";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    code: import("zod").ZodString;
                    name: import("zod").ZodString;
                    payers: import("zod").ZodArray<import("zod").ZodObject<{
                        payer: import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                        }, {
                            id: number;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        payer: {
                            id: number;
                        };
                    }, {
                        payer: {
                            id: number;
                        };
                    }>, "many">;
                    budgets: import("zod").ZodArray<import("zod").ZodObject<{
                        budget: import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                        }, {
                            id: number;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        budget: {
                            id: number;
                        };
                    }, {
                        budget: {
                            id: number;
                        };
                    }>, "many">;
                    paymentMethods: import("zod").ZodArray<import("zod").ZodObject<{
                        paymentMethod: import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                        }, {
                            id: number;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        paymentMethod: {
                            id: number;
                        };
                    }, {
                        paymentMethod: {
                            id: number;
                        };
                    }>, "many">;
                    processed: import("zod").ZodArray<import("zod").ZodBoolean, "many">;
                }, "strip", import("zod").ZodTypeAny, {
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
        };
    };
    customCountingItems: {
        getList: {
            summary: "カスタム集計項目リストを取得する";
            method: "GET";
            path: "/custom-counting-items";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    name: import("zod").ZodString;
                    terms: import("zod").ZodArray<import("zod").ZodObject<{
                        sign: import("zod").ZodString;
                        coefficient: import("zod").ZodNumber;
                        categories: import("zod").ZodArray<import("zod").ZodObject<{
                            category: import("zod").ZodObject<{
                                id: import("zod").ZodNumber;
                            }, "strip", import("zod").ZodTypeAny, {
                                id: number;
                            }, {
                                id: number;
                            }>;
                        }, "strip", import("zod").ZodTypeAny, {
                            category: {
                                id: number;
                            };
                        }, {
                            category: {
                                id: number;
                            };
                        }>, "many">;
                        payers: import("zod").ZodArray<import("zod").ZodObject<{
                            payer: import("zod").ZodObject<{
                                id: import("zod").ZodNumber;
                            }, "strip", import("zod").ZodTypeAny, {
                                id: number;
                            }, {
                                id: number;
                            }>;
                        }, "strip", import("zod").ZodTypeAny, {
                            payer: {
                                id: number;
                            };
                        }, {
                            payer: {
                                id: number;
                            };
                        }>, "many">;
                        budgets: import("zod").ZodArray<import("zod").ZodObject<{
                            budget: import("zod").ZodObject<{
                                id: import("zod").ZodNumber;
                            }, "strip", import("zod").ZodTypeAny, {
                                id: number;
                            }, {
                                id: number;
                            }>;
                        }, "strip", import("zod").ZodTypeAny, {
                            budget: {
                                id: number;
                            };
                        }, {
                            budget: {
                                id: number;
                            };
                        }>, "many">;
                        paymentMethods: import("zod").ZodArray<import("zod").ZodObject<{
                            paymentMethod: import("zod").ZodObject<{
                                id: import("zod").ZodNumber;
                            }, "strip", import("zod").ZodTypeAny, {
                                id: number;
                            }, {
                                id: number;
                            }>;
                        }, "strip", import("zod").ZodTypeAny, {
                            paymentMethod: {
                                id: number;
                            };
                        }, {
                            paymentMethod: {
                                id: number;
                            };
                        }>, "many">;
                        processed: import("zod").ZodArray<import("zod").ZodBoolean, "many">;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
        newGetList: {
            query: import("zod").ZodObject<{
                yearMonth: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                yearMonth: string;
            }, {
                yearMonth: string;
            }>;
            summary: "新しいカスタム集計項目リストを取得する";
            method: "GET";
            path: "/new-custom-counting-items";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    name: import("zod").ZodString;
                    price: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    id: number;
                    name: string;
                    price: number;
                }, {
                    id: number;
                    name: string;
                    price: number;
                }>, "many">;
            };
        };
    };
    favoriteExpendItem: {
        getList: {
            summary: "お気に入りリストを取得する";
            method: "GET";
            path: "/favorite-expend-items";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    name: import("zod").ZodString;
                    code: import("zod").ZodString;
                    price: import("zod").ZodNumber;
                    description: import("zod").ZodString;
                    date: import("zod").ZodString;
                    category: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        name: string;
                    }, {
                        id: number;
                        name: string;
                    }>;
                    payer: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        name: string;
                    }, {
                        id: number;
                        name: string;
                    }>;
                    budget: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        name: string;
                    }, {
                        id: number;
                        name: string;
                    }>;
                    paymentMethod: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        name: string;
                    }, {
                        id: number;
                        name: string;
                    }>;
                    processed: import("zod").ZodBoolean;
                }, "strip", import("zod").ZodTypeAny, {
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
};
