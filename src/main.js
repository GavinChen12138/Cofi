import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import DrinkCard from "./components/DrinkCard.vue";
import NavTab from "./components/NavTab.vue";

const app = createApp(App);
app.component("drink-card", DrinkCard);
app.component("nav-tab", NavTab);
app.use(router);

app.mount("#app");
