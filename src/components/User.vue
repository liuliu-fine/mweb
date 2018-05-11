<template>
  <div class="user">
    <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
      <div class="content">
        <div class="i-bg" v-if="data.existMemberRule">
          <div class="i-card" v-on:click="ajaxUrl('vip.html')" :style="{backgroundImage: 'url('+ (data.cardUrl||'') +')'}">
            <div>
              <img class="avatar" :src="data.logoUrl">
              <span class="shop">{{data.brandName}}</span>
            </div>
            <div class="text-center" style="text-align: center"></div>
            <div class="i-footer i-flex" v-if="data.memberGradeName">
              <div class="set-content">
                <div style="font-size: .7rem">{{data.memberGradeName}}</div>
                <div>{{data.memberCardNo}}</div>
              </div>
              <div><span class="iconA"></span></div>
            </div>
            <div class="i-footer i-flex" v-else>
              <div class="set-content">
                <div style="font-size: .7rem">加入会员 尊享特权</div>
              </div>
              <div><span class="i-icon i-icon6"></span></div>
            </div>
          </div>
        </div>
        <div class="i-flex i-border">
          <div class="item" v-on:click="ajaxUrl('exchange.html')">
            <div><span> 积分 </span><span class="pl" style="font-size: 10px">兑换<span class="i-icon i-icon4"></span></span>
            </div>
            <div class="pt">
              <span class="i-icon i-point"></span>
              <span class="i-red point">{{data.point||0}}</span>
            </div>
          </div>
          <div class="item" v-on:click="ajaxUrl('charge.html')">
            <div><span>余额 </span><span class="pl i-icon i-icon5"></span></div>
            <div class="pt">
              <span class="i-icon i-icon0"></span>
              <span class="i-red charge">{{data.charge||0}}</span>
            </div>
          </div>
          <div class="item" v-on:click="ajaxUrl('reward.html')">
            <div><span>代用币 </span><span class="pl i-icon8"></span></div>
            <div class="pt">
              <span class="i-icon9"></span>
              <span class="i-red reward">{{data.reward||0}}</span>
            </div>
          </div>
          <!-- <div class="item" v-on:click="ajaxUrl('face.html')" style="text-align: center;padding-left: 0">
             <span class="i-btn">在线买单</span>

             <div class="text-grey pt">自动计算优惠</div>
           </div>-->
        </div>
        <div class="order hide" style="padding: .5rem 1rem .1rem;background: #f0f0f0">
          <div v-on:click="state()"
               style="background: linear-gradient(to right,orange,red);padding: .5rem 1rem;color: white;border-radius: 5px">
            <img src="sui_assets/img/coupon/run.gif" style="height: 1.2rem"> 买单进行中...<span
            class="pull-right">点击查看</span>
          </div>
        </div>
        <div class="i-list arrow" id="orderDetail" v-on:click="ajaxUrl('record.html')">
          <span class="i-icon i_record"></span>
          买单记录
        </div>
        <div class="i-list arrow" id="set" v-on:click="ajaxUrl('userInfo.html')">
          <span class="i-icon i-icon1"></span>
          账户设置
          <!--券待领-->
          <span class="earn-box1" v-if="data.obtaining">您有优惠尚未领取</span>
          <span class="phone-box" v-else-if="!data.phone">补全手机，保护/同步您的权益</span>

        </div>
        <div class="i-list arrow" v-on:click="ajaxUrl('more.html')">
          <span class="i-icon i-icon2"></span>
          更多活动
        </div>
        <div class="i-border-top">
          <div><span class="i-icon i-icon3"></span>
            我的优惠券 {{coupons.total}}
          </div>
          <div class="set-coupon" v-if="coupons.items">
            <div class="coupon_show" v-for="item in coupons.items" id="5376e7d9198543b1bbe2e1e2f65e20b3">
              <div class="i-flex i-coupon">
                <div class="a4001" :class="'a'+ item.state"></div>
                <div class="item">
                  <!--<img class="avatar" src="/sui_assets/img/avatar.png">-->
                  <div class="name" style="padding-top: 0.4rem">{{item.value}}</div>
                  <div class="amount0" v-if="item.category =='9031'">
                    <span style="font-size: .6rem">可抵 ￥</span>{{item.amount - item.currentAmount}}
                    <div class="through">{{item.amount}}</div>
                  </div>
                  <div class="amount0" v-else-if="item.category =='902'||item.category =='9021'">
                    <span style="font-size: .6rem">可抵 ￥</span>{{item.amount - item.currentAmount}}
                    <div class="through">{{item.amount}}</div>
                  </div>
                  <div class="amount0" v-else-if="item.category =='904'">
                    <span style="font-size: .6rem">价值 ￥</span>{{item.amount}}
                  </div>
                </div>
                <div class="item">
                  <span class="i-btn grey">使用方法</span>
                </div>
              </div>
              <div class="addon">
                <span class="list" v-text="item.times"></span>
                <span class="list" v-text="item.useStrategy"></span>
              </div>
            </div>
          </div>
          <div class="set-coupon" v-else>
            <div style="text-align: center;padding: 1rem 0"><img src="/sui_assets/img/my/empty.svg"></div>
          </div>
        </div>
      </div>
    </v-scroll>
  </div>
</template>

<script>
  import Scroll from './refresh/scroll';

  export default {
    name: "User",
    data() {
      return {
        data: "",
        coupons: {page: 0, count: 5, total: 0}
      }
    },
    created() {
      this.$http.get("/benefit/guest/" + (this.$route.query.id || this.$route.query.guestid)).then(response => {
        if (response.body.code == 200) {
          this.data = response.body.result;
          if (this.data.couponCount) {
            this.$http.get("/benefit/coupons/guest/" + (this.$route.query.id || this.$route.query.guestid), {
              key: {
                page: this.coupons.page,
                count: this.coupons.count,
              }
            }).then((response) => {
              this.coupons = response.body.result;
            });
          }
        } else {
          alert(response.body.message);
        }
      });
    },
    methods: {
      onRefresh(done) {
        location.reload();
      },
      onInfinite(done) {
        if (this.coupons.total <= this.coupons.count * this.coupons.page) {
          this.$el.querySelector('.load-more').style.display = 'none';
          return;
        }
        this.$http.get("/benefit/coupons/guest/" + (this.$route.query.id || this.$route.query.guestid), {
          key: {
            page: ++this.coupons.page,
            count: this.coupons.count
          }
        }).then(response => {
          if (response.body.code == 200) {
            this.coupons.items = this.coupons.items.concat(response.body.result.items);
            done();
          }
        });
      }
    },
    components: {
      'v-scroll': Scroll
    }
  }
</script>

<style lang="scss" scoped>
  @import "../sui_assets/scss/user.scss";

</style>
