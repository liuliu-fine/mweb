<template>
  <div class="strategy" v-if="data">
<!--    <div class="recommend i-flex" v-if="data.recommend&&data.recommend.type=='CHARGE'" @click="chargeFn" :style="{backgroundImage: 'url('+ (data.recommend.picUrl||'') +')'}">
      <div class="left"><img :src="data.recommend.picUrl" style="width: 100%"></div>
      <div class="right">
        <div style="margin-top: -6px"><span class="reco1">{{data.recommend.charge}}</span><span
          class="reco2">{{data.recommend.benefit}}</span></div>
        <div class="tuijian"></div>
      </div>
    </div>-->
    <div class="ad-show"  v-if="data.recommend&&data.recommend.type=='CHARGE'" v-on:click="chargeFn">
      <div class="cbg" :style="{backgroundImage: 'url('+ (data.recommend.picUrl||'') +')'}">
      </div>
      <div class="pull-left">充{{data.recommend.charge}}<span v-if="data.recommend.benefit">送{{data.recommend.benefit}}</span></div>
      <div class="pull-right">看一看 ></div>
    </div>
    <transition-group name="fade" tag="div" class="list-group" appear>
      <div v-for="(item,index) in data.strategies" class="list-group-item" v-if="index==0||more||index==1"
           v-bind:key="index">
        <div class="plan"
             :class="{'plan-active':(key==index)}"
             v-on:click="key=index">
          <div class="title">
            <div class="tag"></div>
            <div class="center">
              <div class="amount">支付￥{{item.finalAmount}}</div>
              <div class="text-blue quote" v-on:click="modal = true" v-if="item.charges&&item.automatic">本方案参加了充值活动
              </div>
              <div class="text-blue" v-if="item.chargeFree">{{item.chargeFree.content}}</div>
              <div class="pre-amount">原单￥{{data.amount}}</div>
            </div>
          </div>
          <div class="got" v-if="item.got||item.charges">
            <!---->
            <div class="label"><span class="gift-icon"></span>获得奖励</div>
            <div class="overflow">
              <div class="benefit1">
                <div class="item" v-if="item.charges&&item.remindCharge">
                  <div>充值卡余额</div>
                  <div class="text-blue">￥{{item.remindCharge}}</div>
                </div>
                <!---->
                <div class="item" v-for="upgrade in item.upgrades">
                  <div v-if="upgrade.category == '1013'">升级为</div>
                  <div v-else class="ellipsis" style="-webkit-box-orient: vertical;">{{upgrade.name}}</div>
                  <div class="text-blue" v-if="upgrade.category == '1013'">{{upgrade.name}}</div>
                  <div class="text-blue" v-if="upgrade.category == '1015'">{{upgrade.point}}</div>
                  <span class="text-blue" v-else-if="upgrade.count">{{upgrade.count}}张</span>
                </div>
                <div class="item" v-for="get in item.got">
                  <div class="" v-if="get.category == '1016'">
                    <div class="ellipsis" style="-webkit-box-orient: vertical;"> {{get.name}}</div>
                    <div class="text-blue">{{get.count}}张</div>
                  </div>
                  <div class="" v-else>
                    <div> 获得积分</div>
                    <div class="text-blue">{{get.point}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="label" v-if="item.nonPart||item.useAll.length||item.segmentAll.length"><span
            class="hui-icon"></span>优惠￥{{item.usedAmount}}<span class="pull-right" :class="item.check?'open':''"
                                                                v-on:click="switchStateFn(item)">优惠详情</span>
          </div>

          <div v-if="!(item.nonPart||item.used||item.got)" style='padding: .5rem 1.8rem;font-size: .7rem'>
            本策略不使用优惠
          </div>
        </div>
        <transition enter-active-class="pull-enter-active" leave-active-class="pull-leave-active">
          <div class="used" v-if="item.check">
            <div class="benefit" v-if="item.nonPart">
              <div class="">不计优惠部分：{{item.nonPart.name}}</div>
              <div class="">￥{{item.nonPart.amount}}</div>
            </div>
            <div class="all" v-if="item.useAll.length">
              <div class="label"><span class="hui-icon"></span>门店折扣</div>
              <div class="benefit" v-for="use in item.useAll">
                <div class="">{{use.content}}</div>
                <div class="">
                  -￥{{use.amount + ((use.count&&use.type !== "SETMEAL") ? "（" + use.count + "张）":"")}}
                </div>
              </div>
            </div>
            <div class="segment" v-if="item.segmentAll.length">
              <div class="label">账户抵扣</div>
              <div class="benefit" :class="use.type=='6011'?'text-blue':''" v-for="use in item.segmentAll">
                <div class=""><span v-if="use.type=='6011'">使用充值卡</span><span v-else>{{use.content}}</span></div>
                <div class="">
                  -￥{{use.amount + ((use.count&&use.type !== "SETMEAL") ? "（" + use.count + "张）":"")}}
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition-group>  <!--addon end-->
    <div class="other" v-if="data.strategies.length>2&&!more" v-on:click="more=true">
      展开其他方案
    </div>
    <div style="height: 5rem"></div>
    <div class="pay-fixed">
      <transition name="slideUp" appear>
        <div class="flower" v-if="data.gratuity&&showFlower" v-on:click="switchStateFn(data.gratuity)">
          <span class="tag" :class="data.gratuity.check?'':'check'"></span>
          送{{data.gratuity.staffName}}{{data.gratuity.count}}{{data.gratuity.unit}}{{data.gratuity.name}}
          <span>获赠<span
            v-if="data.gratuity.benefits" v-for="gift in data.gratuity.benefits"><span
            v-if="gift.category == '1017'">{{gift.amount}}元</span>{{gift.name}}</span></span> <span
          class="pull-right"> +￥{{data.gratuity.amount}}</span>
        </div>
      </transition>
      <div class="bottom">
        <div class="">本方案需支付金额 ¥{{(data.gratuity&&!data.gratuity.check)?(parseFloat(data.strategies[key].finalAmount)
          +
          parseFloat(data.gratuity.amount)).toFixed(2):data.strategies[key].finalAmount}}
        </div>
        <div class="submit"
             v-if="(payment&&payment.payMode)||data.strategies[key].finalAmount ==0"
             v-on:click="submitFn">立即支付

        </div>
      </div>
    </div>
    <div class="moreFn" v-if="modal">
      <div class="close" v-on:click="modal = false"></div>
      <div class="harder">本次推荐优惠方案</div>
      <div class="charge-amount">充值{{data.charge.charges[0].amount}}</div>
      <div class="charge-box">
        <div class="inner-box">
          <div v-for="(charge,index) in data.charge.charges" v-if="index!=0">
            <span class="benefit" v-if="charge.category=='1014'">
              <span>{{charge.name}}</span>
              <span> {{charge.amount}}元</span>
            </span>
            <span class="benefit" v-else="charge.category=='1015'||charge.category=='1016'">
              <span>{{charge.name}}</span>
              <span v-if="charge.amount"> {{charge.amount}}</span>
              <span v-else-if="charge.count">{{charge.count}}张</span>
            </span>
          </div>
          <div class="benefit" v-for="upgrade in data.charge.upgrades">
            <span><span v-if="upgrade.category == '1013'">升级为</span>{{upgrade.name}}</span>
            <span v-if="upgrade.amount">{{upgrade.amount}}</span>
            <span v-else-if="upgrade.count">{{upgrade.count}}张</span>
          </div>
        </div>
        <div class="benefit" v-for="use in data.strategies[0].used" v-if="use.type=='6011'">
          <div class="text-gradient">本次使用</div>
          <div class="text-gradient">-{{use.amount}}元</div>
        </div>
        <div class="add-text">充值当日可使用{{data.charge.charges[0].celling*100}}%</div>
        <div class="benefit" v-if="data.charge.remindCharge">
          <div class="text-gradient">充值卡余额</div>
          <div class="text-gradient" style="font-weight: bold;font-size: .8rem">{{data.charge.remindCharge}}元</div>
        </div>
      </div>
      <div class="more" @click="chargeFn">更多优惠方案</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "strategy",
    data() {
      return {
        data: "",
        id: "",//orderId
        key: 0,
        payment: {},
        more: false,
        modal: false,
        showFlower: false
      }
    },
    created() {
      this.initFn();
    },
    methods: {
      initFn() {
        let _self = this;
        this.$loading('正在匹配适合您的优惠');
        setTimeout(function () {
          _self.$loading.close();
          _self.showFlower = true
        }, 2200);
        this.$http.get("/shop/" + (this.$route.query.id || this.$route.query.guestid) + "/paymode", {key: {"type": this.getVersion()}}).then(response => {
          if (response.body.code == 200) {
            if (response.body.result.oasis) {
              this.author();
              return;
            }
            this.payment = response.body.result;
            a();
          } else {
            a();
          }
        });

        function a() {
          const id = _self.$route.query.oid || _self.$cookie.get("order_id");
          _self.id = id;
          _self.$http.get("/check/" + id).then(response => {
            let data = response.body;
            if (data.code == 200) {
              if (!data.result.strategy && !data.result.strategies) {
                setTimeout(function () {
                  a();
                }, 1000);
                return;
              }
              if (data.result.strategy) {
                data.result.strategies = [data.result.strategy];
              }
              if (data.result.strategies[0].charges) {
                data.result.charge = data.result.strategies[0];
              }

              for (let i in data.result.strategies) {
                let useAll = [], segmentAll = [], usedAmount = 0;
                if (data.result.strategies[i].used) {
                  let item = data.result.strategies[i].used;
                  for (let j in item) {
                    usedAmount = item[j].amount - 0 + usedAmount;
                    let type = item[j].type;
                    //自己的权益放在segment中
                    if (type == '6010' || type == '6009' || type == '6011' || type == '6016') {
                      segmentAll.push(item[j]);
                    } else {
                      if (type == '6017') {
                        data.result.strategies[i].chargeFree = item[j];
                      }
                      useAll.push(item[j]);
                    }
                  }
                }
                data.result.strategies[i].usedAmount = usedAmount.toFixed(2);
                data.result.strategies[i].useAll = useAll;
                data.result.strategies[i].segmentAll = segmentAll;
              }
              _self.data = data.result;
              _self.socket();
            } else {
              _self.$router.push({path: '/selfPay', query: _self.$route.query});
            }
          });
        }
      },
      socket: function () {
        let _self = this;
        setTimeout(function () {
          let a;
          let uri = "wss://" + location.hostname + "/websocket?id=" + _self.data.userId;
          let websocket;
          websocket = new WebSocket(uri);
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
                _self.$router.push({path: '/selfPay', query: json});
                break;
              case "500052":
                alert("pad下线");
                _self.$router.push({path: '/selfPay', query: json});
                break;
              case "500053":
                alert("买单请求超时未处理被取消");
                _self.$router.push({path: '/selfPay', query: json});
                break;
              case "500054":
                _self.$router.push({path: '/strategy', query: json});
                break;
              case "500005":
                _self.$router.push({path: '/payment', query: json});
                break;
              case "500055":
                _self.$router.push({path: '/strategy', query: json});
                break;
              case "500050":
                alert("服务员未响应");
                _self.$router.push({path: '/selfPay', query: json});
                break;
            }
          };
          websocket.onclose = function () {
          };
          websocket.onerror = function () {
          };
        }, 3000)
      },
      switchStateFn(item) {
        this.$set(item, "check", !item.check);
      },
      showMore: function (index) {
        this.$set(this.data.strategies[index], "check", !this.data.strategies[index].check);
      },
      chargeFn: function () {
        this.$route.query.type = "channel";
        if (this.data.recommend && this.data.recommend.ruleTupleId) {
          this.$route.query.rid = this.data.recommend.ruleTupleId;
        }
        this.$router.push({path: '/charge', query: this.$route.query});

      },
      submitFn: function () {
        let _self = this;
        if (_self.data.strategies[_self.key].needValidate) {
          this.$bind({
            title: "绑定手机号",
            text: "绑定手机号后后，获得买单优惠",
            submit: function () {
              _self.data.strategies[_self.key].needValidate = false;
              _self.submitFn();
            }
          })
          return;
        }
        let mode = _self.payment;
        _self.$loading();
        let param = {
          orderId: _self.id,
          strategyId: _self.data.strategies[_self.key].id,
          payCategory: mode ? mode.payMode : '',
          url: encodeURIComponent(location.origin + "/admin.html#/payment" + location.search),
          failedUrl: encodeURIComponent(location.href)
        };
        if (_self.data.gratuity && !_self.data.gratuity.check) {
          param.gratuityId = _self.data.gratuity.id;
        }
        this.$http.post("/check/pay", param).then(response => {
          let data = response.body;
          if (data.code == 404014) {
            _self.$loading.close();
            alert("订单不存在！");
            _self.$router.push({path: '/selfPay', query: _self.$route.query})
          } else if (data.code == 405009) {
            _self.$loading.close();
            _self.$confirm("支付遇到问题，是否重新支付？", function () {
              _self.$http.post("/order/" + _self.id + "/pay/revoke").then(response => {
                let data = response.body;
                if (data.code == 200) {
                  _self.submitFn();
                } else {
                  alert(data.message);
                }
              });
            }, function () {
              _self.$http.get("/order/" + _self.id + "/pay/result").then(response => {
                if (response.body.code == 200) {
                  _self.$router.push({path: '/payment', query: json});
                } else if (response.body.code == 403055) {
                  alert("此订单正在支付中，请稍后再试！");
                } else {
                  alert(response.body.message);
                }
              });
            }, "重新支付", "我已支付");
            return;
          } else if (data.code != 200) {
            _self.$loading.close();
            alert(data.message);
            return;
          }
          _self.$loading.close();
          //跳转链接参数
          let json = _self.$route.query;
          json.oid = json.oid || _self.id;
          if (_self.data.strategies[_self.key].finalAmount == 0) {
            if (_self.data.gratuity && (_self.data.gratuity.check || _self.data.gratuity.amount == '0')) {
              _self.$router.push({path: '/payment', query: json});
              return;
            } else if (!_self.data.gratuity) {
              _self.$router.push({path: '/payment', query: json});
              return;
            }
          }
          switch (mode.payMode) {
            case "1005":
              let js = data.result.js;
              let pay = data.result.pay;
              pay.success = function () {
                //查询支付结果
                _self.$http.get("/order/" + _self.id + "/pay/result").then(response => {
                  _self.$router.push({path: '/payment', query: json});
                });
              };
              pay.cancel = function () {
                _self.cancelPay();
              };
              pay.fail = function () {
                _self.cancelPay();
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
                  _self.cancelPay();
                  return;
                }
                if (result.resultCode == "9000") {
                  _self.$http.get("/order/" + _self.id + "/pay/result").then(response => {
                    _self.$router.push({path: '/payment', query: json});
                  });
                }
              });
              break;
          }
        });

      },
      cancelPay: function () {
        this.$http.post("/order/" + this.id + "/pay/revoke").then(response => {
        });
      }
    },

  }
</script>

<style lang="scss" scoped>
  @import "../sui_assets/scss/strategy.scss";
</style>
