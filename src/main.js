import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue"; // @/ ->  src/
import router from "@/router";
import "@/assets/css/common.css";
import "@/assets/css/index.css";
const app = createApp(App);
app.use(router);
app.use(createPinia());

app.mount("#app");
