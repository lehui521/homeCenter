<template>
  <div class="brandChoice">
    <div class="title" @click="$router.push('brandChoiceContent')">
      <img src="static/img/pinpaijingxuan.png" alt="">
      <img src="static/img/rightIcon.png" alt="" class="rightIcon">
    </div>
    <div class="banner">
      <img v-lazy="banner.image" alt="">
    </div>
    <div class="center">
      <div v-for="(item,index) in list" :key="index" @click="$router.push('brandDetail?brandId='+item.brand_id)">
        <img v-lazy="item.image" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["banner", "list"]
};
</script>
<style lang="scss" scoped>
.brandChoice {
  font-size: 0.35rem;
  margin-bottom: 0.3rem;
  .title {
    text-align: center;
    padding: 0.36rem 0;
    position: relative;
    img {
      height: 0.28rem;
    }
    .rightIcon {
      position: absolute;
      top: 0.38rem;
      height: 0.24rem;
      right: 0.3rem;
    }
  }
  .banner {
    height: 2.56rem;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .center {
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    padding: 0 0.2rem;
    box-sizing: border-box;
    div {
      margin-top: 0.2rem;
      width: 2.32rem;
      height: 2.3rem;
      padding: 0.6rem 0.2rem;
      box-shadow: #dedede 2px 3px 5px;
      text-align: center;
      box-sizing: border-box;
      img {
        width: 100%;
      }
    }
  }
}
</style>


