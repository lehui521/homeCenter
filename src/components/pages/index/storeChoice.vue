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
                <div class="text">
                    上海恒大建材厂
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
  font-size: 0.35rem;
  margin-bottom:0.3rem;
  .title {
    text-align: center;
    padding: 0.5rem 0.2rem;
    img {
      height: 0.4rem;
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
    .list {
      width: 50%;
      padding: 0.3rem;
      box-sizing: border-box;
      box-shadow: #efefef 1px 1px 6px;
      img {
        width: 100%;
        height: 2.3rem;
      }
      .listName {
        font-weight: 500;
        text-align: center;
        color:#4e4e4e;
      }
      .text{
          text-align: center;
          color:#4e4e4e;
          font-size:0.28rem;
      }
    }
  }
}
</style>


