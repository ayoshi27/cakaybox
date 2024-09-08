"use client";
import { useRouter } from "next/navigation";
import styles from "./annual.module.scss";
import ControlPanel from "./components/control-panel/ControlPanel";
import { formatPrice } from "@/app/utils/stringUtils";
import { useAnnualCalculatedExpendQuery } from "./hooks/useAnnualCalculatedExpend";

export default function Annual({ params }: { params: { year: string } }) {
  const { year } = params;
  const router = useRouter();
  /**
   * 引数に応じて前年または翌年に移動する
   * @param direction - "prev" or "next"
   */
  function moveToAdjacentYear(direction: "prev" | "next"): void {
    const adjacent = direction === "prev" ? Number(year) - 1 : Number(year) + 1;
    router.push(`/annual/${adjacent}`);
  }

  const {
    data: annualCalculatedExpend,
    isLoading: isLoadingExpends,
    error: errorWhileloadingExpends,
    refetch,
  } = useAnnualCalculatedExpendQuery({ year });

  return (
    <>
      <ControlPanel year={year} moveToAdjacentYear={moveToAdjacentYear} />
      <div className={styles.contentsContainer}>
        <div className={styles.annualTableWrapper}>
          <table className={styles.annualTable}>
            <thead>
              <tr>
                <th></th>
                <th>合計</th>
                <th>月平均</th>
                <th>01月</th>
                <th>02月</th>
                <th>03月</th>
                <th>04月</th>
                <th>05月</th>
                <th>06月</th>
                <th>07月</th>
                <th>08月</th>
                <th>09月</th>
                <th>10月</th>
                <th>11月</th>
                <th>12月</th>
              </tr>
            </thead>
            <tbody>
              {annualCalculatedExpend &&
                annualCalculatedExpend.map((categoryItem, index) => (
                  <tr key={index}>
                    <th>{categoryItem.categoryName}</th>
                    {categoryItem.data.map((value, index) => (
                      <td key={index}>{formatPrice(value)}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
