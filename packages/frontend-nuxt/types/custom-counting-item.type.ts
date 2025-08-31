export type CustomCountingItem = {
  /** カスタム集計項目ID */
  id: number;
  /** カスタム集計項目名 */
  name: string;
  /** カスタム集計項目の集計金額 */
  price: number;
};

export type MonthlyCalculatedPriceForCategory = {
  /** カテゴリID */
  id: number;
  /** カテゴリ名 */
  categoryName: string;
  /** カテゴリの集計金額 */
  price: number;
};
