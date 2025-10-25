<script setup lang="ts"></script>

<template>
  <BaseLoadingOverlay></BaseLoadingOverlay>
  <div class="controller-panel">
    <BaseButton
      color="primary"
      disabled
    >
      <icon
        name="mdi:plus-thick"
        class="plus-icon"
      />
      支出追加</BaseButton
    >
    <div class="filter-container">
      <BaseButton disabled>
        <icon
          name="mdi:filter-off-outline"
          class="filter-off-icon"
        />
      </BaseButton>
      <BaseButton disabled>
        <icon
          name="mdi:filter-outline"
          class="filter-icon"
        />
        フィルター</BaseButton
      >
    </div>
  </div>
  <BaseTable
    class="expend-list-table"
    sticky-header
  >
    <thead>
      <tr>
        <th class="date-th-cell">日付</th>
        <th class="price-th-cell">料金</th>
        <th class="description-th-cell">内容</th>
        <th class="category-th-cell">カテゴリー</th>
        <th class="payer-th-cell">支払者</th>
        <th class="payment-method-th-cell">支払方法</th>
        <th class="budget-th-cell">支払元</th>
        <th class="processed-th-cell">精算済</th>
        <th class="edit-th-cell">編集</th>
        <th class="delete-th-cell">削除</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in Array(10)"
        :key="item"
      >
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
      </tr>
    </tbody>
  </BaseTable>
</template>

<style lang="scss" scoped>
.controller-panel {
  display: flex;
  justify-content: space-between;
}
.filter-container {
  display: flex;
  align-items: center;
  gap: 8px;
}
.filter-off-icon {
  font-size: 20px;
}
.expend-list-table {
  margin-top: 4px;
  height: calc(100dvh - 40px - (16px * 2) - 40px - (16px * 2) - 16px - 4px);
}
.date-th-cell {
  width: 80px;
}
.price-th-cell {
  width: 100px;
}
.price-th-cell,
.price-cell {
  text-align: right;
}
.description-th-cell {
  width: 350px;
}
.edit-th-cell,
.delete-th-cell,
.processed-th-cell {
  width: 80px;
}
</style>
