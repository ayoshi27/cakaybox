<script setup lang="ts">
import { onUnmounted } from "vue";
import LoadingOverlay from "./LoadingOverlay.vue";

type Props = {
  isLoading?: boolean;
};

const { isLoading = false } = defineProps<Props>();

let bodyScrollLockDepth = 0;
let previousBodyOverflow: string | null = null;

const lockBodyScroll = () => {
  if (typeof document === "undefined") return;
  if (bodyScrollLockDepth === 0) {
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  bodyScrollLockDepth += 1;
};

const unlockBodyScroll = () => {
  if (typeof document === "undefined" || bodyScrollLockDepth === 0) return;
  bodyScrollLockDepth -= 1;
  if (bodyScrollLockDepth === 0) {
    document.body.style.overflow = previousBodyOverflow ?? "";
    previousBodyOverflow = null;
  }
};

const dialog = useTemplateRef<HTMLDialogElement>("dialog");
let hasLockedBodyScroll = false;
const showDialog = () => {
  dialog.value?.showModal();
  if (!hasLockedBodyScroll) {
    lockBodyScroll();
    hasLockedBodyScroll = true;
  }
};
const closeDialog = () => {
  dialog.value?.close();
  if (hasLockedBodyScroll) {
    unlockBodyScroll();
    hasLockedBodyScroll = false;
  }
};

defineSlots<{
  trigger(props: { showDialog: typeof showDialog }): any;
  contents(props: { closeDialog: typeof closeDialog }): any;
}>();

const emit = defineEmits(["close"]);

const handleClose = () => {
  if (hasLockedBodyScroll) {
    unlockBodyScroll();
    hasLockedBodyScroll = false;
  }
  emit("close");
};

onUnmounted(() => {
  if (hasLockedBodyScroll) {
    unlockBodyScroll();
    hasLockedBodyScroll = false;
  }
});
defineExpose({ closeDialog, showDialog });
</script>

<template>
  <slot
    name="trigger"
    :showDialog="showDialog"
  ></slot>
  <dialog
    ref="dialog"
    class="base-dialog"
    @close="handleClose"
  >
    <LoadingOverlay v-if="isLoading"></LoadingOverlay>
    <div class="dialog-contents">
      <slot
        name="contents"
        :closeDialog="closeDialog"
      >
      </slot>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
.base-dialog {
  border: none;
  border-radius: 4px;
  min-width: 380px;
  min-height: 500px;
  padding: 0;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.6);
  }
}
.dialog-contents {
  padding: 1.5em 2em;
}
</style>
