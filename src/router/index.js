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
          component: () => import('@/views/Home/index') // 主页面
        },
        {
          path: '/type',
          name: 'type',
          //路由懒加载
          component: () => import('@/views/Type/index') // 分类页面
        },
        {
          path: '/shop',
          name: 'shop',
          //路由懒加载
          component: () => import('@/views/Shop/index') // 购物车页面
        },
        {
          path: '/user',
          name: 'user',
          //路由懒加载
          component: () => import('@/views/User/index') // 用户页面
        },
        {
          path: '/search',
          name: 'search',
          //路由懒加载
          component: () => import('@/views/Search')
        }
    ]
  },
  {
    path:'/searchResult',
    component:()=> import ('@/views/Result'),
    name:'result'
  }
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