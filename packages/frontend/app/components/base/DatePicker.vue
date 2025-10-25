<script setup lang="ts">
type Props = {
  label?: string;
};
const { label } = defineProps<Props>();
const model = defineModel();
</script>

<template>
  <div class="base-date-picker">
    <span v-if="label">{{ `${label}：` }}</span>
    <input
      class="input-elemment"
      type="date"
      v-model="model"
    />
  </div>
</template>

<style lang="scss" scoped>
.base-date-picker {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-elemment {
  border-radius: 4px;
  border: 1px solid var(--color-border-input);
  width: 200px;
  padding: 16px 14px;
  line-height: 1;
}
</style>
