import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import FoodsView from './FoodsView.vue';
import MealsView from './MealsView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: MealsView,
  },
  {
    path: '/foods',
    name: 'Foods',
    component: FoodsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
