import Vue from 'vue'
import Router from 'vue-router'
 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'peoples',
      component: () => import('@/views/people/index.vue')
    },
    {
      path: '/peoples/create',
      name: 'peoples-create',
      component: () => import('@/views/people/create.vue')
    },
    {
      path: '/peoples/show/:id',
      name: 'peoples-show',
      component: () => import('@/views/people/show.vue')
    },
    {
      path: '/professions',
      name: 'professions',
      component: () => import('@/views/professions.vue')
    },
    {
      path: '/municipalities',
      name: 'municipalities',
      component: () => import('@/views/municipality.vue')
    },
  ],
  mode: 'history'
})
