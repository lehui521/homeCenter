<template>
  <div class="pages">
    <div class="header">
      <span>视频列表</span>
      <!-- <img src="static/img/fenxiangB.png" alt="" class="share">
            <img src="static/img/grayStar.png" alt="" class="star"> -->
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
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
      right: 1rem;
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
}
</style>


