import Vue from 'vue'
import Router from 'vue-router'
import Inputs from '@/components/Inputs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inputs',
      component: Inputs
    }
  ]
})
