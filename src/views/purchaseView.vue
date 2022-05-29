<template>
  <div style="height: 40px"></div>
  <div class="layout-center">
    <PurchaseCard></PurchaseCard>
  </div>
</template>

<style>
.layout-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
<script setup>
import PurchaseCard from "../components/PurchaseCard.vue";
</script>
