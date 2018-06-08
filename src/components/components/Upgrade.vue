<template>
  <div class="upgrade">
    <div class="bg">
      <div class="level" :class="{'up':data.strategies}">
        <i class="icon iconfont" :class="'icon-icon-test'+ data.toGrade"></i>
      </div>
      <div class="name">{{data.toName}}</div>
      <div class="addon" v-if="!data.strategies">专属福利<br>下滑查看</div>
      <div class="addon" v-if="data.strategies&&((data.coupons||data.reward||data.point)||(data.activities))">
        <span v-if="data.coupons||data.reward||data.point">超值大礼包 </span>
        <span v-if="data.activities">{{data.activities.length}}大特权</span> <br> 即刻尊享
      </div>
    </div>
    <div class="box1" v-if="data.coupons||data.reward||data.point">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide add" v-on:click="couponDetailFn(item.id)" v-for="item in data.coupons">
            <div class="coupon-bg" :class="item.todayUsable?'today':''"
                 :style="{backgroundImage: 'url('+ (item.picUrl||'./sui_assets/img/mass/place-coupon.png') +')'}"></div>
            <div class="name">{{item.name}}</div>
            <div class="limit">{{item.times}};{{item.useStrategy}}</div>
          </div>
          <div class="swiper-slide" v-if="data.reward">
            <div class="coupon-bg" style="background-image: url('./sui_assets/img/mass/place-reward.png')"></div>
            <div class="name">{{data.reward}}元代用币</div>
          </div>
          <div class="swiper-slide" v-if="data.point">
            <div class="coupon-bg" style="background-image: url('./sui_assets/img/mass/place-point.png')"></div>
            <div class="name" style="padding-top: 2rem">{{data.point}}积分</div>
          </div>
        </div>
      </div>
    </div>
    <div class="box2" v-if="data.activities">
      <div class="item" v-for="item in data.activities" v-on:click="redirectFn(item)">
        <div class="name">{{item.contents.join("，")}}</div>
        <div class="addon">{{item.period}} {{item.time}}</div>
      </div>
    </div>
    <div class="box3" v-if="data.strategies">
      <img src="/sui_assets/img/upgrade/title3.svg" style="margin-bottom: 1rem">
      <div class="item" v-for="item in data.strategies">{{item.content}}</div>
    </div>
    <div style="height: 5rem"></div>
    <div class="fixed" v-if="data.currentGradeName">
      <div class="btn" onclick="ajaxUrl('vip.html')">您已是{{data.currentGradeName}}</div>
    </div>
    <div class="fixed" v-else-if="data.strategies">
      <div class="btn" v-on:click="checked=false" v-show="checked">立即升级</div>
      <div class="rule-text" v-show="!checked">
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
    <div class="page-group"></div>
  </div>

</template>

<script>
  export default {
    name: ""
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../sui_assets/scss/upgrade.scss";


</style>
