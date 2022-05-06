<template>
  <div class="layout-center" style="margin-top: 50px">
    <div class="search-wrapper">
      <input class="search-input" type="text" placeholder="Search" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="feather feather-search"
        viewBox="0 0 24 24"
      >
        <defs></defs>
        <circle cx="11" cy="11" r="8"></circle>
        <path d="M21 21l-4.35-4.35"></path>
      </svg>
    </div>
  </div>
  <div class="layout-center">
    <div class="drink-card-wrapper">
      <DrinkCard></DrinkCard>
      <DrinkCard></DrinkCard>
      <DrinkCard></DrinkCard>
      <DrinkCard></DrinkCard>
      <DrinkCard></DrinkCard>
      <DrinkCard></DrinkCard>
      <DrinkCard></DrinkCard>
      <DrinkCard></DrinkCard>
    </div>
  </div>
</template>
<script setup>
import DrinkCard from "/Users/fan/Desktop/Ex/FP1/FP1/src/components/DrinkCard.vue";
</script>
<style lang="scss" scoped>
.search-input {
  border: none;
  flex: 1;
  outline: none;
  height: 100%;
  padding: 0 20px;
  font-size: 16px;
  background-color: var(--search-area-bg);
  color: var(--main-color);

  &:placeholder {
    color: var(--main-color);
    opacity: 0.6;
  }
}
.search-wrapper {
  border-radius: 20px;
  background-color: var(--search-area-bg);
  padding-right: 12px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 480px;
  color: var(--light-font);
  box-shadow: $box-shadow-common;
  overflow: hidden;

  .dark & {
    box-shadow: none;
  }
}
.drink-card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 845px;
  margin-top: 20px;
}
</style>
