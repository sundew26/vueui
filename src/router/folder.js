import Vue from 'vue'
import Router from 'vue-router'
import Folder from '@/components/Folder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Folder',
      component: Folder
    }
  ]
})
