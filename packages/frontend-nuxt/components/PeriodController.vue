<script lang="ts" setup>
import dayjs from 'dayjs';

const props = defineProps({
  yearMonth: {
    type: String,
    required: true,
  }
});
defineEmits(['prev', 'next']);

const formatedYearMonth = dayjs(props.yearMonth).format('YYYY年MM月');
</script>

<template>
  <div class="period-controller">
    <base-button @click="$emit('prev')">
      <Icon name="mdi:chevron-left" class="chevron-icon" />前月
    </base-button>
    <h1 class="current-year-month">
      {{ formatedYearMonth }}の支出一覧
    </h1>
    <base-button @click="$emit('next')">
      翌月
      <Icon name="mdi:chevron-right" class="chevron-icon" />
    </base-button>
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