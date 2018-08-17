<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="banner">
      <img src="static/img/banner1.png" alt="">
    </div>
    <div class="productDetail">
      <div class="productName">我乐橱柜 简爱</div>
      <div class="productText">
        舒适的空间享受 刚柔并济设计
      </div>
      <div class="productTag">
        <span class="sTag">实木</span>
        <span class="sTag">别墅</span>
      </div>
      <div class="newPrice">
        <span class="price">￥2460</span>
        <span class="kucun">库存：66</span>
      </div>
      <div class="oldPrice">
        <s>￥3600</s>
      </div>
    </div>
    <div class="grayBlank"></div>
    <div class="discount">
      <img src="static/img/juan.png" alt="" class="juan">
      <span>折扣劵</span>
      <img src="static/img/rightArrow.png" alt="" class="rightArrow">
    </div>
    <div class="grayBlank"></div>
    <div class="productDetailTab">
      <span class="tab" @click="clickProductDetail(1)" :style="productTabStatus==1?productTabStyle:''">商品详情</span>
      <span class="tab tabRight" @click="clickProductDetail(2)" :style="productTabStatus==2?productTabStyle:''">规格参数</span>
      <p class="greenLine" :style="lineStyle"></p>
    </div>
    <div class="productDetailImg" v-if="productTabStatus==1">
      <img src="static/img/banner1.png" alt="">
    </div>
    <div class="parameter" v-if="productTabStatus==2">
      <div class="text">
        <span class="title1">品牌</span>
        <span class="title2">我了橱柜</span>
      </div>
      <div class="text">
        <span class="title1">品牌</span>
        <span class="title2">我了橱柜</span>
      </div>
      <div class="text">
        <span class="title1">品牌</span>
        <span class="title2">我了橱柜</span>
      </div>
      <div class="text">
        <span class="title1">品牌</span>
        <span class="title2">我了橱柜</span>
      </div>
    </div>
    <footer class="footer">
      <div class="collection">
        <img src="static/img/collection.png" alt="">
        <span>收藏</span>
      </div>
      <div class="inStore" @click="$router.push('storeDetail')">进入店铺</div>
      <div class="phoneSeller">联系商家</div>
    </footer>
  </div>
</template>
<script>
import HeaderSame from "../../../common/sameHeader.vue";
export default {
  components: { HeaderSame },
  data: function() {
    return {
      headerObj: { title: "商品详情", img: "static/img/fenxiang.png" },
      productTabStatus: 1,
      productTabStyle: "color:#333333;",
      lineStyle: ""
    };
  },
  methods: {
    clickProductDetail: function(res) {
      if (res == 1) {
        this.lineStyle = "transform:translateX(0)";
      } else if (res == 2) {
        this.lineStyle = "transform:translateX(3.74rem)";
      }
      this.productTabStatus = res;
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  background: #fff;
  padding-bottom: 1.31rem;
  .banner {
    height: 3.98rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .productDetail {
    padding-top: 0.46rem;
    box-sizing: border-box;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-bottom: 0.23rem;
    .productName {
      font-size: 0.3rem;
      color: #333333;
    }
    .productText {
      font-size: 0.24rem;
      color: #999999;
      margin-top: 0.14rem;
    }
    .productTag {
      font-size: 0.22rem;
      margin: 0.14rem 0;
    }
    .newPrice {
      font-size: 0.36rem;
      line-height: 0.36rem;
      .price {
        font-size: 0.36rem;
        color: #e26f72;
      }
      .kucun {
        font-size: 0.24rem;
        color: #999999;
        float: right;
      }
    }
    .oldPrice {
      font-size: 0.24rem;
      color: #999999;
      margin-top: 0.12rem;
    }
  }
  .discount {
    height: 0.88rem;
    font-size: 0.2rem;
    color: #999999;
    line-height: 0.88rem;
    padding-left: 0.34rem;
    padding-right: 0.38rem;
    box-sizing: border-box;
    .rightArrow {
      float: right;
      height: 0.24rem;
      margin-top: 0.32rem;
    }
    .juan {
      height: 0.28rem;
      float: left;
      margin-top: 0.29rem;
      margin-right: 0.3rem;
    }
  }
  .productDetailTab {
    font-size: 0.3rem;
    color: #666666;
    height: 0.88rem;
    line-height: 0.48rem;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.2rem 0;
    position: relative;
    .tab {
      display: inline-block;
      width: 50%;
      border-right: 1px solid #979797;
      text-align: center;
    }
    .tabRight {
      border-right: 0;
    }
    .greenLine {
      display: block;
      background: #50bf82;
      border-radius: 100px;
      width: 0.59rem;
      height: 0.1rem;
      position: absolute;
      bottom: 0;
      transition: all 0.3s ease-in-out;
      left: 1.58rem;
    }
  }
  .productDetailImg {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .parameter {
    font-size: 0.24rem;
    .text {
      box-sizing: border-box;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
      display: flex;
      justify-content: space-between;
      margin-top: 0.3rem;
      span {
        display: inline-block;
      }
      .title1 {
        width: 30%;
        color: #999999;
      }
      .title2 {
        width: 60%;
        color: #444444;
      }
    }
  }
  .footer {
    height: 1.01rem;
    position: fixed;
    bottom: 0;
    box-shadow: #666666 2px 8px 2px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    line-height: 1.01rem;
    font-size: 0.3rem;
    .collection {
      width: 20%;
      background: #ffffff;
      text-align: center;
      color: #3cb850;
      border-top: 1px solid #efefef;
      img {
        height: 0.31rem;
        float: left;
        margin-top: 0.33rem;
        margin-left: 0.2rem;
      }
    }
    .inStore {
      width: 40%;
      background: #3cb850;
      text-align: center;
      color: #fff;
    }
    .phoneSeller {
      width: 40%;
      background: #43474d;
      text-align: center;
      color: #fff;
    }
  }
}
</style>


