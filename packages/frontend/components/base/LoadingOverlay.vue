<script setup lang="ts">
type Props = {
  isFixed?: boolean;
};

const { isFixed = false } = defineProps<Props>();
</script>

<template>
  <div :class="['loading-overlay', { 'position-fixed': isFixed }]">
    <icon
      name="line-md:loading-twotone-loop"
      class="loading-icon"
    />
  </div>
</template>

<style lang="scss" scoped>
.loading-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--z-index-overlay);
  background-color: rgba(255, 255, 255, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.position-fixed {
  position: fixed;
}
.loading-icon {
  color: var(--color-primary);
  font-size: 48px;
}
</style>
