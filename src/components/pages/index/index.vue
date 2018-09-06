<template>
  <div class="page" @scroll="scrollHandle($event)" @touchmove="scrollHandle($event)">
    <header :class="showHeaderStyle?'header bgWhite':'header'">
      <div class="address" @click="$router.push('mapCity')">
        <span>{{cityData.name}}</span>
        <img src="static/img/weizhi.png" alt="">
      </div>
      <div class="headerIcon" v-if="!showHeaderStyle">
        <div class="iconDiv"><img src="static/img/kefu.png" alt=""></div>
        <div class="iconDiv"><img src="static/img/xiaoxi.png" alt=""></div>
      </div>
      <div class="headerIcon" v-if="showHeaderStyle">
        <div class="iconDiv"><img src="static/img/kefuB.png" alt=""></div>
        <div class="iconDiv"><img src="static/img/xiaoxiB.png" alt=""></div>
      </div>
    </header>
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in bannerImgs" :key="index" v-if="bannerImgs.length!=0">
          <img :src="image.image" style="width:100%;height:100%;" class="bannerImg" />
        </van-swipe-item>
        <van-swipe-item v-else>
          <img src="static/img/banner1.png" style="width:100%;height:100%;" class="bannerImg" />
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
        <span>精品旺铺</span>
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
    <newSwipe :newArr="indexData.indexNew"></newSwipe>
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
  data: function() {
    return {
      bannerImgs: [],
      newArr: {},
      indexData: {
        indexNew: [{ title: "adsadsa" }]
      },
      showHeaderStyle: false,
      cityData: JSON.parse(localStorage.getItem("cityData"))
    };
  },
  mounted: function() {
    this.scrollHandle();
    this.getData();
  },
  methods: {
    scrollHandle: function(e) {
      window.addEventListener("scroll", e => {
        let header = document.getElementById("header");
        let top =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;
        if (parseInt(top) > 100) {
          this.showHeaderStyle = true;
        } else {
          this.showHeaderStyle = false;
        }
      });
    },
    getData: function() {
      this.tool
        .request({
          url: "v3_index/index",
          method: "post",
          params: {
            city_id: this.cityData.id,
            lat: this.cityData.lat,
            lng: this.cityData.lng
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.bannerImgs = res.data.banner; //首页轮播
            this.indexData.indexNew = res.data.toutiao.list; //首页的头条
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.page {
  background: #fff;
  font-size: 0.35rem;
  .header {
    transition: all 0.3s ease-in-out;
    height: 0.88rem;
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
      width: 1.3rem;
      height: 100%;
      line-height: 0.6rem;
      text-align: center;
      display: flex;
      justify-content: space-between;
      .iconDiv {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        img {
          width: 0.38rem;
          height: 0.3rem;
          display: inline-block;
        }
      }
    }
  }
  .bgWhite {
    background: rgba(255, 255, 255, 1);
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

