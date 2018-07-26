<template>
  <div class="exchange" v-if="data">
    <div class="header">
      <div class="">我的积分</div>
      <div>
        <div class="amount">{{data.point}}</div>
        <div class="btn-record" v-if="data.customerRelationId"
             v-on:click="ajaxUrl('pointRecord.html?rid='+ data.customerRelationId)">积分记录
        </div>
      </div>
    </div>
    <div class="content">
      <div v-for="activity in data.activity" v-on:click="directFn(activity.coupons)">
        <div class="item"
             :style="{backgroundImage: 'url('+ (activity.coupons?(activity.coupons[0].picUrl||'/sui_assets/img/exchange/placeholder.jpg'):(activity.orgDesUrl||'/sui_assets/img/exchange/placeholder.jpg')) +')'}">
          <div class="remain" v-if="activity.remainCount!==undefined">{{activity.remainCount}}</div>
          <div class="addon">
            <div class="left" v-if="activity.type=='1020'">
              <div class="ellipsis bold">{{activity.name}}<span class="name">会员升级</span></div>
              <div class="ellipsis text-xs" v-if="activity.from">仅限：{{activity.from}}</div>
            </div>
            <div class="left" v-for="coupon in activity.coupons" v-else>
              <div class="ellipsis bold"><span v-if="coupon.amount">￥{{coupon.amount}}</span><span class="name">{{coupon.name}}</span>
              </div>
              <div class="ellipsis text-xs"><span v-if="activity.from">仅限：{{activity.from}}</span> {{coupon.times}}
              </div>
            </div>
            <div class="right"
                 v-on:click.stop="submitFn(activity.activityId,activity.ruleTupleId,activity.usable,activity.amount)">
              {{activity.amount}}<span style="font-size: .75rem;">积分</span>
            </div>
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
            this.$cookie.set("point", this.data.point);
            this.$cookie.set("relation_id", this.data.customerRelationId);

          } else {
            this.$toast(response.body.message);
          }
        });
      },
      directFn: function (item) {
        if (item) {
          this.ajaxUrl("couponDetail.html?cid=" + item[0].id + (item[0].type == '1017' ? ('&type=reward') : ''));
        }
      },
      submitFn(aid, rid, usable, number) {
        if (!usable) {
          this.$toast("您还不满足兑换条件");
          return;
        }
        let _self = this;
        this.$confirm('本次抢兑需要花费' + number + '积分,确认抢兑?', function () {
          let para = {
            activityId: aid,
            ruleTupleId: rid
          };
          _self.$http.post("/benefit/exchange/guest/" + (_self.$route.query.id || _self.$route.query.guestid), para).then(response => {
            if (response.body.code == 200) {
              _self.$message("操作成功！", "请在“会员中心”查看权益，使用自助买单可自动抵用优惠。", function () {
                _self.$router.push({path: 'user', query: _self.$route.query});
              })
            } else {
              alert(response.body.message);
            }
          });
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../sui_assets/scss/exchange.scss";

</style>
