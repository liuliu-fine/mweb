<template>
  <div class="upgrade" v-if="data">
    <div class="bg">
      <div class="name">{{data.toName}}</div>
    </div>
    <div class="box1" v-if="data.coupons||data.reward||data.point">
      <swiper :options="swiperOption">
        <swiper-slide class="add" v-for="(item,key) in data.coupons"
                      :key="key">
          <div class="coupon-bg" :class="item.todayUsable?'today':''"
               :style="{backgroundImage: 'url('+ (item.picUrl||'./sui_assets/img/mass/place-coupon.png') +')'}"></div>
          <div class="name">{{item.name}}</div>
          <div class="limit">{{item.times}};{{item.useStrategy}}</div>
        </swiper-slide>
        <swiper-slide class="" v-if="data.reward">
          <div class="coupon-bg" style="background-image: url('./sui_assets/img/mass/place-reward.png')"></div>
          <div class="name">{{data.reward}}元代用币</div>
        </swiper-slide>
        <swiper-slide class="swiper-slide" v-if="data.point">
          <div class="coupon-bg" style="background-image: url('./sui_assets/img/mass/place-point.png')"></div>
          <div class="name" style="padding-top: 2rem">{{data.point}}积分</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="box2" v-if="data.activities">
      <div class="item" v-for="item in data.activities" v-if="item.category !='6011'" v-on:click="redirectFn(item)">
        <div class="name" style="-webkit-box-orient: vertical;">{{item.contents.join("，")}}</div>
        <div class="addon">{{item.period}} {{item.time}}</div>
      </div>
    </div>
    <div class="box3" v-if="data.strategies">
      <img src="/sui_assets/img/upgrade/title3.svg" style="margin-bottom: 1rem">
      <div class="item" v-for="item in data.strategies">{{item.content}}</div>
    </div>
    <div v-if="data.needPhone" style="height: 12rem"></div>
    <div v-else style="height: 5rem"></div>
    <div class="fixed" v-if="data.currentGradeName">
      <div class="btn" v-on:click="ajaxUrl('vip.html')">您已是{{data.currentGradeName}}</div>
    </div>
    <div class="fixed" v-else-if="data.strategies">
      <div class="" v-if="data.needPhone">
        <div class="modal-phone">
          <input type="tel" placeholder="输入您的手机号码" v-model="phone.phone" id="tel" maxlength="11" minlength="11">
          <div class="input-text" v-on:click.stop="validateFn">{{phone.text}}</div>
          <input type="tel" placeholder="输入收到的验证码" v-model="phone.validateCode" id="validate" maxlength="6">
          <div id="bindPhone" v-on:click.stop="bindPhone" class="v-button">激活会员</div>
        </div>
      </div>
      <div v-else>
        <div class="btn" v-if="data.free" v-on:click="submitFn()">立即领取</div>
        <div class="btn" v-else v-on:click="checked=false" v-show="checked">立即升级</div>
        <div class="rule-text" v-if="!data.free" v-show="!checked">
          <div class="i-flex" v-for="(item,index) in data.strategies">
            <div class="text">{{item.content}}</div>
            <div class="btn" v-if="item.usable&&item.type=='FREE'" v-on:click="submitFn(index)">去升级
            </div>
            <div class="btn" v-else-if="item.usable&&payment&&item.type!='SUM_COST'" v-on:click="submitFn(index)">去升级
            </div>
          </div>
          <div class="close" v-on:click="checked = true"></div>
        </div>
      </div>
    </div>
    <div class="page-group"></div>
  </div>


</template>

<script>

  import Vue from 'vue'
  import 'swiper/dist/css/swiper.css'
  import VueAwesomeSwiper from 'vue-awesome-swiper'

  Vue.use(VueAwesomeSwiper)

  export default {
    name: 'upgrade',
    data() {
      const self = this;
      return {
        data: "",
        payment: "",
        checked: true,
        phone: {text: '获取验证码', able: true},
        activeIndex: 0,
        swiperOption: {
          centeredSlides: true,
          slidesPerView: 1.5,
          spaceBetween: 15,
          on: {
            click() {
              self.couponDetailFn(this.activeIndex);
            }
          }
        }
      }
    },
    beforeCreate: function () {
      let _self = this;
      let json = {};
      if (this.$route.query.tid) {
        json.gradeId = this.$route.query.tid;
      }
      this.$http.get("/membership/guest/" + (this.$route.query.id || this.$route.query.guestid) + "/grade", {key: json}).then(response => {
        let data = response.body;
        if (data.code == 200) {
          _self.data = data.result;
          _self.$nextTick(function () {
            _self.$http.get("/shop/" + (_self.$route.query.id || _self.$route.query.guestid) + "/paymode", {key: {"type": this.GLOBAL.version}}).then(response => {
              let data1 = response.body;
              if (data1.code == 200) {
                _self.payment = data1.result.payMode;
              }
            });
            // if ($(".swiper-slide").length > 0) {
            //   new Swiper('.swiper-container', {
            //     slidesPerView: 1.5,
            //     spaceBetween: 15,
            //     centeredSlides: true,
            //   });
            // }
            // bind();
          })
        } else {
          if (data.code == 4050450) {
            alert("您已经是最高等级会员");
            this.ajaxUrl("vip.html");
          } else {
            // location.href = "error.html#3"
          }
        }
      });
    },
    methods: {
      validateFn() {
        if (!this.phone.able) return;
        if (!this.phone.phone || this.phone.phone.length != 11) {
          this.$toast("手机格式不正确");
          return;
        }
        this.phone.able = false;
        let _self = this;
        this.$http.post("/validate/bindup", {"phone": this.phone.phone}).then(response => {
          let data = response.data;
          if (data.code == 200) {
            this.$toast("获取成功");
            let second = 90;
            let init = setInterval(function () {
              second--;
              if (!second || !_self.phone) {
                clearInterval(init);
                _self.phone.text = "重新获取验证码";
                _self.phone.able = true;
                return;
              }
              _self.phone.text = "已发送 " + second + " s";
            }, 1000);
          } else {
            this.phone.able = true;
            this.$toast(data.message);
          }
        });
      },
      bindPhone() {
        let _self = this;
        if (this.phone.phone && this.phone.validateCode && this.phone.phone.length == 11 && this.phone.validateCode.length == 6) {
          let jsonA = {shopId: this.$route.query.id};
          jsonA.phone = this.phone.phone;
          jsonA.validateCode = this.phone.validateCode;
          this.$http.post("/phone/bindup", jsonA).then(response => {
            let data = response.data;
            if (data.code == 200) {
              this.$set(this.data, "needPhone", false);
              if (data.result && data.result.token) {
                this.$cookie.set("token", data.result.token, {"expires": '30d'});
              }
              for (let i in this.data.strategies) {
                if (this.data.strategies[i].type == 'FREE') {
                  this.$message("操作成功！", "请在“会员中心”查看权益，使用自助买单可自动抵用优惠。", function () {
                    _self.redirectUser();
                  })
                }
              }
              this.checked = false;
            } else {
              this.$toast(data.message);
            }
          });
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
      couponDetailFn: function (index) {
        let item = this.data.coupons[index];
        if (item) {
          this.ajaxUrl("couponDetail.html?cid=" + item.id + (item.type == '1017' ? ('&type=reward') : ''));
        }
      },
      redirectFn: function (item) {
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
      }
    }

  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../sui_assets/scss/upgrade.scss";
</style>
