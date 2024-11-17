<script setup lang="ts">
type SelectItem = { id: number; name: string };
type Props = {
  label?: string;
  items: SelectItem[] | null;
};
const { label, items } = defineProps<Props>();
const model = defineModel();
</script>

<template>
  <div class="base-select">
    <span v-if="label">{{ `${label}：` }}</span>
    <select
      class="select-elemment"
      v-model="model"
    >
      <option
        v-for="item in items"
        :value="item.id"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.base-select {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.select-elemment {
  appearance: none;
  border-radius: 4px;
  border: 1px solid var(--color-border-input);
  width: 200px;
  padding: 16px 14px;
  line-height: 1;
}
</style>
