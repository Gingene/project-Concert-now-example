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

// 請在選項式API啟用 (如何使用可以看./src/components/TestComponent.vue)
// inject: ["http", "path"]
// 在選項上新增上面的語法後面就可以透過this.path取得物件了
app.mount("#app");
