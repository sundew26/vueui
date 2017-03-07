import Vue from 'vue'
import Router from 'vue-router'
import Toast from '@/components/Toast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Toast',
      component: Toast
    }
  ]
})
