import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");
/**
 *
 * @param date {string} - 日付データ（YYYY-MM-DD）
 * @param format - フォーマット文字列
 */
export const formatDate = (date: string, format = "MM/DD(dd)") => {
  return dayjs(date).format(format);
};

/**
 * 価格をロケール文字列に変換する
 * @param price - 価格を表す数値
 * @returns　ロケール文字列に変換された価格
 * @example formatPrice(1000) // => "¥1,000"
 */
export function formatPrice(price: number) {
  return price.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });
}
