// import "./assets/main.css";
import "./assets/scss/main.scss";
import { http, path } from "./api";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.provide("http", http);
app.provide("path", path);

app.mount("#app");
