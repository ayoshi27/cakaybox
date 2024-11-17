<script setup lang="ts">
import { formatDate, formatPrice } from "~/utils/format";
import { tableDateCellCssClass, categoryIconStyle } from "~/utils/style";
import { useAsyncApiFetchData } from "~/utils/api";
import type { Expend } from "~/types/expend.type";
import type { Category } from "~/types/category.type";
import type { PaymentMethod } from "~/types/payment-method.type";
import type { Budget } from "~/types/budget.type";
import ExpendAddDialog from "~/components/ExpendAddDialog.vue";
import ExpendUpdateDialog from "./ExpendUpdateDialog.vue";

const props = defineProps({
  yearMonth: {
    type: String,
    required: true,
  },
});

const expendAddDialogRef =
  useTemplateRef<InstanceType<typeof ExpendAddDialog>>("expendAddDialogRef");
const expendUpdateDialogRef = useTemplateRef<
  InstanceType<typeof ExpendUpdateDialog>[]
>("expendUpdateDialogRef");

const {
  data: expends,
  execute: fetchExpends,
  refresh: refreshExpends,
} = useAsyncApiFetchData<Expend[]>("expends", { yearMonth: props.yearMonth });

// 支出追加/更新時の選択肢をAPIから取得する
const { data: categories, execute: fetchCategories } =
  useAsyncApiFetchData<Category[]>("categories");
const { data: paymentMethods, execute: fetchPaymentMethods } =
  useAsyncApiFetchData<PaymentMethod[]>("payment-methods");
const { data: budgets, execute: fetchBudgets } =
  useAsyncApiFetchData<Budget[]>("budgets");

const fetchInitialSelectOptions = async () => {
  Promise.all([
    await fetchCategories(),
    await fetchPaymentMethods(),
    await fetchBudgets(),
  ]);
};

/** 支出追加/更新時の選択肢 */
export type SelectOptions = {
  categories: Category[] | null;
  paymentMethods: PaymentMethod[] | null;
  budgets: Budget[] | null;
};
const selectOptions = computed<SelectOptions>(() => {
  return {
    categories: categories.value,
    paymentMethods: paymentMethods.value,
    budgets: budgets.value,
  };
});

/**
 * ダイアログから支出を追加した際の処理
 * 支出一覧を更新してダイアログを閉じる
 */
const onAddedExpend = async () => {
  await refreshExpends();
  expendAddDialogRef.value?.closeAddExpendDialog();
};

/**
 * ダイアログから支出を編集した際の処理
 * 支出一覧を更新してダイアログを閉じる
 */
const onUpdatedExpend = async (index: number) => {
  await refreshExpends();
  expendUpdateDialogRef.value?.[0].closeUpdateExpendDialog();
};

/**
 * 指定されたIDの支出レコードを削除し、一覧を更新する
 * @param expendId - 削除する支出のID
 */
const deleteExpend = async (expendId: number) => {
  const tagertExpendDescription = expends.value?.find((expend) => expend.id === expendId)
    ?.description;
  if (!confirm(`・${tagertExpendDescription}\n\nこの支出を削除します。よろしいですか？`)) return;
  await deleteData("expends", expendId);
  refreshExpends();
};

await fetchExpends();
await fetchInitialSelectOptions();
</script>

<template>
  <div class="controller-panel">
    <ExpendAddDialog
      :select-options="selectOptions"
      @added-expend="onAddedExpend"
      ref="expendAddDialogRef"
    >
    </ExpendAddDialog>
  </div>
  <BaseTable
    class="expend-list-table"
    sticky-header
  >
    <thead>
      <tr>
        <th>日付</th>
        <th>料金</th>
        <th class="description-cell">内容</th>
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
      <tr
        v-for="(expend, index) in expends"
        :key="expend.id"
      >
        <td :class="tableDateCellCssClass(expend.date)">
          {{ formatDate(expend.date) }}
        </td>
        <td class="price-cell">{{ formatPrice(expend.price) }}</td>
        <td>{{ expend.description }}</td>
        <td>
          <div class="category-cell-content">
            <Icon
              name="mdi:local-offer"
              :style="categoryIconStyle(expend.category.colorCode)"
              class="category-icon"
            />
            {{ expend.category.name }}
          </div>
        </td>
        <td>{{ expend.payer.name }}</td>
        <td>{{ expend.paymentMethod.name }}</td>
        <td>{{ expend.budget.name }}</td>
        <td>
          <Icon
            name="mdi:check-circle"
            :class="['processed-icon', { processed: expend.processed }]"
          />
        </td>
        <td>
          <ExpendUpdateDialog
            :expend="expend"
            @updated-expend="onUpdatedExpend(index)"
            :select-options="selectOptions"
            ref="expendUpdateDialogRef"
          />
        </td>
        <td>
          <BaseButton
            color="grayscale"
            @click="() => deleteExpend(expend.id)"
            >削除</BaseButton
          >
        </td>
      </tr>
    </tbody>
  </BaseTable>
</template>

<style lang="scss" scoped>
.expend-list-table {
  margin-top: 4px;
}
.is-sunday {
  color: var(--color-text-sunday);
}

.is-saturday {
  color: var(--color-text-saturday);
}

.price-cell {
  text-align: right;
}
.description-cell {
  min-width: 250px;
}

.category-icon {
  font-size: 14px;
}

.processed-icon {
  display: block;
  margin: auto auto auto 0;
  font-size: 20px;
  color: var(--color-icon-disabled);
}

.processed-icon.processed {
  color: var(--color-primary);
}

.category-cell-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  width: 100%;
  height: 100%;
}
</style>
