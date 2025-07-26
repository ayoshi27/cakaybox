<script setup lang="ts">
import dayjs from "dayjs";
import type { CustomCountingItem } from "~/types/custom-counting-item.type";

const route = useRoute();
const yearMonth = route.params.yearMonth as string;
const periodControllerTitle = computed(() => {
  const formatedYearMonth = dayjs(yearMonth).format("YYYY年MM月");
  return `${formatedYearMonth}の支出集計`;
});
const toExpendsPageButtonLabel = computed(() => {
  const formatedYearMonth = dayjs(yearMonth).format("YYYY年MM月");
  return `${formatedYearMonth}の支出一覧`;
});

const navigateToPrevMonth = () => {
  const prevYearMonth = dayjs(yearMonth).subtract(1, "month").format("YYYY-MM");
  navigateTo("/countings/monthly/" + prevYearMonth);
};

const navigateToNextMonth = () => {
  const nextYearMonth = dayjs(yearMonth).add(1, "month").format("YYYY-MM");
  navigateTo("/countings/monthly/" + nextYearMonth);
};

const navigateToExpendsPage = () => {
  navigateTo("/expends/monthly/" + yearMonth);
};

const { data: customCountingItems, execute: fetchCustomCountingItems } =
  useAsyncApiFetchData<CustomCountingItem[]>("new-custom-counting-items", {
    yearMonth,
  });

await fetchCustomCountingItems();
</script>

<template>
  <main class="countings-monthly-page">
    <div class="page-operation-container">
      <period-controller
        :title="periodControllerTitle"
        @prev="navigateToPrevMonth"
        @next="navigateToNextMonth"
      />
      <BaseButton
        color="grayscale"
        @click="navigateToExpendsPage"
        >{{ toExpendsPageButtonLabel }}</BaseButton
      >
    </div>
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
        TODO: カテゴリー別集計項目
      </base-card>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.countings-monthly-page {
  padding: 16px;
}

.base-card {
  margin-top: 16px;
}

.page-operation-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.counting-list-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
</style>
