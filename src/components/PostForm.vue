<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <my-input
                v-focus
                v-model.trim="post.title"
                type="text"
                placeholder="Название"
        ></my-input>
        <my-input
                v-model.trim="post.body"
                type="text"
                placeholder="Описание"
        ></my-input>
        <my-button
                style="align-self: flex-end; margin-top: 15px;"
                @click="createPost"
        >Создать
        </my-button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost() {
                if (this.post.title !== '' && this.post.body !== '') {
                    this.post.id = Date.now()
                    this.$emit('create', this.post)
                    this.post = {
                        title: '',
                        body: ''
                    }
                } else {
                    alert('Введите название и описание поста')
                }
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }
</style>
