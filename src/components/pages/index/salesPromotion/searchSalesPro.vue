<template>
  <div class="pages">
    <searchHeader @searchClick="handleSearch"></searchHeader>
    <div class="marketActive" v-if="false">
      <div class="active">
        <div class="activeImg">
          <img src="static/img/banner1.png" alt="">
        </div>
        <div class="activeText">
          <div class="left">
            <span class="text1">我乐橱柜国庆促销</span>
            <span class="text2">上海红星美凯龙asdasdasd</span>
          </div>
          <div class="right">
            <img src="static/img/rightArrow.png" alt="">
            <span class="text3">了解详情</span>
          </div>
        </div>
      </div>
    </div>
    <div class="noProduct">
      <img src="static/img/noProduct.png" alt="">
      <div class="text">未搜索到相关商品</div>
    </div>
  </div>
</template>
<script>
import searchHeader from "../../../common/sameSearch.vue";
export default {
  components: { searchHeader },
  data: function() {
    return {};
  },
  methods: {
    handleSearch: function(res) {
      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  .header {
    height: 0.88rem;
    background: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    font-size: 0.26rem;
    color: #666666;
    box-sizing: border-box;
    padding: 0.08rem 0.17rem;
    display: flex;
    justify-content: space-between;
    .input {
      width: 70%;
      position: relative;
      input {
        background: #f1f2f6;
        border: 0;
        outline: none;
        border-radius: 2px;
        height: 100%;
        font-size: 0.26rem;
        width: 100%;
        padding-left: 0.6rem;
        box-sizing: border-box;
      }
    }
    .cancel {
      display: inline-block;
      width: 15%;
      text-align: center;
      line-height: 0.65rem;
      border: 1px solid #fff;
    }
    .search {
      display: inline-block;
      color: #38f;
      width: 15%;
      text-align: center;
      line-height: 0.65rem;
      border: 1px solid #fff;
    }
    .searchIcon {
      box-sizing: border-box;
      height: 100%;
      line-height: 0.88rem;
      position: absolute;
      left: 0.15rem;
      top: 0;
    }
  }
  .marketActive {
    background: #f7f7f7;
    box-sizing: border-box;
    padding: 0.2rem;
    .active {
      .activeImg {
        height: 3.2rem;
        width: 100%;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
    .activeText {
      background: #fff;
      font-size: 0.26rem;
      padding: 0.24rem 0.19rem 0.23rem 0.33rem;
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        justify-content: space-between;
        .text1 {
          color: #333333;
          display: inline-block;
          padding-right: 0.1rem;
          border-right: 1px solid #333333;
        }
        .text2 {
          font-size: 0.22rem;
          color: #2a2a2a;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 1.98rem;
          box-sizing: border-box;
          padding-top: 0.03rem;
          padding-left: 0.1rem;
        }
      }
      .right {
        .text3 {
          font-size: 0.24rem;
          color: #333333;
          float: right;
          margin-right: 0.11rem;
        }
        img {
          height: 0.2rem;
          float: right;
          margin-top: 0.06rem;
        }
      }
    }
  }
  .noProduct {
    text-align: center;
    margin-top: 4rem;
    font-size: 0.26rem;
    color: #adb0b5;
    img {
      height: 1.1rem;
    }
    .text {
      margin-top: 0.44rem;
    }
  }
}
</style>

