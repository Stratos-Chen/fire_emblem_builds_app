import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Builds from "../views/BuildsIndex.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Heroes from "../views/HeroesIndex.vue";
import Skills from "../views/SkillsIndex.vue";
import HeroesShow from "../views/HeroesShow.vue";
import BuildsShow from "../views/BuildsShow.vue";
import CurrentUser from "../views/UsersShow.vue";
import BuildsCreate from "../views/BuildsCreate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/builds", name: "builds-index", component: Builds
  },
  {
    path: "/signup", name: "signup", component: Signup
  },
  {
    path: "/login", name: "login", component: Login
  },
  {
    path: "/logout", name: "logout", component: Logout
  },
  {
    path: "/heroes", name: "heroes-index", component: Heroes
  },
  {
    path: "/skills", name: "skills-index", component: Skills
  },
  {
    path: "/heroes/:name", name: "heroes-show", component: HeroesShow
  },
  {
    path: "/builds/new", name: "builds-new", component: BuildsCreate
  },
  {
    path: "/builds/:id", name: "builds-show", component: BuildsShow
  },
  {
    path: "/users/:id", name: "users-show", compoment: CurrentUser
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
