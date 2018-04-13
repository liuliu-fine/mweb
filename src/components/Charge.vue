<template>
  <div class="charge">
222
  </div>

</template>

<script>

export default {
  name: 'Charge',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeCreate (){
    console.log(this.$router);
    this.$http.get(this.getGetUrl("/activities/recharge/guest/",{})).then(response => {

      // get body data
      this.someData = response.body;

    }, response => {
      // error callback
    });
  }
}
</script>

<style scoped>

</style>
