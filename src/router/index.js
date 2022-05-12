import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import PostPage from '@/pages/PostPage'
import AboutUs from '@/pages/AboutUs'
import PostIdPage from '@/pages/PostIdPage'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/posts',
            component: PostPage
        },
        {
            path: '/about',
            component: AboutUs
        },
        {
            path: '/posts/:id',
            component: PostIdPage
        }
    ]
})

export default router
