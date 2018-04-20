import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Payment from '@/components/Payment'
import Charge from '@/components/Charge'
import SelfPay from '@/components/SelfPay'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment,
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
    },
    {
      path: '/selfPay',
      name: 'SelfPay',
      component: SelfPay
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
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
