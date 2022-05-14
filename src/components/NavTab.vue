<template>
  <div class="header-title">{{ headerTitle }}</div>
  <nav class="tabbar" setActiveMenu="menu-1">
    <div>
      <input id="menu-1" type="radio" name="menu" checked />
      <label for="menu-1" @click="toOrder">
        <svg
          width="277px"
          height="416px"
          viewBox="0 0 277 416"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="currentColor"
        >
          <g
            id="页面-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="iPhone-13-Pro备份-4"
              transform="translate(-56.000000, -68.000000)"
              fill="currentColor"
            >
              <g id="编组" transform="translate(56.000000, 68.000000)">
                <polygon
                  id="矩形"
                  points="16 98 262 98 231.096686 416 46.9033144 416"
                ></polygon>
                <path
                  d="M9.19377766,56 L267.806222,56 C270.213755,56 272.279445,57.7157201 272.721295,60.0823599 L275.895181,77.0823599 C276.40198,79.7968794 274.612269,82.4082737 271.897749,82.9150724 C271.595136,82.9715701 271.287951,83 270.980109,83 L6.01989112,83 C3.25846737,83 1.01989112,80.7614237 1.01989112,78 C1.01989112,77.6921577 1.04832105,77.3849733 1.10481873,77.0823599 L4.27870527,60.0823599 C4.72055504,57.7157201 6.78624473,56 9.19377766,56 Z"
                  id="矩形"
                ></path>
                <path
                  d="M38.1832552,0 L239.816745,0 C243.594824,1.80574838e-14 246.857873,2.64309854 247.642377,6.33883123 L255,41 L255,41 L23,41 L30.357623,6.33883123 C31.1421265,2.64309854 34.4051755,2.47037881e-15 38.1832552,0 Z"
                  id="矩形"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <span>Coffee</span>
      </label>
      <input id="menu-2" type="radio" name="menu" />
      <label for="menu-2" @click="toPurchase">
        <svg
          width="137px"
          height="191px"
          viewBox="0 0 137 191"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="页面-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="iPhone-13-Pro备份-4"
              transform="translate(-112.000000, -370.000000)"
              fill="currentColor"
            >
              <path
                d="M239,370 C244.522847,370 249,374.477153 249,380 L249,551 C249,556.522847 244.522847,561 239,561 L122,561 C116.477153,561 112,556.522847 112,551 L112,380 C112,374.477153 116.477153,370 122,370 L239,370 Z M229.154545,517.572727 L131.154545,517.572727 C128.393122,517.572727 126.154545,519.811304 126.154545,522.572727 C126.154545,525.334151 128.393122,527.572727 131.154545,527.572727 L131.154545,527.572727 L229.154545,527.572727 C231.915969,527.572727 234.154545,525.334151 234.154545,522.572727 C234.154545,519.811304 231.915969,517.572727 229.154545,517.572727 L229.154545,517.572727 Z M229.154545,490.572727 L131.154545,490.572727 C128.393122,490.572727 126.154545,492.811304 126.154545,495.572727 C126.154545,498.334151 128.393122,500.572727 131.154545,500.572727 L131.154545,500.572727 L229.154545,500.572727 C231.915969,500.572727 234.154545,498.334151 234.154545,495.572727 C234.154545,492.811304 231.915969,490.572727 229.154545,490.572727 L229.154545,490.572727 Z M229.154545,463.572727 L131.154545,463.572727 C128.393122,463.572727 126.154545,465.811304 126.154545,468.572727 C126.154545,471.334151 128.393122,473.572727 131.154545,473.572727 L131.154545,473.572727 L229.154545,473.572727 C231.915969,473.572727 234.154545,471.334151 234.154545,468.572727 C234.154545,465.811304 231.915969,463.572727 229.154545,463.572727 L229.154545,463.572727 Z M229.154545,436.572727 L131.154545,436.572727 C128.393122,436.572727 126.154545,438.811304 126.154545,441.572727 C126.154545,444.334151 128.393122,446.572727 131.154545,446.572727 L131.154545,446.572727 L229.154545,446.572727 C231.915969,446.572727 234.154545,444.334151 234.154545,441.572727 C234.154545,438.811304 231.915969,436.572727 229.154545,436.572727 L229.154545,436.572727 Z M229.154545,409.572727 L131.154545,409.572727 C128.393122,409.572727 126.154545,411.811304 126.154545,414.572727 C126.154545,417.334151 128.393122,419.572727 131.154545,419.572727 L131.154545,419.572727 L229.154545,419.572727 C231.915969,419.572727 234.154545,417.334151 234.154545,414.572727 C234.154545,411.811304 231.915969,409.572727 229.154545,409.572727 L229.154545,409.572727 Z M180.672727,378.572727 C177.082876,378.572727 174.172727,381.482876 174.172727,385.072727 C174.172727,388.662578 177.082876,391.572727 180.672727,391.572727 C184.262578,391.572727 187.172727,388.662578 187.172727,385.072727 C187.172727,381.482876 184.262578,378.572727 180.672727,378.572727 Z"
                id="形状结合"
              ></path>
            </g>
          </g>
        </svg>
        <span>Purchase</span>
      </label>
      <input id="menu-3" type="radio" name="menu" />
      <label for="menu-3" @click="toMy">
        <svg
          width="126px"
          height="92px"
          viewBox="0 0 126 92"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="页面-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="iPhone-13-Pro备份-4"
              transform="translate(-31.000000, -325.000000)"
              fill="currentColor"
            >
              <g id="编组-2" transform="translate(31.000000, 325.000000)">
                <circle
                  id="椭圆形"
                  cx="62.3470149"
                  cy="20.3992537"
                  r="20.3992537"
                ></circle>
                <path
                  d="M125.268657,91.5447761 C125.268657,66.9071236 97.2263127,46.5447761 62.6343284,46.5447761 C28.042344,46.5447761 0,66.6919624 0,91.5447761 C0,91.5447761 125.268657,91.5447761 125.268657,91.5447761 Z"
                  id="椭圆形"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <span>My</span>
      </label>
      <span></span>
    </div>
  </nav>

  <!-- dribbble -->
  <a
    class="dribbble"
    href="https://dribbble.com/shots/6612066-Tab-Bar-active-animation"
    target="_blank"
    ><img
      src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
      alt=""
  /></a>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      headerTitle: "MENU",
      menu: [
        {
          name: "Home",
          icon: "home",
          path: "/",
        },
        {
          name: "Purchase",
          path: "/purchase",
        },

        {
          name: "My",
          path: "/my",
        },
      ],
    };
  },
  mounted() {
    this.$router.push("/");
  },
  methods: {
    toPurchase() {
      this.$router.push("/purchase");
      this.headerTitle = "PURCHASE";
    },
    toMy() {
      this.$router.push("/my");
      this.headerTitle = "MY";
    },
    toOrder() {
      this.$router.push("/");
      this.headerTitle = "MENU";
    },
  },
};
</script>

<style lang="scss" scoped>
.header-title {
  font-size: 40px;
  font-weight: bold;
  color: rgb(27, 27, 27);
  text-align: center;
  margin-bottom: 10px;
  font-family: $font-title;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background-image: linear-gradient(white, transparent);
}
.tabbar {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  font-family: $font-title;
  --icon-active: #275efe;
  --icon-inactive: #6c7486;
  --icon-hover: #99a3ba;
  --text: #e4ecfa;
  --circle: #e4ecfa;
  --background: #171c28;
  --shadow: rgba(18, 22, 33, 0.1);
  border-radius: 0 0 12px 12px;
  background: var(--background);
  width: 100%;
  height: 64px;
  padding: 0 12px;
  box-shadow: 0 8px 16px var(--shadow);
  & > div {
    display: flex;
    height: 100%;
    position: relative;
    label {
      flex: 0 0 33.33%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
      z-index: 1;
      svg,
      span {
        display: block;
        -webkit-backface-visibility: hidden;
        transition: transform 0.4s cubic-bezier(0.2, 0.64, 0.48, 1.12),
          opacity 0.4s ease, color 0.4s ease;
        transform: translateY(var(--y)) scale(var(--s));
      }
      svg {
        --y: 0;
        --s: 0.84;
        width: 24px;
        height: 24px;
        margin: auto;
        color: var(--icon-inactive);
        transform-origin: 50% 50%;
      }
      span {
        --y: -8px;
        --s: 0.92;
        font-size: 10px;
        font-weight: 500;
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        bottom: 0;
        opacity: 0;
        color: var(--text);
        transform-origin: 50% 0;
      }
      &:hover {
        svg {
          color: var(--icon-hover);
        }
      }
      &:active {
        svg {
          --s: 0.76;
        }
      }
    }
    input {
      display: none;
      &:nth-of-type(1) {
        &:checked {
          & + label + input + label + input + label + span {
            --x: 0;
          }
        }
      }
      &:nth-of-type(2) {
        &:checked {
          & + label + input + label + span {
            --x: 100%;
          }
        }
      }
      &:nth-of-type(3) {
        &:checked {
          & + label + span {
            --x: 200%;
          }
        }
      }
      &:checked {
        & + label {
          svg {
            --y: -24px;
            --s: 1;
            color: var(--icon-active);
          }
          span {
            --s: 1;
            --y: -14px;
            opacity: 1;
          }
        }
      }
    }
    & > span {
      --x: 0;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 33.33%;
      transition: transform 0.4s cubic-bezier(0.2, 0.64, 0.48, 1.12);
      transform: translateX(var(--x));
      -webkit-backface-visibility: hidden;
      &:after {
        content: "";
        width: 44px;
        height: 44px;
        display: block;
        border-radius: 50%;
        background: var(--circle);
        position: absolute;
        left: 50%;
        top: 0;
        box-shadow: 0 2px 8px var(--shadow);
        margin: -14px 0 0 -22px;
      }
    }
  }
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: inherit;
  &:before,
  &:after {
    box-sizing: inherit;
  }
}

// Center & dribbble

.dribbble {
  position: fixed;
  display: block;
  right: 20px;
  bottom: 20px;
  img {
    display: block;
    height: 28px;
  }
}
</style>
