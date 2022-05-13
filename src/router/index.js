import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import PostPage from '@/pages/PostPage'
import AboutUs from '@/pages/AboutUs'
import PostIdPage from '@/pages/PostIdPage'
import PageNotFound from '@/pages/PageNotFound'
import PostPageWithStore from '@/pages/PostPageWithStore'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: MainPage},
        {path: '/posts', component: PostPage},
        {path: '/about', component: AboutUs},
        {path: '/posts/:id', component: PostIdPage},
        {path: '/:notFound(.*)', name: 'PageNotFound', component: PageNotFound},
        {path: '/store', component: PostPageWithStore}
    ]
})

export default router
