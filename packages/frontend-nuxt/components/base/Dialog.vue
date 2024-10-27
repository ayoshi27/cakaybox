<script setup lang="ts">
const dialog = useTemplateRef<HTMLDialogElement>("dialog");
const showDialog = () => {
  dialog.value?.showModal();
};
const closeDialog = () => {
  dialog.value?.close();
};

defineSlots<{
  trigger(props: { showDialog: typeof showDialog }): any;
  contents(props: { closeDialog: typeof closeDialog }): any;
}>();

defineEmits(["close"]);
defineExpose({ closeDialog });
</script>

<template>
  <slot
    name="trigger"
    :showDialog="showDialog"
  ></slot>
  <dialog
    ref="dialog"
    class="base-dialog"
    @close="$emit('close')"
  >
    <slot
      name="contents"
      :closeDialog="closeDialog"
    ></slot>
  </dialog>
</template>

<style lang="scss" scoped>
.base-dialog {
  border: none;
  border-radius: 4px;
  min-width: 380px;
  min-height: 500px;
  padding: 1.5em 2em;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.6);
  }
}
</style>
