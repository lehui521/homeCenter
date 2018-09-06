<template>
  <div class="pages">
    <div class="header">
      <span>设计师案例详情</span>
      <img src="static/img/fenxiangB.png" alt="" class="share">
      <img src="static/img/grayStar.png" alt="" class="star">
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
    </div>
    <div class="content">
      <div class="caseName">新中式</div>
      <div class="caseTitle">
        上海市 | 中商小区&nbsp;&nbsp;&nbsp; 中式 | 三居 | 220平
      </div>
      <div class="caseImg">
        <div class="img" v-for="i in 3" :key="i">
          <img src="static/img/banner1.png" alt="">
        </div>
      </div>
    </div>
    <div class="caseFooter">
      <div class="caseAuthor">
        <img src="static/img/touxiang.jpg" alt="">
        <span>张三</span>
      </div>
      <div class="caseCall">
        找TA设计
      </div>
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
  padding-bottom: 0.88rem;
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
  .content {
    .caseName {
      color: #333333;
      font-size: 0.3rem;
      font-weight: 600;
      text-align: center;
      margin-top: 0.32rem;
    }
    .caseTitle {
      color: #666666;
      font-size: 0.26rem;
      text-align: center;
      margin-top: 0.32rem;
    }
    .caseImg {
      padding: 0 0.1rem;
      box-sizing: border-box;
      margin-top: 0.56rem;
      .img {
        height: 4.84rem;
        width: 100%;
        margin-bottom: 0.2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .caseFooter {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.88rem;
    font-size: 0.3rem;
    display: flex;
    justify-content: space-between;
    .caseAuthor {
      line-height: 0.88rem;
      color: #50bf82;
      width: 50%;
      background: #fff;
      img {
        width: 0.88rem;
        height: 100%;
        border-radius: 50%;
        margin-left: 0.22rem;
      }
      span {
        float: right;
        margin-right: 0.97rem;
      }
    }
    .caseCall {
      width: 50%;
      line-height: 0.88rem;
      text-align: center;
      background: #3cb850;
      color: #fff;
    }
  }
}
</style>


