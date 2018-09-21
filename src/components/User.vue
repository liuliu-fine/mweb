<template>
  <div class="user" v-if="data">
    <div class="content">
      <div class="i-bg" v-if="data.existMemberRule">
        <div class="i-card" v-if="!data.phone" :style="{backgroundImage: 'url('+ (data.cardUrl||'') +')'}"
             v-on:click="bindFn()">
          <div>
            <img class="avatar" :src="data.logoUrl">
            <span class="shop">{{data.brandName}}</span>
          </div>
          <div class="i-footer1">
            验证手机号
          </div>
        </div>
        <router-link class="i-card" :to="{ path: 'vip', query:  $route.query}" v-else
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
          <div class="i-footer1" v-else>
            立即激活
          </div>
        </router-link>
      </div>
      <div class="benefit-wrapper">
        <router-link class="point-item" :to="{ path: 'exchange', query:  $route.query}">
          {{data.point||0}}
        </router-link>
        <div class="separate"></div>
        <router-link class="coupon-item" :to="{ path: 'coupon', query:  $route.query}">
          {{data.couponCount||0}}
        </router-link>
        <div class="separate"></div>
        <router-link class="charge-item" :to="{ path: 'charge', query:  $route.query}">
          {{data.charge||0}}
        </router-link>
        <div class="separate"></div>
        <router-link class="reward-item" :to="{ path: 'reward', query:  $route.query}">
          {{data.reward||0}}
        </router-link>
      </div>
    </div>
    <vip-module v-bind:data="upgrade" v-bind:upgrade="false" v-bind:canUpgrade="data.canUpgrade"></vip-module>
    <div class="bar">
      <div v-on:click="ajaxUrl('record.html')"><span class="icon1"></span>订单记录</div>
      <router-link class="i-list" :to="{ path: 'setting', query:  $route.query}">
        <span class="icon2"></span>账户设置
      </router-link>
    </div>
    <div style="height: 3rem"></div>
  </div>
</template>

<script>
  import vipModule from "./module/vip"

  export default {
    name: "User",
    data() {
      return {
        data: "",
        upgrade: ""
      }
    },
    components: {
      vipModule
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
            this.$cookie.set("relation_id", this.data.relationId || '');
            localStorage.setItem("reward_count", this.data.reward || 0);
            localStorage.setItem("relation_id", this.data.relationId || '');

            if (!this.data.phone && !this.$cookie.get("phone_take")) {
              this.$bind({
                title: "绑定手机号",
                text: "绑定手机号后后，获得更多权益",
                submit: function () {
                  _self.initFn();
                }
              });
              this.$cookie.set("phone_take", true, {"expires": '5m'});
            }

          } else {
            // alert(response.body.message);
          }
        });
        this.$http.get("/membership/guest/" + (this.$route.query.id || this.$route.query.guestid) + "/grade").then(response => {
          if (response.body.code == 200) {
            this.upgrade = response.body.result;
          }

        });
      },
      bindFn() {
        let _self = this;
        this.$bind({
          title: "绑定手机号",
          text: "绑定手机号后后，获得更多权益",
          submit: function () {
            _self.initFn();
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../sui_assets/scss/user.scss";

</style>
