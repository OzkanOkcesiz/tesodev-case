import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/listpage',
      name: 'listpage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListPage.vue')
    },
    {
      path: '/addlinkpage',
      name: 'addlinkpage',
      component: () => import('../views/AddLinkPage.vue')
    }
  ]
})

export default router
