<script setup lang="ts">
</script>

<template>
  <section class="base-card">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.base-card {
  padding: 16px;
  background: #fff;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, .2);
  border-radius: 5px;
}
</style>