// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Tabbar from './../pages/Tabbar'
import router from '../router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#tabbar',
  router,
  template: '<Tabbar/>',
  components: { Tabbar }
})
