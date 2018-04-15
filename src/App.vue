<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" type="text/css">

  @mixin border($color) {
    border: solid 1px $color;
  }

  .charge {
  .header {
    padding: 1rem 1rem .5rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  .grey {
    font-size: 9px;
    color: grey;
    margin-bottom: .6rem;
  }
  .record {
    border-radius: 5px;
    display: inline-block;
    color: #000000;
    padding: 2px 5px;
    font-size: .6rem;
  @include border(#000000)
  }
  .right {
    color: #000000;
    float: right;
    font-size: .5rem;
  span {
    width: .7rem;
    height: .7rem;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
    color: #e75040;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    line-height: .8rem;
    margin-right: 4px;
  }
  }
  .number {
    padding: .4rem 0;
    font-size: .75rem;
    display: block;
  span {
    color: #e75040;
    font-size: 1.2rem;
    margin-left: .5rem;
  }
  }
  .limit {
    color: #0076ff;
    font-size: 12px;
    padding-top: .4rem;
    border-top: 1px solid #eeeeee;
    margin-top: .4rem;
  }
  .limit:before {
    content: "";
    background: url("/sui_assets/img/charge/tips.svg") center no-repeat;
    padding: 13px;
    margin-right: 5px;
  }
  }
  .reward {
    padding: 1rem;
    line-height: 44px;
  .item {
    height: 44px;
    margin-bottom: 12px;
    border-radius: 4px;
    background-color: #fff7f7;
    border: solid 1px #ffdede;
    padding: 0 14px 0 16px;
    position: relative;
  .amount {
    float: left;
    font-size: 18px;
    font-weight: 500;
    color: #e75040;
  }
  .amount:before {
    content: "￥";
    font-size: 12px;
    padding-right: 2px;
  }

  .right {
    font-size: 9px;
    color: grey;
    float: right;
    position: absolute;
    overflow: hidden;
    height: 30px;
    right: 14px;
  }
  .right:before {
    content: "·";
    color: #ffdede;
    padding: 0 5px;
    font-size: 23px;
    line-height: 0;
    vertical-align: middle;
  }
  }
  }
  .detail {
    padding: .5rem 1.2rem;
    font-size: .8rem;
  .box {
    border-radius: 5px;
    border: solid 1px #cdcdcd;
    padding: .7rem .5rem;
    margin: .6rem 0;
  .left {
    width: .8rem;
    height: .8rem;
    float: left;
    border: solid 1px #979797;
    border-radius: 50%;
    margin-top: .1rem;
  }
  .active {
    background: url(/sui_assets/img/check/select.svg) center no-repeat;
    border-width: 0;
    padding: 2px;
  }

  .right {
    margin-left: 1.5rem;
  .grey {
    font-size: 9px;
    color: grey;
  }
  .label {
    border-radius: 7.5px;
    background-color: #1b8ff3;
    font-size: .45rem;
    color: #ffffff;
    height: .6rem;
    line-height: .6rem;
    padding: 0 5px;
    vertical-align: middle;
    margin-right: 2px;
  }
  .text-red {
    font-size: .9rem;
    color: #e75040;
    vertical-align: middle;
  }
  }
  }
  }

  .submit {
    position: fixed;
    bottom: 0;
    padding: .5rem 1.2rem;
    left: 0;
    right: 0;
    background: #2c2c31;
    color: #ffffff;
  .left {
    font-size: .9rem;
    display: inline-block;
    line-height: 2.2;
  }
  .right {
    font-size: .8rem;
    height: 2rem;
    line-height: 2rem;
    padding: 0 1rem;
    display: inline-block;
    float: right;
    border-radius: 3px;
    background-color: #e75040;
  }
  }

  }

  .gmodal {
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
    background: rgba(0, 0, 0, .8);
    display: none;
  .g-modal-border {
    width: 14rem;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .5);
    background-clip: content-box;
    border: 5px solid rgba(255, 255, 255, .5);
    margin: 0 auto auto;
    max-height: 25rem;
    overflow: auto;
  .text1 {
    font-size: .9rem;
    text-align: center;
    position: relative;
    padding: 1.5rem 0 .5rem;
  }
  .text1:after {
    content: "";
    position: absolute;
    margin: auto;
    width: 2.7rem;
    height: 2px;
    background: #000;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
  }
  ul li {
    font-size: .6rem;
    line-height: 1.8;
    padding: .4rem .7rem 0 0;
  }
  }
  .close {
    padding: 1rem 0;
    position: absolute;
    top: 1.6rem;
    right: 0.65rem;
  }
  .close:after {
    content: "";
    background: url(/sui_assets/img/vipModal/close.svg) center no-repeat;
    padding: 1.3rem;
  }
  .canvas-title {
    padding: 1rem 0 .8rem;
    font-size: 0.8rem;
    color: #ffffff;
  //color: #0089ff;
    text-align: center;
  }
  .canvas-img {
    max-width: 15rem;
    display: block;
    margin: auto;
  }
  }

  //strategy
  /*.bargain {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    position: absolute;
    z-index: 11000;
    text-align: center;
    background: rgba(0, 0, 0, .8);
    .hongbao {
      background: url("/sui_assets/img/coudan/hongbao.svg") center no-repeat;
      height: 329px;
      width: 235px;
      margin: 32% auto 0;
      .close {
        float: right;
      }
      .close:after {
        content: "";
        background: url(/sui_assets/img/follow/close.svg) center no-repeat;
        display: inline-block;
        border-radius: 50%;
        border: 1px solid #fff;
        padding: 16px;
        margin-right: -40px;
        margin-top: -20px;
      }
      .text {
        background: url(/sui_assets/img/coudan/slogan.svg) 28px no-repeat;
        height: 192px;
        width: 100%;
        padding-top: 80px;
        padding-left: 99px;
        padding-right: 10px;
        font-size: 52px;
        color: #fff359;
      }
      .text:after {
        content: "?";
        color: #ffffff;
        font-size: 16px;
      }
      .open {
        background: url("/sui_assets/img/coudan/button1.svg") center no-repeat;
        height: 83px;
      }
    }
    .qrcode {
      display: none;
      height: 100%;
      .top {
        padding: 6% 1.7rem;
        color: #dbdb21;
        font-size: .8rem;
        text-align: left;
        height: 15%;
      }
      .center {
        height: 60%;
        padding: 0 2.3rem;
      }
      .qr-border {
        width: 282px;
        border-radius: 5px;
        background-color: #ffffff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        padding-bottom: 10px;
        .bg{
          height: 5rem;
          background-repeat: no-repeat;
          margin-bottom: -4.5rem;
        }
      }
      .info {
        padding: 1rem;
        text-align: center;
        color: #ffffff;
        font-size: .8rem;
      }
      .bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        .btn-trans {
          color: #ffffff;
          border: 1px solid;
          height: 2.2rem;
          line-height: 2.2rem;
          display: inline-block;
          font-size: .8rem;
          border-radius: 100px;
          padding: 0 2.5rem;
          margin: 1rem .1rem;
        }
      }
    }
    .bargain-record {
      display: none;
      background: url("/sui_assets/img/coudan/arc.png") top center no-repeat;
      background-size: 100% 50px;
      position: fixed;
      top: 8%;
      left: 0;
      right: 0;
      bottom: 0;
      padding-top: 50px;
    }
    .details {
      background-color: white;
      height: 100%;
      .c-star {
        background: url(/sui_assets/img/coudan/combine.svg) center no-repeat;
        background-position: 0 -539px;
        padding: 5px 21px 5px 8px;
        color: #ffffff;
        font-size: 14px;
      }
      .text {
        font-size: 1.1rem;
      }
      .text1 {
        font-size: .9rem;
        padding-bottom: 1rem;
      }
      .text-lg {
        font-size: 1.5rem;
        font-weight: bold;
        color: #e75040;
      }
      img {
        width: 2.2rem;
        border-radius: 50%;
      }
      .list-block ul:after {
        content: "";
        display: none;
      }
      .btn-half {
        border: 1px solid #dfdfdf;
        height: 2.2rem;
        line-height: 2.2rem;
        display: inline-block;
        font-size: .8rem;
        border-radius: 22px;
        padding: 0 1.5rem;
        margin: .5rem .2rem;
      }
      .btn-half:last-child {
        color: #ffffff;
        background: #e75040;
        border-width: 0;
      }
    }
  }*/
  //groupon
    .groupon {
  .bg {
    height: 18rem;
    background-size: cover;
    background-position: top center;
    position: relative;
    color: #ffffff;
    overflow: hidden;
  .left-scroll {
    height: 4rem;
    font-size: .5rem;

  #Marquee_x {
    overflow: hidden;
    height: 50px;
  }
  #Marquee_x ul {
    padding-left: 1rem;
  }
  #Marquee_x ul li {
    float: left;
    clear: both;
    list-style: none;
  }
  .ellipsis {
    background: rgba(0, 0, 0, 0.45);
    border-radius: 12px;
    padding-right: .5rem;
  img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 5px;
  }
  }
  }
  .g-label {
    position: absolute;
    background: #e4020f;
    color: #ffffff;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    z-index: 111;
    line-height: 1.5rem;
    height: 1.5rem;
    width: 7rem;
    font-size: .8rem;
    right: 0;
    margin-right: -2rem;
    top: 1rem;
    text-align: center;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
  .round-icon {
    width: 2.4rem;
    height: 2.4rem;
    background-color: rgba(0, 0, 0, 0.55);
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.23);
    border: solid 2px #ffffff;
    border-radius: 50%;
    letter-spacing: 3px;
    text-align: right;
    margin: .4rem 0.5rem .5rem auto;
    padding: .3rem .3rem 5px 0;
    box-sizing: border-box;
    line-height: 1.3;
    font-weight: 700;
  }
  .time {
    height: 1.4rem;
    line-height: 1.35rem;
    background: #f73834;
    text-align: center;
    opacity: .8;
  }
  }
  }
  .groupon-detail {
    padding: 1rem 1.4rem;
  .title2 {
    font-size: 1.1rem;
    font-weight: 700;
  }
  .title1 {
    font-size: .8rem;
    font-weight: 700;
    padding-top: 1rem;
    text-align: center;
    color: black;
    margin: 0;
  }
  .title1:after {
    content: "";
    background: #eaeaea;
    display: block;
    width: 2rem;
    height: 4px;
    margin: .7rem auto 0;
  }
  .title1:before {
    content: "";
    display: none;
  }

  .text {
    border-bottom: dashed 1px #eaeaea;
    padding: .5rem 0;
    margin-bottom: 3rem;
  .text-red {
    padding-left: .5rem;
    font-size: 1rem;
    color: #f83342;
    font-weight: 700;
  }
  }

  .process {
    display: flex;
    text-align: center;
  //      border: 1px solid #e4020f;
  //      border-radius: 10px;
  //      height: .6rem;
  //      background: rgba(254, 84, 91, .3);
  //      margin: 1.5rem 0;
  .left {
  //        padding-right: .5rem;
  //        display: inline-block;
  }
  .line-anim {
    flex: 1;
  .move-text {
    position: relative;
    display: inline-block;
    min-width: 4rem;
    border-radius: 3px;
    background-color: #f8e71c;
    color: #333333;
    border: 1px solid;
    line-height: 1.4rem;
    padding: 0 .2rem;
    float: left;
    margin-top: -1rem;
  .round-circle {
    display: inline-block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: red;
    border: 2px solid white;
    position: absolute;
    bottom: -1.4rem;
    left: 0;
    right: 0;
    margin: auto;
  }
  }
  .move-text:after {
    content: "";
    border: 7px solid transparent;
    border-top-color: #000000;
    position: absolute;
    width: 0;
    display: block;
    margin: auto;
    left: 0;
    right: 0;
  }
  .line {
    height: .6rem;
    margin: 1rem 2rem;
    z-index: -1;
    border-radius: 5px;
    background-color: #969696;
    border: solid 1px #000000;
    position: relative;
    overflow: hidden;
    text-align: left;
  }
  .btn {
    border-radius: 5px;
    border: solid 1px #f83342;
    height: 1.8rem;
    line-height: 1.75rem;
    text-align: center;
    color: #f83342;
    margin: 2rem .2rem 0;
  }
  }
  .right {
  //        padding-left: .5rem;
  //        display: inline-block;
  }
  }
  .process-after {
    background: #eaeaea;
    min-height: .4rem;
    border: solid 1px #eaeaea;
    margin: 2rem -1.4rem 1.5rem;
  }
  }
  .groupon-rule {
    background-color: #f7f7f7;
    padding: 0 1rem 1rem;
  .addon {
    text-align: center;
    color: #757575;
    font-size: .5rem;
  }
  }
  .coupons-detail {
    padding: .7rem 0;
  .item {
    margin: .6rem;
    clear: both;
    text-align: left;
    overflow: hidden;
  }
  .left {
    float: left;
    width: 3rem;
    text-align: right;
    color: #aaa;
    text-align-last: justify;
    position: relative;
  }
  .left:after {
    content: "：";
    position: absolute;
  }

  .right {
    margin-left: 3.5rem;
    color: #000;
  }
  }

  .groupon-content {
    color: #000000;
  .title1 {
    color: #f83342;
    font-size: .8rem;
    text-align: center;
    font-weight: 700;
  }
  .text2 {
    font-size: .8rem;
    padding-top: 1rem;
    font-weight: 700;
  }
  .text1:before {
    content: "";
    background: url("/sui_assets/img/grounpon/leftQuote.svg") left center no-repeat;
    padding: 10px;
    display: block;
  }
  .text1:after {
    content: "";
    background: url("/sui_assets/img/grounpon/rightQuote.svg") right center no-repeat;
    padding: 7px;
    display: block;
  }

  .text1 {
    font-size: .7rem;
    padding: 1rem 0;
    line-height: 1.8;
  }
  .img {
    position: relative;
    width: 100%;
    margin-bottom: -1px;
  }
  .desc {
    position: absolute;
    top: .5rem;
    left: 0;
    height: 1.5rem;
    line-height: 1.45rem;
    background: rgba(0, 0, 0, 0.9);
    padding: 0 .5rem;
    color: #ffffff;
  }

  }
  .groupon-shops {
    text-align: center;
  .title1 {
    font-size: .8rem;
  }
  img {
    height: 2.5rem;
    padding: 1rem;
  }
  .shop {
    padding: .3rem 0;
    line-height: 1.7;
  .grey {
    font-size: .5rem;
    color: #757575;
  }
  }

  }
  .groupon-list {
  .list-content {
    padding: 1rem 0;
  }
  .text-red {
    color: #f83342;
    padding-left: .2rem;
  }
  .list-empty {
    padding: 2.5rem 0;
    text-align: center;
    font-size: .8rem;
    color: #c4c3c8;
    line-height: 3;
  }
  .g-calc {
    height: 1.5rem;
    line-height: 1.45rem;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 1px 5px 0 rgba(254, 84, 91, .3);
    padding: .4rem;
    color: #818181;
    text-align: center;
  .item {
    width: 48%;
    display: inline-block;
  }
  .a4001 + .item, .item:first-child {
    flex-grow: 1;
    -webkit-flex-grow: 1;
  }
  .item + .item {
    border-left: solid 1px #f7e6e7;
  }
  }
  }

  .fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
  .time {
    height: 1.4rem;
    line-height: 1.35rem;
    background: rgba(0, 0, 0, 0.6);
  //      opacity: .8;
    color: #ffffff;
  }
  .btn {
    border-radius: 5px;
    background-image: linear-gradient(to bottom, #ff3d49, #e4020f);
    box-sizing: content-box;
    box-shadow: inset 0 1px 3px 0 #e4020f;
    height: 2rem;
    line-height: 2rem;
    color: #ffffff;
    font-size: .8rem;
  }
  }
  }

  .i-flex {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    align-items: center;
    text-align: left;
    line-height: 1.8;
    margin: .7rem 0;
  .index {
    background: url(/sui_assets/img/payment1/number.svg) center no-repeat;
    /* padding: 7px 7px 4px; */
    background-size: contain;
    /* line-height: 1.2; */
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    width: 16px;
    height: 19px;
    line-height: 19px;
    color: #d62f1e;
    font-size: 8px;
  }
  .index.reverse {
    background: url("/sui_assets/img/payment1/number-reverse.svg") center no-repeat;
    background-size: contain;
    color: white;
  }
  .item {
    width: 33.3%;
    padding: 1.2rem 0 1rem 1.2rem;
  }
  img:not(.avatar) {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    vertical-align: middle;
    margin: 0 .8rem;
  }
  .grey {
    color: #757575;
    font-size: .5rem;
  }
  span {
    display: inline-block;
    vertical-align: middle;
  }
  }

  .canvas {
    width: 300px;
    background-size: contain;
    padding-top: 1px;
  .red {
  .logo {
    width: 22px;
    height: 22px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 .5rem;
  }
  height: 1.5rem;
  line-height: 1.5rem;
  background-color: rgba(248, 51, 66, 0.8);
  color: #ffffff;
  margin-top: 3.5rem;
  margin-bottom: 1rem;
  font-size: 14px;
  }

  .content {
    padding: 1rem;
    background: #ffffff;
    overflow: hidden;
  .big-title {
    padding: 0 1rem;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
  }
  .border {
    margin-top: 1rem;
    border: dashed 2px #eaeaea;
    text-align: center;
    padding: .8rem;
  .name {
    font-size: 21px;
    font-weight: 700;
    padding-bottom: .3rem;
  }
  .min {
    font-size: 14px;
  .text-red {
    font-size: 18px;
    font-weight: 900;
  }
  }
  .limit {
    font-size: 18px;
    color: #f83342;
    font-weight: 900;
  }
  }
  .addon {
    font-size: 0.7rem;
    padding-top: 1.5rem;
    margin-left: 122px;
    line-height: 1.7;
    margin-right: -8px;
  }
  }
  #my-code1 {
    float: left;
    border: 2px solid black;
    padding: 4px;
  }
  }

  .payment {
    background-image: linear-gradient(116deg, #00a8ff, #0089ff);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  .order {
    padding: .8rem 1rem 0;
    text-align: left;
    color: #fff;
    font-size: .7rem;
  .text-left {
    font-size: .9rem;
  .pull-right {
    font-size: .7rem;
    color: #b9e3ff;
  }
  }
  .text-left:before {
    content: "";
    background: url("/sui_assets/img/payment1/bingo.svg") center no-repeat;
    padding: 15px;

  }
  .text-white {
    color: #ffffff;
  }
  .award {
    border-bottom: 3px double #2ab6ff;
    padding-bottom: .5rem;
    margin-top: .7rem;
    padding-left: 38px;
  .left {
    vertical-align: top;
    float: left;
    width: 4.5rem;
    padding-top: .1rem;
  }
  .right {
    margin-left: 4.5rem;
    text-align: right;
  div {
    padding-bottom: .3rem;
  }
  }

  }
  .button {
    background: #e4020f;
    border-radius: 5px;
    font-size: .7rem;
    line-height: 2rem;
    height: 2rem;
    text-align: center;
    color: #ffffff;
    margin: .5rem auto;
    width: 5rem;
  }
  }
  .benefit {
    padding: .5rem 0.5rem 1rem;
    text-align: center;
  .item {
    background: url(/sui_assets/img/payment1/coupon_bg.svg) center no-repeat;
    width: 166px;
    height: 192px;
    position: relative;
    padding: 0;
    background-size: contain;
  .text-red {
    font-size: .9rem;
    font-weight: 700;
    padding: .8rem 0 .4rem;
  }
  .lg {
    font-size: 1rem;
    color: #ff3e3a;
    vertical-align: baseline;
    padding-right: 3px;
    line-height: 1rem;
  }
  .btn {
    width: 82px;
    height: 26px;
    line-height: 26px;
    font-size: .7rem;
    border-radius: 3px;
    background-color: #ff5338;
    color: #ffffff;
    position: absolute;
    bottom: 16px;
    margin: auto;
    left: 0;
    right: 0;
  }
  }
  }
  .benefit.i-flex {
    justify-content: space-around;
    -webkit-justify-content: space-around;
  }
  }

  .prizes {
    text-align: center;
    overflow: hidden;
  .gap {
    float: left;
    width: 49%;
    margin-left: 1%;
  }
  .item {
    margin: 4% 2%;
    display: -moz-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: center;
    text-align: left;
    line-height: 1.8;
    justify-content: initial;
    -webkit-justify-content: initial;
    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    height: 6rem;
    box-sizing: border-box;
    padding: .5rem;
    padding-bottom: 2rem;
    position: relative;
    flex-wrap: wrap;
  //width: 38%;
  .dollar:before {
    content: "￥";
    font-size: .85rem;
    vertical-align: super;
  }

  .addon {
    text-align: center;
    font-size: .7rem;
  //background: white;
    color: #ff9b00;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    padding-right: 5px;
    line-height: 1.3;
  .label {
    background: #ff9b00;
    color: white;
    padding: 0 .3rem;
  //height: 1rem;
  //line-height: 1rem;
    font-family: NotoSansHans;
  }
  .label1 {
    background: white;
    padding: 0 .3rem;
    margin-right: 4px;
  //height: 1rem;
  //line-height: 1rem;
    font-family: NotoSansHans;
  }
  }
  }
  .gap .right {
    font-size: .7rem;
  }
  .gap .left {
    height: 2.2rem;
    line-height: 2rem;
  }
  .left {
    width: 55%;
    height: 3.2rem;
    line-height: 3rem;
    color: #e75040;
    font-size: 1.7rem;
    text-align: center;
    font-weight: 700;
    font-family: Times;
    border-radius: 5px;
  }
  .right {
    font-family: NotoSansHans;
    font-size: .8rem;
    color: black;
    padding: .2rem;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    padding-left: .7rem;
    text-align: left;
    line-height: 1.5;
    font-weight: 600;
    width: 45%;
  }
  .simple .left {
    background: url("/sui_assets/img/payment/small-券-bg@2x.png") center no-repeat;
    background-size: cover;
    padding-right: 11px;
    box-sizing: border-box;
  }
  .reward .left {
    background: url("/sui_assets/img/payment/small-金-bg@2x.png") center no-repeat;
    background-size: cover;
    box-sizing: border-box;
    padding: 0 0 0 11px;
    position: relative;
  }
  .reward .left:before {
    content: "";
    background: url("/sui_assets/img/payment/wu.svg") center no-repeat;
    position: absolute;
    left: 0;
    padding: 15px 13px;
  }
  .simple .has-pic {
    height: 6rem;
    margin-left: -.5rem;
    margin-top: -.5rem;
    position: relative;
    border-radius: 0;
  }
  .simple .has-pic + .right {
    min-height: 4.5rem;
  }
  .simple .has-pic + .right + .addon {
    text-align: left;
    top: -1.5rem;
    position: relative;
  }

  .multi {
    background-size: cover;
    padding: 0;
  .border {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.83), rgba(0, 0, 0, 0.68) 38%, rgba(0, 0, 0, 0));
    color: white;
    font-size: .7rem;
    height: 4.5rem;
    padding: .8rem;
    width: 100%;
    border-radius: 5px;
  //.text-red {
    //  font-size: .9rem;
    //}
  .text-through {
    font-size: .7rem;
    color: white;
    padding-left: 3px;
  }
  }
  }
  .text-red {
    font-size: 1rem;
  }
  .text-through {
    font-size: .7rem;
    color: grey;
  }
  .first {
    width: 85%;
  .left {
    height: 3.5rem;
    line-height: 3rem;
  }
  }

  }

  .coupon {
  .item {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: center;
    text-align: left;
    line-height: 1.8;
    background: url("/sui_assets/img/payment1/coupon-BG.png") center top repeat-x;
    background-size: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    min-height: 5rem;
    margin: 1rem 0;
    position: relative;
    overflow: hidden;
    justify-content: initial;
    -webkit-justify-content: initial;

  .left {
    min-width: 4rem;
    text-align: right;
    padding-right: 1rem;
  .grey {
    color: #a8a8a8;
    margin-bottom: -9px;
  }
  .dollar {
    display: inline;
    color: #ff3e3a
  }
  .dollar:before {
    content: "￥";
    font-size: .9rem;
    font-weight: bold;
    vertical-align: middle;
  }
  .amount {
  //text-align: left;
    color: #ff3e3a;
    font-size: 1.7rem;
    font-weight: bold;
    vertical-align: baseline;
  }
  }
  .right {
  .title {
    font-size: .85rem;
    font-weight: 500;
    color: black;
  }
  ul {
    color: #a8a8a8;
    margin: 0;
    padding-left: 0;
  li {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 8rem;
    white-space: nowrap;
  }
  li:before {
    content: "·";
    padding-right: 5px;
  }
  }
  }
  }
  //.item.reward .right ul li {
    //  overflow: hidden;
    //  text-overflow: ellipsis;
    //  width: auto;
    //  white-space: nowrap;
    //}
  .reward .right .title:before {
    content: "无门槛";
  //  background: url(/sui_assets/img/raffle/wu.svg) right 2rem no-repeat;
  //  position: absolute;
  //  right: 0;
  //  top: -1rem;
  //  width: 60px;
  //  height: 25px;
  //  padding: 22px;
  }
  .item:after {
    content: "查看详情";
    width: 67.5px;
    height: 26.5px;
    line-height: 26px;
    border-radius: 13.3px;
    border: 1px solid #dddddd;
    color: #a8a8a8;
    text-align: center;
    position: absolute;
    background: white;
    right: .5rem;
    bottom: 1rem;
  }
  .item.used {
    background: url("/sui_assets/img/payment1/coupon-BG1.png") center top repeat-x;
    background-size: 10px;
    color: #787878;
  .left {
  .dollar {
    color: #787878;
  }
  .amount {
    color: #787878;
  }
  }
  }
  .item.used:not(.reward):after {
    content: "立即使用";
    background: #ff3e3a;
    color: white;
    border-width: 0;
  }
  }

  #LastWinners {
    overflow: hidden;
    width: 100%;
  //position: absolute;
    height: 2.8rem;
  //bottom: -2.5rem;
  ul {
    padding-left: 0;
  li {
    float: left;
    list-style: none;
  .item {
    background: rgba(0, 0, 0, 0.45);
    border-radius: 12px;
    color: #ffffff;
    padding-right: 10px;
    float: left;
    line-height: 25px;
    height: 25px;
    /*width: 12rem;*/
    overflow: hidden;
  img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 5px;
  }
  .win-label {
    width: 42px;
    height: 12px;
    border-radius: 6px;
    background: #ffd03b;
    color: #000000;
    vertical-align: middle;
    padding: 0 2px;
    font-size: 8px;
  }

  }

  }
  }
  }

  .comment1 {
    background: url("/sui_assets/img/payment1/shining1.png") top center no-repeat;
    background-size: contain;
    background-color: #B80000;
    padding: .5rem .5rem 2rem;
    overflow-x: hidden;
  .lottery {
  //background: url("/sui_assets/img/payment1/shining.svg") center no-repeat;
  //padding-bottom: 16rem;
  //margin-bottom: -15.5rem;
  .bg {
    padding: .5rem;
  .logo {
    width: 1.4rem;
    height: auto;
    vertical-align: middle;
  }
  .ad1:before {
    content: "";
    border: 6px solid transparent;
    border-right-color: #fa3a3d;
    height: 0;
    display: inline-block;
    position: absolute;
    left: -12px;
    top: 7px;
  }
  .ad1 {
    background-color: #fa3a3d;
    line-height: 26px;
    height: 26px;
    color: white;
    display: inline-block;
    position: relative;
    margin-left: 10px;
    width: 70%;
    border-radius: 3px;
    padding-left: 10px;
  }
  }
  .banner {
    text-align: center;
    padding: 1.6rem 0 1rem;
  /*
        .i-flex {
          justify-content: center;
          -webkit-justify-content: center;
          text-align: center;
          //margin: -.3rem 0 .3rem;
        }
        .earn {
          font-size: 1.5rem;
          color: #ffffff;
          text-align: right;
          line-height: 1;
          position: relative;
          vertical-align: text-bottom;
          margin-bottom: -.5rem;
        }
        .earn:before {
          content: "";
          background: url(/sui_assets/img/payment1/text1.svg) center 1px no-repeat;
          font-size: 1.5rem;
          font-weight: 500;
          letter-spacing: -5px;
          text-align: left;
          color: #ffffff;
          padding: 10px 28px;
          position: absolute;
          top: -1.3rem;
          left: -12px;

        }
        .earn:empty::before {
          content: "";
          left: -52px;

        }
        .earn1:before {
          content: "";
          background: url(/sui_assets/img/payment1/text2.svg) center 1px no-repeat;
        }
        .earn2:before {
          content: "";
          background: url(/sui_assets/img/payment1/text3.svg) center 1px no-repeat;
        }

        .amount {
          font-size: 3rem;
          font-weight: 500;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: -2px;
          text-align: left;
          color: #ffffff;
          display: inline-block;
          vertical-align: middle;
        }

        .name {
          font-size: 1rem;
          font-weight: 500;
          color: #ffffff;
          display: inline-block;
          vertical-align: middle;
          width: 46%;
          margin-right: -15%;
          //width: 42%;
          //text-align: left;
          padding-left: 9px;
          text-align: justify;
          max-height: 2.7rem;
          overflow: hidden;
          line-height: 1.3;
        }*/
  // new
     .coupon-text {
       width: 13rem;
       box-sizing: border-box;
       border: 1px solid #ffd174;
       border-radius: 5px;
       padding: .7rem 1rem .7rem 1rem;
       box-shadow: 0 6px 30px -5px #FF2401;
       font-size: 22px;
       font-weight: 700;
       margin: auto;
       color: white;
       position: relative;
     }
  .coupon-text::after {
    content: "查看详情";
  //height: 1.5rem;
    position: absolute;
    background-size: contain;
    right: 0;
    width: 11px;
    padding: 0 3px;
    color: #ffd174;
    font-size: 10px;
    border-left: 1px solid;
    line-height: 1.2;
    vertical-align: middle;
    top: 0.3rem;
    bottom: .3rem;
    text-align: center;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    align-items: center;
  }

  .coupon-text:before {
    content: "";
    height: 1.5rem;
    position: absolute;
    width: 95px;
    top: -.8rem;
    left: -17px;
  }
  .coupon-text1:before {
    content: "";
    background: url(/sui_assets/img/payment1/new-text1.png) center left no-repeat;
    background-size: contain;
  }
  .coupon-text2:before {
    content: "";
    background: url(/sui_assets/img/payment1/new-text2.png) center left no-repeat;
    background-size: contain;
  }
  .coupon-text3:before {
    content: "";
    background: url(/sui_assets/img/payment1/new-text3.png) center left no-repeat;
    background-size: contain;
  }
  .latern {
    background: url("/sui_assets/img/payment1/lantern.png") center no-repeat;
    background-size: cover;
    padding: 1.3rem 0 1rem;
    text-align: center;
    color: white;
  .text1 {
    font-size: 13px;
    padding-top: .5rem;
  .lg {
    background-image: linear-gradient(134deg, #fff5a1, #ffffff);
    font-family: TimesNewRomanPS-MT;
    font-size: 20px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    vertical-align: sub;
    font-weight: 700;
  }
  }
  }
  .desc {
    width: 273px;
    height: 21.3px;
    line-height: 21.5px;
    border-radius: 21.1px;
    background-color: #a8060a;
    border: solid 1px #e72b25;
    font-size: 13px;
    text-align: center;
    margin: .5rem auto;
    color: #ffe6ab;
  }
  }
  .content {
    border-radius: 3px;
    background-color: #9a0c14;
    padding: .5rem;
    position: relative;
    margin: auto -.5rem;
  }
  .content:before {
    content: "";
    display: block;
    background: url("/sui_assets/img/payment1/dajiang.svg") center no-repeat;
    height: 35px;
  }
  }
  .comment-content {
    text-align: center;
  .title1 {
    font-size: .9rem;
    font-weight: 700;
    padding: 1rem 0;
    text-align: center;
    color: white;
  }
  .title1:after {
    content: "";
    background: #d72b2b;
    display: inline-block;
    width: 3.5rem;
    vertical-align: middle;
    height: 2px;
    margin-left: .4rem;
  }
  .title1:before {
    content: "";
    background: #d72b2b;
    display: inline-block;
    width: 3.5rem;
    vertical-align: middle;
    height: 2px;
    margin-right: .4rem;
  }
  .stars {
    color: #ffffff;
    font-size: .6rem;
    padding: .6rem 1rem;
  .name {
    color: #f8e71c;
    font-size: .8rem;
    padding-right: 1rem;
    vertical-align: middle;
  }
  .star {
    background: url("/sui_assets/img/payment1/Star1.svg") center no-repeat;
    padding: 1rem;
  }
  .star.check {
    background: url("/sui_assets/img/payment1/Star2.svg") center no-repeat;
  }
  .text {
    padding-left: .5rem;
  }
  }
  textarea {
    border-radius: 3px;
    background-color: #e64636;
    border: solid 1px #ee9a91;
    width: 70%;
    height: 5rem;
    margin: 1rem 10%;
    padding: 5%;
    color: white;
    font-size: .8rem;
  }
  ::-webkit-input-placeholder {
    color: white;
  }
  .btn {
  //width: 246px;
    height: 45px;
    line-height: 45px;
    border-radius: 5px;
    background-color: #3090e9;
    font-size: 18px;
    margin: auto;
  }
  .fixed {
    position: fixed;
    bottom: 0;
    background-color: #e43617;
    padding: .6rem .7rem;
    left: 0;
    right: 0;
  .btn {
    background-color: #3090e9;
  }
  }
  .canditate {
    padding: 1rem 1.8rem;
    color: white;
  .over + .list {
    max-height: 13rem;
    overflow: auto;
    padding-right: 2rem;
  }
  .over {
    padding-right: 1rem;
    position: relative;
  }
  .over:after {
    content: "上下拖动查看排名";
    color: rgba(255, 255, 255, .5);
    font-size: .6rem;
    position: absolute;
    padding-top: 1rem;
    line-height: 1.8;
    width: 1px;
    right: 9px;
    top: 1rem;
  }
  }
  .gold-btn {
    width: 118px;
    height: 31px;
    line-height: 31px;
    border-radius: 5px;
    border: solid 1px rgba(248, 231, 28, 0.41);
    text-align: center;
    color: #f8e71c;
    font-size: .7rem;
    margin: 1rem auto;
  }
  .help-btn {
    width: 118px;
    height: 31px;
    line-height: 31px;
    border-radius: 5px;
    border: solid 1px #ee9a91;
    text-align: center;
    color: #ffffff;
    font-size: .7rem;
    display: inline-block;
    margin: .3rem;
  }
  .gold-btn {
    width: 118px;
    height: 31px;
    line-height: 31px;
    border-radius: 5px;
    border: solid 1px rgba(248, 231, 28, 0.41);
    text-align: center;
    color: #f8e71c;
    font-size: .7rem;
  //margin: 1rem auto;
    display: inline-block;
    margin: .3rem;
  }
  .bi {
    background: url(/sui_assets/img/payment1/bi-me.png) 17px center no-repeat;
    background-size: cover;
    height: 2.3rem;
    line-height: 2.3rem;
    color: #ffffff;
    font-size: .7rem;
    margin: auto 1rem;
    text-align: center;
  div {
    display: inline-block;
  }
  }
  .bi.he {
    background: url("/sui_assets/img/payment1/bi-he.png") 17px center no-repeat;
  }
  }
  }

  .comment {
    background-color: #fbf6ea;
  //background-color: #B80000;
  //overflow-x: hidden;
    text-align: center;
  .bg {
    padding: .5rem;
    height: 11rem;
    background: url("/sui_assets/img/comment/placeholder.png");
    background-size: cover;
    background-position: center;
  .tag {
    width: 63px;
    height: 20px;
    line-height: 20px;
    opacity: 0.44;
    border-radius: 11px;
    margin: .15rem;
    color: white;
    text-align: center;
    background: black;
    float: right;
    clear: both;
  }

  }
  .comment-content {
    background: url("/sui_assets/img/comment/paper@2x.png") center top no-repeat;
    background-color: white;
    background-size: 91%;
    text-align: center;
  .title1 {
    color: #000000;
    font-size: .8rem;
    padding: 20px;
  }
  .stars {
    color: #ffffff;
    font-size: .6rem;
    padding: .6rem 1rem;
  .name {
    color: #f8e71c;
    font-size: .8rem;
    padding-right: 1rem;
    vertical-align: middle;
  }
  .star {
    background: url("/sui_assets/img/payment1/Star3.svg") center no-repeat;
    padding: 1rem;
  }
  .star.check {
    background: url("/sui_assets/img/comment/Star-active.svg") center no-repeat;
  }
  .text {
    padding-left: .5rem;
  }
  }
  textarea {
    border-radius: 3px;
    background-color: #ffffff;
    border: solid 1px #f1f1f1;
    width: 70%;
    height: 3rem;
    margin: 1rem 10%;
    padding: .7rem;
    color: #a7a7a7;
    font-size: .75rem;
  }
  ::-webkit-input-placeholder {
    color: #a7a7a7;
  }
  .btn {
  //width: 246px;
    height: 45px;
    line-height: 45px;
    border-radius: 5px;
    background-color: #3090e9;
    font-size: 18px;
    margin: auto;
  }
  .fixed {
    position: fixed;
    bottom: 0;
    background-color: #e43617;
    padding: .6rem .7rem;
    left: 0;
    right: 0;
  .btn {
    background-color: #3090e9;
  }
  }
  .canditate {
    padding: 1rem 1.8rem;
    color: white;
  .over + .list {
    max-height: 13rem;
    overflow: auto;
    padding-right: 2rem;
  }
  .over {
    padding-right: 1rem;
    position: relative;
  }
  .over:after {
    content: "上下拖动查看排名";
    color: rgba(255, 255, 255, .5);
    font-size: .6rem;
    position: absolute;
    padding-top: 1rem;
    line-height: 1.8;
    width: 1px;
    right: 9px;
    top: 1rem;
  }
  }
  .gold-btn {
    width: 118px;
    height: 31px;
    line-height: 31px;
    border-radius: 5px;
    border: solid 1px rgba(248, 231, 28, 0.41);
    text-align: center;
    color: #f8e71c;
    font-size: .7rem;
    margin: 1rem auto;
  }
  .help-btn {
    width: 118px;
    height: 31px;
    line-height: 31px;
    border-radius: 5px;
    border: solid 1px #ee9a91;
    text-align: center;
    color: #ffffff;
    font-size: .7rem;
    display: inline-block;
    margin: .3rem;
  }
  .gold-btn {
    width: 118px;
    height: 31px;
    line-height: 31px;
    border-radius: 5px;
    border: solid 1px rgba(248, 231, 28, 0.41);
    text-align: center;
    color: #f8e71c;
    font-size: .7rem;
  //margin: 1rem auto;
    display: inline-block;
    margin: .3rem;
  }
  .bi {
    background: url(/sui_assets/img/payment1/bi-me.png) 17px center no-repeat;
    background-size: cover;
    height: 2.3rem;
    line-height: 2.3rem;
    color: #ffffff;
    font-size: .7rem;
    margin: auto 1rem;
    text-align: center;
  div {
    display: inline-block;
  }
  }
  .bi.he {
    background: url("/sui_assets/img/payment1/bi-he.png") 17px center no-repeat;
  }
  }
  }

  .ecllipes {
    height: 1rem;
    overflow: hidden;
  }

  .paymentee {
    background-color: #f7654b;
  .bg {
    height: 10.5rem;
    background-size: cover;
    position: relative;
    padding: .5rem;
  .logo {
    width: 1.4rem;
    height: auto;
    vertical-align: middle;
  }
  .ad1:before {
    content: "";
    border: 6px solid transparent;
    border-right-color: #4a90e2;
    height: 0;
    display: inline-block;
    position: absolute;
    left: -12px;
    top: 7px;
  }
  .ad1 {
    background-color: #4a90e2;
    line-height: 26px;
    height: 26px;
    color: white;
    display: inline-block;
    position: relative;
    margin-left: 10px;
    width: 83%;
    border-radius: 3px;
    padding-left: 10px;
  }
  .absolute {
    position: absolute;
    bottom: 1.5rem;
    left: 0;
    right: 0;
    color: white;
  .slogan {
    height: 38px;
    line-height: 38px;
    opacity: 0.7;
    background-color: #000000;
    display: inline-block;
    padding: 0 .5rem;
  }
  .enter {
    width: 52px;
    height: 48px;
    background: url("/sui_assets/img/payment1/enter.svg") center no-repeat;
  //background-color: rgba(0, 0, 0, 0.55);
  //box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.23);
  //border: solid 2px #ffffff;
    position: absolute;
    right: 0.5rem;
    bottom: -.2rem;
  //border-radius: 50%;
  //letter-spacing: 3px;
  //padding-left: 8px;
  //padding-top: 7px;
  //line-height: 1.3;
  //box-sizing: border-box;
  }
  }
  }
  .bi {
    background: url("/sui_assets/img/payment1/bi-he.png") 17px center no-repeat;
    background-size: cover;
    height: 2.3rem;
  //line-height: 2.3rem;
    color: #ffffff;
    font-size: .7rem;
    margin: 1rem;
    text-align: center;
  .left {
    display: inline-block;
    line-height: 1.2rem;
    padding-right: .4rem;
    border-color: #ffb02c;
    border-right: 1px solid;
    vertical-align: text-top;
  }
  .time {
    display: inline-block;
    font-size: .6rem;
    padding-left: .4rem;
    padding-top: .3rem;
    vertical-align: middle;
  }
  .time:before {
    content: "本期计票还剩";
    display: block;
    font-size: .5rem;
    text-align: left;
  }
  .time div {
    display: inline-block;
  }
  }

  .fixed {
    position: fixed;
    bottom: 0;
    background-color: #e43617;
    padding: .5rem .4rem;
    left: 0;
    right: 0;
  .btn {
    border-radius: 5px;
    background-image: linear-gradient(94deg, #00a8ff, #0089ff);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }
  }
  .content {
  //background: url('/sui_assets/img/payment1/bg.svg');background-size: cover;
    background-image: linear-gradient(to top, #f7824a, #ff8068);
    border-radius: 3px;
    padding: .2rem .6rem;
    margin: .5rem;
    text-align: center;
    position: relative;
  .circle {
    background: url(/sui_assets/img/payment1/bigActivity.svg) center no-repeat;
    height: 140px;
    padding-top: 10px;
    color: white;
    font-size: .7rem;
  }
  .pic {
    display: block;
    margin: 1rem auto 1.5rem;
  }
  .btn {
    border-radius: 5px;
    border: solid 2px #ffffff;
    width: 246px;
    height: 45px;
    line-height: 45px;
    margin: 1rem auto 1rem;
    background: transparent;
  }
  }
  .candidate {
    padding: 0 1.5rem 1rem 1.5rem;
    color: white;
  .bi1 {
    background: url(/sui_assets/img/payment1/bi-me.png) 17px center no-repeat;
    background-size: cover;
    height: 2.3rem;
    line-height: 2.3rem;
    color: #ffffff;
    font-size: .7rem;
    text-align: center;
  div {
    display: inline-block;
  }
  }
  .over + .list {
    max-height: 13rem;
    overflow: auto;
    padding-right: 2rem;
  }
  .over {
    padding-right: 1rem;
    position: relative;
  }
  .over:after {
    content: "上下拖动查看排名";
    color: rgba(255, 255, 255, .5);
    font-size: .6rem;
    position: absolute;
    padding-top: 1rem;
    line-height: 1.8;
    width: 1px;
    right: 9px;
    top: 1rem;
  }
  .btn {
    width: 158px;
    height: 31px;
    line-height: 31px;
    border-radius: 5px;
    border: solid 1px #fbc8cd;
    font-size: 14px;
    font-weight: 500;
    background: transparent;
    margin: 1.5rem auto 1rem;
  }
  }

  .title1 {
    font-size: .7rem;
    font-weight: 700;
    margin: 1rem 0;
    text-align: center;
    color: white;
  }
  .title1:after {
    content: "";
    background: #ffb55e;
    display: inline-block;
    width: 4rem;
    vertical-align: middle;
    height: 1px;
    margin-left: .9rem;
  }
  .title1:before {
    content: "";
    background: #ffb55e;
    display: inline-block;
    width: 4rem;
    vertical-align: middle;
    height: 1px;
    margin-right: .9rem;
  }
  .comment-content {
    text-align: center;
  .stars {
    color: #ffffff;
    font-size: .6rem;
    padding: .6rem 1rem;
  .name {
    color: #f8e71c;
    font-size: .8rem;
    padding-right: 1rem;
    vertical-align: middle;
  }
  .star {
    padding: .8rem;
  }
  .check {
    background: url("/sui_assets/img/payment1/Star2.svg") center no-repeat;
  }
  }

  }

  }

  .lottery-my {
    text-align: center;
  .item:after {
    content: "";
    background: url(/sui_assets/img/payment1/arrow-grey.svg) center no-repeat;
    padding: 10px;
    position: absolute;
    right: .5rem;
    top: 58%;
  }
  .item {
    padding: 0 .6rem;
    margin-bottom: .5rem;
    box-shadow: 0 1px 0 0 #ededed;
    background: white;
    text-align: left;
    position: relative;
  .lg {
    font-size: .8rem;
  }
  .pull-right {
    color: #9b9b9b;
  }
  .title {
    border-bottom: 1px solid #ededed;
    height: 2rem;
    line-height: 2rem;
  }
  .detail {
    height: 3rem;
    padding-bottom: 1rem;
  }
  }
  }

  #htmlCode {
    width: 300px;
    background: white;
  .envelopes {
    color: white;
    background: #ff3e3a;
    padding: 17px 0;
  .big-title {
    font-family: NotoSansHans;
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.36;
    padding: 0 1rem 1rem;
    text-align: center;
  }
  .second-title {
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.28;
    margin-bottom: .7rem;
    padding: 0 1rem;
    text-align: center;
  }
  .qrcode {
    background: url(/sui_assets/img/payment1/canvas.png) center bottom no-repeat;
    width: 285px;
    height: 179.5px;
    box-sizing: border-box;
    text-align: center;
    color: #975100;
    font-size: 14px;
    font-weight: 500;
    font-family: NotoSansHans;
    background-size: contain;
    margin: .3rem auto;
    position: relative;
  .text {
    padding-top: 1rem;
    font-weight: 700;
  }
  #my-code1 {
    position: absolute;
    bottom: 6px;
    text-align: center;
    left: 1px;
    right: 0;
    width: 100px;
    margin: auto;
  }
  }
  .addon:after {
    content: "长按二维码参加";
    color: white;
    text-align: center;
    padding-bottom: .6rem;
    font-size: 10px;
    display: block;
  }
  }
  .comment-wrapper {
    margin-top: 1rem;
    border-top: dashed 1px #ed3733;
    padding: 15px 20px 0;
    text-align: left;
    font-size: 12px;
    position: relative;
  .stars {
    text-align: center;
    font-size: 10px;
  .item + .item:before {
    content: " / ";
  }
  .yellow {
    font-size: 12px;
    color: #f8e71c;
    padding: 0 2px;
  }
  }
  .comment-inner {
    overflow: hidden;
    margin: .5rem 0;
  img {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    float: left
  }
  .text {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    padding-left: 10px;
    -webkit-line-clamp: 2;
    color: #ffffff;
    padding-top: 2px;
    line-height: 1.43;
    vertical-align: middle;
    display: -webkit-box;
    width: 81%;
    width: calc(100% - 55px);
  }
  .comment-addon {
    padding-left: 40px;
    line-height: 29px;
    font-size: .5rem
  }
  }
  .comment-detail {
    padding-top: 10px;
    color: #6b0200;
    line-height: 1.7;
    font-size: 10px;
    text-align: center;
  }
  }

  .url-code {
    overflow: hidden;
    padding: 20px;
    border-top: solid 1px #e4e4e4;
  .qrcode {
    border: solid 2px #000000;
    width: 106px;
    height: 106px;
    padding: 5px 0 0 3px;
    float: left
  }
  .qrcode-text {
    font-size: 14px;
    padding-left: 129px;
    padding-top: 40px;
    text-align: left;
  }
  }
  }

  .prize {
  .banner {
    background-image: radial-gradient(circle at 120% 100%, #e54d25, #fb7c36 25%, #ef2558);
    min-height: 288px;
    padding: .5rem;
    text-align: center;
  .title1 {
    background: url(/sui_assets/img/payment1/prize-title.svg) center no-repeat;
    text-align: center;
    height: 86px;
    padding-top: 53px;
    box-sizing: border-box;
    color: white;
  }
  .big {
    padding: .6rem 0;
    font-size: 1.1rem;
    font-weight: 500;
  }
  .small {
    font-size: .7rem;
    padding-bottom: 1.8rem;
  }
  .content {
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.24);
    padding: 1px 1rem;
  .btn-w {
    width: 246px;
    height: 45px;
    line-height: 45px;
    border-radius: 5px;
    border: solid 2px #ffffff;
    font-size: .9rem;
    margin: auto;
    margin-bottom: 1.3rem;
  }
  }
  .btn-win {
    width: 117px;
    height: 30px;
    line-height: 30px;
    border-radius: 16px;
    border: solid 1px #ffffff;
    text-align: center;
    color: #ffffff;
    display: inline-block;
    margin: 2.2rem 0.5rem 1.2rem;
  }
  .btn-next {
    border: solid 1px #3090e9;
    border-radius: 16px;
    background-color: #3090e9;
    text-align: center;
    color: #ffffff;
    width: 158px;
    height: 32px;
    line-height: 32px;
    display: inline-block;
    margin: 2.2rem 0.5rem 1.2rem;

  }
  }
  .banner.fail {
    background-image: linear-gradient(127deg, #ffffff, #f6e7e7 89%, #faf3f3);
  }

  .canditate {
  .list {
    text-align: center;
    padding: 0 1.4rem;
  }
  .over + .list {
    max-height: 13rem;
    overflow: auto;
    padding-right: 3rem;
  }
  .over {
    padding-right: 3rem;
    position: relative;
  }
  .over:after {
    content: "上下拖动查看排名";
    color: #cccccc;
    font-size: .6rem;
    position: absolute;
    padding-top: 1rem;
    line-height: 1.8;
    width: 1px;
    right: 39px;
    top: 1rem;
  }
  .title {
    font-size: .7rem;
    font-weight: 700;
    padding: 2rem 0 .1rem;
    text-align: center;
    color: black;
  }
  .title:after {
    content: "";
    background: #cccccc;
    display: inline-block;
    width: 3.5rem;
    vertical-align: middle;
    height: 2px;
    margin-left: .7rem;
  }
  .title:before {
    content: "";
    background: #cccccc;
    display: inline-block;
    width: 3.5rem;
    vertical-align: middle;
    height: 2px;
    margin-right: .7rem;
  }
  .btn {
    width: 158px;
    height: 31px;
    line-height: 31px;
    border-radius: 5px;
    border: solid 1px #fbc8cd;
    font-size: 14px;
    font-weight: 500;
    background: transparent;
    margin: 1.5rem auto 1rem;
    color: #ff3e3a;
  }

  }
  }

  .raffleCover {
    text-align: center;
  .warn {
    background: url(/sui_assets/img/raffle/goButton.svg) center no-repeat;
    background-size: contain;
    height: 40px;
    position: relative;
    bottom: 35px;
    left: 0;
    right: 0;
    animation: move .5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes move {
    from {
      bottom: 35px;
    }
    to {
      bottom: 40px;
    }
  }
  .text-gradient {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(251deg, #ade3ff, #2f9eff);
    font-size: 1.2rem;
    font-weight: 700;

  }
  .bg {
  //background: url('/sui_assets/img/raffleCover/banner.png') center no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 11rem;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  .enter {
    background: url('/sui_assets/img/raffleCover/enter.svg') center no-repeat;
    padding: 25px;
    position: relative;
    right: 14px;
    top: 7.5rem;
    float: right;
  }

  /*.banner {
    background: url(/sui_assets/img/raffle/sloganbg2@2x.png) center no-repeat;
    background-size: cover;
    height: 164px;
    margin: 0 .5rem;
    padding: .5rem;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    .tag {
      border: 2px solid white;
      width: 1rem;
      font-size: .7rem;
      line-height: 1.3;
      text-align: center;
      color: white;
      float: left;
      border-radius: 8px;
      padding: 5px 0;
    }
    .free-ad {
      background: url(/sui_assets/img/raffle/slogan@2x.png) center no-repeat;
      height: 124px;
      background-size: contain;
      margin-top: -14px;
      position: relative;
      .white-bg {
        width: 122.5px;
        height: 28px;
        border-radius: 21.1px;
        background-color: #ffffff;
        line-height: 28px;
        text-align: center;
        margin: 1px auto 0;
        position: absolute;
        bottom: 8px;
        left: 0;
        right: 0;
      }
    }
    .limit {
      background: url("/sui_assets/img/raffle/sloganbg1.svg") center no-repeat;
      background-size: contain;
      left: 0.5rem;
      right: 0.5rem;
      height: 40px;
      line-height: 40px;
      position: absolute;
      bottom: .5rem;
      text-align: center;
      color: white;
      font-size: .7rem;
      .text-lg {
        font-family: TimesNewRomanPS-MT;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        vertical-align: sub;
        padding: 0 2px;
      }
    }

  }*/

  }
  .prizeCover {
    text-align: center;
    overflow: hidden;
    padding: 0 .6rem;
  .limit {
    background: url(/sui_assets/img/raffleCover/require.png) center top no-repeat;
    background-size: 100% 100%;
    height: 4rem;
    color: white;
    font-size: 17px;
    box-sizing: border-box;
    position: relative;
    z-index: 10000;
    margin-bottom: -.5rem;
    margin-top: 1rem;
    padding-top: 1rem;
  .lg {
  //font-size: 28px;
  //vertical-align: sub;
    font-weight: bold;
    margin: auto 2px;
  }
  }
  .prize-item {
  .dollar:before {
    content: "￥";
    font-size: .85rem;
  }
  .addon {
    text-align: center;
    font-size: .7rem;
    color: #ffffff;
    position: absolute;
    top: .7rem;
    left: 0;
    right: 0;
    line-height: 1.3;
    font-family: NotoSansHans;
  .label {
    background: #735518;
    color: white;
    padding: 1px 8px;
    margin-right: -7px;
  }
  .label1 {
    color: #735518;
    background: white;
    padding: 0 6px;
    border: 1px solid #735518;
  }
  }
  .short {
    position: relative;
    float: left;
    width: 50%;
    font-size: .75rem;
    margin-bottom: 1rem;
  .addon {
    top: 1rem;
  }
  .item {
    margin-bottom: 1rem;
    display: -moz-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: center;
    text-align: left;
    line-height: 1.8;
    justify-content: initial;
    -webkit-justify-content: initial;
    background: url(/sui_assets/img/raffleCover/small-bg@2x.png?v=1) center top no-repeat;
    background-size: contain;
    height: 7.5rem;
    box-sizing: border-box;
    padding-top: 2rem;
    position: relative;
    flex-wrap: wrap;
    padding-bottom: 1.5rem;
    font-weight: bold;
  }
  .multi {
    background: url(/sui_assets/img/raffleCover/gift-bg@2x.png) center top no-repeat;
    background-size: contain;
    height: 7.5rem;
    text-align: left;
    line-height: 1.8;
  //height: 7rem;
  //border: 3px solid #E7C989;
    box-sizing: border-box;
    position: relative;
    color: #ffffff;
    padding: 0.4rem .7rem 0;
    width: 9rem;
    margin: auto;
  //margin: 4px auto 1rem;
  .border {
    background-image: linear-gradient(to right, #000000, rgba(0, 0, 0, 0.05));
    color: white;
    font-size: .7rem;
    height: 6.6rem;
    padding: .8rem;
    width: 100%;
    padding-top: 2.4rem;
    box-sizing: border-box;
  .text-through {
    font-size: .7rem;
    color: white;
    padding-left: 3px;
  }

  }
  }
  .simple {
    color: #5b3f0d;
    color: #5b3f0d;
    width: 9rem;
    margin: auto;
  .left, .reward {
    width: 43%;
    height: 2.2rem;
    line-height: 2.3rem;
    color: #e75040;
    font-size: 1.7rem;
    text-align: center;
    font-weight: 700;
    font-family: Times;
    margin-left: 1rem;
    margin-right: .5rem;
    box-sizing: border-box;
    font-weight: bold;
  }
  .reward {
    background: url(/sui_assets/img/raffleCover/reward-small.png) center no-repeat;
    background-size: cover;
    padding-left: .5rem;
  }
  .left {
    width: 40%;
    height: 2rem;
    line-height: 2.1rem;
    border: dashed 1px #dfcd99;
    background: #fff2cc;
    box-shadow: 0 0 0 2px #fff2cc;

  }
  }

  }
  .short:after {
    content: "查看详情";
    position: absolute;
    bottom: 5px;
    color: #5b3f0d;
    line-height: 2.2;
    font-size: 9px;
    font-weight: 500;
    border-top: 1px dashed;
    left: 1.7rem;
    right: 1.7rem;
  }
  .short.deep:after {
    color: #e7c889;
  }
  .long:after {
    content: "查看详情";
    position: absolute;
    color: #5b3f0d;
    font-size: 9px;
    font-weight: 500;
    border-left: 1px dashed;
    /* left: 1rem; */
    right: 0.5rem;
    text-align: center;
    width: 10px;
    padding-top: 1.5rem;
    top: .5rem;
    bottom: .5rem;
    line-height: 1.11;
  }
  .long {
    position: relative;
    color: #5b3f0d;
  .item {
    margin-bottom: 1rem;
    line-height: 1.8;
    background: url('/sui_assets/img/raffleCover/big-bg@2x.png') center no-repeat;
    background-size: 100%;
    height: 6rem;
    box-sizing: border-box;
    position: relative;
  }
  .italic {
    font-style: italic;
    font-size: 44px;
    font-family: TimesNewRomanPS-MT;
    margin-right: 7px;
  }
  .simple {
    text-align: center;
    padding-top: 2.4rem;
    font-size: 26px;
    font-weight: 500;
  }
  .reward {
    background: url('/sui_assets/img/raffleCover/reward-big.png') center no-repeat;
    background-size: 100%;
    padding-top: 1.5rem;
    font-size: 26px;
    font-weight: 500;
  }
  .multi {
    display: -moz-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    text-align: left;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: center;
    text-align: left;
    justify-content: initial;
    -webkit-justify-content: initial;
  img {
    width: 94.5px;
    height: 94.5px;
    border-radius: 50%;
    margin: -.5rem 1rem;
  }
  .right {
    font-size: 1.2rem;
    font-weight: bold;
    padding-top: 1rem;
    padding-right: 20px;
  .lg {
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    position: relative;
    top: .2rem;
  }
  .text-addon {
    color: #9a7025;
  }
  }
  }
  }
  }
  /*
      .gap:nth-of-type(even) {
        margin-right: 4%;

      }
      .gap {
        float: left;
        width: 48%;
        .left {
          height: 2.2rem !important;
          line-height: 2rem !important;
        }
      }
      .item {
        margin-bottom: 1rem;
        display: -moz-inline-box;
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -moz-box-orient: horizontal;
        -moz-box-direction: normal;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        align-items: center;
        text-align: left;
        line-height: 1.8;
        justify-content: initial;
        -webkit-justify-content: initial;
        background: url('/sui_assets/img/raffleCover/big-bg@2x.png') center no-repeat;
        background-size: 100%;
        height: 6rem;
        box-sizing: border-box;
        padding: .5rem;
        padding-top: 2rem;
        position: relative;
        flex-wrap: wrap;
        //width: 38%;
        .left {
          width: 55%;
          height: 3.2rem;
          line-height: 3rem;
          color: #e75040;
          font-size: 1.7rem;
          text-align: center;
          font-weight: 700;
          font-family: Times;
          border-radius: 5px;
        }
        .right {
          font-family: NotoSansHans;
          font-size: .75rem;
          color: #5b3f0d;
          padding: .2rem;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          padding-left: .7rem;
          text-align: left;
          line-height: 1.5;
          font-weight: 600;
          width: 45%;
        }
        .dollar:before {
          content: "￥";
          font-size: .85rem;
        }
        .lg {
          font-size: 1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          display: -webkit-box;
          position: relative;
          top: -.2rem;
        }
        .addon {
          text-align: center;
          font-size: .7rem;
          color: #ffffff;
          position: absolute;
          top: .7rem;
          left: 0;
          right: 0;
          line-height: 1.3;
          font-family: NotoSansHans;
          .label {
            background: #735518;
            color: white;
            padding: 1px 8px;
            margin-right: -7px;
          }
          .label1 {
            color: #735518;
            background: white;
            padding: 0 6px;
            border: 1px solid #735518;
          }
        }
      }

      .simple .left {
        //background: url("/sui_assets/img/payment/small-券-bg@2x.png") center no-repeat;
        //background-size: cover;
        padding-right: 11px;
        box-sizing: border-box;
        background-color: #fff2cc;
        border: 1px solid;
      }
      .reward .left {
        background: url("/sui_assets/img/payment/small-金-bg@2x.png") center no-repeat;
        background-size: cover;
        box-sizing: border-box;
        padding: 0 0 0 11px;
        position: relative;
      }
      .reward .left:before {
        content: "";
        background: url("/sui_assets/img/payment/wu.svg") center no-repeat;
        position: absolute;
        left: 0;
        padding: 15px 13px;
      }
      .simple .has-pic {
        position: relative;
        width: 94.5px;
        height: 94.5px;
        border-radius: 50%;
        margin-left: 0.2rem;
        margin-top: -1.5rem;
        background-size: cover;
      }
      .multi {
        background-size: cover;
        padding: 0;
        border: 3px solid #d5a85f;
        box-shadow: 0 0 5px 0 #000000;
        .border {
          background-image: linear-gradient(to right, #000000, rgba(0, 0, 0, 0.05));
          color: white;
          font-size: .7rem;
          height: 5.8rem;
          padding: .8rem;
          width: 100%;
          padding-top: 2.4rem;
          box-sizing: border-box;
          //.text-red {
          //  font-size: .9rem;
          //}
          .text-through {
            font-size: .7rem;
            color: white;
            padding-left: 3px;
          }
        }
      }
      .simple {
        background: url(/sui_assets/img/raffleCover/small-bg@2x.png) center no-repeat;
        background-size: 100% 100%;
      }
      .text-red {
        font-size: .8rem;
      }
      .text-through {
        font-size: .7rem;
        color: grey;
      }
      .first {
        width: 85%;
        .left {
          height: 3.5rem;
          line-height: 3rem;
        }
      }*/

  }
  .border1 {
    background: url('/sui_assets/img/raffleCover/tips-bg@2x.png') center no-repeat;
    height: 54px;
    background-size: 100%;
    line-height: 54px;
    margin: 0 1rem;
  }
  .remind {
    font-size: 1rem;
    font-weight: 500;
    color: #e6ca9f;
    margin: 1rem 0 3.5rem;
  }
  .remind:before {
    content: "";
    background: url(/sui_assets/img/raffleCover/line-left@2x.png) center no-repeat;
    background-size: 100%;
    display: inline-block;
    width: 5rem;
    height: .9rem;
    margin-right: .5rem;
  }
  .remind:after {
    content: "";
    background: url(/sui_assets/img/raffleCover/line-right@2x.png) center no-repeat;
    background-size: 100%;
    display: inline-block;
    width: 5rem;
    height: .9rem;
    margin-left: .5rem;

  }
  }

  .raffle {
    background: #18181f;
    overflow-x: hidden;
  .dollar:before {
    content: "￥";
    font-size: .8rem;
    font-weight: bold;
  }
  .font {
    font-family: "Bitstream Vera Serif Bold", serif;
  }
  .text-gradient {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to left, #d2d0d3, #ffffff);
    font-size: 1.2rem;
    font-weight: bold;
  }
  .fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
  }
  .unrolled {
    text-align: center;
    padding-bottom: 1px;

  .title0 {
    color: white;
    padding: 1.5rem 0 1rem;
    font-size: 1.2rem;
    background: url(/sui_assets/img/raffle1/bg@2x.png) center 1.5rem no-repeat;
    background-size: 85%;
  .brown {
    color: #f5d7b2;
  }
  img {
    height: 42px;
    vertical-align: middle;
  }
  }
  .first {
    background: url("/sui_assets/img/raffle1/p2 bg1@2x.png") center top no-repeat/contain;
    position: relative;
    padding-bottom: 2.5rem;
  .iconfont {
    font-size: 20px;
  }
  .rrr {
    position: relative;
  }
  .rrr:after {
    content: "";
    position: absolute;
    background: url("/sui_assets/img/raffle1/anim.svg") top left no-repeat;
    background-size: auto 20px;
    padding: 30px;
    animation: run2 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  @keyframes run2 {
    from {
      padding: 30px 0;
    }
    to {
      padding: 30px;
    }
  }
  .show {
    color: #df468a;
    font-size: 11px;
    line-height: 2.3;
    padding: 1rem .5rem 0;
  }
  .show:before {
    content: "";
    background: url("/sui_assets/img/raffle1/reward1.svg") center top no-repeat/contain;
    display: block;
    height: 26px;
  }
  .addon {
    color: #7e6e60;
    letter-spacing: 0.9px;
    font-size: .8rem;
    position: relative;
  .lg {
    font-size: .9rem;
    font-style: italic;
    padding-right: 3px;
  }
  }
  }
  .first:after, .second:after {
    content: "";
    border: 1px solid #38383e;
    position: absolute;
    display: block;
    left: 2rem;
    right: 2rem;
    top: .6rem;
    bottom: 0.3rem;
  }
  .first:after {
    bottom: 1rem;
  }
  .second {
    background: url("/sui_assets/img/raffle1/p2 bg2@2x.png") center top no-repeat/contain;
    position: relative;
  .prize-text:before {
    content: "最高奖";
    background-color: #735518;
    box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.5);
    width: 40.5px;
    height: 17.5px;
    line-height: 18px;
    font-size: 11px;
    color: #ffffff;
    display: inline-block;
    margin-right: .5rem;
    vertical-align: middle;
  }
  .prize-text {
    color: #ffffff;
    font-size: .75rem;
    padding-bottom: 1.8rem;
  }
  }
  .third {
    background: url("/sui_assets/img/raffle1/tips-bg2@2x.png") center top no-repeat/contain;
    padding: 1rem 0;
    color: white;
  .text-gradient {
    background-image: linear-gradient(251deg, #ade3ff, #2f9eff);
    vertical-align: initial;
    line-height: 1.5;
  }
  .r-title0 {
    font-size: .8rem;
    text-align: center;
    color: #cbcad0;
    padding-top: .5rem;
    margin-bottom: -.5rem;

  }
  .r-title0:before, .r-title0:after {
    content: "";
    width: 34px;
    height: 2px;
    background: #515055;
    display: inline-block;
    position: relative;
    top: -.3rem;
    margin: 0 .7rem;
  }
  .list-empty1 {
    font-size: 18px;
    color: #515055;
    padding: 2rem 1rem 4rem;
    font-weight: bold;
  }
  }
  .btn {
    width: 315px;
    color: #ffffff;
    margin: 1.5rem auto;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 10px;
    background-image: linear-gradient(165deg, #ffc148, #fc6530);
    box-shadow: 0 2px 0 2px #c64517;
    animation: run1 .4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  .lg {
    background-image: linear-gradient(245deg, #ffea6c, #f2f5b2);
    font-size: 25px;
  //font-family: "Bitstream Vera Serif Bold", serif;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .lg:after {
    content: "元";
  //font-family: "Bitstream Vera Serif Bold", serif;
    background-image: linear-gradient(228deg, #ffea6c, #f2f5b2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 14px;
  }
  }

  }
  .rolled {
    color: white;
    padding-bottom: 1px;
  .rolled-header {
    padding: .8rem 0 .8rem .8rem;
    background: url('/sui_assets/img/raffle1/P3-bg@2x.png') center top no-repeat;
    background-size: 100% auto;
  .success {
  //border-bottom: 1px solid #35353f;
    background: url(/sui_assets/img/raffle1/bingo@2x.png) left 2px no-repeat;
    background-size: 32px;
    padding: 1px 1px 18px 44px;
    font-size: .7rem;
    line-height: 2;
    position: relative;
    overflow: hidden;
  .word {
    font-size: .8rem;
    font-weight: bold;
  }
  .addon:after {
    content: "";
    background: url("/sui_assets/img/raffle1/cha.svg") left center no-repeat;
    padding: 27px;
  }
  .success-num {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 62px;
    height: 42px;
    border-radius: 50%;
    color: #fc6530;
    font-size: 15px;
    /* background: #11111c; */
    box-sizing: border-box;
    /* padding-right: 9px; */
    /* padding-top: 13px; */
    text-align: center;
    line-height: 1.5;
    font-weight: bold;
  }
  .success-num:before {
    content: "已报名";
    color: white;
    font-size: 12px;
    display: block;
    font-weight: normal;
  }

  }
  .subscribe {
    text-align: center;
    padding: 1rem;
    background-image: linear-gradient(351deg, #ff8e97, #dd3881);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: .7rem;
  }
  .subscribe1 {
    text-align: center;
    padding: .3rem;
  #my-code2 {
    display: inline-block;
    border: 2px solid #ff3e3a;
    vertical-align: middle;
  }
  .right {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    color: #6f6f78;
    font-size: .7rem;
    margin-left: .5rem;
  }
  }
  }
  .rolled-content {
    margin: 10px;
    background: url('/sui_assets/img/raffle1/P3 bg@2x.png') center top no-repeat/contain;
    text-align: center;
    min-height: 256px;
  .text {
    padding: 1rem 0 2.7rem;
    color: #5b3f0d;
    font-size: 1rem;
    font-weight: bold;
    position: relative;
    background: url(/sui_assets/img/raffle1/reward2.svg) center bottom no-repeat;
    margin-bottom: .5rem;
  .lg {
    font-size: 26px;
    background-image: linear-gradient(110deg, #ff0015, #b61d34);
    font-family: TimesNewRomanPS-MT;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    vertical-align: bottom;
  }
  }

  .text:after {
    content: "";
    position: absolute;
    background: url("/sui_assets/img/raffle1/rewad-anim.svg") top left no-repeat;
    background-size: auto 20px;
    padding: 30px;
    animation: run2 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  //animation-direction: alternate;
  }

  @keyframes run2 {
    from {
      padding: 30px 0;
    }
    to {
      padding: 30px;
    }
  }
  .text1 {
    border-radius: 7px;
    background: url('/sui_assets/img/raffle1/blue.png') center top no-repeat/contain;
  //box-shadow: 0 2px 0 0 #0872d0;
    height: 38px;
    line-height: 32px;
    margin-bottom: 1rem;
  //display: inline-block;
    position: relative;
    padding: 0 10px;
  .lg:before {
    content: "";
    background: url("/sui_assets/img/raffle1/coinico@2x.png") center no-repeat/contain;
    padding: 20px;
  }
  .lg {
    font-family: TimesNewRomanPS-MT;
    font-size: 1rem;
    vertical-align: sub;
  }
  }
  //.text1:before {
    //  content: "";
    //  background: url("/sui_assets/img/raffle1/left.png") center no-repeat/contain;
    //  padding: 15px;
    //  position: absolute;
    //  left: -30px;
    //}
  }
  .btn {
    color: #ffffff;
    margin: .5rem 1rem;
    font-size: 1rem;
    border: solid 2px #ff7e50;
    font-weight: bold;
    border-radius: 30px;
    background-image: linear-gradient(167deg, #ff8f68, #fc6530);
    box-shadow: 0 2px 0 2px #c64517;
    animation: run1 .4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .r-title0 {
    font-size: .9rem;
    text-align: center;
    color: #cbcad0;
    font-family: NotoSansHans;
    padding-top: .5rem;
    position: relative;
    margin-bottom: -1rem;
  }
  .r-title0:before {
    content: "";
    width: 34px;
    height: 2px;
    background: #515055;
    position: absolute;
    top: 2rem;
    margin: 0 .7rem;
    display: block;
    left: 0;
  }
  .r-title0:after {
    content: "";
    width: 34px;
    height: 2px;
    background: #515055;
    position: absolute;
    top: 2rem;
    margin: 0 .7rem;
    display: block;
    right: 0;
  }
  .list-empty1 {
    font-size: 18px;
    color: #515055;
    padding: 2rem 0;
    font-weight: bold;
    text-align: center;
  }
  .btn-default {
    width: 302px;
    height: 43px;
    line-height: 43px;
    border-radius: 10px;
    border: solid 1px #ffffff;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    margin: -1rem auto 5rem;
  }

  }
  .gmodal {
  .back1 {
    height: 70px;
    background-size: 100% 30px;
    background-repeat: no-repeat;
    color: white;
    box-sizing: border-box;
    overflow: hidden;
  //padding: .5rem;
  .logo {
    vertical-align: middle;
    width: 2rem;
    height: 2rem;
    border-radius: 3px;
    margin: .7rem 1rem;
  }
  }
  .purse {
    border-top: 2px solid #070730;;
    background: url("/sui_assets/img/raffle1/canvas bg@2x.png") center no-repeat;
    background-color: #1d1d40;
    background-size: 100%;
    padding: 0 .5rem 1rem;
    color: white;
    text-align: center;
  .avatar {
    width: 30px;
    height: 30px;
    border: solid 1px #dacba1;
    border-radius: 15px;
    margin-top: -1rem;
  }
  .intro {
    font-size: 12px;
    padding: .6rem .6rem;
    color: #8787b7;
  }

  .purse1 {
    border: solid 1px rgba(143, 105, 40, 0.6);
    text-align: center;
    margin: auto;
    padding: 10px;
    font-size: 16px;
  }
  .url-code {
    clear: both;
  img {
    border: 3px solid white;
  }
  .qrcode-text {
    padding-top: 33px !important;
    padding-left: 120px !important;
  }
  }
  //.qrcode {
    //  width: 100px;
    //  height: 138px;
    //  background-image: linear-gradient(163deg, #ff8e97, #dd3881);
    //  background-color: #dd3881;
    //  position: absolute;
    //  bottom: 10px;
    //  right: 10px;
    //  padding: 10px;
  //  .text-center {
      //    text-align: center;
      //    padding-top: 5px;
      //  }
  //}
  }
  }
  /*result */
  .result {
    padding: 1rem .5rem 2rem;
    border-radius: 0 0 40px 40px;
    background: url("/sui_assets/img/raffle/bg-blue.png") center no-repeat;
    background-size: cover;
    position: relative;
    color: white;
  .img {
    width: 80%;
    padding: 1.5rem 0 .5rem;
    margin: auto;
    display: block;
  }
  .big-title {
    font-family: NotoSansHans;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    line-height: 1.7;
  }
  .benefit {
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.24);
    padding: 1rem 0;
    margin: 1.5rem 0;
  .r-title0 {
    font-size: .9rem;
    text-align: center;
    font-weight: 700;
  }
  .r-title0:before {
    content: "";
    background: url('/sui_assets/img/raffle/line@2x.png') center no-repeat;
    background-size: contain;
    width: 6rem;
    height: 10px;
    display: inline-block;
    margin-right: 10px;
  }
  .r-title0:after {
    content: "";
    background: url('/sui_assets/img/raffle/line@2x.png') center no-repeat;
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    background-size: contain;
    width: 6rem;
    height: 10px;
    display: inline-block;
    margin-left: 10px;
  }
  }
  .text-desc {
    text-align: center;
    margin: 1.5rem 0 .5rem;
  }
  .text-lg {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(243deg, #ff8e97, #ffffff);
    font-size: 26px;
    font-weight: bold;
    font-style: italic;
    padding: 6px;
  }
  .btn-default {
    width: 60.5px;
    height: 20px;
    line-height: 19px;
    border-radius: 5px;
    border: solid 1px #ffffff;
    margin: auto;
    text-align: center;
    font-size: 11px;
  }
  .border {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: .5rem;
    margin: 1.5rem 1rem;
  .content {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 1.3rem;
    text-align: center;
    font-size: 18px;
  .btn-default {
    margin: 1rem auto;
  }
  }
  }
  .list {
    width: 94px;
    height: 49px;
    border-radius: 10px 10px 0 0;
    color: white;
    font-size: .9rem;
    font-weight: 700;
    background: rgba(255, 255, 255, .1);
    margin: auto;
    text-align: center;
    position: relative;
    bottom: -2rem;
    line-height: 2.2;
  }
  .list:after {
    content: "";
    position: absolute;
    border: 5px solid transparent;
    border-top-color: white;
    bottom: 3px;
    width: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  }
  .brands {
    background-size: contain;
    margin-top: -2rem;
  .groupon {
    background: white;
    padding-top: 5rem;
    text-align: center;
    padding-bottom: 3rem;
  .text-lg {
    font-size: .9rem;
    font-weight: 500;
    padding-top: 1rem;
  }
  }
  }
  //
  .yellow-bg {
    border-radius: 5px;
    background-image: linear-gradient(to bottom, #fff4e9, #fff6e4);
    margin: 1rem .6rem 0;
    padding: .5rem;
  .text-gradient {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to left, #2a99fe, #4e56d4 48%, #6a23b5);
    font-size: .9rem;
  }
  .content {
    border-radius: 5px;
    border: solid 1px #f1e6d0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 16px;
    font-weight: 500;
    background-image: linear-gradient(136deg, #ff8e97, #dd3881);
    padding: 1rem .5rem;
  img {
    margin: 1rem auto 0;
    display: block;
    border: 2px solid;
    padding: 3px;
  }
  }
  }
  }

  .mass {
  .title {
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    padding: 1.5rem .5rem .7rem;
  }
  .time {
    font-size: 14px;
    color: #c2c2c2;
    text-align: center;
  }

  .content {
    border: solid 1px #ebebeb;
    margin: 1.5rem 1rem 3rem;
    padding: .7rem 1rem;
    font-size: 14px;
    position: relative;
  }
  .content:before {
    content: "";
    position: absolute;
    background: url("/sui_assets/img/mass/quote.png") left top no-repeat/contain;
    padding: 10px;
    left: -.5rem;
    top: -.5rem;
  }
  .content:after {
    content: "";
    position: absolute;
    background: url("/sui_assets/img/mass/down.png") center no-repeat/contain;
    padding: 9px;
    left: 0;
    right: 0;
    bottom: -36px;
  }
  .wapper {
    padding: .5rem 0;
  .title1 {
    background: url("/sui_assets/img/mass/title-bg.png") center no-repeat/contain;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
    text-align: center;
    padding: -.5rem 3.5rem .5rem;
    margin: .5rem 1rem;
  }
  .content1 {
    font-size: 16px;
    line-height: 1.56;
    padding: 1.5rem;
  }
  }
  .gift {
    padding: 0 1.5rem;
  .title1 {
    background: url("/sui_assets/img/mass/bg.svg") center no-repeat/contain;
    height: 76px;
    box-sizing: border-box;
    padding-top: 41px;
    text-align: center;
  }
  .item {
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    padding: 6px;
    margin: .5rem 0;
  .img {
    width: 100%;
    position: relative;
  }
  .img .img {
    border: solid 1px #dedede;
  }
  .img:after {
    content: "查看详情";
    background: #000000;
    color: white;
    opacity: 0.6;
    border-radius: 14px;
    text-align: center;
    padding: 7px 18px;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  .title2 {
    font-size: 23px;
    font-weight: 500;
    line-height: 1.35;
    padding: .8rem .5rem .2rem;
  .xs {
    color: #ff3e3a;
    font-size: 14px;
    padding-top: 5px;
  }
  }
  .amount {
    font-size: 14px;
    padding: 0 .5rem;
  .lg {
    font-size: 20px;
    color: #f83342;
  }
  }
  .limit {
    border-top: 1px dashed #dedede;
    padding: .5rem 0;
    margin: .8rem .5rem .5rem;
    font-size: 14px;
    color: #a3a3a3;
    line-height: 1.43;
  }
  }
  }
  }

  .ad {
    position: relative;
    height: 6rem;
    overflow: hidden;
  img {
  //border: 2px solid rgba(0, 0, 0, .3);
  //border-width: 2px 0;
    width: 100%;
    height: 6rem;

  }
  }

  .ad:after {
    content: "";
    background: url(/sui_assets/img/tuijian.svg) center top no-repeat;
    padding: 31px;
    position: absolute;
    top: 0;
    right: 0;
  }

  .img-text {
    overflow: hidden;
  .left {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    vertical-align: top;
    float: left;
  }
  .right {
    text-align: left;
    width: 81%;
    width: calc(100% - 55px);
    margin-left: 55px;
  .label {
    font-size: .8rem;
    font-weight: 500;
    padding-bottom: .5rem;
  }
  .label-text {
    color: rgb(0, 0, 0);
    font-size: 0.7rem;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.43;
    display: -webkit-box;
    overflow: hidden;

  }
  .label-text1 {
    color: rgb(0, 0, 0);
    font-size: 0.7rem;
    line-height: 1.43;
    overflow: auto;
  }
  .append {
    padding: .4rem 0;
    text-decoration: underline;
  }
  }
  }

  .upgrade {
    background: #030200;
    padding-bottom: 1px;
  .bg {
    background: url("/sui_assets/img/upgrade/bg.svg") center top no-repeat;
    padding: 2rem 2rem 4rem;
    background-size: 100%;
    text-align: center;
    min-height: 14rem;
  .level {
    background: url("/sui_assets/img/upgrade/oval-icon.png") center no-repeat/contain;
    padding: 1.5rem;
    position: relative;
  .icon {
    color: white;
    font-size: 30px;
  }
  }
  .up:after {
    content: "";
    background: url("/sui_assets/img/upgrade/raise.svg") center no-repeat/contain;
    padding: 20px;
    animation: run1 1s;
    animation-timing-function: ease-in-out;
  //animation-timing-function: linear;
    animation-iteration-count: infinite;
  //animation-direction: alternate;
    position: absolute;
  }
  @keyframes run1 {
    0% {
      bottom: 1px;
    }
  //20% {
  //  bottom: 5px;
  //}
  100% {
    bottom: 25px;
  }
  }
  .name {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to bottom, #E7D79D, #CAAE64);
    font-size: 1.2rem;
    font-weight: 700;
    border-bottom: 1px solid #CEB36C;
    display: inline-block;
    padding-top: 1rem;
  }
  .addon {
    color: #FCE9D7;
    font-size: 1.4rem;
    padding: 1.5rem 0;
    font-weight: bold;
  }
  }
  .box1 {
    background: url(/sui_assets/img/upgrade/title1.svg) center top no-repeat;
    padding-top: 2.5rem;
    margin-bottom: 2.6rem;
    margin-top: 1rem;
  .swiper-slide {
    background: white;
    height: 15rem;
    padding: 1rem;
    position: relative;
    border-radius: 5px;
    box-sizing: border-box;
  //width: 12rem;
  //margin: auto;
  .coupon-bg {
    height: 7rem;
    background-size: cover;
    background-position: center;
  }
  .today:before {
    content: "";
    background: url(/sui_assets/img/upgrade/today.svg) left top no-repeat;
    padding: 11px 40px;
    margin-left: -11px;
    background-size: cover;
  }
  .name {
    color: #D3A47B;
    font-size: .9rem;
    font-weight: bold;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
    text-align: center;
    padding: .5rem 0;
  }
  .limit {
    color: #5E5C5C;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
  }
  }
  .swiper-slide.add:after {
    content: "查看详情";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: 3;
    color: #ACACAC;
    background: #EFEFEF;
    text-align: center;
    border-radius: 0 0 5px 5px;
  }

  }
  .box2 {
    background: url(/sui_assets/img/upgrade/title2.svg) center top no-repeat;
    padding-top: 2rem;
  .item {
    background: url(/sui_assets/img/upgrade/star1.svg) left top no-repeat;
    background-size: cover;
  //background-image: linear-gradient(to left, #030200, #252525);
    position: relative;
    text-align: center;
    padding: 1rem 3.5rem;
    margin: .5rem 0;
  .name {
    color: #FCE9D7;
    font-size: .85rem;
    line-height: 1.3;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
  }
  .addon {
    padding: .8rem;
    color: #6F6D6D;
  }
  }
  /* .item:before {
     content: "";
     position: absolute;
     top: 0;
     left: 0;
     bottom: 0;
     background: url(/sui_assets/img/upgrade/star1.svg) left top no-repeat;

   }*/
  }
  .box3 {
    margin: 2.6rem 2.4rem 3rem;
    border: 1px solid #BF8553;
    border-radius: 10px;
    padding: 1.3rem 1.5rem;
    text-align: center;
    color: white;
    position: relative;
  .item {
    background: url(/sui_assets/img/upgrade/star-liststyle.svg) left center no-repeat;
    padding: .5rem 0 .5rem 1.2rem;
    text-align: left;
    font-size: .75rem;
  }
  }
  .box3:after {
    content: " 权益使用详情可询问店员 最终解释权归本店所有";
    display: block;
    /* margin: 1rem 0; */
    position: absolute;
    bottom: -3rem;
    color: #4A4545;
    font-size: .65rem;
    width: 7.5rem;
    margin: auto;
    left: 0;
    right: 0;

  }
  .fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
    background: #212121;
    padding: 1px;
  .btn {
    margin: .7rem .9rem;
    border-radius: 5px;
    background-image: linear-gradient(94deg, #E4B658, #EFD578);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    color: #312D48;
    font-size: 1rem;
    font-weight: bold;
  }
  .rule-text {
    padding: 0 .85rem;
  .i-flex {
    background: url(/sui_assets/img/upgrade/star-liststyle.svg) left center no-repeat;
    padding: .8rem 0 .8rem 1.2rem;
    border-bottom: 1px solid #383838;
    color: white;
    font-size: .75rem;
    margin: 0;
  .btn {
    width: 4.5rem;
    margin: 0;
    margin-left: .5rem;
    height: 1.6rem;
    font-size: .7rem;
    line-height: 1.6rem;
  }
  }
  .close {
    background: url(/sui_assets/img/upgrade/close-icon.svg) center no-repeat;
    background-color: #211818;
    height: 54px;
    margin: -1px -1rem;
  }
  }
  }
  }

</style>
