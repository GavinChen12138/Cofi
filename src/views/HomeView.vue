<template>
  <div class="layout-center">
    <div style="width: 100%; max-width: 700px">
      <v-carousel
        width="100%"
        :show-arrows="false"
        height="auto"
        cycle
        hide-delimiter-background
        delimiter-icon="mdi-minus"
      >
        <v-carousel-item
          v-for="(headPic, i) in headPics"
          :key="i"
          :src="headPic.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div class="d-flex flex-row" style="padding: 18px">
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          :cols="cardCols"
          class="layout-center"
        >
          <v-card
            class="mx-auto elevation-20"
            max-width="400"
            style="box-shadow: 0px 0px 10px 2px #d0d0d0; border-radius: 13px"
          >
            <v-img
              class="white--text align-end"
              height="120px"
              width="160px"
              contain
              :src="item.src"
            >
            </v-img>

            <v-card-subtitle style="font-size: 1.7rem">{{
              item.name
            }}</v-card-subtitle>

            <v-card-text>
              <div style="font-size: 1.2rem">{{ item.price }}</div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                icon
                small
                style="background-color: #171c28"
                @click="addClick(item)"
              >
                <!--点击后弹出遮罩层，显示当前点击卡片的信息-->
                <v-icon style="color: white">mdi-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col></v-row
      >
    </div>

    <div style="height: 70px"></div>
    <v-overlay :value="overlay" :opacity="opacity" :dark="dark">
      <!--点击显示当前点击卡片的信息-->
      <v-card
        class="elevation-10"
        max-width="410"
        transition="slide-x-transition"
        bottom
        style="border-radius: 10px"
      >
        <v-btn icon small @click="overlay = false">
          <v-icon style="color: black">mdi-close</v-icon>
        </v-btn>
        <div class="layout-center">
          <v-img
            class="white--text align-end"
            height="250px"
            width="280px"
            contain
            :src="clickItem.src"
          ></v-img>
        </div>
        <v-card-title>{{ clickItem.name }}</v-card-title>
        <v-card-text style="font-size: 1.2rem">{{
          clickItem.price
        }}</v-card-text>
        <v-card-text>
          <h2 class="title mb-2">Temperature</h2>

          <v-chip-group v-model="temp" column mandatory>
            <v-chip filter outlined>Ice</v-chip>
            <v-chip filter outlined>Hot</v-chip>
            <v-chip filter outlined>Warm</v-chip>
          </v-chip-group>
          <h2 class="title mb-2">Sugar prefer</h2>
          <v-chip-group v-model="sugar" column mandatory>
            <v-chip filter outlined>No sugar</v-chip>
            <v-chip filter outlined>Half sugar</v-chip>
            <v-chip filter outlined>Regular sugar</v-chip>
          </v-chip-group>
        </v-card-text>
        <v-card-text class="layout-center">
          <v-btn rounded color="primary" dark @click="coffeeOrderClick"
            >OK</v-btn
          >
        </v-card-text>
      </v-card>
    </v-overlay>
    <v-snackbar v-model="snackbar" top>
      You selected {{ clickItem.name }}, {{ tempOptions[temp] }},
      {{ sugarOptions[sugar] }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  //启动时axios从static/data.json 获取items数据
  mounted() {
    this.getItems();
    //监听设备屏幕宽度是否大于840px
    window.addEventListener("resize", () => {
      if (window.innerWidth > 840) {
        this.cardCols = 3;
      } else {
        this.cardCols = 6;
      }
    });
  },
  methods: {
    addClick(item) {
      this.overlay = true;
      this.absolute = true;
      this.opacity = 0.6;
      this.clickItem = item;
    },
    coffeeOrderClick() {
      this.overlay = false;
      this.snackbar = true;
    },
    //axios从static/data.json 获取items数据
    getItems() {
      this.$axios
        .get("http://localhost:8080/static/drinklist.json")
        .then((res) => {
          console.log(res.data.items);
          this.items = res.data.items;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  data() {
    return {
      absolute: false,
      opacity: 0.46,
      overlay: false,
      zIndex: 9,
      cardCols: 6,
      clickItem: {
        id: "",
        name: "",
        price: "",
        src: "",
      },
      snackbar: false,
      dark: false,
      tempOptions: ["Ice", "Hot", "Warm"],
      sugarOptions: ["No sugar", "Half sugar", "Regular sugar"],
      temp: 0,
      sugar: 0,
      headPics: [
        {
          src: "https://upload.cc/i1/2022/06/05/RW0A7J.jpg",
        },
        {
          src: "https://upload.cc/i1/2022/06/05/yR0X27.jpg",
        },
        {
          src: "https://upload.cc/i1/2022/06/05/JoGBUT.png",
        },
      ],
      items: [],
    };
  },
};
</script>

<style>
.layout-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
