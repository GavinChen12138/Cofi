<template>
  <div>
    <v-carousel
      :show-arrows="false"
      height="300px"
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
    <div class="d-flex flex-row" style="padding: 18px">
      <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="6">
          <v-card class="mx-auto rounded-xl elevation-20" max-width="400">
            <v-img
              class="white--text align-end"
              height="120px"
              width="160px"
              contain
              :src="item.src"
            ></v-img>

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

          <v-chip-group v-model="Temp" column mandatory>
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
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    addClick(item) {
      this.overlay = true;
      this.absolute = true;
      this.opacity = 0.6;
      this.clickItem = item;
    },
    coffeeOrderClick() {
      this.$store.commit("addCoffee", {
        name: this.clickItem.name,
        price: this.clickItem.price,
        temp: this.Temp,
        sugar: this.sugar,
      });
      this.overlay = false;
    },
  },
  data() {
    return {
      absolute: false,
      opacity: 0.46,
      overlay: false,
      zIndex: 9,
      clickItem: {
        id: "",
        name: "",
        price: "",
        src: "",
      },
      sugar: "",
      Temp: "",
      dark: false,
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
      items: [
        {
          id: 1,
          name: "Flat White",
          price: "$3.99",
          src: "https://s1.ax1x.com/2022/06/04/Xd98sg.png",
        },
        {
          id: 2,
          name: "Expresso",
          price: "$4.99",
          src: "https://s1.ax1x.com/2022/06/04/Xd9tds.png",
        },
        {
          id: 3,
          name: "Drink 3",
          price: "$5.99",
          src: "https://s1.ax1x.com/2022/06/04/Xd9Non.png",
        },
        {
          id: 4,
          name: "Drink 4",
          price: "$6.99",
          src: "https://s1.ax1x.com/2022/06/04/Xd9YZj.png",
        },
        {
          id: 5,
          name: "Drink 5",
          price: "$7.99",
          src: "https://s1.ax1x.com/2022/06/04/Xd9GLQ.png",
        },
        {
          id: 6,
          name: "Drink 6",
          price: "$6.99",
          src: "https://s1.ax1x.com/2022/06/04/Xd98sg.png",
        },
        {
          id: 7,
          name: "Drink 7",
          price: "$5.99",
          src: "https://s1.ax1x.com/2022/06/04/Xd9Non.png",
        },
      ],
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
