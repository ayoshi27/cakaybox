<script setup lang="ts">
const props = defineProps({
  /** trueならテーブルヘッダーを固定する */
  stickyHeader: {
    type: Boolean,
    required: false,
    default: false,
  },
  layout: {
    type: String as () => "auto" | "fixed",
    required: false,
    default: "fixed",
    validator: (value: string) => ["auto", "fixed"].includes(value),
  },
});

const stickyHeaderClass = props.stickyHeader ? "sticky-header" : "";
const tableLayoutClass =
  props.layout === "fixed" ? "table-layout-fixed" : "table-layout-auto";
</script>

<template>
  <div :class="['table-container', stickyHeaderClass]">
    <table :class="['base-table', tableLayoutClass]">
      <slot></slot>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.table-container {
  width: 100%;
  overflow: auto;
}

.base-table {
  border-collapse: collapse;
  width: 100%;
  font-size: var(--font-size-table-cell);
}
.table-layout-fixed {
  table-layout: fixed;
}

:slotted(tr) {
  border-bottom: 1px solid #e0e0e0;
}

:slotted(th),
:slotted(td) {
  padding: 0 10px;
}

:slotted(th) {
  text-align: left;
  font-weight: bold;
  height: 56px;

  & + th {
    position: relative;
  }

  & + th::after {
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
