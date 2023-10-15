// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    meta: {
      disableCache: true
    },
    children: [
      {
        path: '/data-time/:cpf',
        name: 'ListTimeCard',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ListTimeCard.vue'),
      }
    ],
  },
  {
    path: '/create-user',
    name: 'createUser',
    component: () => import(/* webpackChunkName: "home" */ '@/views/CreateUserView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
