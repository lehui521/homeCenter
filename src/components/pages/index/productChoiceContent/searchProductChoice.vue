<template>
    <div class="pages">
        <searchHeader @searchClick="handleSearch"></searchHeader>
        <!-- 内容 -->
        <div class="productChoiceContent" v-if="true">
            <div class="list" v-for="(item,index) in [1,2,3,4]" :key="index">
                <div class="price">￥5555</div>
                <img src="static/img/shichangtuipian.png" alt="">
                <div class="listName">
                    秋夕-现代橱柜
                </div>
                <div class="text">
                    <span class="name">九牧恒大店</span>
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
  .productChoiceContent {
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
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
          box-sizing: border-box;
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

