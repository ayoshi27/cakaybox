<script setup lang="ts">
import dayjs from "dayjs";
import BaseDialog from "./base/Dialog.vue";
import type { Expend } from "~/types/expend.type";
import type { SelectOptions } from "./ExpendListTable/ExpendListTable.vue";
import { getPayerIdByPaymentMethodId } from "~/utils/finder";

const dialogRef = ref<InstanceType<typeof BaseDialog>>();
const emit = defineEmits(["updated-expend"]);

type Props = {
  expend: Expend;
  selectOptions: SelectOptions;
};
const { expend, selectOptions } = defineProps<Props>();

// フォーム入力値
const formValuePrice = ref(expend.price);
const formValueDescription = ref(expend.description);
const formValueCategory = ref<number | undefined>(expend.category.id);
const formValuePaymentMethod = ref<number | undefined>(expend.paymentMethod.id);
const formValueBudget = ref<number | undefined>(expend.budget.id);
const formValueDate = ref(dayjs(expend.date).format("YYYY-MM-DD"));
const formValueIsProcessed = ref(expend.processed);

const putExpendRequestBody = computed(() => {
  return {
    date: formValueDate.value,
    price: formValuePrice.value,
    description: formValueDescription.value,
    categoryId: formValueCategory.value,
    paymentMethodId: formValuePaymentMethod.value,
    payerId: getPayerIdByPaymentMethodId(
      formValuePaymentMethod.value,
      selectOptions.paymentMethods
    ),
    budgetId: formValueBudget.value,
    processed: formValueIsProcessed.value,
  };
});

const resetFormValue = () => {
  formValueDate.value = dayjs(expend.date).format("YYYY-MM-DD");
  formValuePrice.value = expend.price;
  formValueDescription.value = expend.description;
  formValueCategory.value = expend.category.id;
  formValuePaymentMethod.value = expend.paymentMethod.id;
  formValueBudget.value = expend.budget.id;
  formValueIsProcessed.value = expend.processed;
};

const handleSubmit = () => {
  updateExpend();
};

const updateExpend = async () => {
  await executePutExpend();
  emit("updated-expend");
};

const showDialog = () => {
  dialogRef.value?.showDialog();
};

const closeUpdateExpendDialog = () => {
  dialogRef.value?.closeDialog();
};

const { execute: executePutExpend } = usePatchData(
  "expends",
  expend.id,
  putExpendRequestBody
);

defineExpose({
  closeUpdateExpendDialog,
  showDialog,
});
</script>

<template>
  <BaseDialog
    @close="resetFormValue"
    ref="dialogRef"
  >
    <template #contents>
      <div class="dialog-header">
        <h1 class="dialog-title">支出を編集</h1>
        <BaseButton>
          <icon
            name="mdi:heart-outline"
            class="heart-icon"
          />
          お気に入り
        </BaseButton>
      </div>
      <form
        id="update-expend"
        class="expend-update-form"
        @submit.prevent="handleSubmit"
      >
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
          form="update-expend"
          >保存</BaseButton
        >
        <BaseButton @click="closeUpdateExpendDialog">キャンセル</BaseButton>
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

.expend-update-form {
  display: grid;
  gap: 8px;
  margin-top: 8px;
}

.dialog-footer {
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
