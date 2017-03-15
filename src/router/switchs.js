import Vue from 'vue'
import Router from 'vue-router'
import Switchs from '@/components/Switchs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Switchs',
      component: Switchs
    }
  ]
})
