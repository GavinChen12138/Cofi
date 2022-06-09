<template>
  <div class="layout-center">
    <div style="height: 58px"></div>
    <div class="layout-center" v-if="isLogin">
      <v-card
        class="mx-auto"
        width="380"
        height="150"
        style="box-shadow: 0px 0px 10px 2px #d0d0d0; border-radius: 15px"
      >
        <v-list-item three-line>
          <v-list-item-avatar tile size="80">
            <img :src="user.avatar"
          /></v-list-item-avatar>
          <v-list-item-content style="margin-left: 20px">
            <div style="font-size: 40px">{{ user.userName }}</div>
            <v-list-item-title>会员</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <div style="margin-top: -40px">
        <div id="try">
          <!-- box_rolling下执行正面翻转动画   -->
          <div
            class="rollbox"
            :class="{ box_rolling: isRolling }"
            @click="isRolling = !isRolling"
          >
            <!-- 前面div -->
            <div class="rollbox_front">
              <div class="contentbox" style="">
                <div
                  style="
                    font-size: 60px;
                    background: #e4ecfa;
                    width: 100%;
                    color: #222a73;
                    border-radius: 18px 18px 0 0;
                    padding: 10px;
                    padding-bottom: 0px;
                  "
                >
                  Cofi Card
                </div>
                <div class="numbercard_info">
                  <div
                    style="
                      font-size: 30px;
                      padding-top: 10px;
                      padding-left: 10px;
                    "
                  >
                    会员卡
                    <div style="font-size: 20px">Lv.{{ user.level }}</div>
                  </div>
                  <div id="coffee3d">
                    <img
                      src="@/assets/coffee3d.png"
                      style="
                        width: 130px;
                        margin-top: -50px;
                        margin-right: 30px;
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- 后面div -->
            <div class="rollbox_behind">
              <div>还需{{ user.nextLevelCups }}杯</div>
              <div class="layout-center-drink">
                <div v-for="n in user.nextLevelCups" :key="n">
                  <img
                    src="@/assets/coffee3d.png"
                    style="width: 30px; height: 30px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <coffee-machine-vue></coffee-machine-vue>
      <div style="height: 70vh; z-index: 99" class="layout-center">
        <v-card
          class="mx-auto"
          width="380"
          height="230"
          style="box-shadow: 0px 0px 10px 2px #d0d0d0; border-radius: 15px"
        >
          <div class="layout-center" style="margin-top: 90px">
            <input
              placeholder="Phone Number"
              type="text"
              class="input"
              required=""
            />
            <input
              placeholder="Code"
              type="text"
              class="input"
              required=""
              style="margin-top: 20px"
            />
          </div>
        </v-card>
        <button class="cta" @click="loginButton">
          <span class="hover-underline-animation"> Cofi now </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#try {
  .rollbox {
    position: relative;
    width: 360px;
    height: 200px;
    &_front,
    &_behind {
      border-radius: 18px;
      box-shadow: 0px 0px 10px 2px #e5edfa;
      display: flex;
      justify-content: start;
      align-items: flex-start;
      flex-direction: column;
      color: white;
      transform-style: preserve-3d; //表示所有子元素在3D空间中呈现
      backface-visibility: hidden; //元素背面向屏幕时是否可见
      transition-duration: 0.5s;
      transition-timing-function: "ease-in";
      background: #222a73;
      .contentbox {
        width: 360px;
        height: 200px;
        display: flex;
        justify-content: start;
        align-items: start;
        flex-direction: column;
        > img {
          width: 100px;
        }
      }
    }
    &_behind {
      transform: rotateY(180deg);
      visibility: hidden; //元素不可见，但占据空间
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  .box_rolling {
    .rollbox_front {
      transform: rotateY(180deg);
      visibility: hidden;
    }
    .rollbox_behind {
      transform: rotateY(360deg);
      visibility: visible;
    }
  }
}
#coffee3d {
  //添加重复上下移动的动画
  animation: coffee3d 3s infinite;
  @keyframes coffee3d {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
}
.layout-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.numbercard_info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
}
.v-stepper:not(.v-stepper--vertical) .v-stepper__label {
  display: flex;
}
.layout-center-drink {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
}
.login-title {
  font-size: 30px;
}

.input {
  line-height: 28px;
  width: 200px;
  border: 2px solid transparent;
  border-bottom-color: #777;
  padding: 0.2rem 0;
  outline: none;
  background-color: transparent;
  color: #0d0c22;
  transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.input:focus,
input:hover {
  outline: none;
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  border-color: #7a9cc6;
}

.input::placeholder {
  color: #777;
}

.input:focus::placeholder {
  opacity: 0;
  transition: opacity 0.3s;
}
/* From uiverse.io by @alexmaracinaru */
.cta {
  border: none;
  background: none;
  margin-top: -30px;
}

.cta span {
  padding-bottom: 7px;
  letter-spacing: 4px;
  font-size: 10px;
  padding-right: 15px;
  text-transform: uppercase;
}

.cta svg {
  transform: translateX(-8px);
  transition: all 0.3s ease;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active svg {
  transform: scale(0.9);
}

.hover-underline-animation {
  position: relative;
  color: black;
  padding-bottom: 20px;
}

.hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1.5px;
  bottom: 0;
  left: 0;
  background-color: #000000;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.cta:hover .hover-underline-animation:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
<script>
import CoffeeMachineVue from "../components/CoffeeMachine.vue";

export default {
  data() {
    return {
      text: "",
      isRolling: false,
      isLogin: false,
      user: [],
    };
  },
  components: {
    CoffeeMachineVue,
  },
  methods: {
    loginButton() {
      this.isLogin = true;
      //改变store中的登录状态
      this.$store.commit("changeLoginStatus", true);
    },
    getUser() {
      this.$axios
        .get("http://localhost:8080/static/userinfo.json")
        .then((res) => {
          console.log(res.data);
          this.user = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    //从store获取isLogin登陆状态
    this.isLogin = this.$store.state.isLogin;
    this.getUser();
  },
};
</script>
