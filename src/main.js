import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue"; // @/ ->  src/
import router from "@/router";
import "@/assets/css/common.css";
import "@/assets/css/index.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(createPinia());

app.mount("#app");
