/* eslint-disable no-new */
import Vue from 'vue'
import Crypto from 'crypto';
// import VueCookie from 'vue-cookie'
import VueCookie from 'vue-cookie'

Vue.use(VueCookie)
Vue.use(Crypto)

export default {
  install(Vue, options) {
    const t = "037925fa578c4ed98885d7b28ade5462";
      Vue.cookie.set("apikey", "6b774cc5eb7d45818a9c7cc0a4b6920f", {expires: 30, path: "/"});
    function getmd5(str) {
      let a;
      let md5 = Crypto.createHash("md5");
      md5.update(str);
      a = md5.digest('hex');
      return a;
    }

    Vue.prototype.getGetUrl = function (u, j={}) {
      let e = [];
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
      //f =json,n=str
      return location.origin + u + "?" + n;
    }
    Vue.prototype.getPostUrl = function (u) {
      let r = (new Date).getTime();let e = getmd5("timestamp=" + r + t),a = "", n = 0;
      for (; n < e.length; n += 2) a += e.charAt(n);
      for (let f = 1; f < e.length; f += 2) a += e.charAt(f);
      return location.origin + u + "?timestamp=" + r + "&signature=" + a;
    }
  }
}
