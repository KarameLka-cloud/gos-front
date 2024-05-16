import { createApp } from "vue";
import { createPinia } from "pinia";
import "./styles/reset.css";
import "./styles/normalize.css";
import "./styles/style.css";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

app.mount("#app");
