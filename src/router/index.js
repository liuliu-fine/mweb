import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Payment from '@/components/Payment'
import Error from '@/components/Error'
import Test from '@/components/Test'

const Charge = r => require.ensure([], () => r(require('@/components/Charge')))
const More = r => require.ensure([], () => r(require('@/components/More')))
const User = r => require.ensure([], () => r(require('@/components/User')))
const SelfPay = r => require.ensure([], () => r(require('@/components/SelfPay')))
const Upgrade = r => require.ensure([], () => r(require('@/components/Upgrade')))
const Exchange = r => require.ensure([], () => r(require('@/components/Exchange')))
const Exchange1 = r => require.ensure([], () => r(require('@/components/Exchange1')))
const GrouponInfo = r => require.ensure([], () => r(require('@/components/GrouponInfo')))
const Groupon = r => require.ensure([], () => r(require('@/components/Groupon')))
const Mall = r => require.ensure([], () => r(require('@/components/Mall')))

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
      path: '/more',
      name: 'More',
      alias: '/brand',
      component: More
    },
    {
      path: '/user',
      name: 'User',
      alias: '/my',
      component: User
    },
    {
      path: '/exchange',
      name: 'Exchange',
      component: Exchange
    },
    {
      path: '/exchange1',
      name: 'Exchange1',
      component: Exchange1
    },
    {
      path: '/upgrade',
      name: 'Upgrade',
      component: Upgrade
    },
    {
      path: '/grouponInfo',
      name: 'GrouponInfo',
      component: GrouponInfo
    },
    {
      path: '/mall',
      name: 'Mall',
      component: Mall
    },
    {
      path: '/groupon',
      name: 'Groupon',
      component: Groupon
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
