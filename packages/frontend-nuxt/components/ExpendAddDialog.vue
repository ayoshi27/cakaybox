<script setup lang="ts">
import dayjs from "dayjs";
import BaseDialog from "./base/Dialog.vue";
import BaseListItem from "./base/ListItem.vue";
import type { SelectOptions } from "./ExpendListTable/ExpendListTable.vue";
import { getPayerIdByPaymentMethodId } from "~/utils/finder";
import type { FavoriteExpendItem } from "~/types/expend.type";

const dialogRef = ref<InstanceType<typeof BaseDialog>>();
const emit = defineEmits(["added-expend"]);

type Props = {
  selectOptions: SelectOptions;
};
const { selectOptions } = defineProps<Props>();

const favoriteItemsRef = useTemplateRef<HTMLElement>("favoriteItemsRef");

// フォーム入力値
const formValuePrice = ref<number | undefined>(undefined);
const formValueDescription = ref("");
const formValueCategory = ref<number | undefined>(
  selectOptions.categories?.[0].id
);
const formValuePaymentMethod = ref<number | undefined>(
  selectOptions.paymentMethods?.[0].id
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
      selectOptions.paymentMethods
    ),
    budgetId: formValueBudget.value,
    processed: formValueIsProcessed.value,
  };
});

const setFormValue = (data: Partial<typeof postExpendRequestBody.value>) => {
  if (data.description !== undefined) formValueDescription.value = data.description;
  if (data.categoryId  !== undefined) formValueCategory.value = data.categoryId;
  if (data.paymentMethodId  !== undefined) formValuePaymentMethod.value = data.paymentMethodId;
  if (data.budgetId  !== undefined) formValueBudget.value = data.budgetId;
  if (data.processed !== undefined) formValueIsProcessed.value = data.processed;
};

const resetFormValue = () => {
  formValueDate.value = dayjs().format("YYYY-MM-DD");
  formValuePrice.value = undefined;
  formValueDescription.value = "";
  formValueCategory.value = selectOptions.categories?.[0].id;
  formValuePaymentMethod.value = selectOptions.paymentMethods?.[0].id;
  formValueBudget.value = selectOptions.budgets?.[0].id;
  formValueIsProcessed.value = false;
};

const handleSubmit = () => {
  addExpend();
};

const addExpend = async () => {
  await executePostExpend();
  emit("added-expend");
};

const closeAddExpendDialog = () => {
  resetFormValue();
  dialogRef.value?.closeDialog();
};

const { data: favoriteExpendItems, execute: fetchFavoriteExpendItems } =
  useAsyncApiFetchData<FavoriteExpendItem[]>("favorite-expend-items");

const handleClickFavoriteItem = (item: FavoriteExpendItem) => {
  console.log(item);
  setFormValue({
    description: item.description,
    categoryId: item.category.id,
    paymentMethodId: item.paymentMethod.id,
    budgetId: item.budget.id,
    processed: item.processed,
  });
  favoriteItemsRef.value?.hidePopover();
};

const { execute: executePostExpend } = usePostData(
  "expends",
  postExpendRequestBody
);

defineExpose({ closeAddExpendDialog });

await fetchFavoriteExpendItems();
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
        <BaseButton
          popovertarget="favorite-items"
          id="favorite-button"
          class="favorite-button"
        >
          <icon
            name="mdi:heart-outline"
            class="heart-icon"
          />
          お気に入り
        </BaseButton>
      </div>

      <div
        ref="favoriteItemsRef"
        id="favorite-items"
        popover
        class="favorite-items-popover"
      >
        <ul>
          <BaseListItem
            v-for="favoriteItem in favoriteExpendItems"
            :key="favoriteItem.id"
            @click="handleClickFavoriteItem(favoriteItem)"
            >{{ favoriteItem.name }}</BaseListItem
          >
        </ul>
      </div>

      <form
        id="add-expend"
        class="expend-add-form"
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
        <div class="dialog-footer">
          <BaseButton
            color="primary"
            form="add-expend"
            >追加</BaseButton
          >
          <BaseButton @click="closeAddExpendDialog">キャンセル</BaseButton>
        </div>
      </form>
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
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.favorite-button {
  anchor-name: --favorite-button;
}

.favorite-items-popover {
  border: none;
  border-radius: 4px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);

  padding: 0;
  position-anchor: --favorite-button;
  position: absolute;
  left: anchor(left);
  top: anchor(bottom);
  margin: 0;
}
</style>
