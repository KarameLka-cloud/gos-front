import { createApp } from "vue";
import { createPinia } from "pinia";
import "./styles/reset.css";
import "./styles/normalize.css";
import "./styles/style.css";
import App from "./App.vue";
import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

app.mount("#app");
