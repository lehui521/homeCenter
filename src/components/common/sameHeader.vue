<template>
  <div class="header">
    <span>{{headerObj.title}}</span>
    <img :src="headerObj.img" alt="" class="share" @click="handleClickRight(headerObj.text)" v-if="headerObj.img!==''">
    <div class="back">
      <img src="static/img/leftArrow.png" alt="" @click="gobackClick(headerObj.type)">
    </div>
  </div>
</template>
<script>
export default {
  props: ["headerObj", "params"],
  methods: {
    handleClickRight: function(res) {
      if (res == "discountProduct") {
        //折扣商品的搜索
        this.$router.push("searchDiscountArea");
      } else if (res == "salesPromotion") {
        //促销活动的搜索
        this.$router.push("searchSalesPro?type=" + this.headerObj.salesType);
      } else if (res == "productChoice") {
        //精品商品的搜索
        this.$router.push({ path: "searchProductChoice", query: this.params });
      } else if (res == "storeChoice") {
        //精品店铺搜索
        this.$router.push({ path: "searchStoreChoice", query: this.params });
      } else if (res == "decorationCompany") {
        //装修公司搜索
        this.$router.push("searchDecorationCompany");
      } else if (res == "ownerDiary") {
        //新增日记
        this.$router.push("addDiary");
      } else if (res == "indexNews") {
        this.$router.push("searchIndexNew");
      } else if (res == "share") {
        if (window.HostApp) {
          // let data = JSON.stringify(this.params);
          window.HostApp.share(
            this.params.image,
            this.params.title,
            this.params.des,
            this.params.path
          );
        } else {
          console.log(this.params);
        }
      }
    },
    gobackClick: function(type) {
      if (type == "H5") {
        this.$router.go(-1);
      } else {
        this.goBack();
      }
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

