import { initContract } from "@ts-rest/core";

import { expendsContract } from "./expends.contract";
import { budgetsContract } from "./budgets.contract"
import { categoriesContract } from "./categories.contract";
import { payersContract } from "./payers.contract";
import { paymentMethodsContract } from "./payment-methods.contract";
import { countingItemsContract } from "./counting-items.contract";
import { customCountingItemsContract } from "./custom-counting-items.contract";
import { favoriteExpendItemContract } from "./favorite-expend-item.contract";

const c = initContract();

export const contract = c.router({
  expends: expendsContract,
  budgets: budgetsContract,
  categories: categoriesContract,
  payers: payersContract,
  paymentMethods: paymentMethodsContract,
  countingItems: countingItemsContract,
  customCountingItems: customCountingItemsContract,
  favoriteExpendItem: favoriteExpendItemContract,
});
