<template>
  <div class="productChoice">
    <div class="title" @click="$router.push('productClassif?cityId='+cityId)">
      <img src="static/img/shangpinjingxuan.png" alt="">
      <img src="static/img/rightIcon.png" alt="" class="rightIcon">
    </div>
    <div class="banner">
      <img v-lazy="newObjBanner.image" alt="">
    </div>
    <div class="center">
      <div class="list" v-for="(item,index) in newObjList" :key="index" @click="$router.push('productDetail?goods_id='+item.goods_id)">
        <div class="price">￥{{item.price}}</div>
        <img v-lazy="item.image" alt="">
        <div class="listName">
          {{item.brand_name}}
        </div>
        <div class="text">
          <span class="name">{{item.shop_name}} | {{item.market_name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      cityId: JSON.parse(localStorage.getItem("cityData")).id
    };
  },
  props: ["newObjBanner", "newObjList"]
};
</script>
<style lang="scss" scoped>
.productChoice {
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
        text-align: center;
        color: #666666;
        font-size: 0.18rem;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        .name {
          margin-top: 5px;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
          box-sizing: border-box;
          width: 100%;
        }
      }
    }
  }
}
</style>


