import dayjs from "dayjs";
import styles from "./updateExpendsDialog.module.scss";
import { useState } from "react";
import { DialogType } from "@/app/shared/dialog";
import { Categories } from "@/app/shared/hooks/useAllCategoriesQuery";
import { Payers } from "@/app/shared/hooks/useAllPayersQuery";
import { Budgets } from "@/app/shared/hooks/useAllBudgetsQuery";
import { PaymentMethods } from "@/app/shared/hooks/useAllPaymentMethodsQuery";
import { UpdateDialogFormValue } from "@/app/expends/[yearMonth]/page.type";

export default function UpdateExpendsDialog(props: {
  dialog: DialogType;
  isLoading: boolean;
  categories: Categories;
  payers: Payers;
  budgets: Budgets;
  paymentMethods: PaymentMethods;
  initialValue: UpdateDialogFormValue;
  updateExpend: (variables: {
    id: number;
    date: string;
    price: number;
    description: string;
    categoryId: number;
    payerId: number;
    budgetId: number;
    paymentMethodId: number;
    processed: boolean;
  }) => Promise<void>;
}) {
  const {
    dialog: Dialog,
    isLoading,
    categories,
    budgets,
    payers,
    paymentMethods,
    initialValue,
    updateExpend,
  } = props;

  const [date, setDate] = useState(
    dayjs(initialValue.date).format("YYYY-MM-DD")
  );
  const [price, setPrice] = useState(String(initialValue.price));
  const [description, setDescription] = useState(initialValue.description);
  const [categoryId, setCategoryId] = useState(Number(initialValue.categoryId));
  const [budgetId, setBudgetId] = useState(Number(initialValue.budgetId));
  const [paymentMethodId, setPaymentMethodId] = useState(
    Number(initialValue.paymentMethodId)
  );
  const [isProcessed, setIsProcessed] = useState(initialValue.processed);

  /** 更新ボタンを押した時の処理 */
  function handleSaveButton(): void {
    updateExpend({
      id: Number(initialValue.id),
      date,
      price: Number(price),
      description,
      categoryId,
      payerId: findPayerIdForPaymentMethodId(paymentMethodId) || payers[0].id,
      budgetId,
      paymentMethodId,
      processed: isProcessed,
    });
  }

  // NOTE: stringかnumber型で引数を受け取れるようにしてhelper関数として切り出したい
  function findPayerIdForPaymentMethodId(
    paymentMethodId: number
  ): number | undefined {
    return paymentMethods.find((method) => method.id === paymentMethodId)
      ?.payerId;
  }

  return (
    <Dialog isLoading={isLoading}>
      <h2 className={styles.dialogTitle}>支出を更新</h2>

      <div className={styles.formItem}>
        日付:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.currentTarget.value)}
        />
      </div>

      <div className={styles.formItem}>
        料金:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.currentTarget.value)}
        />
      </div>

      <div className={styles.formItem}>
        内容:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
      </div>

      <div className={styles.formItem}>
        カテゴリー:
        <select
          onChange={(e) => setCategoryId(Number(e.currentTarget.value))}
          defaultValue={initialValue.categoryId}
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
          onChange={(e) => setPaymentMethodId(Number(e.currentTarget.value))}
          defaultValue={initialValue.paymentMethodId}
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
          onChange={(e) => setBudgetId(Number(e.currentTarget.value))}
          defaultValue={initialValue.budgetId}
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
        <label
          htmlFor="processed-checkbox"
          className={styles.processedCheckboxWrapper}
        >
          <input
            type="checkbox"
            id="processed-checkbox"
            checked={isProcessed}
            onChange={(e) => setIsProcessed(e.currentTarget.checked)}
          />
        </label>
      </div>

      <button className={styles.saveButton} onClick={handleSaveButton}>
        更新
      </button>
    </Dialog>
  );
}
