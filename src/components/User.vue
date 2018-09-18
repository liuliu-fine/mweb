<template>
  <div class="user" v-if="data">
    <div class="content">
      <div class="i-bg" v-if="data.existMemberRule">
        <div class="i-card" v-on:click="ajaxUrl('vip.html')"
             :style="{backgroundImage: 'url('+ (data.cardUrl||'') +')'}">
          <div>
            <img class="avatar" :src="data.logoUrl">
            <span class="shop">{{data.brandName}}</span>
          </div>
          <div class="i-footer" v-if="data.memberGradeName">
            <div class="set-content">
              <div>{{data.memberGradeName}}</div>
              <div>NO. {{data.memberCardNo}}</div>
            </div>
            <div><span class="iconA"></span></div>
          </div>
          <div class="i-footer" v-else>
            <div class="set-content">
              <div style="font-size: .7rem">加入会员 尊享特权</div>
            </div>
            <div><span class="i-icon i-icon6"></span></div>
          </div>
        </div>
      </div>
      <div class="i-flex">
        <router-link class="item" :to="{ path: 'exchange', query:  $route.query}">
          <div class="icon-left i-icon0"></div>
          <div class="right">
            <div>积分<span class="pl">兑换</span></div>
            <div class="i-red">{{data.point||0}}</div>
          </div>
        </router-link>
        <router-link class="item" :to="{ path: 'charge', query:  $route.query}">
          <div class="icon-left i-icon3"></div>
          <div class="right">
            <div>余额<span class="pl">充值</span></div>
            <div class="i-red">{{data.charge||0}}</div>
          </div>
        </router-link>
        <router-link class="item" :to="{ path: 'coupon', query:  $route.query}">
          <div class="icon-left i-icon1"></div>
          <div class="right">
            <div>优惠券</div>
            <div class="text-xs">还有 <span class="i-red">{{data.couponCount||0}}</span> 张未用</div>
          </div>
        </router-link>
        <div class="item" v-on:click="ajaxUrl('reward.html?count='+ data.reward)">
          <div class="icon-left i-icon2"></div>
          <div class="right">
            <div>代用币</div>
            <div class="i-red">{{data.reward||0}}</div>
          </div>
        </div>
      </div>
      <div class="order hide" style="padding: .5rem 1rem .1rem;background: #f0f0f0">
        <div v-on:click="state()"
             style="background: linear-gradient(to right,orange,red);padding: .5rem 1rem;color: white;border-radius: 5px">
          <img src="sui_assets/img/coupon/run.gif" style="height: 1.2rem"> 买单进行中...<span
          class="pull-right">点击查看</span>
        </div>
      </div>
      <div class="i-list border-top" v-on:click="ajaxUrl('more.html')">
        <span class="i-icon i-more"></span>
        更多活动
      </div>
      <div class="i-list border-top" v-on:click="ajaxUrl('face.html')">
        <span class="i-icon i-code"></span>
        我的身份码
      </div>
      <div class="i-list" v-on:click="ajaxUrl('record.html')">
        <span class="i-icon i_record"></span>
        买单记录
      </div>
      <router-link class="i-list" :to="{ path: 'setting', query:  $route.query}">
        <!--<div class="i-list" v-on:click="ajaxUrl('userInfo.html')">-->
        <span class="i-icon i-userinfo"></span>
        账户设置
        <!--券待领-->
        <span class="earn-box1" v-if="data.obtaining">您有优惠尚未领取</span>
        <span class="phone-box" v-else-if="!data.phone">补全手机，保护/同步您的权益</span>
      </router-link>
      <!--</div>-->

    </div>
  </div>
</template>

<script>

  export default {
    name: "User",
    data() {
      return {
        data: "",
      }
    },
    created() {
      this.initFn();
    },
    methods: {
      initFn() {
        let _self = this;
        this.$http.get("/benefit/guest/" + (this.$route.query.id || this.$route.query.guestid)).then(response => {
          if (response.body.code == 200) {
            this.data = response.body.result;
            this.$cookie.set("reward", this.data.reward || 0);
            this.$cookie.set("relation_id", this.data.customerRelationId);
            if (!this.data.phone) {
              this.$bind({
                title: "绑定手机号",
                text: "绑定手机号后后，获得更多权益",
                submit: function () {
                  _self.initFn();
                }
              })
            }
          } else {
            // alert(response.body.message);
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../sui_assets/scss/user.scss";

</style>
