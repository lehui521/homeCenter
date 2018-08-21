<template>
  <div class="pages">
    <div class="header">
      <span>专题详情</span>
      <img src="static/img/fenxiang.png" alt="" class="share">
      <img src="static/img/greenFullStar.png" alt="" class="star">
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
    </div>
    <van-swipe class="swipeContent" :show-indicators="false" :loop="false">
      <van-swipe-item class="swipeSingle" v-for="i in 7" :key="i">
        <div class="img"></div>
        <div class="imgText">
          <div class="left">{{i}}/7</div>
          <div class="right"></div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.pages {
  height: 100%;
  padding-top: 0.88rem;
  box-sizing: border-box;
  .header {
    height: 0.88rem;
    position: fixed;
    width: 100%;
    text-align: center;
    font-size: 0.36rem;
    color: #333333;
    line-height: 0.88rem;
    top: 0;
    background: #fff;
    z-index: 99999;
    .share {
      position: absolute;
      right: 0.4rem;
      height: 0.33rem;
      top: 0.27rem;
    }
    .star {
      position: absolute;
      right: 1.3rem;
      height: 0.33rem;
      top: 0.27rem;
    }
    .back {
      height: 0.32rem;
      position: absolute;
      top: 0.28rem;
      left: 0.3rem;
    }
  }
  .swipeContent {
    height: 100%;
    .swipeSingle {
      height: 100%;
      .img {
        height: 7.5rem;
        width: 100%;
        background: #d8d8d8;
      }
      .imgText {
        display: flex;
        justify-content: space-between;
        padding-top: 0.6rem;
        padding-left: 0.94rem;
        box-sizing: border-box;
        padding-right: 0.3rem;
        .left {
          width: 25%;
          border: 1px solid red;
          font-size: 0.48rem;
          color: #666666;
          letter-spacing: 0;
        }
        .right {
          width: 75%;
          border: 1px solid red;
        }
      }
    }
  }
}
</style>


