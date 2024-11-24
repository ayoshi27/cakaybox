<script setup lang="ts">
import dayjs from "dayjs";
import BaseDialog from "./base/Dialog.vue";
import type { SelectOptions } from "./ExpendListTable.vue";
import { getPayerIdByPaymentMethodId } from "~/utils/finder";

const dialogRef = ref<InstanceType<typeof BaseDialog>>();
const emit = defineEmits(["added-expend"]);

type Props = {
  selectOptions: SelectOptions;
};
const { selectOptions } = defineProps<Props>();

// フォーム入力値
const formValuePrice = ref<number | undefined>(undefined);
const formValueDescription = ref("");
const formValueCategory = ref<number | undefined>(
  selectOptions.categories?.[0].id,
);
const formValuePaymentMethod = ref<number | undefined>(
  selectOptions.paymentMethods?.[0].id,
);
const formValueBudget = ref<number | undefined>(selectOptions.budgets?.[0].id);
const formValueDate = ref(dayjs().format("YYYY-MM-DD"));
const formValueIsProcessed = ref(false);

const postExpendRequestBody = computed(() => {
  return {
    date: formValueDate.value,
    price: formValuePrice.value || 0,
    description: formValueDescription.value,
    categoryId: formValueCategory.value,
    paymentMethodId: formValuePaymentMethod.value,
    payerId: getPayerIdByPaymentMethodId(
      formValuePaymentMethod.value,
      selectOptions.paymentMethods,
    ),
    budgetId: formValueBudget.value,
    processed: formValueIsProcessed.value,
  };
});

const resetFormValue = () => {
  formValueDate.value = dayjs().format("YYYY-MM-DD");
  formValuePrice.value = undefined;
  formValueDescription.value = "";
  formValueCategory.value = selectOptions.categories?.[0].id;
  formValuePaymentMethod.value = selectOptions.paymentMethods?.[0].id;
  formValueBudget.value = selectOptions.budgets?.[0].id;
  formValueIsProcessed.value = false;
};

const addExpend = async () => {
  await executePostExpend();
  emit("added-expend");
};

const closeAddExpendDialog = () => {
  dialogRef.value?.closeDialog();
};

const { execute: executePostExpend } = usePostData(
  "expends",
  postExpendRequestBody,
);

defineExpose({ closeAddExpendDialog });
</script>

<template>
  <BaseDialog
    @close="resetFormValue"
    ref="dialogRef"
  >
    <template #trigger="{ showDialog }">
      <BaseButton
        color="primary"
        @click="showDialog"
      >
        <icon
          name="mdi:plus-thick"
          class="plus-icon"
        />
        支出追加</BaseButton
      >
    </template>
    <template #contents>
      <div class="dialog-header">
        <h1 class="dialog-title">支出を追加</h1>
        <BaseButton>
          <icon
            name="mdi:heart-outline"
            class="heart-icon"
          />
          お気に入り
        </BaseButton>
      </div>
      <form class="expend-add-form">
        <BaseDatePicker
          label="日付"
          v-model="formValueDate"
        />
        <BaseInputText
          label="料金"
          v-model.number="formValuePrice"
          auto-focus
        />
        <BaseInputText
          label="内容"
          v-model="formValueDescription"
        />
        <BaseSelect
          label="カテゴリー"
          :items="selectOptions.categories"
          v-model="formValueCategory"
        ></BaseSelect>
        <BaseSelect
          label="支払方法"
          :items="selectOptions.paymentMethods"
          v-model="formValuePaymentMethod"
        ></BaseSelect>
        <BaseSelect
          label="支払元"
          :items="selectOptions.budgets"
          v-model="formValueBudget"
        ></BaseSelect>
        <BaseCheckBox
          label="精算済"
          v-model="formValueIsProcessed"
        ></BaseCheckBox>
      </form>
      <div class="dialog-footer">
        <BaseButton
          color="primary"
          @click="addExpend"
          >追加</BaseButton
        >
      </div>
    </template>
  </BaseDialog>
</template>

<style lang="scss" scoped>
.plus-icon {
  font-size: 20px;
  margin-right: 4px;
}
.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-title {
  font-size: 20px;
}

.heart-icon {
  font-size: 24px;
  margin-right: 4px;
}

.expend-add-form {
  display: grid;
  gap: 8px;
  margin-top: 8px;
}

.dialog-footer {
  margin-top: 8px;
}
</style>
