import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/pages/HelloWorld'
import Users from '@/pages/userList'
import Edit from '@/pages/userEdit'
import Add from '@/pages/userAdd'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/users',
            component: Users
        },
        {
            path: '/edit',
            component: Edit
        },
        {
            path: '/add',
            component: Add
        }
    ]
})
