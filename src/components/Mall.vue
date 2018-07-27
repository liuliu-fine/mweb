<template>
  <div class="goods-list-wrapper">
    <div class="cap-goods-list">
      <ul class="cap-goods-list__container cap-goods-list__container--list cap-goods-list__container--card">
        <li class="cap-goods-list__wrapper" v-for="item in data.items">
          <div v-on:click="redirectFn(item.id)"
               class="cap-goods-list__item cap-goods-list__item--list card cap-goods-list__item--btn4 cap-goods-list__item--whitespace">
            <div class="cap-goods-list__photo">
              <img class="cap-goods-list__img" :src="item.picUrl"></div>
            <div class="cap-goods-list__info has-title has-price has-btn">
              <h3 class="title">{{item.title}}</h3>

              <div class="time" v-if="item.stock === undefined">不限量</div>
              <div class="time" v-else>库存：{{item.stock}}</div>
              <p class="sale-info"><span class="sale-price">¥ {{item.sales[0].price}}</span></p></div>
            <div class="cap-goods-list__buy-btn-wrapper cap-goods-list__buy-btn-wrapper--4">
              <button class="cap-goods-list__buy-btn-4 van-button van-button--default van-button--small"
                      :class="payment&&item.usable?'':'disabled'"
                      v-on:click.stop="submitFn(item.id)">
                <span class="van-button__text"><span v-if="item.stock===0">已售完</span><span v-else>购买</span></span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
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
      this.$http.get("/shop/" + (this.$route.query.id || this.$route.query.guestid) + "/paymode", {key: {"type": this.getVersion()}}).then(response => {
        if (response.body.code == 200) {
          this.payment = response.body.result;
        }
      });
      this.initFn();
    },
    methods: {
      initFn() {
        this.$http.get("/mall/guest/" + (this.$route.query.id || this.$route.query.guestid), {key: {category: '1018'}}).then(response => {
          let data = response.body;
          if (data.code == 200) {
            this.data = data.result;
          } else if (data.code === 404000) {

          } else {

          }
        });
      },
      redirectFn(id) {
        this.$route.query.aid = id;
        this.$router.push({path: '/mallDetail', query: this.$route.query});
      },
      submitFn(id) {
        console.log(1)
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
                _self.$toast("购买成功");
                _self.initFn();
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
                  _self.$toast("购买成功");
                  _self.initFn();
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../sui_assets/scss/mall.scss";

</style>
