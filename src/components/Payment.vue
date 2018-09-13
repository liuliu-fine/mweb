<template>
  <div class="payment" v-if="data">
    <div class="order" v-if="data.order">
      <img src="/sui_assets/img/payment/success.png" class="logo">
      <span class="text-lg">
        买单成功
      </span>
      <div class="text-md">本次支付 <span class="text-xl">{{data.order.strategy.finalAmount}}</span> 元</div>
      <div class="award border">
        <div class="left">消费门店</div>
        <div class="left text-bold">{{data.order.shopName}}</div>
      </div>
      <div class="award border">
        <div class="left">原单金额</div>
        <div class="left text-bold">{{data.order.amount}}元</div>
      </div>
      <div class="award border">
        <div class="left">消费时间</div>
        <div class="left text-bold">{{data.order.checkTime}}</div>
      </div>
      <div class="award border">
        <div class="left">付款信息</div>
        <div class="left text-bold">{{data.order.strategy.finalAmount}}元（{{data.order.paymentModeText}}支付）</div>
        <div class="right text-bold"></div>
      </div>
      <div class="award border" v-if="data.order.strategy.used">
        <div class="left">金额抵用</div>
        <div class="left">
          <div v-for="item in data.order.strategy.used">{{item.content}} -{{item.amount}}</div>
        </div>
      </div>
      <div class="award border" v-if="data.order.strategy.got||data.order.gratuity">
        <div class="left">获得奖励</div>
        <div class="left text-bold">
          <div class="c-coupon" v-for="item in data.order.strategy.got">{{item.point}}{{item.name}} <span
            v-if="item.count">x{{item.count}}</span></div>
          <div class="c-point" v-if="data.order.strategy.points">{{data.order.strategy.points.point}}积分</div>
          <div class="" v-if="data.order.gratuity&&data.order.gratuity.benefits">
            <div v-for="gift in data.order.gratuity.benefits">
              <span v-if="gift.category == '1017'">{{gift.amount}}元</span>{{gift.name}}
            </div>
          </div>
        </div>
        <div class="right">
          <div class="button"
               v-if="(data.order.obtained == false)&&(data.order.gratuity||data.order.strategy.got)"
               v-on:click="bindFn">领取奖励
          </div>
        </div>
      </div>


    </div>
    <div class="benefit" v-if="data.redEnvelopes||data.lottery||data.commentBenefit">
      <div class="title">精彩活动</div>
      <div class="activity"
           :style="{backgroundImage: 'url('+ (data.redEnvelopes.picUrl||'/sui_assets/img/payment/activity1.jpg') +')'}"
           v-on:click="openFn()" v-if="data.redEnvelopes" style="line-height: 1.4">
        <div class="text-red">{{data.redEnvelopes.name}}</div>
        <div class="button">发红包给好友</div>

        <div class="addon" v-if="data.commentBenefit">自己还可获得{{data.commentBenefit.name}}</div>

      </div>
      <div class="activity"
           :style="{backgroundImage: 'url('+ (data.commentBenefit.picUrl||'/sui_assets/img/payment/activity1.jpg') +')'}"
           v-on:click="openFn()" v-else-if="data.commentBenefit">
        <div class="text-red">评论红包</div>
        <div v-if="data.commentBenefit.category == '1016'">
          <div v-if="data.commentBenefit.couponCategory == '901'">
            <span class="lg">￥{{data.commentBenefit.amount}}</span>代金券
          </div>
          <div class="lg" v-if="data.commentBenefit.couponCategory == '9011'">
            <span class="lg">{{data.commentBenefit.name}}</span>
          </div>
          <div v-if="data.commentBenefit.couponCategory == '9021'||data.commentBenefit.couponCategory == '902'">
            现价<span class="lg">￥{{data.commentBenefit.currentAmount}}</span>
            <span>价值￥{{data.commentBenefit.amount}}</span>{data.commentBenefit.name}}
          </div>
          <div class="lg" v-if="data.commentBenefit.couponCategory == '903'">
            <span class="lg">{{data.commentBenefit.amount}}折<</span>
            全场折扣券
          </div>
          <div v-if="data.commentBenefit.couponCategory == '9031'">
            <div class="lg">{{data.commentBenefit.amount}}折</div>
            {{data.commentBenefit.name}}
          </div>
          <div v-if="data.commentBenefit.couponCategory == '904'">
            <div v-if="data.commentBenefit.amount">价值<span class="lg">￥{{data.commentBenefit.amount}}</span></div>
            {{data.commentBenefit.name}}
          </div>
        </div>
        <div v-if="data.commentBenefit.category !== '1016'">
          <div>价值<span class="lg">￥{{data.commentBenefit.amount}}</span>代用币</div>
        </div>
        <div>提交评论后获得</div>
        <div class="button">领红包</div>
      </div>

      <div class="activity"
           :style="{backgroundImage: 'url('+ (data.lottery.picUrl||'/sui_assets/img/payment/activity.jpg') +')'}"
           v-if="data.lottery" v-on:click="openFn()">
        <div class="text-red">
          <div v-if="data.lottery.couponCategory == '901'&&data.lottery.category == '1016'">代金券</div>
          <div v-if="data.lottery.category == '1017'">代用币</div>
          <div v-else>{{data.lottery.name}}</div>
        </div>
        <div class="button">立即报名霸王餐</div>
      </div>
    </div>


    <div class="modal" v-if="phone1">
      <div class="modal-inner">
        <div class="modal-content">

          <div class="top">
            <!--<div class="card-box" v-bind:style="{backgroundImage:'url('+ vip.cardUrl+')'}">></div>-->
            <div class="card-text">红包未到账提醒</div>
            <div class="overflow">

              <div class="coupon" v-for="item in data.order.strategy.got">{{item.point}}{{item.name}} <span
                v-if="item.count">x{{item.count}}</span></div>
              <div class="coupon" v-if="data.order.strategy.points">{{data.order.strategy.points.point}}积分</div>
              <div class="coupon" v-if="data.order.gratuity&&data.order.gratuity.benefits">
                <span v-for="gift in data.order.gratuity.benefits">
                  <span v-if="gift.category == '1017'">{{gift.amount}}元</span>{{gift.name}}
                </span>
              </div>

            </div>
          </div>
          <div class="modal-phone">
            <input type="tel" v-model="phone1.phone" placeholder="输入您的手机号码" maxlength="11">
            <input type="tel" placeholder="输入收到的验证码" v-model="phone1.validateCode" maxlength="6">
            <div class="input-text" v-on:click.stop="validate1Fn">{{phone1.text}}</div>
            <div v-on:click.stop="bindPhone1" class="v-button">立即领取</div>
          </div>

          <div class="close" v-on:click="phone1=''"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        data: "",
        phone1: ""
      }
    },
    created: function () {
      this.initFn();
    },
    methods: {
      initFn: function () {
        let _self = this;
        let a = setInterval(function () {
          _self.$http.get("/praise/order/" + (_self.$route.query.oid || _self.$route.query.order)).then(response => {
            let data = response.body;
            if (data.code == 200) {
              clearInterval(a);
              if (data.result.step < 3) {
                _self.ajaxUrl('praise.html?pid=' + data.result.id);
                return;
              }
              if (data.result.step == 3) {
                _self.ajaxUrl("prize.html?cid=" + data.result.candidateId)
              }
              _self.data = data.result;
              if ((_self.data.order.obtained == false) && (_self.data.order.gratuity || _self.data.order.strategy.got)) {
                _self.bindFn();
              }
            } else {
              if (data.code == 404000) {
                _self.$toast("正在查询支付结果");
              } else {
                alert(data.message);
              }
            }
          });
        }, 1000)
      },
      openFn: function () {
        this.ajaxUrl("comment.html?oid=" + (this.$route.query.order || this.$route.query.oid));
      },
      bindFn: function () {
        this.phone1 = {text: '获取验证码', able: true};
      },
      validate1Fn() {
        if (!this.phone1.able) return;
        if (!this.phone1.phone || this.phone1.phone.length != 11) {
          this.$toast("手机格式不正确");
          return;
        }
        this.phone1.able = false;
        let _self = this;
        this.$http.post("/validate/bindup", {"phone": this.phone1.phone}).then(response => {
          let data = response.data;
          if (data.code == 200) {
            this.$toast("获取成功");
            let second = 90;
            let init = setInterval(function () {
              second--;
              if (!second || !_self.phone1) {
                clearInterval(init);
                _self.phone1.text = "重新获取验证码";
                _self.phone1.able = true;
                return;
              }
              _self.phone1.text = "已发送 " + second + " s";
            }, 1000);
          } else {
            this.phone1.able = true;
            this.$toast(data.message);
          }
        });
      },
      bindPhone1() {
        if (this.phone1.phone && this.phone1.validateCode && this.phone1.phone.length == 11 && this.phone1.validateCode.length == 6) {
          let jsonA = {shopId: this.$route.query.id};
          jsonA.phone = this.phone1.phone;
          jsonA.validateCode = this.phone1.validateCode;
          this.$http.post("/phone/bindup", jsonA).then(response => {
            let data = response.data;
            if (data.code == 200) {
              this.phone = "";
              if (data.result && data.result.token) {
                this.$cookie.set("token", data.result.token, {"expires": '30d'});
              }
              this.$toast("操作成功");
              this.initFn();
            } else {
              this.$toast(data.message);
            }
          });
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../sui_assets/scss/payment.scss";
</style>
