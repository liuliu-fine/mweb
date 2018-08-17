import Vue from 'vue'

export default {
  install(Vue, options) {
    const t = "037925fa578c4ed98885d7b28ade5462";
    Vue.prototype.ajaxUrl = function (path) {
      if (path.split("?").length > 1) {
        path += "&";
      } else {
        path += "?";
      }
      if (this.$route.query.id) {
        path += "id=" + this.$route.query.id;
        if (this.$route.query.d) {
          path += "&d=" + this.$route.query.d;
        }
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
    Vue.prototype.author = function () {
      location.href = location.origin + "/author/" + (this.$route.query.id || this.$route.query.guestid) + "/fuiou?url=" + encodeURIComponent(location.href);

    }
    Vue.prototype.setTitle = function (name) {
      document.title = name;
      let i = document.createElement('iframe');
      i.style.display = 'none';
      i.onload = function () {
        setTimeout(function () {
          i.remove();
        }, 9)
      };
      document.body.appendChild(i);
    }
  }
}

