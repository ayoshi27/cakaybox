/** 支出一覧のフィルター条件 */
export type FilterCondition = {
  searchWord: string;
  categoryIdList: number[];
  budgetIdList: number[];
  paymentMethodIdList: number[];
  isProcessedList: boolean[];
};

/** 更ダイアログのフォーム値 */
export type UpdateDialogFormValue = {
  id: number;
  date: string;
  price: number;
  description: string;
  categoryId: number;
  payerId: number;
  budgetId: number;
  paymentMethodId: number;
  processed: boolean;
};
