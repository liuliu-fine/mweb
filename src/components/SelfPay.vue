<template>
  <div v-if="init.user">
    <div class="selfpay">
      <!-- Slider -->
      <!-- <div class="e-ad" v-if="init.rollingActivities" style="background: #1c1c20;padding: 4px">
         <div class="e-ad1" v-on:click="ajaxUrl('follow.html')">
           <img src="/sui_assets/img/coupon/ad.svg" style="position: relative;left: 0">

           <div style="display:inline-block" class="ad1-text">
             <img src='/sui_assets/img/coupon/2.svg'> {{data.result.rollingActivities[0].name}}
           </div>
         </div>
       </div>-->
      <div class="second-pay">
        <div>
          <!--<img class="avatar" :src="init.logo" width="30">-->
          <span class="table"><span v-if="init.tableNo">【{{init.tableNo+ "桌"}}】</span><span
            v-else>【前台】</span></span>
          <span class="staff" v-if="flower.staffs" v-on:click="flowerStateFn()"
                :style="{'backgroundImage':'url('+ (flower.staffs[posts.index].avatarUrl||'/sui_assets/img/avatar.png')+')'}"></span>

        </div>
        <div v-if="init.checkType =='102'">
          <wc-keyboard inter="5"
                       decimal="2"
                       v-bind:value="post.amount"
                       v-bind:unabled="init.preCheckData?true:false"
                       placeholder="询问服务员后在此输入"
                       label="消费金额" @input="inputFn"/>
          <div v-if="init.nonPart" style="padding-top: .8rem;">
            <wc-keyboard
              inter="5"
              v-bind:value="post.nonParticationAmount"
              decimal="2" v-bind:unabled="init.preCheckData?true:false"
              v-bind:placeholder="init.nonPart"
              label="不参与优惠项" @input="nonPartsFn"/><!--
              <input-val v-bind:val="post.nonParticationAmount" v-bind:label="'不参与优惠项'"
                         v-bind:placeholder="init.nonPart" @input="nonPartsFn"></input-val>-->

          </div>
          <div class="check-meal-border" v-on:click="getDishes" v-if="init.activityTypes">
            <div class="meal-pic" v-if="view.dishes&&number">
              <img :src="item.picUrl||'sui_assets/img/space.png'" v-if="index == 0"
                   v-for="(item,index) in validateDish">
              <img :src="item.picUrl||'sui_assets/img/space.png'" v-if="index == 0"
                   v-for="(item,index) in validateMeal">

              <div class="label1" v-if="view.dishes&&number">已选{{number}}个</div>
            </div>
            <div v-else><img src="/sui_assets/img/selfPay/plus.svg">勾选已消费的特价或套餐</div>
          </div>

          <div class="btn-green" @touchstart.stop.prevent="submitFn">
            买单自动计算优惠
          </div>
        </div>
        <div class="other-pay" v-else>
          <div class="state" v-if="init.order" v-on:click="stateFn()">
            <img src="sui_assets/img/coupon/run.gif" style="height: 2rem"> 买单进行中...
            <span class="pull-right">点击查看 ></span>
          </div>
          <div v-else-if="init.checkType =='101'">
            <div class="text">请将身份码出示给服务员</div>
            <div id="mycode"></div>
          </div>
          <div v-else>
            <div class="btn-green" @touchstart.stop.prevent="submitForAutoFn">
              呼叫服务员进行买单
            </div>
          </div>
        </div>
        <!---->
      </div>
      <div class="ad-show" v-for="(item,index) in ads" v-on:click="replaceUrl(item)" v-if="ads" v-show="index==0">
        <div class="cbg" :style="{backgroundImage: 'url('+ (item.transversePicUrl||'') +')'}">
        </div>
        <div class="pull-left">{{item.title}}</div>
        <div class="pull-right">看一看 ></div>
      </div>

      <div style="height: 6rem"></div>
      <!---->
      <div class="bottom">
        <div class="flower-bg opacity" v-if="flower.staffs && flower.state != 'close'">
          <div class="flower zoom" v-if="flower.already">
            <div class="header">
              <div class="title">服务评价</div>
              <div class="pull-right" v-on:click="flowerStateFn('close')"></div>
            </div>
            <div class="content1">
              <div class="avatar"
                   :style="{'backgroundImage':'url('+ (flower.staffs[posts.index].avatarUrl||'/sui_assets/img/avatar.png')+')'}"></div>
              <div class="nickname">{{flower.staffs[posts.index].nickname}}</div>
              <div class="thanks">感谢您对我的评价</div>
              <div class="labels">
                <div class="label active" v-if="flower.satisfied"><span class="up"></span>满意</div>
                <div class="label active" v-else><span class="up down"></span>不满意</div>
              </div>
              <div class="decs">
                <div class="dec active"
                     v-for="item in flower.tags">{{item.content}}
                </div>
              </div>
            </div>
            <div class="submit" v-on:click="flowerStateFn('close')">关闭</div>
          </div>
          <div class="flower zoom" v-else-if="!flower.state">
            <div class="header">
              <div class="title">服务评价</div>
              <div class="pull-right" v-on:click="flowerStateFn('close')"></div>
              <div class="pull-left" v-on:click="flowerStateFn('other')">不是这个服务员</div>
            </div>
            <div class="content1">
              <div class="avatar"
                   :style="{'backgroundImage':'url('+ (flower.staffs[posts.index].avatarUrl||'/sui_assets/img/avatar.png')+')'}"></div>
              <div class="nickname">{{flower.staffs[posts.index].nickname}}</div>
              <div class="labels">
                <div class="label" :class="posts.satisfied?'active':''" v-on:click="posts.satisfied = true"><span
                  class="up"></span>满意
                </div>
                <div class="label" :class="posts.satisfied?'':'active'" v-on:click="posts.satisfied = false"><span
                  class="up down"></span>不满意
                </div>
              </div>
              <div class="decs">
                <div class="dec" v-show="!posts.satisfied" :class="item.check?'active':''"
                     v-on:click="chooseTagFn(item)"
                     v-for="item in flower.negative">{{item.content}}
                </div>
                <div class="dec" v-show="posts.satisfied" :class="item.check?'active':''"
                     v-on:click="chooseTagFn(item)"
                     v-for="item in flower.positive">{{item.content}}
                </div>
              </div>
            </div>
            <div class="grey" v-show="posts.satisfied">
              <img :src="flower.gratuity.ico">送我{{flower.countLimit}}{{flower.gratuity.unit}}{{flower.gratuity.name}}，我们将回馈给您：
              <span class="blue-text" v-on:click="$couponShow($event,item)" v-for="item in flower.benefits">{{item.name}} </span>
            </div>
            <div class="submit" v-on:click="sendFlowerFn"><span v-if="posts.satisfied">鼓励一下</span><span
              v-else>提交</span></div>
          </div>
          <div class="flower" v-if="flower.state == 'other'">
            <div class="header">
              <div class="title">请选择您的服务员</div>
              <div class="pull-right back" v-on:click="flowerStateFn()"></div>
            </div>
            <div class="content">
              <div class="staff">
                <div class="item" v-for="(item,key) in flower.staffs" v-on:click="choosedStaffFn(key)">
                      <span class="avatar"
                            :style="{'backgroundImage':'url('+(item.avatarUrl||'/sui_assets/img/avatar.png')+')'}"></span>
                  <span class="nickname">{{item.nickname}}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="i-flex" v-show="flower.state == 'close'||!flower.staffs">
          <div class="item" v-if="init.couponCount||init.existCoupon" v-on:click="getCoupons()">
            <div class="label3" v-if="init.couponCount">已出示{{init.couponCount}}</div>
            <span class="icon2"></span>可出示的券
          </div>
          <router-link class="item" :to="{ path: 'user', query: { id: $route.query.id }}">
            <div class="label2" :class="(vip&&vip.needPhone)?'old':''"></div>
            <img class="avatar" width="32" :src="init.user.avatarUrl">会员中心
          </router-link>
          <div class="item" v-on:click="ajaxUrl('more.html')"><span class="icon1"></span>门店活动</div>
        </div>
      </div>
      <div id="all" style="text-align: center">
        <div class="over-bg" style="" v-if="visible.dish&&data.result">
          <img src="sui_assets/img/selfPay/bg_fake.png" style="width: 103%;margin: 0 -1.5%" v-if="visible.checked">

          <div class="over-content">
            <div class="overlay-title" v-if="visible.checked">
              <span>已选 {{number}} 套餐/菜品</span>

              <div class="close" v-on:click="visible.checked=false"></div>
            </div>
            <div class="overlay-title" v-else>
              <div class="close" v-on:click="confirmDish"></div>
            </div>
            <div class="overlay-detail">
              <div id="meal" v-if="data.result.setmealDishes">
                <div class="border-round" v-show="!visible.checked">可享套餐</div>
                <div class="meal-item" v-for="(meal,index) in data.result.setmealDishes"
                     v-show="visible.checked?(meal.count>0):true">
                  <div class="m-bg" v-bind:style="{backgroundImage:'url('+meal.picUrl+')'}">
                    <div class="m-title">{{meal.name}}</div>
                  </div>
                  <div class="m-content" ng-if="meal.dishess"> 本套餐包含：
                    <span v-for="item in meal.dishess"> {{item.dishes}}x{{item.count}},</span></div>
                  <div>
                    <span class="text-orange">{{"￥"+meal.currentAmount}}</span>
                    <span class="amount">{{"￥"+meal.amount}}</span>
                    <span class="pull-right" style="white-space: nowrap;">
                            <span class="reduce" v-on:click="reduceMeal(index)" v-if="meal.count"></span>
                            <span class="current" :code="meal.code">{{meal.count||''}}</span>
                            <span class="plus" v-on:click="plusMeal(index)"></span>
                        </span>
                  </div>

                  <!--<div class="m-detail">{{meal.descriptor}}</div>-->
                </div>
              </div>
              <div id="dish" v-if="data.result.specialDishes">
                <div class="border-round" v-show="!visible.checked">
                  特价菜
                </div>
                <div class="set-dish">
                  <div class="dish-item" style="padding: 0 2.2rem;text-align: left" :index="index.toString()"
                       v-for="(dish,index) in data.result.specialDishes">
                    <div v-show="visible.checked?(dish.count>0):true">
                      <div class="left-img"><img :src="dish.picUrl||'sui_assets/img/space.png'"></div>
                      <div class="d-content">
                        <div class="d-detail">{{dish.name}}</div>
                        <div>
                          <span class="text-orange">{{"￥"+dish.currentAmount}}</span>
                          <span class="amount">{{"￥"+dish.amount}}</span>
                          <span class="pull-right" style="white-space: nowrap;">
                                <span class="reduce" v-on:click="reduce(index)" v-if="dish.count"></span>
                                <span class="current dish" :code="dish.code">{{dish.count||''}}</span>
                                <span class="plus dish" v-on:click="plus(index)"></span>
                              </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="overlay-footer" v-if="number>0">
              <div style="color: #ff4d63;font-size: .8rem;line-height: 2" v-on:click="clear"
                   v-if="visible.checked">清空
              </div>
              <div v-else>
                <div class="choose" v-on:click="checked">已选
                  <div class="number">{{number}}</div>
                </div>
                <div class="check" v-on:click="confirmDish">选好了</div>
              </div>
            </div>
            <div class="overlay-footer" v-else style="line-height: 2;font-size: .8rem;"><span class="icon3"></span>请据实选择您消费的菜品
            </div>
          </div>
        </div>
        <div class="over-bg" style="padding: 0" v-if="visible.couponModal">
          <div v-if="visible.timer&&coupons&&coupons.length>1" class="indirect">
            <div>左右滑动卡片查看 ({{visible.timer}}s)</div>
          </div>
          <div class="info">
            下列优惠券可立即出示使用
          </div>
          <swiper :options="swiperOption">
            <swiper-slide v-for="(coupon,index) in coupons" :key="index">
              <div class="coupons-item">
                <div class="a4001" v-bind:class="'a'+coupon.state"
                     style="padding: 22px;position: absolute;top: -.1rem;left: 0"></div>
                <div class="addon2" v-if="coupon.state!='4001'" v-on:click.stop="cancel(coupon.id)">放弃使用本券</div>

                <div class="coupon-item">
                  <div class="big-title">{{coupon.name}}</div>
                  <div class="blue-border">
                    <div v-bind:id="'code'+index"></div>
                    <div class="" style="padding-top: 2px;font-size: 14px">{{coupon.code}}</div>
                  </div>
                  <div class="coupons-detail">
                    <div class="item">
                      <div class="left">价值：</div>
                      <div class="right">
                            <span v-if="coupon.category=='903'||coupon.category=='9031'">
                              {{coupon.amount}}<span style="font-size: 14px">折</span>
                            </span>
                        <span v-else-if="coupon.category=='904'">
                             <span v-if="coupon.amount">{{coupon.amount}}元</span>
                            </span>
                        <span v-else>
                            {{coupon.currentAmount?('原价：'+ coupon.amount +'元，现价'+ coupon.currentAmount):coupon.amount}}元
                              </span>
                      </div>
                    </div>
                    <div class="item">
                      <div class="left">使用条件：</div>
                      <div class="right">{{coupon.useStrategy}}</div>
                    </div>
                    <div class="item">
                      <div class="left">有效期：</div>
                      <div class="right">{{coupon.times}}</div>
                    </div>
                    <div class="item">
                      <div class="left">详情：</div>
                      <div class="right">
                        <div v-for="content in coupon.content">{{content}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination" id="swiper-pagination"></div>
          </swiper>
          <div class="md-close" v-on:click="closeCouponModal"></div>
        </div>
      </div>
    </div>
    <div v-if="vip">
      <div v-if="vip.needPhone">
        <!--无手机号，只有领卡-->
        <div class="modal addVip2" v-if="vip.memberGradeName">
          <div class="modal-inner">
            <div class="modal-content">

              <div class="top">
                <div class="card-box" v-bind:style="{backgroundImage:'url('+ vip.cardUrl+')'}">></div>
                <div class="card-text">欢迎新人，送您一张会员卡<br>希望您常来光顾！</div>
              </div>
              <div class="modal-phone">
                <input type="tel" v-model="phone1.phone" placeholder="输入您的手机号码" maxlength="11">
                <input type="tel" placeholder="输入收到的验证码" v-model="phone1.validateCode" maxlength="6">
                <div class="input-text" v-on:click.stop="validate1Fn">{{phone1.text}}</div>
                <div v-on:click.stop="bindPhone1" class="v-button">领取会员卡</div>
              </div>

              <div class="close" v-on:click="closeAddVip()"></div>
            </div>
          </div>
        </div>
        <!--无手机号，有新人礼-->
        <div class="modal addVip" v-else>
          <div class="modal-inner">
            <div class="modal-content">
              <div class="overflow">
                <div class="usable" v-if="vip.todayUsableNum">领取后，将有 {{vip.todayUsableNum}} 张优惠券可立即使用</div>
                <div class="v-coupon" v-if="vip.coupons">
                  <div class="v-item" v-for="coupon in vip.coupons" :class="coupon.todayUsable?'todayUsable':''">
                    <div class="left" v-if="coupon.hasOwnProperty('amount')">
                      <span v-if="coupon.category=='903'||coupon.category=='9031'">
                              {{coupon.amount}}折
                            </span>
                      <span v-else><span class="dollar"></span>{{coupon.amount}}</span>
                    </div>
                    <div class="left coupon-icon" v-else></div>
                    <div class="right">
                      <div>{{coupon.name}}</div>
                      <div class="grey">{{coupon.times}}</div>
                    </div>
                  </div>
                </div>
                <div class="v-point" v-if="vip.point">
                  <div class="v-item">
                    <div class="left">{{vip.point}}</div>
                    <div class="right">积分</div>
                  </div>
                </div>
                <div class="v-reward" v-if="vip.reward">
                  <div class="v-item">
                    <div class="left">{{vip.reward}}</div>
                    <div class="right">无门槛代用币</div>
                  </div>
                </div>
              </div>
              <div class="modal-phone">
                <input type="tel" v-model="phone1.phone" placeholder="输入您的手机号码" maxlength="11">
                <div class="input-text" v-on:click.stop="validate1Fn">{{phone1.text}}</div>
                <input type="tel" placeholder="输入收到的验证码" v-model="phone1.validateCode" id="validate" maxlength="6">
                <div id="bindPhone" v-on:click.stop="bindPhone1" class="v-button">立即领取</div>
              </div>
              <div class="close" v-on:click="closeAddVip()"></div>
            </div>
          </div>
        </div>
      </div>
      <!--有手机号，直接领卡-->
      <div class="modal addVip1" v-else>
        <div class="modal-inner">
          <div class="modal-content">
            <div class="card-box">
              <div class="item">
                <div class="tag">恭喜获得</div>
                <div class="name">{{vip.memberGradeName}}</div>
              </div>
              <div class="item second" v-bind:style="{backgroundImage:'url('+ vip.cardUrl+')'}">
                <img :src="vip.logo">
              </div>
            </div>
            <div class="overflow" v-if="vip.coupons||(vip.activities&&vip.activities.length)">
              <div class="o-box" v-if="vip.coupons">
                <div class="o-item" v-for="item in vip.coupons">
                  {{item.name}}
                  <div class="grey">{{item.useStrategy}} {{item.time}}</div>
                </div>
              </div>
              <div class="o-box1" v-if="vip.activities&&vip.activities.length">
                <div class="o-item" v-for="item in vip.activities">
                  {{item.contents.join("，")}}
                  <div class="grey">{{textFn(item)}}</div>
                </div>
              </div>
            </div>
            <div class="addon"></div>
            <div class="close" v-on:click="refresh()"></div>
            <div class="modal-button" v-on:click="refresh()">我知道了</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import 'swiper/dist/css/swiper.css'
  import wcKeyboard from './wcKeyboard/KeyboardInput.vue'
  import VueAwesomeSwiper from 'vue-awesome-swiper'

  Vue.use(VueAwesomeSwiper)

  export default {
    name: 'SelfPay',
    components: {
      wcKeyboard
    },
    data() {
      return {
        data: "",
        view: {},
        disk: {dish: 0, meal: 0},
        visible: {dish: false, coupon: false, couponModal: false, timer: 3, count: 4},
        post: {amount: '', nonParticationAmount: ''},
        coupons: [],
        init: {},
        socketObj: "",
        swiper: "",
        ads: [],
        vip: "",
        swiperOption: {
          pagination: {
            el: '#swiper-pagination',
            clickable: true,
          },
          spaceBetween: 30,
          centeredSlides: true,
        },
        phone1: "",
        flower: {},
        posts: {
          satisfied: true,
          index: 0
        }//评赏
      }
    },
    created() {
      this.initFn();
    },
    computed: {
      number() {
        return this.disk.dish + this.disk.meal;
      },
      validateDish() {
        return this.data.result.specialDishes ? this.data.result.specialDishes.filter(function (item) {
          return item.count > 0
        }) : [];
      },
      validateMeal() {
        return this.data.result.setmealDishes ? this.data.result.setmealDishes.filter(function (item) {
          return item.count > 0
        }) : []
      }
    },
    methods: {
      initFn() {
        let _self = this;
        let para = {};
        para.type = this.getVersion() == "WXPAY" ? "wx" : "ali";
        if (this.$route.query.d) {
          para.tableId = this.$route.query.d;
        }
        this.$http.get("/shop/" + this.$route.query.id, {key: para}).then(response => {
          let data = response.body;
          if (data.code == 200) {
            _self.setTitle(data.result.brandName + "(" + data.result.name + ")");
            localStorage.setItem("userId", data.result.user.id);
            _self.init = data.result;
            if (_self.init.preCheckData) _self.post = _self.init.preCheckData;
            //有进行中的自助买单
            if (_self.init.order && _self.init.checkType == "102") {
              _self.$confirm('您' + (_self.init.order.tableNo ? ("在" + _self.init.order.tableNo + "号桌") : "") + '有个买单未完成,放弃这笔交易？', function () {
                _self.$http.post("/check/" + _self.init.order.orderId + "/cancel", {}).then(response => {
                  let data1 = response.body;
                  if (data1.code != 200) {
                    _self.$toast(data1.message);
                    if (data1.code == 403108) {
                      setTimeout(function () {
                        _self.ajaxUrl("strategy.html?oid=" + _self.init.order.orderId + (_self.$route.query.d ? ("&d=" + _self.$route.query.d) : ''));
                      }, 200)
                    } else {
                      _self.initFn();
                    }
                  } else {
                    _self.initFn();
                  }
                });
              }, function () {
                _self.ajaxUrl("strategy.html?oid=" + _self.init.order.orderId + (_self.$route.query.d ? ("&d=" + _self.$route.query.d) : ''));
              }, "确定放弃", "继续买单");
            } else {
              _self.$nextTick(function () {
                _self.socket();
                /*-----------买单类型-----------*/
                if (!_self.init.order && _self.init.checkType == "101") {
                  //扫码买单
                  /*     let qrcode = new QRCode(document.getElementById("mycode"), {
                         width: 160,
                         height: 160
                       });
                       qrcode.makeCode(_self.init.checkUserCode);*/
                  _self.refreshCode();
                  _self.interval = setInterval(_self.refreshCode, 30000);
                }
                /*----------------------*/
                //买单状态
                this.$http.get("/activities/shop/" + this.$route.query.id, {key: para}).then(response => {
                  let data1 = response.body;
                  if (data1.code == 200) {
                    _self.init = JSON.parse((JSON.stringify(_self.init) + JSON.stringify(data1.result)).replace(/}{/, ','));
                    if (_self.init.order) {
                      _self.init.existGratuity = false
                    }
                    if (_self.init.existCoupon || _self.init.couponCount) {
                      //有券
                      _self.getCouponsModal();
                    } else if (_self.init.existRemindBenefit) {
                      //有新人礼
                      _self.addVip();
                    } else if (_self.init.existGratuity) {
                      //有打赏
                      _self.getFlower();
                    }
                    /* if (data.result.rollingActivities) {
                     let i = $(".e-ad1").width();
                     setInterval(function () {
                       if (i < 5 - $(".ad1-text").width()) {
                         i = $(".e-ad1").width();
                       }
                       $(".ad1-text").css("margin-left", i--);
                     }, 20)
                   }*/
                    //ads
                  } else {
                    location.href = "error.html";
                  }
                });
                this.$http.get("/activities/shop/" + this.$route.query.id + "/placards").then(response => {
                  let data = response.body;
                  if (data.code == 200) {
                    let _self = this;
                    _self.ads = data.result;
                  }
                });
                /*----------------------*/
              })
            }
          } else {
            alert(data.message);
            // location.href = "error.html";
          }
        });

      },
      refreshCode() {
        this.$http.get("/check/code").then(response => {
          let data = response.body;
          if (data.code == 200) {
            if (!document.getElementById("mycode")) {
              clearInterval(this.interval);
              return;
            }
            document.getElementById("mycode").innerHTML = "";
            let qrcode = new QRCode(document.getElementById("mycode"), {
              width: 160,
              height: 160
            });
            //当面付
            qrcode.makeCode(data.result.code);
          }

        });
      },
      choosedStaffFn(index) {
        this.posts.index = index;
        this.$set(this.flower, 'state', '');
      },
      getFlower() {
        if (this.init.existGratuity) {
          //服务评价
          let json = {}, _self = this;
          json.tableId = this.$route.query.d;
          this.$http.get("/gratuity/shop/" + this.$route.query.id, {key: json}).then(response => {
            let data = response.body;
            if (data.code == 200) {
              if (data.result.hasOwnProperty('satisfied')) {
                //已经评价过了
                data.result.already = true;
                data.result.tags = [];
                //
                data.result.state = 'close';
                let arr = data.result.negative;
                if (data.result.satisfied) {
                  arr = data.result.positive;
                }
                for (let i in arr) {
                  if (data.result.commentedTags.includes(arr[i].id)) {
                    data.result.tags.push(arr[i]);
                  }
                }
              }
              _self.flower = data.result;
            }
          });
        }
      },
      flowerStateFn(state) {
        this.$set(this.flower, 'state', state);
        /* if (state == 'close' && !this.flower.once) {
           this.flower.once = true;
           this.addVip();
         }*/
      },
      chooseTagFn(item) {
        this.$set(item, 'check', !item.check);
      },
      sendFlowerFn() {
        let json = {
          count: 1
        };
        json.activityId = this.flower.activityId;
        json.satisfied = this.posts.satisfied;
        json.staffId = this.flower.staffs[this.posts.index].id;
        json.gratuityId = this.flower.gratuity.id;
        json.tableId = this.$route.query.d;
        json.tags = [];
        let tags = [];
        if (json.satisfied == true) {
          tags = this.flower.positive;
        } else {
          tags = this.flower.negative;
        }
        for (let i in tags) {
          if (tags[i].check) {
            json.tags.push(tags[i].id);
          }
        }
        this.$http.post("/gratuity/shop/" + this.$route.query.id + "/staff", json).then(response => {
          let data = response.body;
          if (data.code == 200) {
            //改变视图
            this.$set(this.flower, 'state', 'close');
            this.flower.already = true;
            this.flower.tags = [];
            for (let i in tags) {
              if (tags[i].check) {
                this.flower.tags.push(tags[i]);
              }
            }
            //
            let _self = this;
            if (json.satisfied) {
              this.$message("感谢您的评价", "回馈奖励将在买单后发放<br>到您的账户", function () {
                // _self.flower.once = true;
                // _self.addVip();
              });
            } else {
              this.$message("感谢您的评价", "我们会重视您本次的反馈", function () {
                // _self.flower.once = true;
                // _self.addVip();
              });
            }
            // this.flower.once = true;
            // this.addVip();
            // this.flower = {};
          } else {
            this.$toast(data.message);
          }
        });

      },
      addVip() {
        let _self = this;
        this.$http.get("/remind/guest/" + this.$route.query.id).then(response => {
          let data = response.body;
          if (data.code == 200) {
            if (data.result.needPhone) {
              this.vip = data.result;
              this.phone1 = {text: '获取验证码', able: true};
            } else {
              this.$http.post("/membership", {id: this.$route.query.id}).then(response => {
                let data = response.body;
                if (data.code == 200) {
                  this.$http.get("/remind/guest/" + this.$route.query.id + '/result').then(response => {
                    this.vip = response.body.result;
                  });
                } else {
                  location.href = "error.html#3"
                }
              });
            }
          } else {
            this.getFlower();
          }
        });
      },
      closeAddVip() {
        this.vip = null;
        if (this.init.existGratuity) {
          this.getFlower();
        }
      },
      closeSuccessAddVip() {
        let _self = this;
        this.$message("操作成功！", "请在“会员中心”查看权益，使用自助买单可自动抵用优惠。", function () {
          _self.vip = null;
          if (_self.init.existGratuity) {
            _self.getFlower();
          }
        });
      },
      replaceUrl(item) {
        if (!item.activityCategory) {
          if (item.linkUrl) {
            location.href = item.linkUrl;
          }
          return;
        }
        this.$route.query.aid = item.activityId;
        switch (item.activityCategory) {
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
            this.$router.push({path: '/charge', query: this.$route.query});
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
            // this.$router.push({path: "/grouponInfo", query: this.$route.query});
            location.href = '/grouponInfo.html?aid=' + item.activityId + "&guestid=" + item.guestId;
            break;
          //评赏
          case "6050":
            location.href = '/lottery.html?aid=' + item.activityId + "&guestid=" + item.guestId;
            break;
          //抽奖
          case "6051":
            // this.$router.push({path: "/more", query: this.$route.query})
            location.href = '/raffleActivity.html?aid=' + item.activityId + "&guestid=" + item.guestId;
            break;
          default:
            this.ajaxUrl('activity.html?aid=' + item.activityId);

        }
      },
      textFn(obj) {
        let str = "";
        for (let i in obj) {
          if (i == 'period' || i == 'shops' || i == 'time') {
            str += obj[i] + ";"
          }
        }
        return str;
      },
      validate1Fn() {
        if (!this.phone1.able) return;
        if (!this.phone1.phone || this.phone1.phone.length != 11) {
          this.$toast("手机格式不正确");
          return;
        }
        this.phone1.able = false;
        let _self = this;
        this.$http.post("/validate/bindup", {"phone": this.phone1.phone}).then(response => {
          let data = response.data;
          if (data.code == 200) {
            this.$toast("获取成功");
            let second = 90;
            let init = setInterval(function () {
              second--;
              if (!second || !_self.phone1) {
                clearInterval(init);
                _self.phone1.text = "重新获取验证码";
                _self.phone1.able = true;
                return;
              }
              _self.phone1.text = "已发送 " + second + " s";
            }, 1000);
          } else {
            this.phone1.able = true;
            this.$toast(data.message);
          }
        });
      },
      bindPhone1() {
        let _self = this;
        if (this.phone1.phone && this.phone1.validateCode && this.phone1.phone.length == 11 && this.phone1.validateCode.length == 6) {
          let jsonA = {shopId: this.$route.query.id};
          jsonA.phone = this.phone1.phone;
          jsonA.validateCode = this.phone1.validateCode;
          this.$http.post("/phone/bindup", jsonA).then(response => {
            let data = response.data;
            if (data.code == 200) {
              this.vip = null;
              if (data.result && data.result.token) {
                this.$cookie.set("token", data.result.token, {"expires": '30d'});
              }
              this.$message("操作成功！", "请在“会员中心”查看权益，使用自助买单可自动抵用优惠。", function () {
                _self.vip = null;
                _self.initFn();

              });
//              this.closeSuccessAddVip();
            } else {
              this.$toast(data.message);
            }
          });
        }
      },
      inputFn: function (value) {
        this.post.amount = value;
      },
      nonPartsFn: function (value) {
        this.post.nonParticationAmount = value;
      },
      closeCouponModal: function () {
        this.visible.couponModal = false;
        this.$cookie.set(this.$route.query.id + "modal", true, {"expires": "30m", "path": "/"});
        if (document.getElementsByClassName("a4005").length) {
          this.init.couponCount = document.getElementsByClassName("a4005").length;
        } else {
          delete this.init.couponCount;
          this.init.existCoupon = true;
        }
        this.addVip();
      },
      clear: function () {
        if (this.data.result.specialDishes) {
          for (let i = 0; i < this.data.result.specialDishes.length; i++) {
            this.data.result.specialDishes[i].count = 0;
          }
        }
        if (this.data.result.setmealDishes) {
          for (let j = 0; j < this.data.result.setmealDishes.length; j++) {
            this.data.result.setmealDishes[j].count = 0;
          }
        }
        this.disk.dish = 0;
        this.disk.meal = 0;
      },
      cancel: function (id) {
        let _self = this;
        let re = confirm("确认放弃后您需要重新出示给店员才可使用");
        if (re) {
          this.$http.delete("/check/shop/" + this.$route.query.id + "/coupons/" + id).then(response => {
            let data = response.data;
            if (data.code == 200) {
              _self.getCouponData();
            } else {
              alert(data.message);
            }
          })
        }
      },
      socket: function () {
        let _self = this;
        setTimeout(function () {
          let a;
          let uri = "wss://" + location.hostname + "/websocket?id=" + _self.init.user.id;
          let websocket;
          _self.socketObj = websocket = new WebSocket(uri);
          websocket.onopen = function () {
            a = setInterval(function () {
              websocket.send("1");
            }, 30000)
          };
          websocket.onmessage = function (evt) {
            if (evt.data == "success") return false;
            let data = JSON.parse(evt.data);
            data.orderId && _self.$cookie.set("order_id", data.orderId, {"path": "/"});
            let json = _self.$route.query;
            json.oid = data.orderId;
            switch (data.type) {
              case "500000":
                _self.ajaxUrl("waiting.html");
                break;
              case "500042":
                _self.$toast("支付完成");
                _self.$router.push({path: '/payment', query: json});
                break;
              case "500051":
                alert("买单被取消");
                _self.initFn();
                break;
              case "500052":
                alert("pad下线");
                _self.initFn();
                break;
              case "500053":
                alert("买单请求超时未处理被取消");
                _self.initFn();
                break;
              case "500054":
                _self.ajaxUrl("strategy.html?oid=" + data.orderId);
                break;
              case "500005":
                _self.$router.push({path: '/payment', query: json});
                break;
              case "500055":
                _self.ajaxUrl("strategy.html?oid=" + data.orderId);
                break;
              case "500050":
                alert("服务员未响应");
                _self.initFn();
                break;
              //coupon state
              case "500100":
              case "500101":
                _self.getCouponData();
                break;
            }
          };
          websocket.onclose = function () {
          };
          websocket.onerror = function () {
          };
        }, 3000)
      },
      getDishes: function () {
        let _self = this;
        if (_self.view.dishes && _self.view.amount == _self.post.amount) {
          _self.view.amount = this.post.amount;
          _self.visible.dish = true;
          _self.data.result = JSON.parse(JSON.stringify(_self.view.dishes));
          _self.disk = JSON.parse(JSON.stringify(_self.view.disk));
          return;
        }
        let json = {};
        if (this.post.amount) {
          json.amount = this.post.amount;
        }
        _self.view.amount = this.post.amount;
        this.$http.get("/activities/shop/" + this.$route.query.id + "/dishes", json).then(response => {
          let data = response.data;
          _self.data = data;
          if (_self.data.code !== 200) {
            this.$toast("暂无可用的特价菜/套餐");
            delete _self.view.dishes;
            return;
          }
          _self.disk.meal = 0;
          _self.disk.dish = 0;
          if (data.result.setmealDishes) {
            for (let i = 0; i < data.result.setmealDishes.length; i++) {
              let meal = data.result.setmealDishes[i];
              if (meal.choosed) {
                _self.disk.meal += meal.count;
              }
            }
          }
          if (data.result.specialDishes) {
            for (let j = 0; j < data.result.specialDishes.length; j++) {
              let dish = data.result.specialDishes[j];
              if (dish.choosed) {
                _self.disk.dish += dish.count;
              }
            }
          }
          _self.visible.dish = true;
        });

      },
      getCouponData: function () {
        let _self = this;
        let json = {};
        if (this.post.amount) json.amount = this.post.amount;
        this.$http.get("/check/coupons/" + this.$route.query.id, json).then(response => {
          let data1 = response.body;
          if (data1.code == 200) {
            _self.coupons = data1.result;
          } else {
            //this.$toast("没有可用的券");
          }
        });
      },
      getCoupons: function () {
        let _self = this;
        let json = {};
        if (this.post.amount) json.amount = this.post.amount;
        this.$http.get("/check/coupons/" + this.$route.query.id, json).then(response => {
          let data1 = response.body;
          if (data1.code == 200) {
            _self.coupons = data1.result;
            _self.visible.couponModal = true;
            _self.$nextTick(function () {
              for (let index in _self.coupons) {
                let qrcode = new QRCode(document.getElementById("code" + index), {
                  width: 100,
                  height: 100
                });
                qrcode.makeCode(_self.coupons[index].id);
              }
              // !_self.socketObj && _self.socket();
            })
          }
        });
      },
      getCouponsModal: function (state) {
        if (state) {
          this.visible.timer = 0;
        } else if (this.$cookie.get(this.$route.query.id + "modal")) {
          this.visible.timer = 0;
          if (this.init.existRemindBenefit) {
            this.addVip();
          } else if (this.init.existGratuity) {
            this.getFlower();
          }
          return;
        }
        if (this.init.couponCount || this.init.existCoupon) {
          this.getCoupons();
          let _self = this;
          let t = setInterval(function () {
            if ((!_self.visible) || (_self.visible.timer == 0)) {
              clearInterval(t);
            } else {
              _self.visible.timer--;
            }
          }, 1000);
        } else {
          this.visible.timer = 0;
          if (this.init.existRemindBenefit) {
            this.addVip();
          } else if (this.init.existGratuity) {
            this.getFlower();
          }
        }
      },
      checked: function () {
        this.visible.checked = !this.visible.checked;
        this.visible = JSON.parse(JSON.stringify(this.visible));
      },
      confirmDish: function () {
        this.view.amount = this.post.amount;
        Vue.set(this.view, "dishes", this.data.result);
        //this.view.dishes = JSON.parse(JSON.stringify(this.data.result));
        this.view.disk = JSON.parse(JSON.stringify(this.disk));
        this.visible.dish = false;
        this.visible.checked = false;
      },
      plus: function (index) {
        if (this.disk.meal) {
          this.$toast("对不起，本店特价菜与套餐不可同享。");
          return;
        }
        let json = this.data.result.specialDishes[index];
        if (this.data.result.specialDishes[index].count) {
          json.count++;
        } else {
          json.count = 1;
        }
        this.disk.dish++;
        Vue.set(this.data.result.specialDishes, index, json);
      },
      reduce: function (index) {
        let json = this.data.result.specialDishes[index];
        json.count -= 1;
        this.disk.dish--;
        Vue.set(this.data.result.specialDishes, index, json);

      },
      plusMeal: function (index) {
        if (this.disk.dish) {
          this.$toast("对不起，本店特价菜与套餐不可同享。");
          return;
        }
        let json = this.data.result.setmealDishes[index];
        if (this.data.result.setmealDishes[index].count) {
          json.count++;
        } else {
          json.count = 1;
        }
        this.disk.meal++;
        Vue.set(this.data.result.setmealDishes, index, json);
      },
      reduceMeal: function (index) {
        let json = this.data.result.setmealDishes[index];
        json.count -= 1;
        this.disk.meal--;
        Vue.set(this.data.result.setmealDishes, index, json);
      },
      submitFn: function (event) {
        this.$loading();
        let json = {};
        let _self = this;
        let result = this.data.result;
        if (!(this.post.amount && parseFloat(this.post.amount))) {
          this.$loading.close();
          this.$toast.center("请先填写消费总额");
          return;
        }
        if (this.init.nonPart) {
          if (!this.post.nonParticationAmount && this.post.nonParticationAmount != "0") {
            this.$loading.close();
            this.$toast.center("请先填写不参与优惠项金额，<br>如未消费此类项目，请输入0");
            // this.$toast.show({text: "请先填写不参与优惠项金额，如未消费此类项目，请输入0", position: 'bottom'});
            return;
          } else {
            if (parseInt(this.post.nonParticationAmount) > parseInt(this.post.amount)) {
              this.$loading.close();
              this.$toast.center("不参与金额不得大于总金额");
              return;
            }
            json.nonParticationAmount = this.post.nonParticationAmount;
          }
        }
        if (this.disk.dish) {
          json.specialMap = {};
          for (let i = 0; i < result.specialDishes.length; i++) {
            if (result.specialDishes[i].count) {
              json.specialMap[result.specialDishes[i].code] = parseInt(result.specialDishes[i].count);
            }
          }
        }
        if (this.disk.meal) {
          json.meals = {};
          for (let j = 0; j < result.setmealDishes.length; j++) {
            if (result.setmealDishes[j].count) {
              json.meals[result.setmealDishes[j].code] = parseInt(result.setmealDishes[j].count);
            }
          }
        }
        json.amount = this.post.amount;

        if (this.$route.query.d) {
          json.tableId = this.$route.query.d;
        }
        this.$http.post("/check/shop/" + this.$route.query.id + "/autonomy", json).then(response => {
          let data = response.body;
          this.$loading.close();
          if (data.code == 200) {
            _self.$cookie.set("order_id", data.result.orderId);

            json = _self.$route.query;
            json.oid = data.result.orderId;
            _self.$router.push({path: '/strategy', query: json})

            // this.ajaxUrl("strategy.html?oid=" + data.result.orderId + (this.$route.query.d ? ("&d=" + this.$route.query.d) : ''));
          } else if (data.code == 405004) {
            let re = confirm("您在" + (data.result.shopname || ("本店" + data.result.tableNo + "号桌")) + "有一个买单正在进行中,是否放弃此订单？")
            if (re) {
              this.$http.post("/check/shop/" + data.result.shopId + "/cancel", {}).then(response => {
                let data = response.body;
                if (data.code == 200) {
                  alert("取消成功！");
                  _self.submitFn();
                }
              });
            }
          } else if (data.code == 405807) {
            this.$toast("本次消费金额系统已为您读取，将继续为您买单");
            setTimeout(function () {
              this.refresh();
            }, 1000)
          } else {
            alert(data.message);
          }
        })
      },
      submitForAutoFn() {
        let json = {}, _self = this;
        if (this.$route.query.d) {
          json = {
            tableId: this.$route.query.d
          };
        }
        this.$http.post("/check/shop/" + this.$route.query.id, json).then(response => {
            let data = response.body;
            switch (data.code) {
              case 200:
                this.$cookie.set("order_id", data.result.orderId);
                this.$cookie.set("table_no", data.result.tableNo);
                this.ajaxUrl("waiting.html");
                break;
              case 405004:
                this.$confirm("您在" + (data.result.shopname || ("本店" + data.result.tableNo + "号桌")) + "有一个买单正在进行中,是否取消？", function () {
                  this.$http.post("/check/shop/" + data.result.shopId + "/cancel", json).then(response => {
                    let data = response.body;
                    if (data.code == 200) {
                      alert("取消成功！");
                      _self.submitForAutoFn();
                    }
                  });
                });
                $("#loading").addClass("hide");
                break;
              case 405007:
                alert("当前桌台有个请求正在处理，请让服务员处理");
                break;
              default:
                alert(data.message);
            }
          }
        );
      },
      stateFn() {
        this.$http.get("/check/" + this.init.order.orderId).then(response => {
          let data = response.body;
          if (data.code == 200) {
            let result = data.result;
            if (result.step == 1) {
              if (result.online) {
                this.$cookie.set("order_id", data.result.orderId);
                this.$cookie.set("table_no", data.result.tableNo);

                this.ajaxUrl("waiting.html");
              } else {
                this.$toast("上宾正在加速为您配置专属优惠方案");
              }
            } else if (result.state >= 2) {
              this.ajaxUrl("strategy.html?oid=" + data.result.orderId);
            } else {
              this.initFn();
            }
          } else {
            this.initFn();
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../sui_assets/scss/selfPay.scss";
</style>
