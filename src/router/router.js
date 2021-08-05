import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'oneOneN',
    component: () => import('@/views/1+1+N/index.vue'),
    // meta: {
    //   title: '郑东新区首页统计图'
    // }
  },
  {
    path: '/eventsProject',
    name: 'EventsProject',
    component: () => import('@/views/eventsProject.vue'),
    // meta: {
    //   title: '事件专题'
    // }
  },
    {
      path: '/oneOneN',
      name: 'oneOneN',
      component: () => import('@/views/1+1+N/index.vue')
    },
    {path: '*', redirect: '/'}
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
