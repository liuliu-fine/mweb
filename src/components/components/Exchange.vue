<template>
  <div class="exchange">
    <div class="header">
      <div class="">当前积分</div>
      <div>
        <div class="amount">{{data.point}}</div>
        <div class="btn-record">积分记录</div>
      </div>
    </div>
    <div class="content">
      <div v-for="activity in data.activity">
        <div class="item" :style="{backgroundImage: 'url('+ (activity.coupons?(activity.coupons[0].picUrl||'/sui_assets/img/exchange/placeholder.jpg'):(activity.desUrl||'/sui_assets/img/exchange/placeholder.jpg')) +')'}">
          <div class="remain" v-if="activity.remainCount!==undefined">{{activity.remainCount}}</div>
          <div class="addon">
            <div class="left" v-if="activity.type=='1020'">
              <div class="ellipsis bold">{{activity.name}}<span class="name">会员升级</span></div>
              <div class="ellipsis text-xs" v-if="activity.from">仅限：{{activity.from}}</div>
            </div>
            <div class="left" v-for="coupon in activity.coupons" v-else>
              <div class="ellipsis bold">￥{{coupon.amount}}<span class="name">{{coupon.name}}</span></div>
              <div class="ellipsis text-xs"><span v-if="activity.from">仅限：{{activity.from}}</span> {{coupon.times}}</div>
            </div>
            <div class="right" v-on:click="submitFn(activity.activityId,activity.ruleTupleId,activity.usable)">{{activity.amount}}</div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "exchange",
    data() {
      return {
        data: ""
      }
    },
    created() {
      this.initFn();
    },
    methods: {
      initFn() {
        this.$http.get("/activities/exchange/guest/" + (this.$route.query.id || this.$route.query.guestid)).then(response => {
          if (response.body.code == 200) {
            this.data = response.body.result;
          } else {
            this.$toast(response.body.message);
          }
        });
      },
      submitFn(aid, rid, usable) {
        if (!usable) {
          this.$toast("您还不满足兑换条件");
          return;
        }
        let para = {
          activityId: aid,
          ruleTupleId: rid
        }
        this.$http.post("/benefit/exchange/guest/" + (this.$route.query.id || this.$route.query.guestid), para).then(response => {
          if (response.body.code == 200) {
            this.$toast("兑换成功！");
            this.initFn();
          } else {
            this.$toast(response.body.message);
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../sui_assets/scss/exchange.scss";

</style>
