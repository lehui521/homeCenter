<template>
  <div class="header">
    <span>{{headerObj.title}}</span>
    <img :src="headerObj.img" alt="" class="share" @click="handleClickRight(headerObj.text)" v-if="headerObj.img!==''">
    <div class="back">
      <img src="static/img/leftArrow.png" alt="" @click="gobackClick">
    </div>

  </div>
</template>
<script>
export default {
  props: ["headerObj"],
  methods: {
    handleClickRight: function(res) {
      if (res == "discountProduct") {
        //折扣商品的搜索
        this.$router.push("searchDiscountArea");
      } else if (res == "salesPromotion") {
        //促销活动的搜索
        this.$router.push("searchSalesPro");
      } else if (res == "productChoice") {
        //精品商品的搜索
        this.$router.push("searchProductChoice");
      } else if (res == "storeChoice") {
        //精品店铺搜索
        this.$router.push("searchStoreChoice");
      } else if (res == "decorationCompany") {
        //装修公司搜索
        this.$router.push("searchDecorationCompany");
      } else if (res == "ownerDiary") {
        //新增日记
        this.$router.push("addDiary");
      } else if (res == "indexNews") {
        this.$router.push("searchIndexNew");
      }
    },
    gobackClick: function() {
      this.goBack();
    }
  }
};
</script>

<style lang="scss" scoped>
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
  .back {
    height: 100%;
    position: absolute;
    left: 0.3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: 0;
    img {
      height: 0.32rem;
    }
  }
}
</style>

