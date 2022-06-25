import { createApp } from "vue";
import App from "./App.vue";

import BootstrapVue3 from "bootstrap-vue-3";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "bootstrap/dist/js/bootstrap.min.js";

import router from "./router";

import store from "./store";

createApp(App).use(router).use(store).use(BootstrapVue3).mount("#app");
