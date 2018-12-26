import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import 'vuetify/dist/vuetify.min.css'
// import * as firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Vuetify)
Vue.component('app-buy-modal', BuyModalComponent)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAwY-xFaNRSOCTgr8vAXMHg9RILDEDXXSc',
      authDomain: 'ad-project-a7c75.firebaseapp.com',
      databaseURL: 'https://ad-project-a7c75.firebaseio.com',
      projectId: 'ad-project-a7c75',
      storageBucket: 'ad-project-a7c75.appspot.com',
      messagingSenderId: '183912748975'
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
})
