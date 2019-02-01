<template>
  <div>
    <div class="container">
        <div class="text-center">
            <strong>Forgot password?</strong>
            <div>Please enter your email address. We send you an email to reset your password.</div>
        </div>
        <alert-success :dismissible="false" :form="form" :message="status"/>
        <form @submit.prevent="submit" v-if="!status" @keydown="form.onKeydown($event)">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label>Email</label>
                        <input class="form-control" type="email" name="email" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }">
                        <has-error :form="form" field="email"/>
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
            email: '',
        }),
        remember: false,
    }),
    middleware: 'guest',
    layout: 'basic',
    methods: {
        async submit(){
            const {data} = await this.form.post('/api/password/email')

            if(data.status == 'success'){
                this.status = data.message
            }
        }
    }
}
</script>