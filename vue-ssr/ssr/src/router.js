import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default function createStore () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('./pages/Home.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('./pages/About.vue')
      }
    ]
  })
}
