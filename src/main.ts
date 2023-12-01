import { createApp } from 'vue';
import './assets/style/index.scss';
import App from './App.vue';
import router from '@/router';
import store from './store/index';
import '@/permission';
const app = createApp(App);
app.use(store).use(router).mount('#app');
