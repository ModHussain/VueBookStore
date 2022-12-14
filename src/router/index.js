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
      path: '/addBook',
      name: 'Add Book',
      component: () => import('../components/createNewBook.vue')
    },
    {
      path: '/getBooks',
      name: 'Get Books',
      component: () => import('../components/getBooks.vue')
    },
    {
      path: '/getActivity',
      name: 'Get Activies',
      component: () => import('../components/recentAction.vue')
    }
  ]
})

export default router;
