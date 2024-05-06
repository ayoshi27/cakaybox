"use client";

import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import styles from "./expends.module.scss";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ControlPanel from "./components/control-panel/ControlPanel";
import { useDialog } from "../../shared/dialog";
import { FilterCondition, UpdateDialogFormValue } from "./page.type";
import AddExpendsDialog from "./components/add-expends-dialog/addExpendsDialog";
import UpdateExpendsDialog from "./components/update-expends-dialog/updateExpendsDialog";
import FilterDialog from "./components/filter-dialog/FilterDialog";
import SkeletonTable from "@/app/shared/skeleton-table/SkeltonTable";
import { formatPrice } from "@/app/utils/stringUtils";
import { isSaturday, isSunday } from "@/app/utils/dateUtils";
import { useAllExpendsQuery } from "../../shared/hooks/useAllExpendsQuery";
import { useCreateExpendMutation } from "./hooks/useCreateExpendMutation";
import { useAllCategoriesQuery } from "@/app/shared/hooks/useAllCategoriesQuery";
import { useAllPayersQuery } from "@/app/shared/hooks/useAllPayersQuery";
import { useAllBudgetsQuery } from "@/app/shared/hooks/useAllBudgetsQuery";
import { useAllPaymentMethodsQuery } from "@/app/shared/hooks/useAllPaymentMethodsQuery";
import { useAllFavoriteExpendItemsQuery } from "@/app/shared/hooks/useAllFavoriteExpendItemsQuery";
import { useDeleteExpendMutation } from "./hooks/useDeleteExpendMutation";
import { useUpdateExpendMutation } from "./hooks/useUpdateExpendMutation";
import { isMobileDevice } from "@/app/utils/userAgentUtils";

dayjs.locale("ja");
export default function Expends({ params }: { params: { yearMonth: string } }) {
  const { yearMonth } = params;
  const router = useRouter();
  const {
    Dialog,
    open: openAddExpendDialog,
    close: closeAddExpendDialog,
  } = useDialog();
  const {
    Dialog: updateExpendDialog,
    open: openUpdateExpendDialog,
    close: closeUpdateExpendDialog,
  } = useDialog();
  const {
    Dialog: filterDialog,
    open: openFilterDialog,
    close: closeFilterDialog,
  } = useDialog();

  const [updateExpendDialogId, setUpdateExpendDialogId] = useState(nanoid());
  const [initialValueForUpdateDialog, setInitialValueForUpdateDialog] =
    useState<UpdateDialogFormValue>({
      id: 0,
      date: "",
      price: 0,
      description: "",
      categoryId: 0,
      payerId: 0,
      budgetId: 0,
      paymentMethodId: 0,
      processed: false,
    });

  const [filterConditions, setFilterConditions] = useState<FilterCondition>({
    searchWord: "",
    categoryIdList: [],
    budgetIdList: [],
    paymentMethodIdList: [],
    isProcessedList: [],
  });

  const {
    data: expends,
    isLoading: isLoadingExpends,
    error: errorWhileloadingExpends,
    refetch,
  } = useAllExpendsQuery({ yearMonth: yearMonth });

  /**フィルターで指定した条件で絞り込まれた支出レコードリスト */
  const filteredExpends = expends?.filter((expend) => {
    const isSearchWordMatched =
      expend.description.includes(filterConditions.searchWord);
    const isCategoryMatched =
      filterConditions.categoryIdList.length === 0 ||
      filterConditions.categoryIdList.includes(expend.category.id);
    const isBudgetMatched =
      filterConditions.budgetIdList.length === 0 ||
      filterConditions.budgetIdList.includes(expend.budget.id);
    const isPaymentMethodMatched =
      filterConditions.paymentMethodIdList.length === 0 ||
      filterConditions.paymentMethodIdList.includes(expend.paymentMethod.id);
    const isProcessedMatched =
      filterConditions.isProcessedList.length === 0 ||
      filterConditions.isProcessedList.includes(expend.processed);
    return (
      isSearchWordMatched &&
      isCategoryMatched &&
      isBudgetMatched &&
      isPaymentMethodMatched &&
      isProcessedMatched
    );
  });

  const {
    data: budgets,
    isLoading: loadingBudgets,
    error: errorWhileLoadingBudgets,
  } = useAllBudgetsQuery();

  const {
    data: categories,
    isLoading: loadingCategories,
    error: errorWhileLoadingCategories,
  } = useAllCategoriesQuery();

  const {
    data: payers,
    isLoading: loadingPayers,
    error: errorWhileLoadingPayers,
  } = useAllPayersQuery();

  const {
    data: paymentMethods,
    isLoading: loadingPaymentMethods,
    error: errorWhileLoadingPaymentMethods,
  } = useAllPaymentMethodsQuery();

  const {
    data: favoriteExpendItems,
    isLoading: loadingFavoriteExpendItems,
    error: errorWhileLoadingFavoriteExpendItems,
  } = useAllFavoriteExpendItemsQuery();

  const {
    mutateAsync: createExpend,
    isPending: loadingCreate,
    error: errorWhileCreating,
  } = useCreateExpendMutation();

  const {
    mutateAsync: deleteExpend,
    isPending: loadingDeletion,
    error: errorWhileDeletion,
  } = useDeleteExpendMutation();

  const {
    mutateAsync: updateExpend,
    isPending: loadingUpdate,
    error: errorWhileUpdating,
  } = useUpdateExpendMutation();

  const selectItemLoading =
    loadingCategories ||
    loadingPayers ||
    loadingBudgets ||
    loadingPaymentMethods ||
    !categories ||
    !payers ||
    !budgets ||
    !favoriteExpendItems ||
    !paymentMethods;

  /**
   * 引数で渡される条件でフィルターを適用する
   * @param payload - フィルター条件
   */
  function applyFilterConditions(payload: FilterCondition): void {
    setFilterConditions(payload);
    closeFilterDialog();
  }

  /**
   * フィルター条件をリセットする
   */
  function resetFilterConditions(): void {
    setFilterConditions({
      searchWord: "",
      categoryIdList: [],
      budgetIdList: [],
      paymentMethodIdList: [],
      isProcessedList: [],
    });
  }

  /**
   * 支出レコードを新規追加する
   * @param variables - 新規追加するレコードの値
   */
  const addExpend = async (variables: {
    date: string;
    price: number;
    description: string;
    categoryId: number;
    payerId: number;
    budgetId: number;
    paymentMethodId: number;
    processed: boolean;
  }) => {
    await createExpend({
      body: variables,
    });
    refetch();
    closeAddExpendDialog();
  };

  /**
   * 支出レコードを更新する
   * @param variables - 更新するレコードの値
   */
  const onUpdateExpend = async (variables: {
    id: number;
    date: string;
    price: number;
    description: string;
    categoryId: number;
    payerId: number;
    budgetId: number;
    paymentMethodId: number;
    processed: boolean;
  }) => {
    await updateExpend({
      body: variables,
      params: { id: String(variables.id) },
    });
    refetch();
    closeUpdateExpendDialog();
  };

  /**
   * 指定されたidの支出レコードを更新するダイアログを表示する
   * @param expendsId - 支出レコードのid
   */
  function onClickUpdateButton(expendsId: number): void {
    setUpdateExpendDialogId(nanoid());
    const targetExpend = expends?.find((expend) => expend.id === expendsId);
    if (!targetExpend) return;

    const {
      date,
      price,
      description,
      category,
      payer,
      budget,
      paymentMethod,
      processed,
    } = targetExpend;
    setInitialValueForUpdateDialog({
      id: expendsId,
      date,
      price,
      description,
      categoryId: category.id,
      payerId: payer.id,
      budgetId: budget.id,
      paymentMethodId: paymentMethod.id,
      processed,
    });
    openUpdateExpendDialog();
  }

  /**
   * 指定されたidの支出レコードを削除する
   * @param id - 支出レコードのid
   */
  const clickDeleteExpend = async (id: number) => {
    await deleteExpend({
      params: { id: String(id) },
    });
    refetch();
  };

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
    router.push(`/expends/${adjacent.format("YYYY-MM")}`);
  }

  /** 表示している年月の支出集計画面に遷移する */
  function navigateToCountingPage(): void {
    router.push(`/countings/${yearMonth}`);
  }

  if (errorWhileloadingExpends)
    return <p>Oh no... {errorWhileloadingExpends.status}</p>;
  if (errorWhileCreating) return <p>Oh no... {errorWhileCreating.status}</p>;
  if (errorWhileDeletion) return <p>Oh no... {errorWhileDeletion.status}</p>;

  return (
    <>
      <ControlPanel
        yearMonth={yearMonth}
        moveToAdjacentMonth={moveToAdjacentMonth}
        navigateToCountingPage={navigateToCountingPage}
      />
      <div className={styles.contentsContainer}>
        <div className={styles.tableControlContainer}>
          <button
            className={styles.addExpendButton}
            onClick={openAddExpendDialog}
          >
            支出追加
          </button>
          <div className={styles.filterButtonContainer}>
            <button
              className={styles.filterButton}
              onClick={resetFilterConditions}
            >
              <FilterAltOffIcon color="primary" fontSize="small" />
            </button>
            <button className={styles.filterButton} onClick={openFilterDialog}>
              <FilterAltIcon color="primary" fontSize="small" />
              フィルター
            </button>
          </div>
        </div>
        {isLoadingExpends ? (
          <SkeletonTable />
        ) : (
          <div className={styles.tableWrapper}>
            {isMobileDevice() ? (
              <>
                <div className={styles.expendsListHeader}>
                  <div>日付</div>
                  <div>料金</div>
                  <div>内容</div>
                </div>
                <ul className={styles.expendsList}>
                  {filteredExpends?.length ? (
                    filteredExpends.map((expend) => (
                      <li key={expend.id} className={styles.expendsListItem}>
                        <div
                          className={[
                            styles.expendsListItemDate,
                            isSunday(dayjs(expend.date))
                              ? styles.isSunday
                              : isSaturday(dayjs(expend.date))
                                ? styles.isSaturday
                                : "",
                          ].join(" ")}
                        >
                          {dayjs(expend.date).format("MM/DD(dd)")}
                        </div>
                        <div className={styles.expendsListItemPrice}>
                          {formatPrice(expend.price)}
                        </div>
                        <div className={styles.expendsListItemDescription}>
                          {expend.description}
                        </div>
                        <div className={styles.expendsListItemButtons}>
                          <button
                            className={styles.tableButton}
                            onClick={() => onClickUpdateButton(expend.id)}
                          >
                            編集
                          </button>
                          <button
                            className={styles.deleteButton}
                            onClick={() => clickDeleteExpend(expend.id)}
                          >
                            削除
                          </button>
                        </div>
                      </li>
                    ))
                  ) : (
                    <tr>
                      <td>表示するデータがありません。</td>
                    </tr>
                  )}
                </ul>
              </>
            ) : (
              <table className={styles.expendsTable}>
                <thead>
                  <tr>
                    <th>日付</th>
                    <th>料金</th>
                    <th>内容</th>
                    <th>カテゴリー</th>
                    <th>支払者</th>
                    <th>支払方法</th>
                    <th>支払元</th>
                    <th>精算済</th>
                    <th>編集</th>
                    <th>削除</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredExpends?.length ? (
                    filteredExpends.map((expend) => (
                      <tr key={expend.id}>
                        <td
                          className={
                            isSunday(dayjs(expend.date))
                              ? styles.isSunday
                              : isSaturday(dayjs(expend.date))
                                ? styles.isSaturday
                                : ""
                          }
                        >
                          {dayjs(expend.date).format("MM/DD(dd)")}
                        </td>
                        <td>{formatPrice(expend.price)}</td>
                        <td>{expend.description}</td>
                        <td className={styles.categoryCell}>
                          <div>
                            <LocalOfferIcon
                              style={{
                                color:
                                  `#${expend.category.colorCode}` || "inherit",
                              }}
                            ></LocalOfferIcon>
                            {expend.category.name}
                          </div>
                        </td>
                        <td>{expend.payer.name}</td>
                        <td>{expend.paymentMethod.name}</td>
                        <td>{expend.budget.name}</td>
                        <td className={styles.processedCell}>
                          <div>
                            {expend.processed ? (
                              <CheckCircleIcon color="success" />
                            ) : (
                              <CheckCircleIcon color="disabled" />
                            )}
                          </div>
                        </td>
                        <td>
                          <button
                            className={styles.tableButton}
                            onClick={() => onClickUpdateButton(expend.id)}
                          >
                            編集
                          </button>
                        </td>
                        <td>
                          <button
                            className={styles.tableButton}
                            onClick={() => clickDeleteExpend(expend.id)}
                          >
                            削除
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>表示するデータがありません。</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>

      {!selectItemLoading && (
        <AddExpendsDialog
          dialog={Dialog}
          isLoading={loadingCreate}
          categories={categories}
          payers={payers}
          budgets={budgets}
          paymentMethods={paymentMethods}
          favoriteExpendList={favoriteExpendItems}
          addExpend={addExpend}
        />
      )}
      {!selectItemLoading && (
        <UpdateExpendsDialog
          key={updateExpendDialogId} // NOTE: 編集ボタンをクリックする度にダイアログを初期化する
          dialog={updateExpendDialog}
          isLoading={loadingUpdate}
          categories={categories}
          payers={payers}
          budgets={budgets}
          paymentMethods={paymentMethods}
          initialValue={initialValueForUpdateDialog}
          updateExpend={onUpdateExpend}
        />
      )}
      {!selectItemLoading && (
        <FilterDialog
          dialog={filterDialog}
          isLoading={loadingCreate}
          categories={categories}
          payers={payers}
          budgets={budgets}
          paymentMethods={paymentMethods}
          initialValue={filterConditions}
          applyFilterConditions={applyFilterConditions}
        />
      )}
    </>
  );
}
