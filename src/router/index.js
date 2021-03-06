import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Index,
        children: [{
                path: '',
                name: 'home.',
                //路由懒加载
                component: () =>
                    import ('@/views/Home/index') // 主页面
            },
            {
                path: '/type',
                name: 'type',
                //路由懒加载
                component: () =>
                    import ('@/views/Type/index') // 分类页面
            },
            {
                path: '/shop',
                name: 'shop',
                //路由懒加载
                component: () =>
                    import ('@/views/Shop/index') // 购物车页面
            },
            {
                path: '/user',
                name: 'user',
                //路由懒加载
                component: () =>
                    import ('@/views/User/login') // 用户页面
            },
            {
                path: '/search',
                name: 'search',
                //路由懒加载
                component: () =>
                    import ('@/views/Search')
            },
            {
                path: '/type/Game Category',
                name: 'Game Category',
                //路由懒加载
                component: () =>
                    import ('@/views/Type/Game Category')
            },
            {
                path: '/type/Home life',
                name: 'Home life',
                //路由懒加载
                component: () =>
                    import ('@/views/Type/Home life')
            },
            {
                path: '/type/Hand-made model',
                name: 'Hand-made model',
                //路由懒加载
                component: () =>
                    import ('@/views/Type/Hand-made model')
            },
            {
                path: '/type/Digital peripherals',
                name: 'Digital peripherals',
                //路由懒加载
                component: () =>
                    import ('@/views/Type/Digital peripherals')
            },
            {
                path: '/type/Accessories pendant',
                name: 'Accessories pendant',
                //路由懒加载
                component: () =>
                    import ('@/views/Type/Accessories pendant')
            },
            {
                path: '/type/Clothing',
                name: 'Clothing',
                //路由懒加载
                component: () =>
                    import ('@/views/Type/Clothing')
            },
            {
                path: '/type/Book stationery',
                name: 'Book stationery',
                //路由懒加载
                component: () =>
                    import ('@/views/Type/Book stationery')
            },
            {
                path: '/User/User',
                name: 'User',
                //路由懒加载
                component: () =>
                    import ('@/views/User/User')
            },
            {
                path: '/User/UserInfo',
                name: 'UserInfo',
                //路由懒加载
                component: () =>
                    import ('@/views/User/UserInfo')
            },
            {
                path: '/Shop/Order',
                name: 'Order',
                //路由懒加载
                component: () =>
                    import ('@/views/Shop/Order')
            },
            {
                path: '/User/coupon',
                name: 'coupon',
                //路由懒加载
                component: () =>
                    import ('@/views/User/coupon')
            },
            {
                path: '/User/address',
                name: 'address',
                //路由懒加载
                component: () =>
                    import ('@/views/User/address')
            },
            {
                path: '/User/Favorite',
                name: 'address',
                //路由懒加载
                component: () =>
                    import ('@/views/User/Favorite')
            },
            {
                path: '/User/Account security',
                name: 'Account security',
                //路由懒加载
                component: () =>
                    import ('@/views/User/Account security')
            },
            {
                path: '/User/Feedback',
                name: 'Feedback',
                //路由懒加载
                component: () =>
                    import ('@/views/User/Feedback')
            },
        ]
    },
    {
        path: '/searchResult/:name',
        component: () =>
            import ('@/views/Shop/searchResult'),
        name: 'searchResult'
    },
    {
        path: '/shopInfo',
        component: () =>
            import ('@/views/Shop/shopInfo'),
        name: 'shopInfo'
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