<template>
  <div class="charge" v-if="data">
    <div class="header">
      <div class="record" v-if="data.customerRelationId"
           v-on:click="ajaxUrl('remainder.html?rid='+ data.customerRelationId)">充值记录
      </div>
      <div class="right" v-if="data.used" v-on:click="showModal=true"><span>?</span>使用规则</div>
      <strong class="number">当前余额<span>￥{{data.charge}}</span></strong>
      <div class="limit" v-if="data.used&&data.used[0].limit">{{data.used[0].limit[0]}}</div>
    </div>
    <div class="detail" v-if="data.activity&&data.activity.length">
      <div class="box" v-for="(item,index) in data.activity" v-on:click="key=index">
        <div class="left" v-bind:class="{'active': (key == index)}"></div>
        <div class="right">
          <span class="label" v-if="item.from&&item.from!='普通顾客'">{{item.from}}</span>
          <span class="">{{item.amount}}元</span><span v-if="item.str"> 送{{item.str}}</span>
          <div class="grey">{{item.times}}</div>
        </div>
      </div>
    </div>
    <div class="submit" v-if="payment&&payment.payMode&&data.activity&&data.activity.length">
      <div class="left">支付{{data.activity[key].amount}}元</div>
      <div class="right" v-on:click="submitFn">确认充值</div>
    </div>

    <div class="gmodal" v-if="showModal">
      <div class="g-modal-border" style="margin-top: 25%;">
        <div class="text1">充值卡使用规则</div>
        <ul style="padding-left: 0">
          <li v-if="data.used[0].time">{{data.used[0].time}}</li>
          <li v-if="data.used[0].periods">{{data.used[0].periods}}</li>
          <li v-if="data.used[0].shared">{{data.used[0].shared}}</li>
          <li v-if="data.used[0].shops">{{data.used[0].shops}}</li>
          <li v-if="data.used[0].nonParticipations">{{data.used[0].nonParticipations}}</li>
          <li v-for="item in data.used[0].limit"><span>{{item}}</span></li>
          <li>最终解释权归本店所有</li>
        </ul>
      </div>
      <div class="close-white" v-on:click="showModal = false"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Charge',
    data() {
      return {
        data: "",
        key: 0,
        payment: {},
        showModal: false
      }
    },
    created() {
      this.$http.get("/shop/" + (this.$route.query.id || this.$route.query.guestid) + "/paymode", {key: {"type": this.GLOBAL.version}}).then(response => {
        if (response.body.code == 200) {
          this.payment = response.body.result;
        }
      });
      this.$http.get("/activities/recharge/guest/" + (this.$route.query.id || this.$route.query.guestid)).then(response => {
        if (response.body.code == 200) {
          let data = response.body;
          if (data.result.customerRelationId) {
            localStorage.setItem("charge", data.result.charge);
            this.$cookie.set("charge", data.result.charge);
            this.$cookie.set("relation_id", data.result.customerRelationId);
          }
          if (data.result.activity && data.result.activity.length) {
            for (let i in data.result.activity) {
              if (this.$route.query.rid && this.$route.query.rid == data.result.activity[i].ruleTupleId) {
                this.key = i;
              }
              let arr = [];
              for (let j in data.result.activity[i].benefits) {
                let benefit = data.result.activity[i].benefits[j];
                switch (benefit.type) {
                  case "1014":
                    arr.push(benefit.amount ? (benefit.amount + "元") : '');
                    break;
                  case "1015":
                    arr.push(benefit.amount ? (benefit.amount + "积分") : '');
                    break;
                  case "1016":
                    arr.push(benefit.name + "（" + benefit.count + "张）" + (benefit.countLimit ? '最多' + benefit.countLimit + '张' : ""));
                    break;
                }
              }
              data.result.activity[i].str = arr.join("、");
            }
          }
          this.data = data.result;
        } else {
          alert(response.body.message);
        }
      });
    },
    methods: {
      submitFn() {
        this.$loading();
        let _self = this;
        let para = {
          activityId: _self.data.activity[_self.key].activityId,
          ruleTupleId: _self.data.activity[_self.key].ruleTupleId,
          payCategory: _self.payment.payMode,
          url: encodeURIComponent(location.href),
          failedUrl: encodeURIComponent(location.href)
        };
        if (this.$route.query.type == "channel") {
          para.channel = "401";
        }
        this.$http.post("/benefit/recharge/guest/" + (this.$route.query.id || this.$route.query.guestid), para).then(response => {
          if (response.body.code != 200) {
            if (response.body.code == 405017) {
              let re = confirm("只有指定级别顾客可参与活动，确定升级为该级别？");
              if (re) {
                this.ajaxUrl("upgrade.html");
                return;
              }
            } else {
              this.$loading.close();
              alert(response.body.message);
            }
            return;
          }
          let order_id = response.body.result.orderId;
          _self.$cookie.set("order_id", order_id);
          if (response.body.result.url) {
            location.href = response.body.result.url;
            return;
          }
          switch (_self.payment.payMode) {
            case "1005":
              let js = response.body.result.js;
              let pay = response.body.result.pay;
              pay.success = function () {
                _self.earnCheck(order_id);
              };
              pay.cancel = function () {
                _self.cancelPay(order_id);
              };
              pay.fail = function (res) {
                _self.cancelPay(order_id);
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
                  _self.cancelPay(order_id);
                  return;
                }
                if (result.resultCode == "9000") {
                  _self.earnCheck(order_id);
                }
              });
              break;
          }
        });
      },
      cancelPay(orderId) {
        this.$loading.close();
        this.$http.post("/order/" + orderId + "/pay/revoke").then(response => {
        });
      },
      earnCheck(order_id) {
        this.$loading.close();
        let _self = this;
        let y = setInterval(function () {
          _self.$http.get("/order/" + order_id + "/pay/result").then(response => {
            let data1 = response.body;
            if (data1.code == "200" || data1.code == "404014") {
              clearInterval(y);
              _self.$toast.center('操作成功');
              location.reload();
            } else {
              _self.$toast("支付结果查询中");
            }
          });
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  @import "../sui_assets/scss/charge.scss";
</style>
