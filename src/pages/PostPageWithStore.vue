<template>
    <div>

        <!--        <h1>{{ $store.state.isAuth ? 'Пользователь авторизован' : 'Авторизуйтесь, чтобы использовать сервис'}}</h1>-->
        <!--        <h1>{{ $store.getters.doubleLikes }}</h1>-->
        <!--        <div>-->
        <!--            <my-button @click="this.$store.commit('incrementLikes')">Лайк</my-button>-->
        <!--            <my-button @click="this.$store.commit('decrementLikes')">Дизлайк</my-button>-->
        <!--        </div>-->
        <h1>Страница с постами</h1>
        <!--        <my-input-->
        <!--                v-model="searchQuery"-->
        <!--                placeholder="Поиск.."-->
        <!--                v-focus-->
        <!--        ></my-input>-->
        <div class="app_btns">
            <my-button
                    @click="showDialog"
            >
                Создать пост
            </my-button>
            <!--            <my-select-->
            <!--                    v-model="selectedSort"-->
            <!--                    :options="sortOptions"-->
            <!--            ></my-select>-->
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form
                    @create="createPost"
            ></post-form>
        </my-dialog>
        <post-list
                :posts="sortedAndSearchedPosts"
                @remove="removePost"
                v-if="!isPostsLoading"
        ></post-list>
        <div v-else>
            <the-loader></the-loader>
        </div>
        <div v-intersection="loadMorePosts"></div>
        <div class="page_wrapper">
            <div
                    v-for="pageNumber in totalPages"
                    :key="pageNumber"
                    class="page"
                    :class="{'current-page': page === pageNumber}"
                    @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
        </div>
    </div>
</template>

<script>
    import PostForm from '@/components/PostForm'
    import PostList from '@/components/PostList'
    import axios from 'axios'
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

    export default {
        data() {
            return {
                dialogVisible: false
            }
        },
        methods: {
            ...mapMutations({
                setPage: 'post/setPage'
            }),
            ...mapActions({
                loadMorePosts: 'post/loadMorePosts',
                fetchPosts: 'post/fetchPosts'
            }),
            createPost(post) {
                this.posts.push(post)
                this.dialogVisible = false
            },
            removePost(post) {
                this.posts = this.posts.filter(p => p.id !== post.id)
            },
            showDialog() {
                this.dialogVisible = true
            }
        },
        mounted() {
            this.fetchPosts()
        },
        computed: {
            ...mapState({
                posts: state => state.post.posts,
                isPostsLoading: state => state.post.isPostsLoading,
                selectedSort: state => state.post.selectedSort,
                searchQuery: state => state.post.searchQuery,
                page: state => state.post.page,
                limit: state => state.post.limit,
                totalPages: state => state.post.totalPages,
                sortOptions: state => state.post.sortOptions
            }),
            ...mapGetters({
                sortedPosts: 'post/sortedPosts',
                sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
            })
        },
        watch: {
            // page() {
            //     this.fetchPosts()
            // }
            // selectedSort(newValue) {
            //     this.posts.sort((post1, post2) => {
            //         return post1[newValue]?.localeCompare(post2[newValue])
            //     })
            // }
        },
        components: {PostForm, PostList}
    }
</script>

<style>
    .app_btns {
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
    }

    .page_wrapper {
        display: flex;
        margin-top: 15px;
    }

    .page {
        border: 1px solid black;
        padding: 10px;
    }

    .current-page {
        border: 2px solid teal;
    }
</style>
