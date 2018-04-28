import Vue from 'vue'

export default {
  install(Vue, options) {
    const t = "037925fa578c4ed98885d7b28ade5462";
    Vue.prototype.refresh = function (){
      window.location.href = location.href + '&time=' + ((new Date()).getTime());
    }
    Vue.prototype.ajaxUrl = function (path){
      let json = this.$route.query;
      if(path.split("?").length>1){
        let key_str = path.split("?")[1];
        for (let i = 0; i < key_str.split("&").length; i++) {
          let j = key_str.split("&")[i].split("=");
          json[j[0]] = j[1];
        }
      }
      this.$router.push({path: ('/'+ path.split(".")[0]), query: json});
    }

  }
}

