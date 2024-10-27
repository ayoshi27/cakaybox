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
  autoFocus: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);
const updateModelValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="base-input-text">
    <span v-if="props.label">{{ `${props.label}：` }}</span>
    <input
      class="input-elemment"
      type="text"
      :value="props.modelValue"
      @input="updateModelValue"
      :autofocus="props.autoFocus"
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
