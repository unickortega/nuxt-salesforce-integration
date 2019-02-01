import axios from 'axios'
import Vuex from 'vuex'

const cookieparser = process.server ? require('cookieparser') : undefined

import Cookies from 'js-cookie'

export const state = () => ({
  auth: null,
  user: null
})

export const getters = {
  auth: state => state.auth ? state.auth : Cookies.get('auth'),
  user: state => state.user
}

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
    Cookies.set('auth', auth, { expires: true ? 365 : null })
  },
  setUser(state, user){
    state.user = user
  },
  logout(state){
    state.auth = null
    Cookies.remove('auth')
  }
}

export const actions =  {
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = parsed.auth
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
  },
  async fetchUser({ commit }){
    const {data} = await axios.get('/user/data')
    commit('setUser', data.authorizedData.acc)
  },
  logout({ commit }){
    commit('logout')
  }
}
