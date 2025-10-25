<template></template>

<script setup lang="ts">
import dayjs from "dayjs";

if (import.meta.client) {
  const currentYearMonth = dayjs().format("YYYY-MM");
  await navigateTo(`/expends/monthly/${currentYearMonth}`, { replace: true });
}
</script>
