<template>
  <div class="mall">
    <div class="bar">
      <router-link class="item" :to="{ path: 'exchange', query:  $route.query}">积分兑换</router-link>
      <div class="item active">会员商城</div>
    </div>
    <div class="flex" v-if="data">
      <div class="item" v-for="item in data.items" v-on:click="redirectFn(item.id)">
        <div class="label" v-if="item.sales[0].name">仅限{{item.sales[0].name}}</div>
        <div class="img" :style="{backgroundImage: 'url('+ (item.picUrl||'') +')'}"></div>
        <div class="title">{{item.title}}</div>
        <div class="text">
          <div class="amount">¥ {{item.sales[0].price}}</div>
          <div class="time" v-if="item.stock === undefined">不限量</div>
          <div class="time" v-else>库存{{item.stock}}</div>
        </div>
      </div>
    </div>
    <div class="empty" v-else></div>
    <router-link class="record" :to="{ path: 'mallRecord', query:  $route.query}"></router-link>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        data: ""
      }
    },
    created() {
      this.initFn();
    },
    methods: {
      initFn() {
        this.$http.get("/mall/guest/" + (this.$route.query.id || this.$route.query.guestid), {key: {category: '1018'}}).then(response => {
          let data = response.body;
          if (data.code == 200) {
            this.data = data.result;
          }
        });
      },
      redirectFn(id) {
        this.$route.query.aid = id;
        this.$router.push({path: '/mallDetail', query: this.$route.query});
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../sui_assets/scss/mall.scss";
</style>
