<template>
  <div class="card">
    <img class="drink-pic" :src="drinkImageUrl" />
    <div class="drink-textWithAction">
      <div class="drink-content">
        <div class="drink-name">{{ drinkName }}</div>
        <div class="drink-price">¥{{ drinkPrice }}</div>
      </div>
      <div class="drink-cation">+</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  margin: 10px;
  padding: 10px;
  width: 44%;
  height: 13rem;
  border-radius: 10px;
  border: 1px transparent solid;
  box-shadow: $box-shadow-common;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.drink-pic {
  width: 50%;
  max-width: 12rem;
}
.drink-textWithAction {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}
.drink-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  width: 50%;
}
.drink-name {
  font-size: 1.8rem;
  font-weight: lighter;
  font-family: $font-title;
}
.drink-price {
  font-family: $font-title;
}
.drink-cation {
  background-color: darkblue;
  color: white;
  font-weight: 400;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
export default {
  setup() {
    return {
      drinkImageUrl: "src/assets/images/coffee1.png",
      drinkName: "Coffee",
      drinkPrice: "19.00",
    };
  },
};
</script>
