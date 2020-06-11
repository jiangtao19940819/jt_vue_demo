import Vue from 'vue'
import Router from 'vue-router'
import PageOne from '@/page/PageOne'
import PageTwo from '@/page/PageTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageTwo',
      component: PageTwo
    }
  ]
})
