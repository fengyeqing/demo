import Vue from 'vue'
import Router from 'vue-router'
import fullscreen from '@/components/fullscreen'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'fullscreen',
      component: fullscreen
    }
  ]
})
