<template>
  <div class="vip" v-if="data">
    <div class="card-wrapper">
      <swiper :options="swiperOption">
        <swiper-slide class="card" v-for="(item,key) in data.strategies"
                      :key="key">
          <div class="card-bg" :class="{'flipped':item.click}" v-on:click="switchCardFn(item)">
            <div class="front" :class="item.todayUsable?'today':''"
                 :style="{backgroundImage: 'url('+ (item.cardUrl||'./sui_assets/img/mass/place-coupon.png') +')'}">
              <div class="flex">
                <img class="avatar" :src="data.logoUrl">
                <div class="name">
                  <div></div>
                  <div>{{item.toName}}</div>
                </div>
                <img class="logo" :src="data.logoUrl">

              </div>
              <div class="no">{{data.memberCardNo}}</div>
            </div>
            <div class="back1">2</div>
            <!-- <div class="cover" v-on:click.stop="submitFn">
               <div class="btn">升级{{item.toName}}</div>
             </div>-->
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="benefit-wrapper">
      <router-link class="point-item" :to="{ path: 'exchange', query:  $route.query}">
        {{data.point}}33
      </router-link>
      <router-link class="coupon-item" :to="{ path: 'coupon', query:  $route.query}">
        {{data.couponCount}}33
      </router-link>
      <router-link class="charge-item" :to="{ path: 'charge', query:  $route.query}">
        {{data.charge}}33
      </router-link>
      <div class="reward-item" v-on:click="ajaxUrl('reward.html?count='+ data.reward)">{{data.reward}}33</div>
    </div>
    <div class="box">
      <div class="current-grade">您当前是银卡会员</div>
      <div class="coupon-title"></div>
      <div class="label"><span class="icon1"></span>银卡会员特权礼券已发放至您的账户</div>
      <div class="gift-wrapper1">
        <div class="gift-wrapper">
          <div class="gift-item">
            <div class="title">￥<span class="amount">100</span>代金券</div>
            <div class="content">
              <ul>
                <li>获得后3个月内有效</li>
                <li>满200元可用</li>
              </ul>
            </div>
          </div>
          <div class="gift-item">
            <div class="title">￥<span class="amount">100</span>代金券</div>
            <div class="content">
              <ul>
                <li>获得后3个月内有效</li>
                <li>满200元可用</li>
              </ul>
            </div>
          </div>
          <div class="gift-item">
            <div class="title">￥<span class="amount">100</span>代金券</div>
            <div class="content">
              <ul>
                <li>获得后3个月内有效</li>
                <li>满200元可用</li>
              </ul>
            </div>
          </div>
          <div class="gift-item">
            <div class="title">￥<span class="amount">100</span>代金券</div>
            <div class="content">
              <ul>
                <li>获得后3个月内有效</li>
                <li>满200元可用</li>
              </ul>
            </div>
          </div>
          <div class="gift-item">
            <div class="title">￥<span class="amount">100</span>代金券</div>
            <div class="content">
              <ul>
                <li>获得后3个月内有效</li>
                <li>满200元可用</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="label"><span class="icon2"></span>不定期礼券，随时给你小惊喜</div>
      <div class="coupon-wrapper">
        <ul>
          <li>不定期送出各种优惠券</li>
          <li>不再为吃饭精打细算</li>
          <li>不定期送出各种优惠券</li>
          <li>不再为吃饭精打细算</li>
        </ul>
      </div>
      <div class="label"><span class="icon3"></span>生日礼券，让你每个生日都有惊喜</div>
      <div class="birth-wrapper">
        <ul>
          <li>生日当月会赠送200元代金券，生日当月有效</li>
          <li>仅限本人持券使用</li>
          <li>不与其他优惠叠加</li>
        </ul>
        <div class="birth-inner">
          <input type="number" class="number" v-model="post.month">月
          <input type="number" class="number" v-model="post.day">日
          <div class="btn" v-on:click="birthFn">完善生日信息</div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="account-title"></div>
      <div class="account-wrapper">
        <div class="account-item account-item1">
          <div class="title">热门活动</div>
          <div>海量活动等你来</div>
        </div>
        <div class="account-item account-item2">
          <div class="title">充值回馈</div>
          <div>充的多送的多</div>
        </div>
        <div class="account-item account-item3">
          <div class="title">会员商城</div>
          <div>精美菜品半价起售</div>
        </div>
      </div>

    </div>
    <div class="box">
      <div class="shop-title"></div>
      <div class="shop-wrapper">
        <div class="pre">针对会员在本店消费，积分可累计，在商城进行优惠券兑换</div>
        <div class="shop-item">
          <div class="title ellipsis"><span class="type6002"></span>充值好礼</div>
          <div class="text ellipsis">title</div>
        </div>
        <div class="shop-item">
          <div class="title ellipsis"><span class="type6002"></span>充值好礼</div>
          <div class="text ellipsis">title</div>
        </div>
        <div class="shop-item">
          <div class="title ellipsis"><span class="type6021"></span>充值好礼</div>
          <div class="text ellipsis">title</div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="service-title"></div>
      <div class="service-wrapper">
        <div class="pre">为会员量身定制的服务特权，让您尊享会员身份</div>
        <div class="service-item1"></div>
        <div class="service-item2"></div>
      </div>
    </div>
    <div class="bar">
      <div><span class="icon1"></span>订单记录</div>
      <div><span class="icon2"></span>账户设置</div>
    </div>
    <div class="upgrade">升级成为更高级会员</div>
  </div>

</template>
<script>
  import Vue from 'vue'
  import 'swiper/dist/css/swiper.css'
  import VueAwesomeSwiper from 'vue-awesome-swiper'

  Vue.use(VueAwesomeSwiper)

  export default {
    name: "User",
    data() {
      const _self = this;
      return {
        data: "",
        post: {},
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
        swiperOption: {
          centeredSlides: true,
          slidesPerView:
            1.2,
          spaceBetween:
            15,
          pagination:
            {
              el: '.swiper-pagination'
            }
          ,
          on: {
            click() {
              // self.couponDetailFn(this.activeIndex);
            }
          }
        }

      }
    },
    created() {
      this.initFn();
    },
    methods: {
      initFn() {
        let _self = this;
        this.$http.get("/membership/guest/" + (this.$route.query.id || this.$route.query.guestid)).then(response => {
          let data = response.body;
          if (data.code == 200) {
            _self.data = data.result;
            _self.$nextTick(function () {

            })
          }
        });
      },
      switchCardFn(item) {
        this.$set(item, "click", !item.click);
      },
      birthFn() {
        let json = {
          birthday: this.post.month + "-" + this.post.day
        };
        this.$http.post("/user", json).then(response => {
          let data = response.body;
          if (data.code == 200) {
            this.$toast("操作成功!");

          } else {
            this.$toast(data.message);
          }
        });
      },
      submitFn() {

      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../sui_assets/scss/vip.scss";
</style>
