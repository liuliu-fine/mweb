<template>
  <div class="goods-list-wrapper">
    <div class="cap-goods-list">
      <ul class="cap-goods-list__container cap-goods-list__container--list cap-goods-list__container--card">
        <li class="cap-goods-list__wrapper" v-for="item in data.items">
          <div v-on:click="redirect"
               class="cap-goods-list__item cap-goods-list__item--list card cap-goods-list__item--btn4 cap-goods-list__item--whitespace">
            <div class="cap-goods-list__photo">
              <img class="cap-goods-list__img" :src="item.picUrl"></div>
            <div class="cap-goods-list__info has-title has-price has-btn">
              <h3 class="title">{{item.title}}</h3>
              <p class="sale-info"><span class="sale-price">¥ {{item.price}}</span></p></div>
            <div class="cap-goods-list__buy-btn-wrapper cap-goods-list__buy-btn-wrapper--4">
              <button class="cap-goods-list__buy-btn-4 van-button van-button--default van-button--small"><!----><span
                class="van-button__text">购买</span></button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        data: ""
      }
    },
    created() {
      this.$http.get("/mall/guest/" + (this.$route.query.id || this.$route.query.guestid)).then(response => {
        let data = response.body;
        if (data.code == 200) {
          this.data = data.result;
        } else if (data.code === 404000) {

        } else {

        }
      });
    }
  }
</script>

<style lang="scss">
  html {
    font-family: Arial, Helvetica, "STHeiti STXihei", "Microsoft YaHei", Tohoma;

  body {
    background: #f8f8f8;
    font: inherit;
  }

  }
  @import "../sui_assets/scss/mall.scss";

</style>
