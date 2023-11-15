import { createApp } from 'vue'
import './assets/style/common.scss'
import App from './App.vue'
import router from "@/router"
import { createPinia } from "pinia";
const app = createApp(App);
app
  .use(createPinia())
  .use(router)
  .mount("#app");
