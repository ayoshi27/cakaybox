<script setup lang="ts">
import dayjs from "dayjs";
import BaseDialog from "./base/Dialog.vue";
import type { Category } from "~/types/category.type";
import type { PaymentMethod } from "~/types/payment-method.type";
import type { Budget } from "~/types/budget.type";
import { getPayerIdByPaymentMethodId } from "~/utils/finder";

const dialogRef = ref<InstanceType<typeof BaseDialog>>();
const emit = defineEmits(["added-expend"]);

// フォーム入力値
const formValuePrice = ref("");
const formValueDescription = ref("");
const formValueCategory = ref<number | undefined>(0);
const formValuePaymentMethod = ref<number | undefined>(0);
const formValueBudget = ref<number | undefined>(0);
const formValueDate = ref(dayjs().format("YYYY-MM-DD"));
const formValueIsProcessed = ref(false);

const postExpendRequestBody = computed(() => {
  return {
    date: formValueDate.value,
    price: Number(formValuePrice.value),
    description: formValueDescription.value,
    categoryId: formValueCategory.value,
    paymentMethodId: formValuePaymentMethod.value,
    payerId: getPayerIdByPaymentMethodId(
      formValuePaymentMethod.value,
      paymentMethods.value,
    ),
    budgetId: formValueBudget.value,
    processed: formValueIsProcessed.value,
  };
});

const resetFormValue = () => {
  formValueDate.value = dayjs().format("YYYY-MM-DD");
  formValuePrice.value = "";
  formValueDescription.value = "";
  formValueCategory.value = categories.value?.[0].id;
  formValuePaymentMethod.value = paymentMethods.value?.[0].id;
  formValueBudget.value = budgets.value?.[0].id;
  formValueIsProcessed.value = false;
};

const addExpend = async () => {
  await executePostExpend();
  emit("added-expend");
};

const closeAddExpendDialog = () => {
  dialogRef.value?.closeDialog();
};

// APIから取得したデータ
const { data: categories, execute: fetchCategories } =
  useAsyncApiFetchData<Category[]>("categories");
const { data: paymentMethods, execute: fetchPaymentMethods } =
  useAsyncApiFetchData<PaymentMethod[]>("payment-methods");
const { data: budgets, execute: fetchBudgets } =
  useAsyncApiFetchData<Budget[]>("budgets");

const { execute: executePostExpend } = usePostData(
  "expends",
  postExpendRequestBody,
);
const fetchInitialData = async () => {
  Promise.all([
    await fetchCategories(),
    await fetchPaymentMethods(),
    await fetchBudgets(),
  ]);
};

defineExpose({ closeAddExpendDialog });

await fetchInitialData();

// フォーム入力値に、APIから取得した選択肢を設定する
formValueCategory.value = categories.value?.[0].id;
formValuePaymentMethod.value = paymentMethods.value?.[0].id;
formValueBudget.value = budgets.value?.[0].id;
</script>

<template>
  <base-dialog
    @close="resetFormValue"
    ref="dialogRef"
  >
    <template #trigger="{ showDialog }">
      <base-button
        color="primary"
        @click="showDialog"
      >
        <icon
          name="mdi:plus-thick"
          class="plus-icon"
        />
        支出追加</base-button
      >
    </template>
    <template #contents>
      <div class="dialog-header">
        <h1 class="dialog-title">支出を追加</h1>
        <base-button>
          <icon
            name="mdi:heart-outline"
            class="heart-icon"
          />
          お気に入り
        </base-button>
      </div>
      <form class="expend-add-form">
        <base-date-picker
          label="日付"
          v-model="formValueDate"
        />
        <base-input-text
          label="料金"
          v-model="formValuePrice"
          auto-focus
        />
        <base-input-text
          label="内容"
          v-model="formValueDescription"
        />
        <base-select
          label="カテゴリー"
          :items="categories"
          v-model="formValueCategory"
        ></base-select>
        <base-select
          label="支払方法"
          :items="paymentMethods"
          v-model="formValuePaymentMethod"
        ></base-select>
        <base-select
          label="支払元"
          :items="budgets"
          v-model="formValueBudget"
        ></base-select>
        <base-check-box
          label="精算済"
          v-model="formValueIsProcessed"
        ></base-check-box>
      </form>
      <div class="dialog-footer">
        <base-button
          color="primary"
          @click="addExpend"
          >追加</base-button
        >
      </div>
    </template>
  </base-dialog>
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
