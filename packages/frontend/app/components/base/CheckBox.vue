<script setup lang="ts">
type Props = {
  label?: string;
};
const { label } = defineProps<Props>();
const model = defineModel();
</script>

<template>
  <div class="base-checkbox">
    <span v-if="label">{{ `${label}：` }}</span>
    <label class="checkbox-label">
      <input
        class="input-elemment"
        type="checkbox"
        v-model="model"
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
