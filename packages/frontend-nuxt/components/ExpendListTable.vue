<script setup lang="ts">
import { formatDate, formatPrice } from "~/utils/format";
import { tableDateCellCssClass, categoryIconStyle } from "~/utils/style";
import { useAsyncApiFetchData } from "~/utils/api";
import type { Expend } from "~/types/expend.type";
import ExpendAddDialog from "~/components/ExpendAddDialog.vue";

const props = defineProps({
  yearMonth: {
    type: String,
    required: true,
  },
});

const expendAddDialogRef = ref<InstanceType<typeof ExpendAddDialog>>();

const {
  data: expends,
  execute: fetchExpends,
  refresh: refreshExpends,
} = useAsyncApiFetchData<Expend[]>("expends", { yearMonth: props.yearMonth });

/**
 * ダイアログから支出を追加した際の処理
 * 支出一覧を更新してダイアログを閉じる
 */
const onAddedExpend = async () => {
  await refreshExpends();
  expendAddDialogRef.value?.closeAddExpendDialog();
};

/**
 * 指定されたIDの支出レコードを削除し、一覧を更新する
 * @param expendId - 削除する支出のID
 */
const deleteExpend = async (expendId: number) => {
  await deleteData("expends", expendId);
  refreshExpends();
};

await fetchExpends();
</script>

<template>
  <div class="controller-panel">
    <expend-add-dialog
      @added-expend="onAddedExpend"
      ref="expendAddDialogRef"
    />
  </div>
  <base-table
    class="expend-list-table"
    sticky-header
  >
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
      <tr
        v-for="expend in expends"
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
        <td><base-button>編集</base-button></td>
        <td>
          <base-button
            color="grayscale"
            @click="() => deleteExpend(expend.id)"
            >削除</base-button
          >
        </td>
      </tr>
    </tbody>
  </base-table>
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
