import Vue from 'vue'
import Router from 'vue-router'
import InputNum from '@/components/InputNum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InputNum',
      component: InputNum
    }
  ]
})
