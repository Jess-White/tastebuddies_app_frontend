import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import About from "../views/About.vue";
import CuisinesIndex from "../views/CuisinesIndex.vue";
import CuisinesShow from "../views/CuisinesShow.vue";
import Dashboard from "../views/Dashboard.vue";
import MenuItemsIndex from "../views/MenuItemsIndex.vue";
import MenuItemsShow from "../views/MenuItemsShow.vue";
import RestaurantsIndex from "../views/RestaurantsIndex.vue";
import RestaurantsShow from "../views/RestaurantsShow.vue";
import MenuItemsSwipe from "../views/MenuItemsSwipe.vue";


Vue.use(VueRouter)

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
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/about", name: "about", component: About },
  { path: "/cuisines", name: "cuisines", component: CuisinesIndex },
  { path: "/cuisines/:id", name: "cuisines-show", component: CuisinesShow },
  { path: "/dashboard", name: "dashboard", component: Dashboard },
  { path: "/menu_items", name: "menu-items", component: MenuItemsIndex },
  { path: "/menu_items/:id", name: "menu-items-show", component: MenuItemsShow },
  { path: "/restaurants/:id", name: "restaurants-show", component: RestaurantsShow },
  { path: "/restaurants", name: "restaurants", component: RestaurantsIndex },
  { path: "/menu_items_swipe/", name: "menu-items-swipe", component: MenuItemsSwipe }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
