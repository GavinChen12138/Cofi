<template>
  <div>
    <div style="height: 40px"></div>
    <v-stepper v-model="e13" vertical>
      <v-stepper-step step="1" complete> Name of step 1 </v-stepper-step>

      <v-stepper-content step="1">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e13 = 2"> Continue </v-btn>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-step step="2" complete> Name of step 2 </v-stepper-step>

      <v-stepper-content step="2">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e13 = 3"> Continue </v-btn>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-step :rules="[() => false]" step="3">
        Ad templates
        <small>Alert message</small>
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e13 = 4"> Continue </v-btn>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-step step="4"> View setup instructions </v-stepper-step>

      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e13 = 1"> Continue </v-btn>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<style>
.layout-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
<script>
export default {
  name: "HomeView",
  data() {
    return {
      e13: 1,
      Temp: "",
      sugar: "",
    };
  },
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
};
</script>
