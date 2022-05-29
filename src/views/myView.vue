<template>
  <div class="card" style="margin-top: 50px">
    <div class="layout-center">
      <div>
        <img class="user-avatar" :src="user.avatar" alt="" />
      </div>
      <div class="user-info-layout">
        <div class="user-info-layout-name">{{ user.name }}</div>
        <div class="user-info-layout-level">{{ user.level }}</div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="level-progress-layout">
      <div class="level-progress-text">
        升级至下一级还需{{ user.cupnumber }}杯
      </div>
      <!--v-for输出10-user.cupnumber 杯的svg-->
      <div class="level-progress-svggroup" style="">
        <svg
          width="30px"
          height="30px"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        avatar: "src/assets/images/Pic1.png",
        name: "Gavin Chen",
        level: "Lv.2",
        cupnumber: "3",
      },
      currentColor: "black",
    };
  },
};
</script>

<style lang="scss">
.card {
  margin: 10px;
  padding: 20px;
  box-shadow: $box-shadow-common;
  border-radius: 0.5rem;
  font-family: $font-title;
}
.layout-center {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.user-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.user-info-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-left: 10px;
  margin-top: -10px;
}
.user-info-layout-name {
  font-size: 2.5rem;
  font-weight: bold;
}
.user-info-layout-level {
  font-size: 1.5rem;
}
.level-progress-text {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>