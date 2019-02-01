<template>
    <div class="container">
        <button @click="show">asd</button>
        <form @submit.prevent="login" @keydown="form.onKeydown($event)">
          <div class="absolute-center w-100 p-3" style="max-width:400px;">
            <div class="form-group">
                <label>Email</label>
                <input class="form-control" v-model="form.email">
            </div>
            <div>
                <label>Password</label>
                <input class="form-control" type="password" v-model="form.password">
            </div>
            <button type="submit">
              Login
            </button>
          </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    import Form from 'vform'
    export default {
        data: () => ({
            form: new Form({
                email: '',
                password: ''
            })
        }),
        methods: {
            login(){
                const {data} = this.form.post('/api/login')
                this.$store.dispatch('auth/saveToken', {
                    token: data.token
                })
            },
            show(){
                const {data} = axios({
                    method: 'get',
                    url: '/api/details'
                })
                console.log('Component mounted.')
            }
        },
        mounted() {
        }
    }
</script>
