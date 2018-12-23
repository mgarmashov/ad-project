import Vue from 'vue'
import Vuex from 'vuex'
import ads from './ads'
import users from './users'
import shared from './shared'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ads, users, shared
  }
})
