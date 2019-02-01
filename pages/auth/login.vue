<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card-signin my-5">
          <div class="card-body" style="margin-top: 100px;">
            <h5 class="card-title text-center" style="color:#7b7b7b;">Sign In</h5>
            <form @submit.prevent="login" @keydown="form.onKeydown($event)" class="form-signin">
              <div class="text-danger" v-if="form.errors.has('email')" v-html="form.errors.get('email')"/>

              <div class="form-label-group">
                <input v-model="form.email" name="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
              </div>

              <div class="form-label-group">
                <input v-model="form.password" name="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
              </div>

              <center>
                <br>
                <v-button id="btnLogin" style="display: inline-block; width: initial;" class="btn emphasize-1 btn-primary btn-block text-uppercase" :loading="form.busy">
                  Sign in
                </v-button>
              </center>
              <p class="text-center text-secondary"><small>Lorem ipsum dolor sit amet</small></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'

export default {
  layout: 'no-layout',
  data: () => ({
    form: new Form({
        email: '',
        password: '',
    }),
    remember: false,
  }),
  middleware: 'guest',
  methods: {
      async login(){
          const {data} = await this.form.post('/api/user/login').catch(err => {
            console.log(err)
              if(error.response.data.error == "Already authenticated."){
                  // window.location.href = '/home'
              }
          })

          this.$store.commit('setAuth', data)

          // fetch user
          await this.$store.dispatch('fetchUser')
          // redirect to user dashboard
          this.$router.push('/' )
      }
  },
  mounted(){

    document.getElementById("inputEmail").onkeypress = function() {
      checkInputFields();
    }
    document.getElementById("inputPassword").onkeypress = function() {
      checkInputFields();
    }

    function checkInputFields(){
      var checkEmailForm = document.getElementById("inputEmail").value;
      var checkPasswordForm = document.getElementById("inputPassword").value;
      
      if (checkEmailForm == "" || checkPasswordForm == ""){
        $("#btnLogin").prop('disabled', true);
      } else {
        $("#btnLogin").prop('disabled', false);
      }

    }

  }
}
</script>

<style>
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: .75rem;
}
</style>


<style lang="scss" scoped>

.card-signin {
  text-align: left;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);

  .form-control{
    border: none;
    border-bottom: 1px solid #d7d7d7;
    border-radius: 0px;
    outline: none;
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 15px;

    &:focus{
      box-shadow: none;
      border-color: #8c8c8c;
    }
  }
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)!important;
  background: white;
}
</style>
