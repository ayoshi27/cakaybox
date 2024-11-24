<script setup lang="ts">
import type { SelectOptions } from "./ExpendListTable/ExpendListTable.vue";
import { initialFilterValues } from "./ExpendListTable/ExpendListTable.const";
import BaseDialog from "./base/Dialog.vue";

type Props = {
  selectOptions: SelectOptions;
  isFiltered: boolean
};
const { selectOptions, isFiltered } = defineProps<Props>();

const dialogRef = ref<InstanceType<typeof BaseDialog>>();

const searchWord = ref("");
const category = ref<number[]>([]);
const paymentMethod = ref<number[]>([]);
const budget = ref<number[]>([]);
const processed = ref<Boolean[]>([]);

const resetFormValue = () => {
  searchWord.value = initialFilterValues.searchWord;
  category.value = initialFilterValues.categoryIdList;
  paymentMethod.value = initialFilterValues.paymentMethodIdList;
  budget.value = initialFilterValues.budgetIdList;
  processed.value = initialFilterValues.isProcessedList;
};

const applyFilter = () => {
  emit("apply-filter", {
    searchWord: searchWord.value,
    categoryIdList: category.value,
    paymentMethodIdList: paymentMethod.value,
    budgetIdList: budget.value,
    isProcessedList: processed.value.map((item) => Boolean(item)),
  });
  dialogRef.value?.closeDialog();
};

const filterButtonIcon = computed(() => {
  return isFiltered ? "mdi:filter" : "mdi:filter-outline";
})

const emit = defineEmits(["added-expend", "apply-filter"]);
</script>

<template>
  <BaseDialog
    @close="resetFormValue"
    ref="dialogRef"
  >
    <template #trigger="{ showDialog }">
      <BaseButton @click="showDialog">
        <icon
          :name="filterButtonIcon"
          class="filter-icon"
        />
        フィルター</BaseButton
      >
    </template>
    <template #contents>
      <div class="dialog-header">
        <h1 class="dialog-title">支出を絞り込んで表示</h1>
        <BaseButton>
          <icon
            name="mdi:heart-outline"
            class="heart-icon"
          />
          お気に入り
        </BaseButton>
      </div>
      <form class="expend-filter-form">
        <BaseInputText
          label="フリーワード"
          v-model="searchWord"
          auto-focus
        />
        <BaseSelect
          label="カテゴリー"
          :items="selectOptions.categories"
          multiple
          v-model="category"
        ></BaseSelect>
        <BaseSelect
          label="支払方法"
          :items="selectOptions.paymentMethods"
          multiple
          v-model="paymentMethod"
        ></BaseSelect>
        <BaseSelect
          label="支出元"
          :items="selectOptions.budgets"
          multiple
          v-model="budget"
        ></BaseSelect>
        <BaseSelect
          label="精算済"
          :items="[
            { name: '精算済', id: 1 },
            { name: '未精算', id: 0 },
          ]"
          multiple
          v-model="processed"
        ></BaseSelect>
      </form>
      <div class="dialog-footer">
        <BaseButton
          color="primary"
          @click="applyFilter"
          >表示</BaseButton
        >
      </div>
    </template>
  </BaseDialog>
</template>

<style lang="scss" scoped>
.filter-icon {
  font-size: 20px;
  margin-right: 4px;
}
.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.dialog-title {
  font-size: 20px;
}

.heart-icon {
  font-size: 24px;
  margin-right: 4px;
}

.expend-filter-form {
  display: grid;
  gap: 8px;
  margin-top: 8px;
}

.dialog-footer {
  margin-top: 8px;
}
</style>
