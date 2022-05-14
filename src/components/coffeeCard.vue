<template>
  <div class="addcard-background">
    <div class="addcard"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.addcard-background {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
}
.addcard {
  padding: 20px;
  position: fixed;
  width: 100%;
  height: 800px;
  background-color: white;
  border-radius: 10px;
  box-shadow: $box-shadow-common;
  margin-top: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>