<template>

<div>login
  <div class="text-center" style="padding: 2rem 1.5rem">
    <p class="xs">您的常用手机号码</p>
    <input type="tel" v-model="post.phone" id="tel" maxlength="11"/>

    <div class="input-text" v-on:click="validateFn()">发送验证码</div>
    <p class="xs">收到的验证码</p>
    <input type="number" v-model="post.validateCode" id="validate" maxlength="6"/>
  </div>
  <div class="btn-green" id="bindPhone" v-on:click="bindFn()" style="border: 1px solid #ED1E37;background: #ED1E37;margin: auto 1.5rem">绑定</div>
</div>
</template>

<script>
    export default {
        name: "Login",
      data () {
        return {
          post: {}
        }
      },
      methods : {
       validateFn(){
         this.$http.post(this.getPostUrl("/auth/phone/validate"),{"phone":this.post.phone}).then(response => {

         alert(data);

       }, response => {
           // error callback
         });
       },
       bindFn(){
         this.$http.post(this.getGetUrl("/auth/phone"),this.post).then(response => {

         alert(data);

       }, response => {
           // error callback
         });
       }
      }
    }
</script>

<style scoped>

</style>
