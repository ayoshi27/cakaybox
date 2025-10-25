import { Dayjs } from "dayjs";

/** 曜日が日曜日かどうかを判定する */
export const isSunday = (date: Dayjs) => {
  return date.day() === 0;
};

/** 曜日が土曜日かどうかを判定する */
export const isSaturday = (date: Dayjs) => {
  return date.day() === 6;
};
