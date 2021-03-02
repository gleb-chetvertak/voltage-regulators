import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const homeParams = (route) => ({
  slideId: Number(route.params.slideId),
});
const groupsPageParams = (route) => ({
  categoryId: Number(route.params.categoryId),
});
const singleProductPageParams = (route) => ({
  productId: Number(route.params.productId),
});

const routes = [
  {
    path: '/',
    name: 'Home',
    props: homeParams,
    component: Home,
  },
  {
    path: '/store',
    name: 'StorePage',
    component: () => import(/* webpackChunkName: "StorePage" */ '../views/StorePage.vue'),
  },
  {
    path: '/categories',
    name: 'CategoriesPage',
    component: () => import(/* webpackChunkName: "CategoriesPage" */ '../views/CategoriesPage.vue'),
  },
  {
    path: '/:categoryId/groups',
    name: 'GroupsPage',
    props: groupsPageParams,
    component: () => import(/* webpackChunkName: "GroupsPage" */ '../views/GroupsPage.vue'),
  },
  {
    path: '/config',
    name: 'ConfigPage',
    component: () => import(/* webpackChunkName: "ConfigPage" */ '../views/ConfigPage.vue'),
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: () => import(/* webpackChunkName: "CartPage" */ '../views/CartPage.vue'),
  },
  {
    path: '/compare',
    name: 'ComparePage',
    component: () => import(/* webpackChunkName: "ComparePage" */ '../views/ComparePage.vue'),
  },
  {
    path: '/product/:productId',
    name: 'SingleProductPage',
    props: singleProductPageParams,
    component: () => import(/* webpackChunkName: "SingleProductPage" */ '../views/SingleProductPage.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
