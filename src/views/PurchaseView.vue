<template>
  <div class="layout-center">
    <div style="height: 40px"></div>
    <div v-if="!isLogin" class="layout-center">
      <div>
        <coffee-machine-vue2></coffee-machine-vue2>
      </div>
      <div style="font-size: 1.5rem">您还未登陆</div>
    </div>
    <div class="d-flex flex-row" style="padding: 18px">
      <v-row rows="12">
        <v-col
          v-for="(order, i) in orders"
          :key="i"
          :cols="cardCols"
          class="layout-center"
        >
          <v-card
            min-width="340px"
            max-width="500px"
            class="card-center"
            style="box-shadow: 0px 0px 10px 2px #d0d0d0; border-radius: 13px"
          >
            <div style="width: 90%">
              <v-stepper
                v-model="order.orderStatus"
                style="box-shadow: none"
                alt-labels
              >
                <v-stepper-header>
                  <v-stepper-step
                    :complete="order.orderStatus > 1"
                    step="1"
                    color="#000000"
                  >
                    已下单</v-stepper-step
                  >
                  <v-divider></v-divider>
                  <v-stepper-step
                    :complete="order.orderStatus > 2"
                    step="2"
                    color="#000000"
                    >制作中</v-stepper-step
                  >
                  <v-divider></v-divider>
                  <v-stepper-step step="3" color="#000000"
                    >可取餐</v-stepper-step
                  >
                </v-stepper-header>
              </v-stepper>
            </div>
            <div class="layout-center">
              <div style="font-size: 2rem">
                {{ order.name }}
              </div>
              <div style="color: gray">
                {{ tempOptions[order.temp] }},{{ sugarOptions[order.sugar] }}
              </div>
              <div v-if="order.orderStatus > 1" class="layout-center">
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
              <div v-else class="layout-center" style="padding-bottom: -50px">
                <div>制作中</div>
                <coffee-machine-vue2></coffee-machine-vue2>
              </div>
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
<script>
import vueQr from "vue-qr";
import CoffeeMachineVue2 from "../components/CoffeeMachine2.vue";
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
      cardCols: 12,
      isLogin: false,
    };
  },
  components: {
    vueQr,
    CoffeeMachineVue2,
  },
  mounted() {
    console.log(this.$store.state.isLogin);
    //从store获取isLogin登陆状态
    this.isLogin = this.$store.state.isLogin;
    if (this.isLogin) {
      this.getOrders();
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1134) {
        this.cardCols = 4;
      } else {
        this.cardCols = 12;
      }
    });
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
