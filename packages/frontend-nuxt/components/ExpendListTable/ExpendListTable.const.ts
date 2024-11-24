import type { FilterConditionForExpendList } from "./ExpendListTable.types";

/** フィルター条件の初期値 */
export const initialFilterValues: FilterConditionForExpendList = {
  searchWord: "",
  categoryIdList: [],
  budgetIdList: [],
  paymentMethodIdList: [],
  isProcessedList: [],
};
