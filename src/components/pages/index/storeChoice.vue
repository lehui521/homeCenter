<template>
  <div class="storeChoice">
    <div class="title" @click="$router.push('storeChoiceContent?cityId='+id+'&lng='+lng+'&lat='+lat)">
      <img src="static/img/dianpujingxuan.png" alt="">
      <img src="static/img/rightIcon.png" alt="" class="rightIcon">
    </div>
    <div class="banner">
      <img :src="newObjBanner.image" alt="">
    </div>
    <div class="center">
      <div class="list" v-for="(item,index) in newObjList" :key="index" @click="$router.push('storeDetail?shop_id='+item.shop_id)">
        <img v-lazy="item.image" alt="">
        <div class="listName">
          {{item.shop_name}}
        </div>
        <div class="text">
          {{item.market_name}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["newObjBanner", "newObjList"],
  data: function() {
    return {
      id: JSON.parse(localStorage.getItem("cityData")).id,
      lng: JSON.parse(localStorage.getItem("cityData")).lng,
      lat: JSON.parse(localStorage.getItem("cityData")).lat
    };
  }
};
</script>
<style lang="scss" scoped>
.storeChoice {
  font-size: 0.25rem;
  margin-bottom: 0.2rem;
  background: #fff;
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
      box-shadow: #dedede 1px 1px 4px;
      margin-top: 0.2rem;
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
      .text {
        margin-top: 5px;
        text-align: center;
        color: #666666;
        font-size: 0.18rem;
      }
    }
  }
}
</style>


