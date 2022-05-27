<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input
                v-model="searchQuery"
                placeholder="Поиск.."
                v-focus
        ></my-input>
        <div class="app_btns">
            <my-button>Создать пост</my-button>
            <my-select
                    v-model="selectedSort"
                    :options="sortOptions"
            ></my-select>
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form></post-form>
        </my-dialog>
        <post-list
                :posts="sortedAndSearchedPosts"
                v-if="!isPostsLoading"
        ></post-list>
        <div v-else>
            <the-loader></the-loader>
        </div>
    </div>
</template>

<script>
    import PostForm from '@/components/PostForm'
    import PostList from '@/components/PostList'
    import axios from 'axios'
    import {ref} from 'vue'
    import { usePosts } from '@/hooks/usePosts'
    import useSortedPosts from '@/hooks/useSortedPosts'
    import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts'

    export default {
        data() {
            return {
                dialogVisible: false,
                sortOptions: [
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]
            }
        },
        setup(props) {
            const {posts, totalPages, isPostsLoading} = usePosts(10)
            const {sortedPosts, selectedSort} = useSortedPosts(posts)
            const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

            return {
                posts,
                totalPages,
                isPostsLoading,
                sortedPosts,
                selectedSort,
                searchQuery,
                sortedAndSearchedPosts
            }
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
