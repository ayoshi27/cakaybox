<script setup lang="ts">
type Props = {
  label?: string;
  autoFocus?: boolean;
};
const { label, autoFocus = false } = defineProps<Props>();
const model = defineModel();
</script>

<template>
  <div class="base-input-text">
    <span v-if="label">{{ `${label}：` }}</span>
    <input
      class="input-elemment"
      type="text"
      v-model="model"
      :autofocus="autoFocus"
    />
  </div>
</template>

<style lang="scss" scoped>
.base-input-text {
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
