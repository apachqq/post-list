<template>
    <div>
        <h3>Список постов</h3>
        <transition-group name="post-list">
            <post-item
                    v-for="post in posts"
                    :post="post"
                    :key="post.id"
                    @remove="$emit('remove', post)"
            ></post-item>
        </transition-group>
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
    .post-list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .post-list-enter-active,
    .post-list-leave-active {
        transition: all 0.4s ease;
    }
    .post-list-enter-from,
    .post-list-leave-to {
        opacity: 0;
        transform: translateX(130px);
    }
</style>
