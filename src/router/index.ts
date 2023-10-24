import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/listpage',
      name: 'ListPage',
      component: () => import('../views/ListPage.vue'),
    },
    {
      path: '/addlinkpage',
      name: 'AddLinkPage',
      component: () => import('../views/AddLinkPage.vue'),
    },
  ],
});

export default router;
