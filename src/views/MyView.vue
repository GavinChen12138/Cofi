<template>
  <div class="">
    <div style="height: 40px"></div>
    <button data-text="Awesome" class="button" style="background-color: black">
      <span class="actual-text">&nbsp;uiverse&nbsp;</span>
      <span class="hover-text" aria-hidden="true">&nbsp;uiverse&nbsp;</span>
    </button>
    <v-stepper v-model="e1" color="black" alt-labels>
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" color="#000000"
          >Name of step 1</v-stepper-step
        >

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2" color="#000000"
          >Name of step 2</v-stepper-step
        >

        <v-divider></v-divider>

        <v-stepper-step step="3" color="#000000">Name of step 3</v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>
<style lang="scss">
.layout-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.button {
  margin: 0;
  background: transparent;
  padding: 0;
  border: none;
}

/* button styling */
.button {
  --border-right: 6px;
  --text-stroke-color: rgba(255, 255, 255, 0.6);
  --animation-color: #37ff8b;
  --fs-size: 2rem;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);
}
/* this is the text, when you hover on button */
.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);
}
/* hover */
.button:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color));
}

/* From uiverse.io by @alexruix */
.card {
  height: 254px;
  width: 190px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 20px;
  box-shadow: 0 0 20px 8px #d0d0d0;
}

/*Image*/
.card-image {
  height: 100%;
  width: 100%;
  position: absolute;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: #0a3394;
  background: linear-gradient(to top, #0a3394, #4286f4);
}

/*Description */
.card-description {
  display: flex;
  position: absolute;
  gap: 1rem;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 70%;
  bottom: 0;
  border-radius: 1rem 1rem 0 0;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 1rem;
}

/*Text*/
.text-title {
  font-size: 1.4rem;
  font-weight: 700;
}

.text-body {
  font-size: 1rem;
  line-height: 150%;
}

/* Hover states */

.card:hover .card-description {
  transform: translateY(100%);
}
</style>
<script>
export default {
  data() {
    return {
      text: "",
      e1: 3,
    };
  },
  components: {},
};
</script>
