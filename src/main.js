import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/base.css";
import "./assets/main.css";

const app = createApp(App);

//plugins
app.use(createPinia());
app.use(router);

//mount
app.mount("#app");
