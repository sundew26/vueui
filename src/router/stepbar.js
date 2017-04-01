import Vue from 'vue'
import Router from 'vue-router'
import Stepbar from '@/components/Stepbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Stepbar',
      component: Stepbar
    }
  ]
})
