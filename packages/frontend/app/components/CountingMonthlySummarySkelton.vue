<script setup lang="ts"></script>

<template>
  <BaseLoadingOverlay />
  <div class="counting-list-container">
    <BaseCard title="カスタム集計一覧">
      <BaseTable>
        <thead>
          <tr>
            <th>集計項目名</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in Array(5)"
            :key="`custom-${item}`"
          >
            <td>---</td>
            <td>---</td>
          </tr>
        </tbody>
      </BaseTable>
    </BaseCard>
    <BaseCard title="カテゴリー別集計一覧">
      <BaseTable>
        <thead>
          <tr>
            <th>カテゴリー名</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in Array(5)"
            :key="`category-${item}`"
          >
            <td>
              <div class="category-cell-content">
                <Icon
                  name="mdi:local-offer"
                  class="category-icon"
                />
                ---
              </div>
            </td>
            <td>---</td>
          </tr>
        </tbody>
      </BaseTable>
    </BaseCard>
  </div>
</template>

<style scoped lang="scss">
.counting-list-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.base-card {
  margin-top: 16px;
}

.category-cell-content {
  display: flex;
  align-items: center;
  gap: 4px;
}

.category-icon {
  font-size: 18px;
  color: var(--color-icon-disabled);
}
</style>
