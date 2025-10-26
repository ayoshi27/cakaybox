<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <section class="base-card">
    <div class="card-title">
      <h2
        v-if="title"
        class="title"
      >
        {{ title }}
      </h2>
      <slot name="titleControl" />
    </div>
    <div class="contents">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.base-card {
  background: #fff;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
.card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 8px;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
.contents {
  padding: 16px;
}
</style>
