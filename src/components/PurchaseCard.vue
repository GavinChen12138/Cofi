<template>
  <div class="card">
    <div class="layout-center">
      <div class="card-content-layout">
        <div class="card-content-layout-pic">
          <img class="order-pic" :src="drinkImageUrl" alt="" />
        </div>
        <div class="card-content-layout-text">
          <div class="card-content-layout-text-name">{{ drinkName }}</div>
          <div class="card-content-layout-text-prop">{{ drinkProp }}</div>
        </div>
      </div>
      <div class="card-ordernumber">
        Order Code is<br />
        112
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      drinkImageUrl: "src/assets/images/coffee1.png",
      drinkName: "Coffee",
      drinkProp: "Ice",
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 10px;
  padding: 10px;
  box-shadow: $box-shadow-common;
  border-radius: 0.5rem;
}

.layout-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-content-layout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.card-content-layout-pic {
  width: 30%;
}

.order-pic {
  width: 100%;
}

.card-content-layout-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: center;
}

.card-content-layout-text-name {
  font-size: 2.2rem;
  font-weight: lighter;
  font-family: $font-title;
}

.card-content-layout-text-prop {
  font-family: $font-title;
  font-size: 1.5rem;
}

.card-ordernumber {
  font-size: 1.2rem;
  font-weight: lighter;
  font-family: $font-title;
  margin-top: 20px;
}
</style>
