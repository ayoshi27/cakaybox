<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  modelValue: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
const updateModelValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="base-date-picker">
    <span v-if="props.label">{{ `${props.label}：` }}</span>
    <input
      class="input-elemment"
      type="date"
      :value="props.modelValue"
      @input="updateModelValue"
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
