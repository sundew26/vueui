// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ProgressBar from './../pages/ProgressBar'
import router from '../router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#progressBar',
  router,
  template: '<ProgressBar/>',
  components: { ProgressBar }
})
