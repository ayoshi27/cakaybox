<template>
  <li class="base-list-item">
    <slot></slot>
  </li>
</template>

<style>
.base-list-item {
  --background-color: var(--color-white-normal);
  padding: 8px 16px;

  &:hover {
    background-color: color-mix(in sRGB, var(--background-color) 85%, #000);
    cursor: pointer;
  }
}
</style>
