<template>
  <div class="storeChoice">
    <div class="title">
      <img src="static/img/dianpujingxuan.png" alt="">
      <img src="static/img/rightIcon.png" alt="" class="rightIcon">
    </div>
    <div class="banner">
      <img src="static/img/discountBanner.png" alt="">
    </div>
    <div class="center">
      <div class="list" v-for="(item,index) in [1,2,3,4]" :key="index">
        <img src="static/img/shichangtuipian.png" alt="">
        <div class="listName">
          冠珠陶瓷
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.storeChoice {
  font-size: 0.3rem;
  margin-bottom: 0.3rem;
  .title {
    text-align: center;
    padding: 0.5rem 0.2rem;
    img {
      height: 0.28rem;
    }
    .rightIcon {
      float: right;
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
      img {
        width: 3.26rem;
        height: 2.04rem;
      }
      .listName {
        margin: 0.13rem 0;
        font-weight: 500;
        text-align: center;
        color: #333333;
        font-size: 0.28rem;
      }
    }
  }
}
</style>


