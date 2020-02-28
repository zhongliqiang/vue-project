import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import imgUp from '@/view/imgUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/imgUp',
      name: 'imgUp',
      component: imgUp
    },
  ]
})
