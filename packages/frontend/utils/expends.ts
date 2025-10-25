import type { Expend } from "~/types/expend.type";

/**
 * 支出の合計金額を算出する
 * @param expendList - 支出一覧
 */
export const getSumPrice = (expendList: Expend[]) => {
  return expendList.reduce((sum, expend) => sum + expend.price, 0);
};
