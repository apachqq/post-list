<template>
    <div class="card">
        <h2>Авторизуйтесь</h2>
        <form>
            <div class="input">
                <my-input type="email" placeholder="Введите email"></my-input>
            </div>
            <div class="input">
                <my-input type="password" placeholder="Введите пароль"></my-input>
            </div>
            <my-button style="margin-top: 20px;">Авторизуйтесь</my-button>
        </form>
    </div>
</template>

<script>
</script>

<style scoped>
    .card {
        text-align: center;
    }
</style>
