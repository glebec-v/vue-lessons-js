import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/pages/HelloWorld'

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/users',
            component: () => import('@/pages/userList')
        },
        {
            path: '/users/:userId',
            component: () => import('@/pages/userEdit')
        },
        {
            path: '/add',
            component: () => import('@/pages/userAdd')
        },
        {
            path: '/users-phones',
            component: () => import('@/pages/userPhoneBook')
        }
    ]
})
