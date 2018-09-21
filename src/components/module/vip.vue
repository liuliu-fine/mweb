<template>
  <div class="vipModule" v-if="data">
    <div class="current-grade" v-if="data.currentGradeName||data.toName">{{data.toName||data.currentGradeName}}</div>
    <div class="box" v-if="data.upgradeBenefit">
      <div class="gift-title"></div>
      <div class="gift-wrapper1">
        <div class="gift-wrapper">
          <div class="add swiper-slide" v-for="(item,key) in data.upgradeBenefit.coupons" :key="key"
               v-on:click="couponDetailFn(key)">
            <div class="corn" v-if="item.count>1">{{item.count}}张</div>
            <div class="coupon-bg" :class="item.todayUsable?'today':''"
                 :style="{backgroundImage: 'url('+ (item.picUrl||'./sui_assets/img/mass/place-coupon.png') +')'}"
                 style="margin-bottom: 1rem"></div>
            <div class="name ellipsis" style="-webkit-box-orient: vertical;">{{item.name}}</div>
            <div class="limit ellipsis" style="-webkit-box-orient: vertical;">{{item.times}};{{item.useStrategy}}</div>
          </div>
          <div class="swiper-slide" v-if="data.upgradeBenefit.reward">
            <div class="coupon-bg"
                 style="background-image: url('./sui_assets/img/mass/place-reward.png');margin-bottom: 1rem;"></div>
            <div class="name">{{data.upgradeBenefit.reward}}元代用币</div>
            <div class="limit">直接发放到账户</div>
          </div>
          <div class="swiper-slide" v-if="data.upgradeBenefit.point">
            <div class="coupon-bg"
                 style="background-image: url('./sui_assets/img/mass/place-point.png');margin-bottom: 1rem;"></div>
            <div class="name">{{data.upgradeBenefit.point}}积分</div>
            <div class="limit">直接发放到账户</div>
          </div>
        </div>
      </div>
    </div>
    <div class="box" v-if="data.activity">
      <div class="coupon-title"></div>
      <div class="label" v-if="data.activity.birth"><span class="icon3"></span>生日礼券，让你每个生日都有惊喜</div>
      <div class="birth-wrapper" v-if="data.activity.birth">
        <ul>
          <li v-if="data.activity.birth[0].content">生日当月会赠送<span v-for="text in data.activity.birth[0].content">{{text}};</span>
          </li>
          <li>{{data.activity.birth[0].times}}</li>
          <li>仅限本人持券使用</li>
          <li>不与其他优惠叠加</li>
        </ul>
        <div class="birth-inner" v-if="data.activity.birthday" style="padding-top: 1.5rem;">
          <span class="bold">{{data.activity.birthday.split("-")[0]}}</span>
          <span>年</span>
          <span class="bold">{{data.activity.birthday.split("-")[1]}}</span>
          <span>月</span>
          <span class="bold">{{data.activity.birthday.split("-")[2]}}</span>
          <span>日</span>
        </div>
        <div class="birth-inner" @click="tapBirthFn" v-else>
          <div>
            <input type="number" class="number" v-model="post.month">月
            <input type="number" class="number" v-model="post.day">日
          </div>
          <div class="btn">完善生日信息</div>
        </div>
      </div>
      <div class="label" v-if="data.activity.irregular"><span class="icon2"></span>不定期礼券，随时给你小惊喜</div>
      <div class="coupon-wrapper" v-if="data.activity.irregular">
        <ul>
          <li v-html="replaceMethod(data.activity.irregular.contents[0])"></li>
          <li>{{data.activity.irregular.time}}</li>
        </ul>
      </div>

    </div>
    <div class="box">
      <div class="account-title"></div>
      <div class="account-wrapper">
        <router-link :to="{ path: 'activity', query:  $route.query}" class="account-item account-item1">
          <div class="title">热门活动</div>
          <div>海量活动等你来</div>
        </router-link>
        <router-link :to="{ path: 'charge', query:  $route.query}" class="account-item account-item2">
          <div class="title">充值回馈</div>
          <div>充的多送的多</div>
        </router-link>
        <router-link :to="{ path: 'exchange', query:  $route.query}" class="account-item account-item3">
          <div class="title">会员商城</div>
          <div>积分兑换特价秒杀</div>
        </router-link>
      </div>

    </div>
    <div class="box" v-if="data.shopActivities">
      <div class="shop-title"></div>
      <div class="shop-wrapper">
        <div class="shop-item" v-for="item in data.shopActivities" v-on:click="replaceUrl(item)">
          <div class="title"><span :class="'type'+item.category"></span>{{type[item.category]}}</div>
          <div class="text">
            <div class="ellipsis" style="-webkit-box-orient: vertical;">{{item.contents.join(";")}}</div>
            <div class="period" v-if="item.period">{{item.period}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="box" v-if="data.serviceActivities">
      <div class="service-title"></div>
      <div class="service-wrapper">
        <router-link :to="{ path: 'userLine', query:  $route.query}" class="service-item1"
                     v-if="data.serviceActivities.includes('6060')">
        </router-link>
        <router-link :to="{ path: 'userReserve', query:  $route.query}" class="service-item2"
                     v-if="data.serviceActivities.includes('6054')">
        </router-link>
      </div>
    </div>
    <div v-if="upgrade">
      <div style="height: 3rem"></div>
      <div class="upgrade-btn" v-on:click="showFn" v-if="data.strategies">升级为{{data.toName}}</div>
      <div class="upgrade-btn disabled" style="box-shadow: none" v-on:click="showFn" v-else>
        您已是{{data.currentGradeName}}
      </div>
    </div>
    <router-link v-if="!upgrade&&canUpgrade" :to="{ path: 'vip', query:  $route.query}" class="upgrade-btn">
      <span v-if="data.currentGradeName">您当前是{{data.currentGradeName}}</span><span v-else>您还不是本店会员</span>，升级为更高级别会员
    </router-link>
    <div class="upgradeModal" v-if="show">
      <div class="upgrade-wrapper">
        <div class="title">请选择升级方式</div>
        <div class="content">
          <div class="item" v-for="(item,key) in data.strategies">
            <div class="text">{{item.content}}</div>
            <div class="click" @click="submitFn(key)" v-if="rule[item.type]" :class="{'unusable':!item.usable}">
              立即{{rule[item.type]}}
            </div>
          </div>
        </div>
        <div class="close">
          <div class="close-btn" v-on:click="showFn">关闭</div>
        </div>
      </div>
    </div>
    <awesome-picker
      ref="picker3"
      :textTitle="picker3.textTitle"
      :type="picker3.type"
      :anchor="picker3.anchor"
      @confirm="handlePicker3Confirm">
    </awesome-picker>
  </div>

</template>
<script>

  import Vue from 'vue'
  import AwesomePicker from 'vue-awesome-picker';

  Vue.use(AwesomePicker);
  export default {
    name: "VipModule",
    props: ['data', 'upgrade', 'canUpgrade'],
    data() {
      return {
        // data: "",
        post: {},
        show: false,//升级弹窗
        rule: {
          "FREE": "领取",
          "BUY": "购买",
          "CHARGE": "充值",
          "POINT_EXCHANGE": "兑换"
        },
        type: {
          // "6001": "升级",
          "6002": "充值好礼",
          "6003": "积分兑换",
          "6004": "免费领券",
          "6005": "满额打折",
          "6006": "特价菜品",
          "6007": "消费返券",
          "6008": "消费积分",
          "6009": "积分抵现",
          "6012": "以少抵多",
          "6014": "满额立减",
          "6015": "优惠套餐",
          "6017": "充值免单"
        },
        payment: "",
        picker3: {
          anchor: [],
          textTitle: '日期选择',
          type: 'date'
        }
      }
    },
    created() {
      this.getModeFn();
    },
    methods: {
      getModeFn() {
        let _self = this;
        _self.$http.get("/shop/" + (_self.$route.query.id || _self.$route.query.guestid) + "/paymode", {key: {"type": this.getVersion()}}).then(response => {
          let data1 = response.body;
          if (data1.code == 200) {
            if (response.body.result.oasis) {
              _self.author();
              return;
            }
            _self.payment = data1.result.payMode;
          }
        });
      },
      showFn() {
        this.$set(this, "show", !this.show);
      },
      tapBirthFn() {
        this.$refs.picker3.show()
      },
      handlePicker3Confirm(v) {
        this.picker3.anchor = v;
        this.post.birthday = (1900 + v[0].index) + '-' + (v[1].index + 1) + "-" + (v[2].index + 1);
        let json = {
          birthday: this.post.birthday
        };
        this.$http.post("/user", json).then(response => {
          let data = response.body;
          if (data.code == 200) {
            this.$toast("提交成功");
            location.reload();
          } else {
            this.$toast(data.message);
          }
        });
      },
      replaceUrl(item) {
        let json = {};
        if (this.$route.query.id) {
          json.id = this.$route.query.id;
        } else {
          json.guestid = this.$route.query.guestid;
        }
        switch (item.category) {
          //送券
          case '6004':
            this.ajaxUrl('couponActivity.html?aid=' + item.activityId);
            break;
          //套餐
          case "6015":
            this.ajaxUrl('mealActivity.html?aid=' + item.activityId);
            break;
          //充值
          case "6002":
            this.$router.push({path: 'charge', query: json});
            // this.ajaxUrl('charge.html');
            break;
          //入会及升级
          case "6001":
            this.$router.push({path: '/upgrade', query: this.$route.query});
            // this.ajaxUrl('upgrade.html?tid=' + item.activityId);
            break;
          //积分兑换
          case "6003":
            this.$router.push({path: '/exchange', query: this.$route.query});
            // this.ajaxUrl('exchange.html');
            break;
          //砍价
          case "6041":
            this.ajaxUrl('grouponInfo.html?aid=' + item.activityId);
            break;
          //评赏
          case "6050":
            location.href = '/lottery.html?aid=' + item.activityId + "&guestid=" + item.guestId;
            break;
          //抽奖
          case "6051":
            location.href = '/raffleActivity.html?aid=' + item.activityId + "&guestid=" + item.guestId;
            break;
          default:
            this.ajaxUrl('activity.html?aid=' + item.activityId);
        }
      },
      redirectUser() {
        let _self = this;
        let json = {};
        if (_self.$route.query.id) {
          json.id = _self.$route.query.id;
        } else {
          json.guestid = _self.$route.query.guestid;
        }
        _self.$router.push({path: 'user', query: json});
      },
      couponDetailFn: function (index) {
        let item = this.data.upgradeBenefit.coupons[index];
        if (item) {
          this.ajaxUrl("couponDetail.html?cid=" + item.id + (item.type == '1017' ? ('&type=reward') : ''));
        }
      },
      submitFn: function (index) {
        this.$loading();
        let _self = this;
        if (!index) {
          for (var i in this.data.strategies) {
            if (this.data.strategies[i].type == 'FREE') {
              index = i;
            }
          }
        }
        if (this.data.strategies[index].type == 'FREE') {
          let para = {"id": (this.$route.query.id || this.$route.query.guestid)};
          if (this.$route.query.type == "channel") {
            para.channel = "401"
          }
          this.$http.post("/membership", para).then(response => {
            let data = response.body;
            _self.$loading.close();
            if (data.code == 200) {
              _self.$message("操作成功！", "请在“会员中心”查看权益，使用自助买单可自动抵用优惠。", function () {
                _self.redirectUser();
              });
            } else {
              alert(data.message);
            }
          });
          return;
        }
        let payment = this.payment;
        let para = {
          activityId: this.data.strategies[index].activityId,
          payCategory: payment,
          url: encodeURIComponent(location.href),
          failedUrl: encodeURIComponent(location.href)
        };
        this.$http.post("/benefit/upgrade/guest/" + (this.$route.query.id || this.$route.query.guestid), para).then(response => {
          let data = response.body;
          if (data.code !== 200) {
            _self.$loading.close();
            alert(data.message);
            return;
          }
          let order_id = data.result.orderId;
          if (data.result.url) {
            location.href = data.result.url;
            return;
          }
          switch (payment) {
            case "1005":
              let js = data.result.js;
              let pay = data.result.pay;
              pay.success = function () {
                _self.$loading.close();
                _self.$message("操作成功！", "请在“会员中心”查看权益，使用自助买单可自动抵用优惠。", function () {
                  _self.redirectUser();
                });
              };
              pay.cancel = function () {
                _self.cancelPay(order_id);
              };
              pay.fail = function (res) {
                _self.cancelPay(order_id);
              };
              js.debug = false;
              js.jsApiList = ['chooseWXPay'];
              delete js.url;
              wx.config(js);
              wx.ready(function () {
                wx.chooseWXPay(pay);
              });
              break;
            case "1101":
              AlipayJSBridge.call("tradePay", {
                tradeNO: data.result.pay.tradeNO
              }, function (result) {
                if (result.resultCode == "6001") {
                  _self.cancelPay(order_id);
                } else if (result.resultCode == "9000") {
                  _self.$loading.close();
                  _self.$message("操作成功！", "请在“会员中心”查看权益，使用自助买单可自动抵用优惠。", function () {
                    _self.redirectUser();
                  });
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
    }
  }
</script>
<style lang="scss" scoped>
  @import "./vip.scss";
</style>
