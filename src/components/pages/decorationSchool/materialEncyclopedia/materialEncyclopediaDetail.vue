<template>
    <div class="pages">
        <div class="header">
            <span>百科详情</span>
            <img src="static/img/greenStar.png" alt="" class="star">
            <img src="static/img/fenxiang.png" alt="" class="share">
            <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
        </div>
        <div class="title">
            详情的标题
        </div>
        <div class="detailContent">
            集成墙饰多少钱一平方撒比较 快nasal看书来看你啦说的是的 了你了大半年离开 阿乐开怀啦 爱上看啊就是按逻辑啊可的风 是你 爱上
        </div>
    </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  background: #fff;
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
    .share {
      position: absolute;
      right: 0.4rem;
      height: 0.33rem;
      top: 0.27rem;
    }
    .star {
      position: absolute;
      right: 1.1rem;
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
  .title {
    font-size: 0.3rem;
    color: #333333;
    text-align: center;
    padding: 0.25rem 0;
    border-bottom: 1px solid #979797;
    border-top: 1px solid #979797;
    background: #fff;
  }
  .detailContent {
    font-size: 0.26rem;
    color: #999999;
    letter-spacing: 0;
    padding: 0.25rem 0.15rem;
    box-sizing: border-box;
  }
}
</style>

