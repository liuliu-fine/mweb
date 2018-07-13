<template>
  <div class="payment" v-if="data">
    <div class="order" v-if="data.order">
      <img src="/sui_assets/img/payment/success.png" class="logo">
      <span class="text-lg">
        买单成功
      </span>
      <div class="text-md">本次支付 <span class="text-xl">{{data.order.strategy.finalAmount}}</span> 元</div>
      <div class="award border">
        <div class="left">付款信息</div>
        <div class="left text-bold">{{data.order.paymentModeText}}支付</div>
        <div class="right text-bold">{{data.order.strategy.finalAmount}}</div>
      </div>
      <div class="award border" v-if="data.order.strategy.got">
        <div class="left">获得奖励</div>
        <div class="left" style="width: auto">
          <div class="c-coupon" v-for="item in data.order.strategy.got">{{item.point}}{{item.name}} <span
            v-if="item.count">x{{item.count}}</span></div>
          <div class="c-point" v-if="data.order.strategy.points">{{data.order.strategy.points.point}}积分</div>
        </div>
        <div class="right">
          <div class="button"
               v-if="(data.order.obtained == false)&&(data.order.strategy.got)"
               v-on:click="bindFn">领取奖励
          </div>
        </div>
      </div>


    </div>
    <div class="benefit">
      <div class="title">精彩活动</div>
      <div class="activity" :style="{backgroundImage: 'url('+ (data.redEnvelopes.picUrl||'/sui_assets/img/payment/activity1.jpg') +')'}" v-on:click="openFn()" v-if="data.redEnvelopes" style="line-height: 1.4">
        <!--<div class="text-red">发红包</div>-->
        <div class="text-red">{{data.redEnvelopes.name}}</div>
        <!--<div v-if="data.redEnvelopes.category == '1016'">-->
        <!--<div v-if="data.redEnvelopes.couponCategory == '901'">-->
        <!--<span class="lg">￥{{data.redEnvelopes.amount}}</span>代金券-->
        <!--</div>-->
        <!--<div class="lg" v-if="data.redEnvelopes.couponCategory == '9011'">-->
        <!--<span class="lg">{{data.redEnvelopes.name}}</span>-->
        <!--</div>-->
        <!--<div v-if="data.redEnvelopes.couponCategory == '9021'||data.redEnvelopes.couponCategory == '902'">-->
        <!--现价<span class="lg">￥{{data.redEnvelopes.currentAmount}}</span>-->
        <!--<span>价值￥{{data.redEnvelopes.amount}}</span>{{data.redEnvelopes.name}}-->
        <!--</div>-->
        <!--<div class="lg" v-if="data.redEnvelopes.couponCategory == '903'">-->
        <!--<span class="lg">{{data.redEnvelopes.amount}}折<</span>-->
        <!--全场折扣券-->
        <!--</div>-->
        <!--<div v-if="data.redEnvelopes.couponCategory == '9031'">-->
        <!--<div class="lg">{{data.redEnvelopes.amount}}折</div>-->
        <!--{{data.redEnvelopes.name}}-->
        <!--</div>-->
        <!--<div v-if="data.redEnvelopes.couponCategory == '904'">-->
        <!--<div v-if="data.redEnvelopes.amount">价值<span class="lg">￥{{data.redEnvelopes.amount}}</span></div>-->
        <!--{{data.redEnvelopes.name}}-->
        <!--</div>-->
        <!--</div>-->
        <!--<div v-if="data.redEnvelopes.category !== '1016'">-->
        <!--<div>价值<span class="lg">￥{{data.redEnvelopes.amount}}</span>代用币</div>-->
        <!--</div>-->
        <!--<div>评论分享后好友可获得</div>-->
        <!--<div>{{data.redEnvelopes.name}}</div>-->


        <div class="button">发红包给好友</div>

        <div class="addon" v-if="data.commentBenefit">自己还可获得{{data.commentBenefit.name}}</div>

      </div>
      <div class="activity" :style="{backgroundImage: 'url('+ (data.commentBenefit.picUrl||'/sui_assets/img/payment/activity1.jpg') +')'}" v-on:click="openFn()" v-else-if="data.commentBenefit">
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
        <!--<div>{{data.commentBenefit.name}}</div>-->
        <div>提交评论后获得</div>
        <div class="button">领红包</div>
      </div>

      <div class="activity" :style="{backgroundImage: 'url('+ (data.lottery.picUrl||'/sui_assets/img/payment/activity.jpg') +')'}" v-if="data.lottery" v-on:click="openFn()">
        <!--<div class="text-red">霸王餐</div>-->
        <!--<div>最高<span class="lg">￥{{data.lottery.amount}}</span></div>-->
        <div class="text-red">
          <div v-if="data.lottery.couponCategory == '901'&&data.lottery.category == '1016'">代金券</div>
          <div v-if="data.lottery.category == '1017'">代用币</div>
          <div v-else>{{data.lottery.name}}</div>
        </div>
        <!--<div>邀请好友助力排名获得</div>-->
        <div class="button">立即报名霸王餐</div>
      </div>
    </div>
    <div class="page-group"></div>
  </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        data: "",
        state: ""
      }
    },
    created: function () {
      this.initFn();
    },
    methods: {
      initFn: function () {
        let _self = this;
        /* 查询支付结果
          y = setInterval(function () {
               rest("/order/" + $.fn.cookie("order_id") + "/pay/result", {}, "get", function (data1) {
                   if (data1.code == "200" || data1.code == "404014") {
                       clearInterval(y);
                   } else {
                       $.toast("支付结果查询中");
                   }
               });
           }, 3000);*/
        let a = setInterval(function () {
          _self.$http.get("/praise/order/" + _self.$route.query.order).then(response => {
            let data = response.body;
            if (data.code == 200) {
              clearInterval(a);
              if (data.result.step < 3) {
                this.ajaxUrl('praise.html?pid=' + data.result.id);
                return;
              }
              if (data.result.step == 3) {
                this.ajaxUrl("prize.html?cid=" + data.result.candidateId)
              }
              _self.data = data.result;
              // if ((data.result.order.obtained == false) && data.result.order.strategy && data.result.order.strategy.got) {
              //   _self.bindFn();
              // }
              //setTitle(data.result.brand + "领券助力");
              // if ((data.result.order.obtained == false) && data.result.order.strategy && (data.result.order.strategy.coupons || data.result.order.strategy.points)) {
              //   var str = "";
              //   if (data.result.order.strategy.coupons) {
              //     str = "<div class='v-coupon'>";
              //     for (var i in data.result.order.strategy.coupons) {
              //       str += "<div class='v-item'>" + data.result.order.strategy.coupons[i].name + "</div>";
              //     }
              //     str += "</div>";
              //   }
              //   if (data.result.order.strategy.points) {
              //     str += "<div class='v-point'><div class='v-item'>" + data.result.order.strategy.points.point + "积分</div></div>";
              //   }
              //   $(".page-group").html('<div class="earn-true">' +
              //     '<div class="big-title">恭喜获得以下权益！</div>' +
              //     str +
              //     '</div>' +
              //     '<div class="modal-button">立即领取</div>' +
              //     '<div class="md-close" onclick="$(\'.page-group\').hide();"></div>');
              //   $(".modal-button").click(function () {
              //     bindPhone();
              //     $("#submitFn").off().click(function () {
              //       if ($("#tel").val().length == 11 && $("#validate").val().length == 6) {
              //         $.showIndicator();
              //         var jsonA = {};
              //         if (key_json.id) {
              //           jsonA.shopId = _id
              //         } else {
              //           jsonA.guestId = _id
              //         }
              //         jsonA.phone = $("#tel").val();
              //         jsonA.validateCode = $("#validate").val();
              //         rest("/phone/bindup", jsonA, "post", function (data) {
              //           if (data.code == 200) {
              //             data.result && data.result.token && $.fn.cookie("token", data.result.token, {"expires": 30});
              //             $('.page-group').hide();
              //             $.toast("操作成功");
              //             refresh();
              //           } else {
              //             $("#validate").val("");
              //             $(".input-text").html("重新获取验证码");
              //             $.toast(data.message ? data.message : "请重试");
              //           }
              //         });
              //       } else {
              //         $.toast("请输入正确的验证码")
              //       }
              //     });
              //   });
              //   if (data.result.order.strategy.coupons || data.result.order.strategy.points) {
              //     $(".page-group").show();
              //   } else {
              //     $(".modal-button").click();
              //   }
              // }
            } else {
              if (data.code == 404000) {
                this.$toast("正在查询支付结果");
              } else {
                alert(data.message);
              }
            }
          });
        }, 1000)
      },
      openFn: function () {
        this.ajaxUrl("comment.html?oid=" + this.$route.query.order);
      },
      bindFn: function () {
        let _self = this;
        this.$bind({
          title: "绑定手机号",
          text: "绑定手机号后，权益自动到账",
          submit: function () {
            _self.initFn();
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../sui_assets/scss/payment.scss";
</style>
