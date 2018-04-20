<template>
  <div class="hello">
    <router-view></router-view>
    <wc-keyboard  v-model="value"
    inter="5"
    decimal="2"
    placeholder="询问服务员后输入"
    label="消费金额"/>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value:""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '@/wc-keyboard/style.css'

  h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
