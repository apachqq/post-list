import { createStore } from 'vuex'
import { postModule } from '@/store/postModule'

export default createStore({
    state: {
        isAuth: false
    },
    getters: {},
    mutations: {
        login(state) {
            state.isAuth = true
        }
    },
    actions: {},
    modules: {
        post: postModule
    }
})
