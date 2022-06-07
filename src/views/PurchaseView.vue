<template>
  <div class="">
    <div style="height: 40px"></div>
    <div class="d-flex flex-row" style="padding: 18px">
      <v-row rows="12">
        <v-col v-for="(order, i) in orders" :key="i" cols="12">
          <v-card min-width="360px" class="card-center">
            <v-stepper
              v-model="order.orderStatus"
              vertical
              style="box-shadow: none"
              alt-labels
            >
              <v-stepper-step
                :complete="order.orderStatus > 1"
                step="1"
                color="#000000"
              >
                已下单
              </v-stepper-step>

              <v-stepper-step
                :complete="order.orderStatus > 2"
                step="2"
                color="#000000"
                >正在制作中</v-stepper-step
              >

              <v-stepper-step
                :complete="order.orderStatus > 3"
                step="3"
                color="#000000"
                >请取餐</v-stepper-step
              >
            </v-stepper>
            <div class="layout-center">
              <div style="font-size: 2rem">
                {{ order.name }}
              </div>
              <div style="color: gray">
                {{ tempOptions[order.temp] }},{{ sugarOptions[order.sugar] }}
              </div>
              <div>取餐码</div>
              <div>{{ order.qrCodeNumber }}</div>
              <vue-qr
                :text="order.qrCodeNumber"
                :size="qrSize"
                colorDark="black"
                colorLight="white"
              >
              </vue-qr>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div style="height: 60px"></div>
  </div>
</template>

<style lang="scss">
.layout-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-center {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
<script>
import vueQr from "vue-qr";
export default {
  data() {
    return {
      e6: 1,
      ordercode: "",
      orders: [],
      tempOptions: ["Ice", "Hot", "Warm"],
      sugarOptions: ["No sugar", "Half sugar", "Regular sugar"],
      temp: 0,
      sugar: 0,
      qrSize: 120,
    };
  },
  components: {
    vueQr,
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    getOrders() {
      this.$axios
        .get("http://localhost:8080/static/orderlist.json")
        .then((res) => {
          console.log(res.data.orders);
          this.orders = res.data.orders;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
