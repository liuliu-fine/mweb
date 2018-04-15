// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Md5 from './utils/md5'
import VueCookie from 'vue-cookie'

// Tell Vue to use the plugin
Vue.use(VueResource)
Vue.use(Md5)
Vue.use(VueCookie)


Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  if(to.name!="Login"&&document.cookie.split("token").length<2){
    next({name: 'Login'});
  } else {
    next();
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
