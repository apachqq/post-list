<template>
    <div class="navbar">
        <div @click="this.$router.push('/')">Post list</div>
        <div class="navbar__btns">
            <my-button @click="this.$router.push('/posts')">К постам</my-button>
            <my-button style="margin-left: 20px" @click="this.$router.push('/about')">О приложении</my-button>
            <my-button style="margin-left: 20px" @click="this.$router.push('/store')">store</my-button>
            <my-button style="margin-left: 20px" @click="this.$router.push('/login')">Авторизоваться</my-button>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
    .navbar {
        height: 50px;
        background-color: lightgray;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }

    .navbar__btns {
        margin-left: auto;
    }
</style>
