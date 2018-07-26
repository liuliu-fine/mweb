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
import 'vue2-animate/dist/vue2-animate.min.css';

import './components/toast/toast.css';
import Toast from './components/toast/index'
import './components/bind/bind.css';
import Bind from './components/bind/index'
import './components/couponShow/coupon.css';
import Coupon from './components/couponShow/index'

// Tell Vue to use the plugin
Vue.use(VueResource)
Vue.use(VueCookie)
Vue.use(Crypto)
Vue.use(Toast)
Vue.use(Redirect)
Vue.use(Bind)
Vue.use(Coupon)

Vue.prototype.GLOBAL = Common
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (document.cookie.split("token").length < 2) {
    Vue.cookie.set("url", location.href, {expires: '2m'});
    if (to.query.id) {
      location.href = "index.html?id=" + to.query.id;
    } else {
      location.href = "index.html?guestid=" + to.query.guestid;
    }
  } else {
    Vue.cookie.delete("url");
    //第二次授权
    let ua = window.navigator.userAgent.toLowerCase();
    let _id = to.query.id || to.query.guestid;
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      if (!Vue.cookie.get("token")) {
      } else if (!Vue.cookie.get(_id)) {
        Vue.http.get("/author/guest/" + _id + "/check").then(response => {
          let data = response.body;
          if (data.code == 200) {
            //正确
            Vue.cookie.set(_id, "true", {expires: '1d'});
            next();
          } else if (data.code == 403020) {
            //未授权
            location.href = location.origin + "/author/guest/" + _id + "?url=" + encodeURIComponent(location.href.split("&state=1")[0]);
          } else {
            //token非法
            Vue.cookie.set("url", location.href, {expires: '2m'});
            location.href = "index.html?" + location.search.split("&state=1")[0];
          }
        })
      } else {
        next();
      }
    } else {
      next();
    }
  }
})
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
  request.url = getUrl(request.url, request.key);
  // return response callback
  return function (response) {
    // modify response
    switch (response.status) {
      case 200:
        if (response.body.code == 403000) {
          Vue.cookie.set("url", location.href, {expires: '2m'});
          localStorage.setItem("url", location.href);
          location.href = "index.html?" + location.hash.split("?")[1];

        }else if (response.body.code == 400000) {
          location.href = "error.html#7";
        } else if (response.body.code == 403060) {
          location.href = "bind.html?" + location.hash.split("?")[1];
          // alert("请先绑定手机号");
          return;
        }
        break;
      default:
        console.log(response);
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
