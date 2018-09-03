<template>
  <div class="pages">
    <header class="header">
      装修学堂
    </header>
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in bannerImgs" :key="index">
          <img :src="image" style="width:100%;height:100%;" class="bannerImg" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav">
      <div class="navContent">
        <div class="navImg">
          <img src="static/img/tuku.png" alt="">
        </div>
        <div class="navText" @click="$router.push('decorationBeauty')">
          <p class="text1">装修图库</p>
          <p class="text2">多风格供你参考</p>
        </div>
      </div>
      <div class="navContent">
        <div class="navImg">
          <img src="static/img/gonglv.png" alt="">
        </div>
        <div class="navText" @click="$router.push('decorationStrategy')">
          <p class="text1">装修攻略</p>
          <p class="text2">装修阶段必备常识</p>
        </div>
      </div>
      <div class="navContent">
        <div class="navImg">
          <img src="static/img/zhuangxiu.png" alt="">
        </div>
        <div class="navText" @click="$router.push('decorationEncyclopedia')">
          <p class="text1">装修百科</p>
          <p class="text2">菜鸟也能变达人</p>
        </div>
      </div>
      <div class="navContent">
        <div class="navImg">
          <img src="static/img/cailiao.png" alt="">
        </div>
        <div class="navText" @click="$router.push('materialEncyclopedia')">
          <p class="text1">材料百科</p>
          <p class="text2">材料也是门科学</p>
        </div>
      </div>
    </div>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <lookP></lookP>
    <videoL></videoL>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <ownerD></ownerD>
  </div>
</template>
<script>
//看图学设计
import lookP from "./lookPictureLearn.vue";
//看视频学设计
import videoL from "./videoLearn.vue";
//业主日记
import ownerD from "./ownerDiary.vue";
export default {
  components: { lookP, videoL, ownerD },
  data: function() {
    return {
      bannerImgs: [
        "static/img/zhuangxiuBanner.png",
        "static/img/zhuangxiuBanner.png",
        "static/img/zhuangxiuBanner.png"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.pages {
  background: #fff;
  padding-top: 0;
  .header {
    height: 0.88rem;
    text-align: center;
    font-size: 0.36rem;
    color: #333333;
    line-height: 0.88rem;
    background-color: #fff;
  }
  .banner {
    height: 2.4rem;
    .bannerImg {
      height: 2.4rem;
      width: 100%;
    }
  }
  .nav {
    height: 2.92rem;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    box-sizing: border-box;
    padding: 0.1rem;
    .navContent {
      width: 50%;
      height: 50%;
      display: flex;
      justify-content: space-between;
      .navImg {
        width: 35%;
        text-align: center;
        img {
          width: 0.78rem;
          height: 0.78rem;
          margin-top: 0.34rem;
        }
      }
      .navText {
        text-align: left;
        width: 65%;
        padding-left: 0.1rem;
        box-sizing: border-box;
        .text1 {
          font-size: 0.3rem;
          color: #000;
          font-weight: 500;
          text-align: left;
          height: 0.39rem;
          line-height: 0.39rem;
          margin-top: 0.34rem;
        }
        .text2 {
          font-size: 0.24rem;
          color: #bcbcbc;
          letter-spacing: 0;
          text-align: left;
          height: 0.39rem;
          line-height: 0.51rem;
        }
      }
    }
  }
}
</style>

