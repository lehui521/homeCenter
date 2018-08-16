<template>
    <div class="pages">
        <searchHeader @searchClick="handleSearch"></searchHeader>
        <div class="storeList" v-if="true">
            <div class="market" v-for="(item,index) in [1,2,3]" :key="index">
                <div class="marketImg">
                    <img src="static/img/shichangtuipian.png" alt="">
                </div>
                <div class="marketText">
                    <div class="marketName">
                        <span class="name">上海家饰佳徐汇店</span>
                        <span>64m</span>
                    </div>
                    <div class="marketTag">
                        <van-tag type="success" plain>家具</van-tag>
                        <van-tag type="success" plain>灯饰</van-tag>
                    </div>
                    <div class="marketPhone">
                        <span>15252111236</span>
                    </div>
                    <div class="marketAddress">
                        <span>上海市徐汇区凯旋路552号</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="noProduct" v-else>
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
  .storeList {
    position: relative;
    background: #fff;
    .market {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #d5d5d5;
      padding: 15px 8px;
      .marketImg {
        width: 40%;
        box-sizing: border-box;
        padding: 0.1rem;
        img {
          width: 100%;
        }
      }
      .marketText {
        width: 60%;
        padding: 0.1rem;
        .marketName {
          display: flex;
          justify-content: space-between;
          span {
            display: inline-block;
            line-height: 0.4rem;
            font-size: 0.24rem;
          }
          .name {
            font-size: 0.3rem;
            font-weight: 540;
          }
        }
      }
      .marketTag {
        margin: 0.1rem 0;
        font-size: 0.22rem;
      }
      .marketPhone {
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;
        // margin-bottom: 0.1rem;
        font-size: 0.24rem;
        color: #444444;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          width: 100%;
          box-sizing: border-box;
        }
      }
      .marketAddress {
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;
        margin-bottom: 0.1rem;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          width: 100%;
          box-sizing: border-box;
          font-size: 0.24rem;
          color: #444444;
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

