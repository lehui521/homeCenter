<template>
  <div class="page">
    <header class="header">
      <div class="address">
        <span>上海市</span>
        <img src="static/img/weizhi.png" alt="">
      </div>
      <div class="headerIcon">
        <img src="static/img/kefu.png" alt="">
        <img src="static/img/xiaoxi.png" alt="">
      </div>
    </header>
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in bannerImgs" :key="index">
          <img :src="image" style="width:100%;height:100%;" class="bannerImg" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="indexNav">
      <div class="navImg" @click="$router.push('decorationBeauty')">
        <img src="static/img/zhuanxiumeitu.png">
        <span>装修美图</span>
      </div>
      <div class="navImg" @click="$router.push('boutiqueShop')">
        <img src="static/img/jingpindianpu.png" alt="">
        <span>精品店铺</span>
      </div>
      <div class="navImg" @click="$router.push('productClassif')">
        <img src="static/img/shangpinfenlei.png" alt="">
        <span>商品分类</span>
      </div>
      <div class="navImg" @click="$router.push('salesPromotion')">
        <img src="static/img/cuxiaohuodong.png" alt="">
        <span>促销活动</span>
      </div>
    </div>
    <newSwipe :newArr="newArr"></newSwipe>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <!-- 推荐市场 -->
    <recommendM></recommendM>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <!-- 折扣专区 -->
    <discountA></discountA>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <storeC></storeC>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <productC></productC>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <decorationC></decorationC>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <learnD></learnD>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <platformR></platformR>
  </div>
</template>
<script>
//汇头条
import newSwipe from "../../common/newSwipe.vue";
//推荐市场
import recommendM from "./recommendMarket.vue";
//折扣专区
import discountA from "./discountArea.vue";
//店铺精选
import storeC from "./storeChoice.vue";
//商品精选
import productC from "./productChoice.vue";
//装修案例
import decorationC from "./decorationCase.vue";
//学装修
import learnD from "./learnDecoration.vue";
//平台招募
import platformR from "./platformRecruit.vue";
export default {
  components: {
    newSwipe,
    recommendM,
    discountA,
    storeC,
    productC,
    decorationC,
    learnD,
    platformR
  },
  mounted: function() {},
  data: function() {
    return {
      bannerImgs: [
        "static/img/banner1.png",
        "static/img/banner1.png",
        "static/img/banner1.png",
        "static/img/banner1.png"
      ],
      newArr: {
        arr: ["asdasdasdasd", "asdasdasdfggg", "12321321321321"],
        img: "static/img/huitoutiao.png",
        target: "index"
      }
    };
  },
  mounted: function() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.page {
  background: #fff;
  font-size: 0.35rem;
  .header {
    height: 1rem;
    background: rgba(255, 255, 255, 0);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    padding: 0.15rem 0.2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .address {
      min-width: 1.5rem;
      height: 0.54rem;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      font-size: 0.24rem;
      line-height: 0.54rem;
      text-align: center;
      color: #333333;
      font-weight: 500;
      box-sizing: border-box;
      padding-left: 0.2rem;
      img {
        width: 0.16rem;
        float: right;
        margin-right: 0.2rem;
        margin-top: 0.2rem;
        margin-left: 0.1rem;
      }
    }
    .headerIcon {
      width: 1.8rem;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      display: flex;
      justify-content: space-between;
      img {
        width: 0.6rem;
        height: 0.5rem;
        display: inline-block;
      }
    }
  }
  .banner {
    height: 4.5rem;
    .bannerImg {
      height: 4.3rem;
      width: 100%;
    }
  }
  .indexNav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    .navImg {
      width: 25%;
      text-align: center;
      font-size: 0.24rem;
      img {
        width: 0.88rem;
        height: 0.88rem;
      }
      span {
        margin-top: 0.1rem;
        display: block;
        font-weight: 500;
      }
    }
  }
}
</style>

