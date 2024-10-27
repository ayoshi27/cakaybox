<script setup lang="ts">
const props = defineProps({
  /** trueならテーブルヘッダーを固定する */
  stickyHeader: {
    type: Boolean,
    required: false,
    default: false
  }
})

const stickyHeaderClass = props.stickyHeader ? 'sticky-header' : ''
</script>

<template>
  <div :class="['table-container', stickyHeaderClass]">
    <table class="base-table">
      <slot></slot>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.table-container {
  width: 100%;
  height: calc(100dvh - 40px - (16px * 2) - 40px - (16px * 2) - 16px);
  overflow: auto;

  @media screen and (max-width: 400px) {
    height: calc(100dvh - 40px - (15px * 2) - 60px - (56px + 16px));
  }
}

.base-table {
  border-collapse: collapse;
  width: 100%;
  font-size: var(--font-size-table-cell);
}

:slotted(tr) {
  border-bottom: 1px solid #e0e0e0;
}

:slotted(th),
:slotted(td) {
  padding: 0 10px;
  white-space: nowrap;
}

:slotted(th) {
  text-align: left;
  font-weight: bold;
  height: 56px;

  &+th {
    position: relative;
  }

  &+th::after {
    content: "";
    display: block;
    height: 14px;
    width: 2px;
    background: #e0e0e0;
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    left: 0;
  }
}

.sticky-header :slotted(th) {
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff;
}

:slotted(td) {
  height: 52px;
}
</style>