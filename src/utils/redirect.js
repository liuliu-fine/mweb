import Vue from 'vue'

export default {
  install(Vue, options) {
    const t = "037925fa578c4ed98885d7b28ade5462";
    /* Vue.prototype.ajaxUrl = function (path) {
       let json = this.$route.query;
       if (path.split("?").length > 1) {
         let key_str = path.split("?")[1];
         for (let i = 0; i < key_str.split("&").length; i++) {
           let j = key_str.split("&")[i].split("=");
           json[j[0]] = j[1];
         }
       }
       this.$router.push({path: ('/' + path.split(".")[0]), query: json});
     }*/
    Vue.prototype.ajaxUrl = function (path) {
      if (path.split("?").length > 1) {
        path += "&";
      } else {
        path += "?";
      }
      if (this.$route.query.id) {
        path += "id=" + this.$route.query.id;
      } else if (this.$route.query.guestid) {
        path += "guestid=" + this.$route.query.guestid;
      }
      location.href = path;
    }
    Vue.prototype.replaceMethod = function (value) {
      if (!value) return '';
      let a = value.split("\n");
      return a.join("<br/>");
    }
    Vue.prototype.getVersion = function () {
      let version, ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        version = "WXPAY";
      } else if (ua.match(/AlipayClient/i) == 'alipayclient') {
        version = "ALIPAY";
      } else {
        version = "";
      }
      return version;
    }
    Vue.prototype.refresh = function () {
      location.reload();
    }
  }
}

