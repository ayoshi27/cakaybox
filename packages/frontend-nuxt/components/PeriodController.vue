<script lang="ts" setup>
import { isMobile } from "@/composables/useBreakPoints";
defineProps({
  title: {
    type: String,
  },
});
defineEmits(["prev", "next"]);
</script>

<template>
  <div class="period-controller">
    <BaseButton @click="$emit('prev')">
      <Icon
        name="mdi:chevron-left"
        class="chevron-icon"
      />
      {{ isMobile ? "" : "前月" }}
    </BaseButton>
    <h1 class="current-year-month">
      {{ title }}
    </h1>
    <BaseButton @click="$emit('next')">
      {{ isMobile ? '' : '翌月' }}
      <Icon
        name="mdi:chevron-right"
        class="chevron-icon"
      />
    </BaseButton>
  </div>
</template>

<style lang="scss" scoped>
.period-controller {
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 400px) {
    gap: 4px;
  }
}

.current-year-month {
  font-size: 24px;
  font-weight: bold;

  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
}

.chevron-icon {
  font-size: 24px;
}
</style>
