import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Cart from '../pages/Cart'

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     component: About
    // },
    {
        path: '/product',
        name: 'product',
        component: Product
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router