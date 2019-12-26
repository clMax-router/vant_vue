import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
        {
          path: '',
          name: 'home.',
          //路由懒加载
          component: () => import('@/views/Home/index')
        },
        {
          path: '/type',
          name: 'type',
          //路由懒加载
          component: () => import('@/views/Type/index')
        },
        {
          path: '/shop',
          name: 'shop',
          //路由懒加载
          component: () => import('@/views/Shop/index')
        },
        {
          path: '/user',
          name: 'user',
          //路由懒加载
          component: () => import('@/views/User/index')
        }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router