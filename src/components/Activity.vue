<template>
  <div class="activity">
    <div class="items" v-for="item in data" v-on:click="redirectFn(item)">
      <div v-bind:class="item.started?'started':'unstarted'"></div>
      <div class="item">
        <div class="img" :style="{backgroundImage: 'url('+ (item.picUrl) +')'}"></div>
        <div class="content">
          <div class="name">{{item.name}}</div>
          <div class="grey">{{item.time}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "activity",
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
        this.$http.get("/activities/transmit/guest/" + (this.$route.query.id || this.$route.query.guestid)).then(response => {
          if (response.body.code == 200) {
            this.data = response.body.result;
          }
        });
      },
      redirectFn(item) {
        let json = {};
        if (this.$route.query.id) {
          json.id = this.$route.query.id;
        } else {
          json.guestid = this.$route.query.guestid;
        }
        switch (item.activityCategory) {
          //送券
          case '6004':
            this.ajaxUrl('couponActivity.html?aid=' + item.activityId);
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
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../sui_assets/scss/activity.scss";
</style>
