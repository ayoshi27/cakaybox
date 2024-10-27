<script setup lang="ts">
type SelectItem = { id: number; name: string };
const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  items: {
    type: Array as () => SelectItem[] | null,
    required: true,
  },
  modelValue: {
    type: Number,
    required: false,
  },
});
const emit = defineEmits(["update:modelValue"]);
const updateModelValue = (event: Event) => {
  const value = Number((event.target as HTMLInputElement).value);
  emit("update:modelValue", value);
};
</script>

<template>
  <div class="base-select">
    <span v-if="props.label">{{ `${props.label}：` }}</span>
    <select
      class="select-elemment"
      @change="updateModelValue"
    >
      <option
        v-for="item in items"
        :value="item.id"
        :selected="item.id === modelValue"
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
