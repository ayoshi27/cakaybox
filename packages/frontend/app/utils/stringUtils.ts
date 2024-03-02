/**
 * 価格をロケール文字列に変換する
 * @param price - 価格を表す数値
 * @returns　ロケール文字列に変換された価格
 * @example formatPrice(1000) // => "¥1,000"
 */
export function formatPrice(price: number) {
  return price.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });
}
