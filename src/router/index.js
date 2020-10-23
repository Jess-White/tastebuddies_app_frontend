import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import About from "../views/About.vue";
import CuisinesIndex from "../views/CuisinesIndex.vue";
import CuisinesShow from "../views/CuisinesShow.vue";
import MenuItemsIndex from "../views/MenuItemsIndex.vue";
import MenuItemsShow from "../views/MenuItemsShow.vue";
import RestaurantsIndex from "../views/RestaurantsIndex.vue";
import RestaurantsShow from "../views/RestaurantsShow.vue";


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'cuisines', component: CuisinesIndex },
  { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/about", name: "about", component: About },
  { path: "/cuisines/:id", name: "cuisines-show", component: CuisinesShow },
  { path: "/menu_items", name: "menu-items", component: MenuItemsIndex },
  { path: "/menu_items/:id", name: "menu-items-show", component: MenuItemsShow },
  { path: "/restaurants/:id", name: "restaurants-show", component: RestaurantsShow },
  { path: "/restaurants", name: "restaurants", component: RestaurantsIndex }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
