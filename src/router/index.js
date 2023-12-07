import Vue from "vue";
import VueRouter from "vue-router";
import AddLocation from "../views/AddLocation.vue";
import WeatherNow from "../views/WeatherNow.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AddLocation",
    component: AddLocation,
  },
  {
    path: "/",
    name: "WeatherNow",
    component: WeatherNow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
