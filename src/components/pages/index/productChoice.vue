<template>
  <div class="productChoice">
    <div class="title" @click="$router.push('productChoiceContent')">
      <img src="static/img/shangpinjingxuan.png" alt="">
      <img src="static/img/rightIcon.png" alt="" class="rightIcon">
    </div>
    <div class="banner">
      <img src="static/img/discountBanner.png" alt="">
    </div>
    <div class="center">
      <div class="list" v-for="(item,index) in [1,2,3,4]" :key="index">
        <div class="price">￥5555</div>
        <img src="static/img/shichangtuipian.png" alt="">
        <div class="listName">
          秋夕-现代橱柜
        </div>
        <div class="text">
          <span class="name" style="padding-right:0.1rem;">九牧恒大店</span>
          <span class="name">上海恒大陶瓷市场</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.productChoice {
  font-size: 0.25rem;
  margin-bottom: 0.2rem;
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
    height: 2.6rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .center {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 0.2rem;
    .list {
      width: 3.46rem;
      padding: 0.1rem;
      box-sizing: border-box;
      box-shadow: #dedede 2px 5px 10px;
      margin-top: 0.2rem;
      position: relative;
      img {
        width: 3.26rem;
        height: 2.04rem;
      }
      .listName {
        font-weight: 500;
        text-align: center;
        color: #333333;
        font-size: 0.24rem;
      }
      .price {
        position: absolute;
        top: 0.3rem;
        background-color: #fff;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        text-align: left;
        padding: 2px 0;
        padding-left: 3px;
        padding-right: 6px;
        font-size: 0.16rem;
        color: #fbb0b0;
      }
      .text {
        text-align: right;
        color: #666666;
        font-size: 0.18rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .name {
          margin-top: 5px;
          display: inline-block;
          width: 50%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: left;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>


