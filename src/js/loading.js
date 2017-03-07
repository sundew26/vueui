// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Loading from './../pages/Loading'
import router from '../router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#loading',
  router,
  template: '<Loading/>',
  components: { Loading }
})
