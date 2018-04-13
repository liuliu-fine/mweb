exports.install = function (Vue, options){
  Vue.prototype.rest = function (){
    this.$http.get('http://localhost:8088/test').then(response => {
      console.log(response.data)
      // get body data
      // this.someData = response.body;

    },response => {
    })
  }
}
