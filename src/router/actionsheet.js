import Vue from 'vue'
import Router from 'vue-router'
import ActionSheet from '@/components/ActionSheet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ActionSheet',
      component: ActionSheet
    }
  ]
})
