<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
const updateModelValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="base-checkbox">
    <span v-if="props.label">{{ `${props.label}：` }}</span>
    <label class="checkbox-label">
      <input
        class="input-elemment"
        type="checkbox"
        :checked="props.modelValue"
        @change="updateModelValue"
      />
    </label>
  </div>
</template>

<style lang="scss" scoped>
.base-checkbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.checkbox-label {
  justify-content: center;
  align-items: center;
  height: 50px;
  display: flex;
  width: 200px;
  margin-left: auto;
  cursor: pointer;
}
</style>
