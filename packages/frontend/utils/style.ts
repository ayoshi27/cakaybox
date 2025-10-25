import dayjs from "dayjs";
import { isSunday, isSaturday } from "~/utils/date";

/**
 * 引数の曜日によって日付セルのCSSクラス名を取得する
 * @param date {string} - 日付データ（YYYY-MM-DD）
 */
export const tableDateCellCssClass = (date: string) => {
  const dateObj = dayjs(date);
  if (isSunday(dateObj)) {
    return "is-sunday";
  }
  if (isSaturday(dateObj)) {
    return "is-saturday";
  }
  return "";
};

/**
 * カテゴリーアイコンのCSSスタイルオブジェクトを取得する
 * @param colorCode {string} - カテゴリーカラーコード
 * @example "000000" -> "#000000"
 */
export const categoryIconStyle = (colorCode: string | null) => {
  if (!colorCode) {
    return {
      color: "inherit",
    };
  }
  return {
    color: `#${colorCode}` || "inherit",
  };
};
