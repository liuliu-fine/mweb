// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Crypto from 'crypto';
import VueCookie from 'vue-cookie'
import Redirect from './utils/redirect'
import Common from './utils/common'

import './components/toast/toast.css';
import Toast from './components/toast/index'

import VueAwesomeSwiper from 'vue-awesome-swiper'


// Tell Vue to use the plugin
Vue.use(VueResource)
Vue.use(VueCookie)
Vue.use(Crypto)
Vue.use(Toast)
Vue.use(VueAwesomeSwiper)
Vue.use(Redirect)

Vue.prototype.GLOBAL = Common
Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {
//   if (to.path == '/') {
//     next();
//     return;
//   }
//   if (document.cookie.split("token").length < 2) {
//     next({path: '/', query: to.query});
//     // next({name: 'Index',});
//   } else {
//     next();
//   }
// })
//rest request 请求加密处理
Vue.http.interceptors.push(function (request) {

  const t = "037925fa578c4ed98885d7b28ade5462";
  Vue.cookie.set("apikey", "6b774cc5eb7d45818a9c7cc0a4b6920f", {expires: 30, path: "/"});

  function getmd5(str) {
    let a;
    let md5 = Crypto.createHash("md5");
    md5.update(str);
    a = md5.digest('hex');
    return a;
  }

  let getUrl = function (url, para = {}) {
    url += "?";
    const password = "037925fa578c4ed98885d7b28ade5462";
    let j = JSON.parse(JSON.stringify(para));//param's json
    j.timestamp = (new Date).getTime();
    let key_json = Object.keys(j);
    key_json.sort();
    let encode_str = "";
    for (let h in key_json) {
      encode_str += key_json[h] + "=" + j[key_json[h]];
      url += key_json[h] + "=" + j[key_json[h]] + "&";
    }
    let i = getmd5(encode_str + password), m = "";
    for (let o = 0; o < i.length; o += 2) m += i.charAt(o);
    for (let s = 1; s < i.length; s += 2) m += i.charAt(s);
    return location.origin + url + "signature=" + m;
  }
  let getGetUrl = function (u, json = {}) {
    let e = [];
    let j = JSON.parse(JSON.stringify(json));
    if (Object.keys(j).length) {
      for (let a in j) e.push(a)
    }
    j.timestamp = (new Date).getTime(), e.push("timestamp"), e.sort();
    let n = "", f = {};
    for (let h in e) n += e[h] + "=" + j[e[h]] + "&", f[e[h]] = j[e[h]];
    let i = getmd5("timestamp=" + j.timestamp + t), m = "", o = 0;
    for (; o < i.length; o += 2) m += i.charAt(o);
    for (let s = 1; s < i.length; s += 2) m += i.charAt(s);
    f.signature = m;
    n += "signature=" + m;
    return location.origin + u + "?" + n;
  }
  console.log(request);
  request.url = getUrl(request.url, request.key);
  // return response callback
  return function (response) {
    // modify response
    switch (response.status) {
      case 200:
        if (response.body.code == 403000) {
          this.$cookie.set("url", location.href, {expires: '2m'});
          localStorage.setItem("url", location.href);
          if (this.$route.query.id) {
            location.href = "index.html?id=" + this.$route.query.id;
          } else {
            location.href = "index.html?id=" + this.$route.query.guestid;
          }
          // router.push({path: '/', query: this.$route.query});
        }
        break;
      default:
        alert(response.status);
    }

  };
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
