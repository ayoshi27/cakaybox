"use client";

import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import ControlPanel from "./components/control-panel/ControlPanel";
import SkeletonTable from "@/app/shared/skeleton-table/SkeltonTable";
import styles from "./countings.module.scss";
import { formatPrice } from "@/app/utils/stringUtils";
import { useAllCategoriesQuery } from "@/app/shared/hooks/useAllCategoriesQuery";
import { useAllCountingItemsQuery } from "./hooks/useAllCountingItemsQuery";
import { useAllCustomCountingItemsQuery } from "./hooks/useAllCustomCountingItemsQuery";
import { useAllExpendsQuery } from "../../shared/hooks/useAllExpendsQuery";

export default function Counting({
  params,
}: {
  params: { yearMonth: string };
}) {
  const { yearMonth } = params;
  const router = useRouter();

  const { data: categories, isLoading: loadingCategories } =
    useAllCategoriesQuery();
  const { data: countingItems, isLoading: loadingCountingItems } =
    useAllCountingItemsQuery();
  const { data: customCountingItems, isLoading: loadingCustomCountingItems } =
    useAllCustomCountingItemsQuery();
  const { data: expends, isLoading: loadingExpends } = useAllExpendsQuery({
    yearMonth: yearMonth,
  });

  type expendsType = typeof expends;
  /**
   * 引数で渡される支出の合計金額を算出する
   * @param expends - 支出一覧
   */
  const getSumPrice = (expends: expendsType) => {
    return expends?.reduce((acc: number, expend) => acc + expend.price, 0) || 0;
  };

  /**
   * 引数で渡されるカテゴリーIDに紐づく支出一覧を返す
   * @param categoryId - カテゴリーID
   */
  const filterExpendsByCategory = (categoryId: number) => {
    return expends?.filter((expend) => expend.category.id === categoryId);
  };

  const tableRecords = categories?.map((category) => {
    const filteredExpendsByCategory = filterExpendsByCategory(category.id);
    const sum = getSumPrice(filteredExpendsByCategory);
    const records: {
      id: number;
      name: string;
      sum: number;
      rest: number;
      [key: string]: any;
    } = {
      id: category.id,
      name: category.name,
      sum,
      rest: category.limit - sum,
    };

    countingItems?.forEach((countingItem) => {
      const filteredExpendsByCountingItem = filteredExpendsByCategory?.filter(
        (expend) => {
          const payerFilter =
            countingItem.payers.length > 0
              ? countingItem.payers
                  .map((item) => item.payer.id)
                  .includes(expend.payer.id)
              : false;

          const budgetFilter =
            countingItem.budgets.length > 0
              ? countingItem.budgets
                  .map((item) => item.budget.id)
                  .includes(expend.budget.id)
              : false;

          const paymentMethodFilter =
            countingItem.paymentMethods.length > 0
              ? countingItem.paymentMethods
                  .map((item) => item.paymentMethod.id)
                  .includes(expend.paymentMethod.id)
              : false;

          return payerFilter && budgetFilter && paymentMethodFilter;
        }
      );

      records[countingItem.code] = getSumPrice(filteredExpendsByCountingItem);
    });
    return records;
  });

  const customCountingItemsTableRecords = customCountingItems?.map(
    (customCountingItem) => {
      const sum = customCountingItem.terms.reduce((acc, term) => {
        const filteredExpendsByCustomCountingItem = expends?.filter(
          (expend) => {
            const categoryFilter =
              term.categories.length > 0
                ? term.categories
                    .map((item) => item.category.id)
                    .includes(Number(expend.category.id))
                : false;
            const payerFilter =
              term.payers.length > 0
                ? term.payers
                    .map((item) => item.payer.id)
                    .includes(Number(expend.payer.id))
                : false;
            const budgetFilter =
              term.budgets.length > 0
                ? term.budgets
                    .map((item) => item.budget.id)
                    .includes(Number(expend.budget.id))
                : false;
            const paymentMethodFilter =
              term.paymentMethods.length > 0
                ? term.paymentMethods
                    .map((item) => item.paymentMethod.id)
                    .includes(Number(expend.paymentMethod.id))
                : false;
            const processedFilter = term.processed.includes(expend.processed);

            return (
              categoryFilter &&
              payerFilter &&
              budgetFilter &&
              paymentMethodFilter &&
              processedFilter
            );
          }
        );

        return (
          acc +
          getSumPrice(filteredExpendsByCustomCountingItem) *
            (term.sign === "PLUS" ? term.coefficient : -term.coefficient)
        );
      }, 0);

      return {
        id: customCountingItem.id,
        name: customCountingItem.name,
        sum,
      };
    }
  );

  /**
   * 引数に応じて前月または翌月に移動する
   * @param direction - "prev" or "next"
   */
  function moveToAdjacentMonth(direction: "prev" | "next"): void {
    const current = dayjs(yearMonth);
    const adjacent =
      direction === "prev"
        ? current.subtract(1, "month")
        : current.add(1, "month");
    router.push(`/countings/${adjacent.format("YYYY-MM")}`);
  }

  /** 表示している年月の支出一覧画面に遷移する */
  function navigateToExpnedsPage(): void {
    router.push(`/expends/${yearMonth}`);
  }

  const loadingContents =
    loadingCategories ||
    loadingCountingItems ||
    loadingCustomCountingItems ||
    loadingExpends;

  return (
    <>
      <ControlPanel
        yearMonth={yearMonth}
        moveToAdjacentMonth={moveToAdjacentMonth}
        navigateToExpnedsPage={navigateToExpnedsPage}
      />
      <div className={styles.contentsContainer}>
        {/* カスタム集計項目 */}
        <section className={styles.tableSection}>
          <h2 className={styles.tableTitle}>カスタム集計項目</h2>
          <div className={styles.tableWrapper}>
            {loadingContents ? (
              <SkeletonTable />
            ) : (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>カスタム集計項目名</th>
                    <th>値</th>
                  </tr>
                </thead>
                <tbody>
                  {customCountingItemsTableRecords &&
                    customCountingItemsTableRecords.map((record) => (
                      <tr key={record.id}>
                        <td>{record.name}</td>
                        <td>{formatPrice(record.sum)}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        </section>

        {/* カテゴリー別集計項目 */}
        <section className={styles.tableSection}>
          <h2 className={styles.tableTitle}>カテゴリー別集計項目</h2>
          <div className={styles.tableWrapper}>
            {loadingContents ? (
              <SkeletonTable />
            ) : (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>カテゴリー</th>
                    <th>合計</th>
                    <th>残り</th>
                    {countingItems?.map((countingItem) => (
                      <th key={countingItem.id}>{countingItem.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRecords?.length &&
                    tableRecords.map((record) => (
                      <tr key={record.id}>
                        {Object.keys(record).map((key, index) => {
                          if (key === "id") return null;
                          return (
                            <td key={index}>{formatPrice(record[key])}</td>
                          );
                        })}
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
