import Vue from 'vue'
import Router from 'vue-router'
import Cell from '@/components/Cell'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cell',
      component: Cell
    }
  ]
})
