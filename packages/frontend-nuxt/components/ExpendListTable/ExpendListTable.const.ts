import type { FilterConditionForExpendList } from "../ExpendListTable/ExpendListTable.type";

/** フィルター条件の初期値 */
export const initialFilterValues: FilterConditionForExpendList = {
  searchWord: "",
  categoryIdList: [],
  budgetIdList: [],
  paymentMethodIdList: [],
  isProcessedList: [],
};
