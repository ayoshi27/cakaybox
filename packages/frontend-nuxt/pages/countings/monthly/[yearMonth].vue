<script setup lang="ts">
import dayjs from "dayjs";

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
    <base-card>
      TODO: 集計テーブル
    </base-card>
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
</style>
