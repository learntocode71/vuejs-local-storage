import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

function guest(to, from, next) {
  if (localStorage.activeUser) {
    next({ name: "Dashboard" });
  } else next();
}

function guard(to, from, next) {
  if (localStorage.activeUser) {
    next();
  } else next({ name: "Login" });
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: guest,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: guard,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: guest,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: guest,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
