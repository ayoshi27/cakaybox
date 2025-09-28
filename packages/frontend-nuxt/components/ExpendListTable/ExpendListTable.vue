<script setup lang="ts">
import { formatDate, formatPrice } from "~/utils/format";
import { tableDateCellCssClass, categoryIconStyle } from "~/utils/style";
import { useAsyncApiFetchData } from "~/utils/api";
import type { Expend } from "~/types/expend.type";
import type { Category } from "~/types/category.type";
import type { PaymentMethod } from "~/types/payment-method.type";
import type { Budget } from "~/types/budget.type";
import ExpendAddDialog from "~/components/ExpendAddDialog.vue";
import ExpendUpdateDialog from "../ExpendUpdateDialog.vue";
import ExpendFilterDialog from "../ExpendFilterDialog.vue";
import { filterExpends } from "./ExpendListTable.modules";
import type { FilterConditionForExpendList } from "./ExpendListTable.types";
import { initialFilterValues } from "../ExpendListTable/ExpendListTable.const";

const props = defineProps({
  yearMonth: {
    type: String,
    required: true,
  },
});

const expendAddDialogRef =
  useTemplateRef<InstanceType<typeof ExpendAddDialog>>("expendAddDialogRef");
const expendUpdateDialogRef = useTemplateRef<
  InstanceType<typeof ExpendUpdateDialog>
>("expendUpdateDialogRef");

const {
  data: expends,
  execute: fetchExpends,
  refresh: refreshExpends,
} = useAsyncApiFetchData<Expend[]>("expends", { yearMonth: props.yearMonth });

/**
 * フィルター条件を適用した支出一覧
 */
const filteredExpends = computed(() => {
  return filterExpends(expends, filterCondition);
});

const filterCondition = ref<FilterConditionForExpendList>(initialFilterValues);

/**
 * フィルター条件をリセットする
 */
const resetFilterConditions = () => {
  applyFilterConditions(initialFilterValues);
};

/**
 * フィルター条件を適用する
 * @param {Object} newValue -
 * searchWord: string
 * categoryIdList: number[]
 * budgetIdList: number[]
 * paymentMethodIdList: number[]
 * isProcessedList: boolean[]
 */
const applyFilterConditions = (newValue: typeof filterCondition.value) => {
  filterCondition.value = newValue;
};

/**
 * フィルター条件が適用されているか
 */
const isFiltered = computed(() => {
  return (
    filterCondition.value.searchWord !== "" ||
    filterCondition.value.categoryIdList.length > 0 ||
    filterCondition.value.budgetIdList.length > 0 ||
    filterCondition.value.paymentMethodIdList.length > 0 ||
    filterCondition.value.isProcessedList.length > 0
  );
});

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
 * 編集対象として選択された支出レコード
 */
const selectedExpend = ref<Expend | null>(null);

/**
 * 「編集」ボタンクリックの処理
 * @param expend - 編集対象の支出
 */
const handlwClickEditButton = async (expend: Expend) => {
  selectedExpend.value = expend;
  await nextTick();
  
  expendUpdateDialogRef.value?.showDialog();
};

/**
 * ダイアログから支出を編集した際の処理
 * 支出一覧を更新してダイアログを閉じる
 */
const onUpdatedExpend = async () => {
  await refreshExpends();
  expendUpdateDialogRef.value?.closeUpdateExpendDialog();
};

/**
 * 指定されたIDの支出レコードを削除し、一覧を更新する
 * @param expendId - 削除する支出のID
 */
const deleteExpend = async (expendId: number) => {
  const tagertExpendDescription = expends.value?.find(
    (expend) => expend.id === expendId
  )?.description;
  if (
    !confirm(
      `・${tagertExpendDescription}\n\nこの支出を削除します。よろしいですか？`
    )
  )
    return;
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
    <div class="filter-container">
      <div class="price-sum">
        <span class="price-sum-label">表示中支出の料金合計： </span>
        {{ formatPrice(getSumPrice(filteredExpends)) }}
      </div>
      <BaseButton @click="resetFilterConditions">
        <icon
          name="mdi:filter-off-outline"
          class="filter-off-icon"
        />
      </BaseButton>
      <ExpendFilterDialog
        :select-options="selectOptions"
        :is-filtered="isFiltered"
        @apply-filter="applyFilterConditions"
      ></ExpendFilterDialog>
    </div>
  </div>
  <BaseTable
    class="expend-list-table"
    sticky-header
  >
    <thead>
      <tr>
        <th class="date-th-cell">日付</th>
        <th class="price-th-cell">料金</th>
        <th class="description-th-cell">内容</th>
        <th class="category-th-cell">カテゴリー</th>
        <th class="payer-th-cell">支払者</th>
        <th class="payment-method-th-cell">支払方法</th>
        <th class="budget-th-cell">支払元</th>
        <th class="processed-th-cell">精算済</th>
        <th class="edit-th-cell">編集</th>
        <th class="delete-th-cell">削除</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="expend in filteredExpends"
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
          <BaseButton @click="handlwClickEditButton(expend)">編集</BaseButton>
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

  <ExpendUpdateDialog
    v-if="selectedExpend !== null"
    :expend="selectedExpend"
    @updated-expend="onUpdatedExpend"
    :select-options="selectOptions"
    ref="expendUpdateDialogRef"
  />
</template>

<style lang="scss" scoped>
.controller-panel {
  display: flex;
  justify-content: space-between;
}
.filter-container {
  display: flex;
  align-items: center;
  gap: 8px;
}
.price-sum {
  display: flex;
  align-items: center;
}
.price-sum-label {
  font-size: 13px;
}
.filter-off-icon {
  font-size: 20px;
}
.expend-list-table {
  margin-top: 4px;
  height: calc(100dvh - 40px - (16px * 2) - 40px - (16px * 2) - 16px - 4px);
}
.is-sunday {
  color: var(--color-text-sunday);
}

.is-saturday {
  color: var(--color-text-saturday);
}

.date-th-cell {
  width: 80px;
}
.price-th-cell {
  width: 100px;
}
.price-th-cell,
.price-cell {
  text-align: right;
}
.description-th-cell {
  width: 350px;
}
.edit-th-cell,
.delete-th-cell,
.processed-th-cell {
  width: 80px;
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
