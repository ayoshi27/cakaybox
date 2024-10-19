<script setup lang="ts">
import dayjs from 'dayjs'
const route = useRoute()
const yearMonth = route.params.yearMonth as string;

const navigateToPrevMonth = () => {
  const prevYearMonth = dayjs(yearMonth).subtract(1, 'month').format('YYYY-MM')
  navigateTo('/expends/monthly/' + prevYearMonth);
}

const navigateToNextMonth = () => {
  const nextYearMonth = dayjs(yearMonth).add(1, 'month').format('YYYY-MM')
  navigateTo('/expends/monthly/' + nextYearMonth);
}
</script>

<template>
  <main class="expends-monthly-page">
    <period-controller :yearMonth="yearMonth" @prev="navigateToPrevMonth" @next="navigateToNextMonth" />
    <base-card>
      <expend-list-table :yearMonth="yearMonth"></expend-list-table>
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
</style>