<template>
    <the-navbar></the-navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import TheNavbar from '@/components/TheNavbar'

    export default {
        components: {TheNavbar}
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
