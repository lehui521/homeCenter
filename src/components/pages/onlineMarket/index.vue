<template>
  <div class="page">
    <header :class="showHeaderStyle?'header bgWhite':'header'">
      <div class="address">
        <span>上海红星美凯龙真北路商场</span>
        <img src="static/img/weizhi.png" alt="">
      </div>
      <div class="headerIcon" v-if="!showHeaderStyle">
        <img src="static/img/kefu.png" alt="">
        <img src="static/img/xiaoxi.png" alt="">
      </div>
      <div class="headerIcon" v-if="showHeaderStyle">
        <img src="static/img/kefuB.png" alt="">
        <img src="static/img/xiaoxiB.png" alt="">
      </div>
    </header>
    <div class="banner">
      <img src="static/img/banner1.png" style="width:100%;height:100%;" class="bannerImg" />
    </div>
    <div class="indexNav" @click="$router.push('marketMap')">
      <div class="navImg">
        <img src="static/img/shichangditu.png" alt="">
        <span>市场地图</span>
      </div>
      <div class="navImg">
        <img src="static/img/jingpindianpu.png" alt="">
        <span>精品店铺</span>
      </div>
      <div class="navImg">
        <img src="static/img/shangpinfenlei.png" alt="">
        <span>商品分类</span>
      </div>
      <div class="navImg">
        <img src="static/img/cuxiaohuodong.png" alt="">
        <span>促销活动</span>
      </div>
    </div>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <div class="marketDetail">
      <div class="name">
        <span>上海红星美凯龙真北路商场</span>
        <img src="static/img/rightIcon.png" alt="" class="rightIcon">
        <span class="icon">简介</span>
      </div>
      <div class="describe">
        <span class="text1">上海红星美凯龙商场阿萨德喀什几乎是可敬的会卡金黄色的框架框架建行卡手机号的</span>
        <u class="text2">全文</u>
      </div>
      <div class="tag">
        <van-tag type="success" plain>建材</van-tag>
        <van-tag type="success" plain>家居</van-tag>
        <van-tag type="success" plain>灯饰</van-tag>
        <van-tag type="success" plain>五金</van-tag>
      </div>
      <div class="phone">
        <img src="static/img/dianhua.png" alt="">
        <span>15252111236</span>
      </div>
      <div class="Maddress">
        <img src="static/img/dizhi.png" alt="">
        <span>上海市徐汇区凯旋路552号</span>
      </div>
    </div>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <newSwipe :newArr="newArr"></newSwipe>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
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
    <brandC></brandC>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <decorationC>
    </decorationC>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <Designer></Designer>
  </div>
</template>
<script>
//汇头条
import newSwipe from "../../common/newSwipe.vue";
//折扣专区
import discountA from "./discountArea.vue";
//店铺精选
import storeC from "./storeChoice.vue";
//商品精选
import productC from "./productChoice.vue";
//品牌精选
import brandC from "./brandChoice.vue";
//装修公司
import decorationC from "./decorationCompany.vue";
//设计师
import Designer from "./designer.vue";
export default {
  components: {
    newSwipe,
    discountA,
    storeC,
    productC,
    brandC,
    decorationC,
    Designer
  },
  data: function() {
    return {
      newArr: {
        arr: ["asdsad", "dasdasdasd"],
        img: "static/img/xinwentoutiao.png",
        target: "onlineMarket"
      },
      showHeaderStyle: false
    };
  },
  mounted: function() {
    window.onscroll = () => {
      let header = document.getElementById("header");
      let top = document.documentElement.scrollTop;
      if (parseInt(top) > 100) {
        this.showHeaderStyle = true;
      } else {
        this.showHeaderStyle = false;
      }
    };
  },
  created: function() {}
};
</script>
<style lang="scss" scoped>
.page {
  background: #fff;
  font-size: 0.3rem;
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
    transition: all 0.3s ease-in-out;
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
      padding-left: 0.2rem;
      img {
        width: 0.16rem;
        float: right;
        margin-right: 0.2rem;
        margin-top: 0.2rem;
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
  .bgWhite {
    background: rgba(255, 255, 255, 1);
    transition: all 0.3s ease-in-out;
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
  .marketDetail {
    padding: 0.2rem;
    .name {
      font-size: 0.3rem;
      font-weight: 500;
      height: 0.8rem;
      line-height: 0.8rem;
      color: #444444;
      .icon {
        float: right;
        color: #38ba50;
        font-size: 0.24rem;
        margin-right: 10px;
      }
      img {
        height: 0.24rem;
        float: right;
        margin-top: 0.27rem;
      }
    }
    .describe {
      font-size: 0.24rem;
      font-weight: 500;
      height: 0.8rem;
      display: flex;
      justify-content: space-between;
      .text1 {
        // overflow: hidden;
        display: inline-block;
        height: 0.8rem;
        width: 80%;
        color: #666666;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .text2 {
        display: inline-block;
        height: 0.8rem;
        color: #38ba50;
        line-height: 1.3rem;
      }
    }
  }
  .tag {
    margin-top: 0.2rem;
  }
  .phone {
    margin-top: 0.2rem;
    position: relative;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-bottom: 0.1rem;
    color: #666666;
    font-size: 0.24rem;
    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: inline-block;
      width: 100%;
      padding-left: 0.45rem;
      box-sizing: border-box;
    }
    img {
      height: 0.24rem;
      position: absolute;
      top: 0.02rem;
      left: 0;
    }
  }
  .Maddress {
    margin-top: 0.2rem;
    position: relative;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-bottom: 0.1rem;
    color: #666666;
    font-size: 0.24rem;
    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: inline-block;
      width: 100%;
      padding-left: 0.45rem;
      box-sizing: border-box;
    }
    img {
      height: 0.24rem;
      position: absolute;
      top: 0.02rem;
      left: 0;
    }
  }
}
</style>


