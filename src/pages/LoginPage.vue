<template>
    <div class="card">
        <h2>Авторизуйтесь</h2>
        <form @submit.prevent="submit">
            <div class="input">
                <my-input type="email" placeholder="Введите email" v-model.trim="email"></my-input>
            </div>
            <div class="input">
                <my-input type="password" placeholder="Введите пароль" v-model.trim="password"></my-input>
            </div>
            <my-button style="margin-top: 20px;">Авторизуйтесь</my-button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
            isValid() {
                return this.email !== '' && this.password !== ''
            }
        },
        methods: {
            submit() {
                if (this.isValid) {
                    this.$store.commit('login')
                    this.$router.push('/')
                }
            }
        }
    }
</script>

<style scoped>
    .card {
        text-align: center;
    }
</style>
