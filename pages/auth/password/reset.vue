<template>
  <div>
    <div class="container">
        <div class="text-center">
            <strong>Password Reset</strong>
            <div>Fill password and confirm password.</div>
        </div>
        <alert-success :dismissible="false" :form="form" :message="status"/>
        <form v-if="!status" @submit.prevent="submit" @keydown="form.onKeydown($event)">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password" v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }">
                        <has-error :form="form" field="password"/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password_confirmation" v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
                        <has-error :form="form" field="password_confirmation"/>
                    </div>
                </div>
            </div>
            <v-button :loading="form.busy">
                Submit
            </v-button>
        </form>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
export default {
    data: () => ({
        status: '',
        form: new Form({
            token: '',
            email: '',
            password: '',
            password_confirmation: ''
        }),
        remember: false,
    }),
    middleware: 'guest',
    layout: 'basic',
    methods: {
        async submit(){
            const {data} = await this.form.post('/api/password/reset')

            if(data.status == 'success'){
                this.status = data.message
                console.log(this.status)
            }

            // // save token
            // this.$store.dispatch('saveToken', {
            //     token: data.token,
            //     remember: true
            // })

            // // fetch user
            // await this.$store.dispatch('fetchUser')

            // // redirect to user dashboard
            // this.$router.push({ name: 'dashboard' })
        }
    },
    created(){
        this.form.email = this.$route.query.email
        this.form.token = this.$route.params.token
    }
}
</script>