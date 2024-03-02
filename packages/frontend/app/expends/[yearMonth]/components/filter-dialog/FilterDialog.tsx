import styles from "./FilterDialog.module.scss";
import { useState } from "react";
import { DialogType } from "@/app/shared/dialog";
import { Categories } from "@/app/shared/hooks/useAllCategoriesQuery";
import { Payers } from "@/app/shared/hooks/useAllPayersQuery";
import { Budgets } from "@/app/shared/hooks/useAllBudgetsQuery";
import { PaymentMethods } from "@/app/shared/hooks/useAllPaymentMethodsQuery";
import { FilterCondition } from "@/app/expends/[yearMonth]/page.type";
import { convertNumberArrayToStringArray } from "@/app/utils/numberUtils";
import { convertBooleanArrayToStringArray } from "@/app/utils/booleanUtils";

export default function FilterDialog(props: {
  dialog: DialogType;
  isLoading: boolean;
  categories: Categories;
  payers: Payers;
  budgets: Budgets;
  paymentMethods: PaymentMethods;
  initialValue: FilterCondition;
  applyFilterConditions: (newValue: FilterCondition) => void;
}) {
  const {
    dialog: Dialog,
    isLoading,
    categories,
    budgets,
    paymentMethods,
    initialValue,
    applyFilterConditions,
  } = props;

  const [categoryIdList, setCategoryIdList] = useState<number[]>(
    initialValue.categoryIdList
  );
  const [budgetIdList, setBudgetIdList] = useState<number[]>(
    initialValue.budgetIdList
  );
  const [paymentMethodIdList, setPaymentMethodIdList] = useState<number[]>(
    initialValue.paymentMethodIdList
  );
  const [isProcessedList, setIsProcessedList] = useState<boolean[]>(
    initialValue.isProcessedList
  );

  /** 表示ボタンを押した時の処理 */
  function handleDisplayButton(): void {
    applyFilterConditions({
      categoryIdList: categoryIdList,
      budgetIdList: budgetIdList,
      paymentMethodIdList: paymentMethodIdList,
      isProcessedList: isProcessedList,
    });
  }

  function onChangeCategory(e: { target: HTMLSelectElement }): void {
    const newValue = [...e.target.options]
      .filter((option) => option.selected)
      .map((option) => Number(option.value));
    setCategoryIdList(newValue);
  }

  function onChangePaymentMethod(e: { target: HTMLSelectElement }): void {
    const newValue = [...e.target.options]
      .filter((option) => option.selected)
      .map((option) => Number(option.value));
    setPaymentMethodIdList(newValue);
  }

  function onChangeBudget(e: { target: HTMLSelectElement }): void {
    const newValue = [...e.target.options]
      .filter((option) => option.selected)
      .map((option) => Number(option.value));
    setBudgetIdList(newValue);
  }

  function onChangeIsProcessed(e: { target: HTMLSelectElement }): void {
    const newValue = [...e.target.options]
      .filter((option) => option.selected)
      .map((option) => (option.value === "true" ? true : false));
    setIsProcessedList(newValue);
  }

  return (
    <Dialog isLoading={isLoading}>
      <h2 className={styles.dialogTitle}>支出を絞り込んで表示する</h2>

      <div className={styles.formItem}>
        カテゴリー:
        <select
          onChange={(e) => onChangeCategory(e)}
          multiple
          defaultValue={convertNumberArrayToStringArray(
            initialValue.categoryIdList
          )}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formItem}>
        支払方法:
        <select
          onChange={(e) => onChangePaymentMethod(e)}
          multiple
          defaultValue={convertNumberArrayToStringArray(
            initialValue.paymentMethodIdList
          )}
        >
          {paymentMethods.map((paymentMethod) => (
            <option key={paymentMethod.id} value={paymentMethod.id}>
              {paymentMethod.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formItem}>
        支出元:
        <select
          onChange={(e) => onChangeBudget(e)}
          multiple
          defaultValue={convertNumberArrayToStringArray(
            initialValue.budgetIdList
          )}
        >
          {budgets.map((budget) => (
            <option key={budget.id} value={budget.id}>
              {budget.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formItem}>
        精算済:
        <select
          onChange={(e) => onChangeIsProcessed(e)}
          multiple
          defaultValue={convertBooleanArrayToStringArray(
            initialValue.isProcessedList
          )}
        >
          {[
            { label: "精算済", value: true },
            { label: "未精算", value: false },
          ].map((isProcessed) => (
            <option key={isProcessed.label} value={String(isProcessed.value)}>
              {isProcessed.label}
            </option>
          ))}
        </select>
      </div>

      <button className={styles.displayButton} onClick={handleDisplayButton}>
        表示
      </button>
    </Dialog>
  );
}
