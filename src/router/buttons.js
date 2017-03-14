import Vue from 'vue'
import Router from 'vue-router'
import Buttons from '@/components/Buttons'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Buttons',
      component: Buttons
    }
  ]
})
