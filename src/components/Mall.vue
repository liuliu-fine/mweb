<template>
  <div class="mall">
    <div class="bar">
      <router-link class="item" :to="{ path: 'exchange', query:  $route.query}">积分兑换</router-link>
      <div class="item active">会员商城</div>
    </div>
    <div class="flex" v-if="data">
      <div class="item" v-for="item in data.items" v-on:click="redirectFn(item.id)">
        <img class="cap-goods-list__img" :src="item.picUrl">
        <div class="text">
          <div class="title">{{item.title}}</div>
          <div class="time" v-if="item.stock === undefined">不限量</div>
          <div class="time" v-else>库存{{item.stock}}</div>
        </div>
        <div class="amount">¥ {{item.sales[0].price}}</div>
      </div>
      <div class="item"></div>
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
        data: "",
        payment: ""
      }
    },
    created() {
      // this.$http.get("/shop/" + (this.$route.query.id || this.$route.query.guestid) + "/paymode", {key: {"type": this.getVersion()}}).then(response => {
      //   if (response.body.code == 200) {
      //     if (response.body.result.oasis) {
      //       this.author();
      //       return;
      //     }
      //     this.payment = response.body.result;
      //   }
      // });
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
      /*submitFn(id) {
        let show = this.$loading('loading...');
        if (show) return;
        if (id) {
          this.index = id;
        } else {
          id = this.index;
        }
        let json = {
          goodsId: id,
          count: 1,
          payCategory: this.payment.payMode,
          url: location.href,
          id: this.$route.query.id || this.$route.query.guestid
        };
        let _self = this;
        this.$http.post("/mall/buy", json).then(response => {
          let data = response.body;
          let _self = this;
          if (data.code != 200) {
            this.$loading.close();
            if (data.code == 403060) {
              this.$bind({
                title: "绑定手机号",
                text: "绑定手机号后，方可购买",
                submit: function () {
                  _self.submitFn(id);
                }
              })
            } else {
              this.$toast(data.message);
            }
            return;
          }
          let order_id = response.body.result.orderId;
          if (response.body.result.url) {
            location.href = response.body.result.url;
            return;
          }
          switch (_self.payment.payMode) {
            case "1005":
              let js = response.body.result.js;
              let pay = response.body.result.pay;
              pay.success = function () {
                _self.$loading.close();

                _self.$confirm('购买成功!', function () {
                  _self.$router.push({path: 'user', query: _self.$route.query});
                }, function () {
                  _self.initFn();
                }, "去看看", "继续逛逛");
              };
              pay.cancel = function () {
                _self.cancel(order_id);
              };
              pay.fail = function (res) {
                _self.cancel(order_id);
                alert("支付失败");
              };
              js.debug = false;
              js.jsApiList = ['chooseWXPay'];
              delete js.url;
              wx.config(js);
              // wx.ready(function () {
              wx.chooseWXPay(pay);
              // });
              break;
            case "1101":
              AlipayJSBridge.call("tradePay", {
                tradeNO: response.body.result.pay.tradeNO
              }, function (result) {
                if (result.resultCode == "6001") {
                  _self.cancel(order_id);
                  return;
                }
                if (result.resultCode == "9000") {
                  _self.$confirm('购买成功!', function () {
                    _self.$router.push({path: 'user', query: _self.$route.query});
                  }, function () {
                    _self.initFn();
                  }, "去看看", "继续逛逛");
                }
              });
              break;
          }
        });
      },
      cancel(orderId) {
        this.$loading.close();
        this.$http.post("/order/" + orderId + "/pay/revoke").then(response => {
        });
      }*/
    }
  }
</script>

<style lang="scss" scoped>
  @import "../sui_assets/scss/mall.scss";

</style>
