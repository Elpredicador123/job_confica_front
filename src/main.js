import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axiosInstance from 'axios'
import i18n from "./i18n";
import store from "@/state/store";
import { vMaska } from "maska";
import VueApexCharts from "vue3-apexcharts";
import CKEditor from "@ckeditor/ckeditor5-vue";
import BootstrapVueNext from "bootstrap-vue-next";
import VueSweetalert2 from 'vue-sweetalert2';
import "simplebar";

import { initFirebaseBackend } from "./helpers/firebase/authUtils";

import { configureFakeBackend } from "./helpers/fakebackend/fake-backend";
import 'sweetalert2/dist/sweetalert2.min.css';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTId,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPId,
  measurementId: process.env.VUE_APP_MEASUREMENTID
};

if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
  initFirebaseBackend(firebaseConfig);
} else if (process.env.VUE_APP_DEFAULT_AUTH === "fakebackend") {
  configureFakeBackend();
}

import "@/assets/scss/app.scss";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

const  app =createApp(App)
app.config.globalProperties.$http = axiosInstance; // Provee Axios globalmente
// COLOCAR LA URL DE LA API en app
//app.config.globalProperties.$apiURL = 'http://localhost:8000/api/';
app.config.globalProperties.$apiURL = 'http://comfica_back.test:8084/api/';



  app.use(store)
  .use(router)
  .use(VueApexCharts)
  .use(BootstrapVueNext)
  .use(VueSweetalert2)
  .use(i18n)
  .directive("maska", vMaska)
  .use(CKEditor)
  .mount("#app");


