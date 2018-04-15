import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Payment from '@/components/Payment'
import Charge from '@/components/Charge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'charge',
          component: Charge
        }
      ]
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'charge',
          component: Charge
        }
      ]
    },
    {
      path: '/charge',
      name: 'Charge',
      component: Charge
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
/* eslint-disable */

/*route.beforeEach((to, from, next) => {
  if(!Vue.cookie.get("cookie")){
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })

  }else{
    next() // 确保一定要调用 next()

  }
})*/
