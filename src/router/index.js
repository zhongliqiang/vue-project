import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import imgUp from '@/view/imgUp'
import fanye from '@/view/fanye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fanye',
      component: fanye
    },
    // {
    //   path: '/imgUp',
    //   name: 'imgUp',
    //   component: imgUp
    // },
    // {
    //   path: '/fanye',
    //   name: 'fanye',
    //   component: fanye
    // }
  ]
})
