import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as fb from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyAwY-xFaNRSOCTgr8vAXMHg9RILDEDXXSc',
      authDomain: 'ad-project-a7c75.firebaseapp.com',
      databaseURL: 'https://ad-project-a7c75.firebaseio.com',
      projectId: 'ad-project-a7c75',
      storageBucket: 'ad-project-a7c75.appspot.com',
      messagingSenderId: '183912748975'
    })
  }
})
