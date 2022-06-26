import {createRouter, createWebHistory} from 'vue-router'

import Contact from '../pages/Contact.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Index.vue'),
  },

  {
    path: "/products",
    name: "Products",
    component: () => import('../views/products/Index.vue'),
  },

  {
    path: "/products/category/:name",
    name: "ProductCategory",
    component: () => import('../views/products/CategoryWiseProducts.vue'),
    props: true,
  },
  
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: () => import('../views/products/Details.vue'),
    props: true,
  },

  {
    path: "/cart",
    name: "CartPage",
    component: () => import('../pages/CartPage.vue'),
  },

  {
    path: "/checkout",
    name: "Checkout",
    component: () => import('../pages/Checkout.vue'),
  },

  {
    path: "/about",
    name: "About",
    component: () => import('../pages/About.vue'),
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },

  {
    path: "/login",
    name: "Login",
    component: () => import('../pages/auth/Login.vue'),
  },

  {
    path: "/register",
    name: "Register",
    component: () => import('../pages/auth/Register.vue'),
  },

];

const router = createRouter({ history: createWebHistory(), routes });
export default router;