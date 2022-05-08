<template>
  <div class="card">
    <div class="layout-center">
      <div class="card-header">
        <h3>{{ title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin: 10px;
  padding: 10px;
  border: $border-test;
  border-radius: 0.5rem;
}
</style>
