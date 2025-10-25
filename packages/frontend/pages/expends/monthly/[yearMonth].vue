<script setup lang="ts">
import dayjs from "dayjs";

const route = useRoute();
const yearMonth = route.params.yearMonth as string;
const periodControllerTitle = computed(() => {
  const formatedYearMonth = dayjs(yearMonth).format("YYYY年MM月");

  if (isMobile) return formatedYearMonth;
  return `${formatedYearMonth}の支出一覧`;
});
const toCountingPageButtonLabel = computed(() => {
  const formatedYearMonth = dayjs(yearMonth).format("YYYY年MM月");

  if (isMobile) return "支出集計";
  return `${formatedYearMonth}の支出集計`;
});

const navigateToPrevMonth = () => {
  const prevYearMonth = dayjs(yearMonth).subtract(1, "month").format("YYYY-MM");
  navigateTo("/expends/monthly/" + prevYearMonth);
};

const navigateToNextMonth = () => {
  const nextYearMonth = dayjs(yearMonth).add(1, "month").format("YYYY-MM");
  navigateTo("/expends/monthly/" + nextYearMonth);
};

const navigateToCountingPage = () => {
  navigateTo("/countings/monthly/" + yearMonth);
};
</script>

<template>
  <main class="expends-monthly-page">
    <div class="page-operation-container">
      <period-controller
        :title="periodControllerTitle"
        @prev="navigateToPrevMonth"
        @next="navigateToNextMonth"
      />
      <BaseButton
        color="grayscale"
        @click="navigateToCountingPage"
        >{{ toCountingPageButtonLabel }}</BaseButton
      >
    </div>
    <base-card>
      <Suspense>
        <template #default>
          <expend-list-table
            :yearMonth="yearMonth"
            ref="expendListTableRef"
          />
        </template>
        <template #fallback>
          <expend-list-table-skelton />
        </template>
      </Suspense>
    </base-card>
  </main>
</template>

<style lang="scss" scoped>
.expends-monthly-page {
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
