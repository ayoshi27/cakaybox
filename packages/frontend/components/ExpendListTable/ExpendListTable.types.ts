/**
 * 支出一覧表のフィルター条件
 * @see packages/frontend-nuxt/components/ExpendListTable/ExpendListTable.vue
 */
export type FilterConditionForExpendList = {
  searchWord: string;
  categoryIdList: number[];
  budgetIdList: number[];
  paymentMethodIdList: number[];
  isProcessedList: boolean[];
};