import Vue from 'vue'
import Router from 'vue-router'
import Popups from '@/components/Popups'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Popups',
      component: Popups
    }
  ]
})
