import type { Expend } from "~/types/expend.type";
import type { FilterConditionForExpendList } from "./ExpendListTable.vue";


export const filterExpends = (expends: Ref<Expend[] | null>, filterCondition: Ref<FilterConditionForExpendList>) => {
  if (expends.value === null) return [];
  
  return expends.value?.filter((expend) => {
    return (
      stringFilter(filterCondition.value.searchWord, expend.description) &&
      arrayFilter(filterCondition.value.categoryIdList, expend.category.id) &&
      arrayFilter(filterCondition.value.budgetIdList, expend.budget.id) &&
      arrayFilter(
        filterCondition.value.paymentMethodIdList,
        expend.paymentMethod.id,
      ) &&
      booleanFilter(filterCondition.value.isProcessedList, expend.processed)
    );
  });
};

const stringFilter = (string: string, value: string) => {
  return (
    string.length === 0 ||
    string.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
};
const arrayFilter = (array: number[], value: number) => {
  return array.length === 0 || array.includes(value);
};

const booleanFilter = (array: boolean[], value: boolean) => {
  return array.length === 0 || array.includes(value);
};