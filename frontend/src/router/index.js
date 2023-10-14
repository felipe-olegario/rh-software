// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/create-user',
        name: 'createUser',
        component: () => import(/* webpackChunkName: "home" */ '@/views/CreateUser.vue'),
      },
      {
        path: '/data-time/:cpf',
        name: 'ListTimeCard',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ListTimeCard.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
