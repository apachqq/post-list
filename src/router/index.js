import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import PostPage from '@/pages/PostPage'
import AboutUs from '@/pages/AboutUs'
import PostIdPage from '@/pages/PostIdPage'
import PageNotFound from '@/pages/PageNotFound'
import PostPageWithStore from '@/pages/PostPageWithStore'
import LoginPage from '@/pages/LoginPage'
import index from '@/store'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'MainPage', component: MainPage},
        {path: '/posts', name: 'PostPage', component: PostPage},
        {path: '/about', name: 'AboutUs', component: AboutUs},
        {path: '/posts/:id', name: 'PostIdPage', component: PostIdPage},
        {path: '/:notFound(.*)', name: 'PageNotFound', component: PageNotFound},
        {path: '/store', name: 'PostPageWithStore', component: PostPageWithStore},
        {path: '/login', name: 'LoginPage', component: LoginPage}
    ]
})

router.beforeEach((to, from, next) => {
    if (!index.state.isAuth && to.name === 'PostPage') {
        alert('Чтобы получить доступ к списку постов, пожалуйста, авторизуйтесь')
        next('/login')
    } else {
        next()
    }
})

export default router
