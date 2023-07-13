import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import "./style.scss";
import App from "./App.vue";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(VueSweetalert2);

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.mount("#app");
