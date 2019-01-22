<template>
  <section class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card-signin my-5">
          <div class="card-body" style="margin-top: 100px;">
            <h5 class="card-title text-center" style="color:#7b7b7b;">Sign In</h5>
            <router-link :to="{ name: 'index', params: {} }">Back to index</router-link>
            <form class="form-signin">
              <!-- <div class="text-danger" v-if="form.errors.has('email')" v-html="form.errors.get('email')"/> -->

              <div class="form-label-group">
                <input name="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
              </div>

              <div class="form-label-group">
                <input name="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
              </div>

              <center>
                <br>
                <button id="btnLogin" style="display: inline-block; width: initial;" class="btn emphasize-1 btn-primary btn-block text-uppercase">
                  Sign in
                </button>
              </center>
              <p class="text-center text-secondary"><small>Lorem ipsum dolor sit amet</small></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'isLoggedOut',
  methods: {
    postLogin() {
      setTimeout(() => { // we simulate the async request with timeout.
        const auth = {
          accessToken: 'someStringGotFromApiServiceWithAjax'
        }
        this.$store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        this.$router.push('/')
      }, 1000)
    }
  }
}
</script>

<style scoped>
</style>
