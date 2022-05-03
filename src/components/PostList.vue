<template>
    <div>
        <h3>Список постов</h3>
        <post-item
                v-for="post in posts"
                :post="post"
        ></post-item>
    </div>
</template>

<script>
    import PostItem from '@/components/PostItem'

    export default {
        props: {
            posts: {
                type: Array,
                required: true
            }
        },
        components: {PostItem}
    }
</script>

<style scoped>
    .post {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }
</style>
