import dayjs from "dayjs";
import styles from "./addExpendsDialog.module.scss";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { DialogType } from "@/app/shared/dialog";
import { Categories } from "@/app/shared/hooks/useAllCategoriesQuery";
import { Payers } from "@/app/shared/hooks/useAllPayersQuery";
import { Budgets } from "@/app/shared/hooks/useAllBudgetsQuery";
import { PaymentMethods } from "@/app/shared/hooks/useAllPaymentMethodsQuery";
import { FavoriteExpendItems } from "@/app/shared/hooks/useAllFavoriteExpendItemsQuery";

export default function AddExpendsDialog(props: {
  dialog: DialogType;
  isLoading: boolean;
  categories: Categories;
  payers: Payers;
  budgets: Budgets;
  paymentMethods: PaymentMethods;
  favoriteExpendList: FavoriteExpendItems;
  addExpend: (variables: {
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
    favoriteExpendList,
    addExpend,
  } = props;

  const [isSelectingFavorite, setIsSelectingFavorite] = useState(false);

  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [price, setPrice] = useState("0");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(Number(categories[0].id));
  const [budgetId, setBudgetId] = useState(Number(budgets[0].id));
  const [paymentMethodId, setPaymentMethodId] = useState(
    Number(paymentMethods[0].id)
  );
  const [isProcessed, setIsProcessed] = useState(false);

  /** 保存ボタンを押した時の処理 */
  function handleSaveButton(): void {
    addExpend({
      date,
      price: Number(price),
      description,
      categoryId,
      payerId:
        findPayerIdForPaymentMethodId(paymentMethodId) || Number(payers[0].id),
      budgetId,
      paymentMethodId,
      processed: isProcessed,
    });
    resetFormValue();
  }

  /** お気に入りを選択した時の処理 */
  function handleClickFavoriteExpendItem(payload: {
    description: string;
    categoryId: number;
    payerId: number;
    budgetId: number;
    paymentMethodId: number;
  }): void {
    setDescription(payload.description);
    setCategoryId(payload.categoryId);
    setPaymentMethodId(payload.paymentMethodId);
    setBudgetId(payload.budgetId);
    setIsSelectingFavorite(false);
  }

  // NOTE: stringかnumber型で引数を受け取れるようにしてhelper関数として切り出したい
  function findPayerIdForPaymentMethodId(
    paymentMethodId: number
  ): number | undefined {
    return paymentMethods.find((method) => method.id === paymentMethodId)
      ?.payerId;
  }

  /** フォームの値をリセットする */
  function resetFormValue(): void {
    setDate(dayjs().format("YYYY-MM-DD"));
    setPrice("0");
    setDescription("");
    setCategoryId(Number(categories[0].id));
    setBudgetId(Number(budgets[0].id));
    setPaymentMethodId(Number(paymentMethods[0].id));
    setIsProcessed(false);
  }

  return (
    <Dialog isLoading={isLoading}>
      {isSelectingFavorite ? (
        <div>
          <div className={styles.dialogHeader}>
            <h2 className={styles.dialogTitle}>
              <FavoriteIcon color="primary" />
              <span>お気に入り支出を選択</span>
            </h2>
          </div>
          <ul>
            {favoriteExpendList?.map((favoriteExpend) => (
              <li key={favoriteExpend.id} className={styles.favoriteItem}>
                <button
                  className={styles.favoriteItemButton}
                  onClick={() => {
                    handleClickFavoriteExpendItem({
                      description: favoriteExpend.description,
                      categoryId: favoriteExpend.category.id,
                      payerId: favoriteExpend.payer.id,
                      budgetId: favoriteExpend.budget.id,
                      paymentMethodId: favoriteExpend.paymentMethod.id,
                    });
                  }}
                >
                  {favoriteExpend.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <div className={styles.dialogHeader}>
            <h2 className={styles.dialogTitle}>支出を追加</h2>
            <button
              className={styles.favoriteButton}
              onClick={() => {
                setIsSelectingFavorite(!isSelectingFavorite);
              }}
            >
              <FavoriteIcon color="primary" />
              <span>お気に入り</span>
            </button>
          </div>

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
              value={categoryId}
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
              onChange={(e) =>
                setPaymentMethodId(Number(e.currentTarget.value))
              }
              value={paymentMethodId}
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
              value={budgetId}
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
            追加
          </button>
        </div>
      )}
    </Dialog>
  );
}
