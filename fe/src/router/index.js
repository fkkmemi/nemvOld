import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import sign from '@/components/sign'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sign',
      component: sign
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
