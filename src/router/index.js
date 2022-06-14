import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Index.vue';
import Products from '../views/products/Index.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/products",
    name: "Products",
    component: Products,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },

];

const router = createRouter({ history: createWebHistory(), routes });
export default router;