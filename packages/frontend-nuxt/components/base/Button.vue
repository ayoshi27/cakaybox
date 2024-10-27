<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    required: false,
    default: null
  },
  color: {
    type: String,
    validator: buttonColorValidator,
    required: false,
    default: 'normal'
  }
})
</script>

<template>
  <button :class="['base-button', `color-${props.color}`]">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  --text-color: var(--color-primary);
  --background-color: color-mix(in sRGB, var(--text-color) 5%, #fff);

  &.color-primary {
    --text-color: var(--color-text-white);
    --background-color: var(--color-primary);
  }
  &.color-grayscale {
    --text-color: var(--color-black-normal);
    --background-color: var(--color-gray-lightest);
  }

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  height: 40px;
  padding: 8px 16px;
  background-color: var(--background-color);
  font-size: 14px;
  color: var(--text-color);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: color-mix(in sRGB, var(--background-color) 85%, #000);
  }
}
</style>