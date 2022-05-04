<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <my-button
                @click="showDialog"
                style="margin: 15px 0px;"
        >
            Создать пост</my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form
                    @create="createPost"
            ></post-form>
        </my-dialog>
        <post-list
                :posts="posts"
                @remove="removePost"
        ></post-list>
    </div>
</template>

<script>
    import PostForm from '@/components/PostForm'
    import PostList from '@/components/PostList'
    import MyDialog from "@/components/UI/MyDialog";

    export default {
        data() {
            return {
                posts: [
                    {id: 1, title: 'JavaScript', body: 'Описание поста'},
                    {id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
                    {id: 3, title: 'JavaScript 3', body: 'Описание поста 3'}
                ],
                dialogVisible: false
            }
        },
        methods: {
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
        components: {MyDialog, PostForm, PostList}
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .app {
        padding: 20px;
    }
</style>
