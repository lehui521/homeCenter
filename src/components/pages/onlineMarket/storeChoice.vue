<template>
  <div class="storeChoice">
    <div class="title" @click="$router.push('storeChoiceContent?marketId='+id+'&lng='+lng+'&lat='+lat)">
      <img src="static/img/dianpujingxuan.png" alt="">
      <div class="rightIcon">
        <img src="static/img/rightIcon.png" alt="">
      </div>
    </div>
    <div class="banner">
      <img v-lazy="banner.image" alt="">
    </div>
    <div class="center">
      <div class="list" v-for="(item,index) in list" :key="index">
        <img v-lazy="item.image" alt="">
        <div class="listName">
          {{item.shop_name}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["banner", "list"],
  id: JSON.parse(localStorage.getItem("marketData")).market_id,
  lng: JSON.parse(localStorage.getItem("marketData")).lng,
  lat: JSON.parse(localStorage.getItem("marketData")).lat
};
</script>
<style lang="scss" scoped>
.storeChoice {
  font-size: 0.3rem;
  margin-bottom: 0.3rem;
  .title {
    text-align: center;
    padding: 0.36rem 0.2rem;
    img {
      height: 0.28rem;
    }
    .rightIcon {
      float: right;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      img {
        height: 0.28rem;
      }
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


