import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Payment from '@/components/Payment'
import Error from '@/components/Error'
import Test from '@/components/Test'

const  Charge = r => require.ensure( [], () => r (require('@/components/Charge')))
const  More = r => require.ensure( [], () => r (require('@/components/More')))
const  User = r => require.ensure( [], () => r (require('@/components/User')))

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
    // {
    //   path: '/selfPay',
    //   name: 'SelfPay',
    //   component: SelfPay
    // },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
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
