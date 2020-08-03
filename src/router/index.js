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
import BuildsCreate from "../views/BuildsCreate.vue";
import UsersShow from "../views/UsersShow.vue";
import BuildsEdit from "../views/BuildsEdit.vue";
import UsersEdit from "../views/UsersEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: "/users/me", name: "users-show", component: UsersShow
  },
  {
    path: "/builds/:id/edit", name: "builds-edit", component: BuildsEdit
  },
  {
    path: "/users/me/edit", name: "users-edit", component: UsersEdit
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
