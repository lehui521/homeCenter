<template>
  <div class="platformRecruit">
    <div class="title">
      <img src="static/img/pingtaizhaomu.png" alt="">
    </div>
    <div class="center">
      <div>
        <img src="static/img/shangchang.png" alt="">
        <p class="name">市场/商场</p>
        <p class="button">联系入驻</p>
      </div>
      <div>
        <img src="static/img/tubiaoshangjia.png" alt="">
        <p class="name">品牌/商家</p>
        <p class="button">联系入驻</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.platformRecruit {
  font-size: 0.25rem;
  padding-bottom: 0.2rem;
  background: #fff;
  .title {
    text-align: center;
    padding: 0.36rem 0;
    position: relative;
    img {
      height: 0.28rem;
    }
  }
  .center {
    display: flex;
    justify-content: space-around;
    div {
      width: 35%;
      box-shadow: #dbdbdb 1px 1px 3px;
      text-align: center;
      padding: 10px;
      img {
        width: 1.6rem;
      }
      .name {
        color: #555555;
        font-size: 0.24rem;
        font-weight: 500;
        line-height: 0.75rem;
      }
      .button {
        background-color: #3cb850;
        color: #fff;
        border-radius: 30px;
        width: 2rem;
        padding: 3px 4px;
        margin: auto;
        font-size: 0.24rem;
      }
    }
  }
}
</style>


