import Vue from 'vue'
import Router from 'vue-router'

const Charge = r => require.ensure([], () => r(require('@/components/Charge')))
const User = r => require.ensure([], () => r(require('@/components/User')))
const SelfPay = r => require.ensure([], () => r(require('@/components/SelfPay')))
const Exchange = r => require.ensure([], () => r(require('@/components/Exchange')))
const Mall = r => require.ensure([], () => r(require('@/components/Mall')))
const MallDetail = r => require.ensure([], () => r(require('@/components/MallDetail')))
const MallRecord = r => require.ensure([], () => r(require('@/components/MallRecord')))
const Coupon = r => require.ensure([], () => r(require('@/components/Coupon')))
const Payment = r => require.ensure([], () => r(require('@/components/Payment')))
const Strategy = r => require.ensure([], () => r(require('@/components/Strategy')))

//无入口
const Error = r => require.ensure([], () => r(require('@/components/Error')))
const More = r => require.ensure([], () => r(require('@/components/More')))
const Upgrade = r => require.ensure([], () => r(require('@/components/Upgrade')))
const GrouponInfo = r => require.ensure([], () => r(require('@/components/GrouponInfo')))
const Groupon = r => require.ensure([], () => r(require('@/components/Groupon')))
const Vip = r => require.ensure([], () => r(require('@/components/Vip')))

//test
const Login = r => require.ensure([], () => r(require('@/components/Login')))
const Test = r => require.ensure([], () => r(require('@/components/Test')))
const Index = r => require.ensure([], () => r(require('@/components/Index')))


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
      path: '/strategy',
      name: 'Strategy',
      component: Strategy,
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
      path: '/vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/exchange',
      name: 'Exchange',
      component: Exchange
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
      path: '/mallDetail',
      name: 'MallDetail',
      component: MallDetail
    },
    {
      path: '/mallRecord',
      name: 'MallRecord',
      component: MallRecord
    },
    {
      path: '/coupon',
      name: 'Coupon',
      component: Coupon
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
