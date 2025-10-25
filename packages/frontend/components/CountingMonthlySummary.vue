<script setup lang="ts">
import { formatPrice } from "~/utils/format";
import { categoryIconStyle } from "~/utils/style";
import { useAsyncApiFetchData } from "~/utils/api";
import type {
  CustomCountingItem,
  MonthlyCalculatedPriceForCategory,
} from "~/types/custom-counting-item.type";
import { breakpoints } from "@/composables/useBreakPoints";

const props = defineProps({
  yearMonth: {
    type: String,
    required: true,
  },
});

const { data: customCountingItems, execute: fetchCustomCountingItems } =
  useAsyncApiFetchData<CustomCountingItem[]>("new-custom-counting-items", {
    yearMonth: props.yearMonth,
  });

const {
  data: monthlyCalculatedPriceForCategory,
  execute: fetchMonthlyCalculatedPriceForCategory,
} = useAsyncApiFetchData<MonthlyCalculatedPriceForCategory[]>(
  "expends/monthly-calculated",
  {
    yearMonth: props.yearMonth,
  }
);

await Promise.all([
  fetchCustomCountingItems(),
  fetchMonthlyCalculatedPriceForCategory(),
]);
</script>

<template>
  <div class="counting-list-container">
    <base-card title="カスタム集計一覧">
      <base-table>
        <thead>
          <tr>
            <th>集計項目名</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="customCountingItem in customCountingItems"
            :key="customCountingItem.id"
          >
            <td>{{ customCountingItem.name }}</td>
            <td>{{ formatPrice(customCountingItem.price) }}</td>
          </tr>
        </tbody>
      </base-table>
    </base-card>
    <base-card title="カテゴリー別集計一覧">
      <base-table>
        <thead>
          <tr>
            <th>カテゴリー名</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="category in monthlyCalculatedPriceForCategory"
            :key="category.id"
          >
            <td>
              <div class="category-cell-content">
                <Icon
                  name="mdi:local-offer"
                  :style="categoryIconStyle(category.categoryColorCode)"
                  class="category-icon"
                />
                {{ category.categoryName }}
              </div>
            </td>
            <td>{{ formatPrice(category.price) }}</td>
          </tr>
        </tbody>
      </base-table>
    </base-card>
  </div>
</template>

<style scoped lang="scss">
.counting-list-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.base-card {
  margin-top: 16px;
}

.category-cell-content {
  display: flex;
  align-items: center;
  gap: 4px;
}

.category-icon {
  font-size: 18px;
}
</style>
