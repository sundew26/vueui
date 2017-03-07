import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/components/Loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loading',
      component: Loading
    }
  ]
})
