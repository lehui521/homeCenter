<template>
  <div class="pages">
    <searchHeader @searchClick="handleSearch"></searchHeader>
    <!-- 内容 -->
    <div class="newContent" v-if="showStatus==1">
      <div class="recommendNew" @click="jumpNewDetail(item)" v-for="(item,i) in searchData" :key="i">
        <div class="leftText">
          <div class="text1">{{item.title}}</div>
          <div class="text2">{{item.create_time}} · {{item.click}}次阅读</div>
        </div>
        <div class="rightText">
          <img v-lazy="item.image" alt="">
        </div>
      </div>
    </div>
    <div class="noProduct" v-if="showStatus==0">
      <img src="static/img/noProduct.png" alt="">
      <div class="text">未搜索到相关商品</div>
    </div>
  </div>
</template>
<script>
import svgCircle from "../../../common/svgCircle.vue";
import searchHeader from "../../../common/sameSearch.vue";
export default {
  components: { searchHeader, svgCircle },
  data: function() {
    return {
      queryData: {
        page: 1,
        page_size: 10,
        keywords: ""
      },
      showStatus: 2,
      searchData: []
    };
  },
  methods: {
    handleSearch: function(res) {
      this.queryData.keywords = res;
      this.getData();
    },
    jumpNewDetail: function(res) {},
    getData: function() {
      this.tool
        .request({
          url: "news/list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.searchData = res.data.list;
            if (this.searchData.length == 0) {
              this.showStatus = 0;
            } else {
              this.showStatus = 1;
            }
          }
        });
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
  .newContent {
    padding-top: 0.4rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    box-sizing: border-box;
    background: #fff;
    .recommendNew {
      border-bottom: 1px solid #979797;
      display: flex;
      justify-content: space-between;
      font-size: 0.3rem;
      padding-bottom: 0.44rem;
      margin-bottom: 0.4rem;

      .leftText {
        width: 60%;
        color: #333333;
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .text1 {
          height: auto;
          word-wrap: break-word;
        }
        .text2 {
          font-size: 0.24rem;
          color: #333333;
        }
      }
      .rightText {
        width: 2rem;
        height: 1.5rem;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
  .discountProduct {
    padding-left: 0.19rem;
    box-sizing: border-box;
    padding-top: 0.22rem;
    padding-right: 0.19rem;
    .product {
      margin-bottom: 0.2rem;
      background: #fff;
      display: flex;
      justify-content: flex-start;
      height: 1.76rem;
      padding-bottom: 0.2rem;
      padding-left: 0.3rem;
      box-sizing: border-box;
      .discountProImg {
        width: 1.56rem;
        height: 1.36rem;
        margin-top: 0.2rem;
      }
      .producText {
        width: 70%;
        padding-left: 0.2rem;
        box-sizing: border-box;
        font-size: 0.24rem;
        margin-top: 0.2rem;
        .text1 {
          font-size: 0.3rem;
          color: #333333;
          height: 0.45rem;
          line-height: 0.45rem;
        }
        .text2 {
          font-size: 0.24rem;
          color: #999999;
          height: 0.45rem;
          line-height: 0.45rem;
        }
        .text3 {
          height: 0.45rem;
          line-height: 0.45rem;
          span {
            font-size: 0.36rem;
            color: #f22e2e;
          }
          s {
            font-size: 0.24rem;
            color: #999999;
          }
        }
      }
      .discountImg {
        width: 30%;
        box-sizing: border-box;
        padding-top: 0.2rem;
        position: relative;
        .circle {
          position: absolute;
          top: 0.05rem;
          width: 100%;
          text-align: center;
          height: 1.25rem;
          .circleText {
            position: absolute;
            top: 0;
            color: #fc124f;
            font-size: 10px;
            height: 100%;
            width: 100%;
            text-align: center;
            top: 0;
            display: flex;
            justify-content: center;
            flex-direction: column;
            span {
              display: block;
            }
          }
        }
        .discountImgContent {
          border-left: 1px dashed #979797;
          height: 100%;
          position: relative;
          text-align: center;
          font-size: 0.18rem;
          padding-top: 1.1rem;
          box-sizing: border-box;
          .goUseButton {
            display: block;
            padding: 0.03rem 0.23rem;
            // height: 0.28rem;
            // line-height: 0.28rem;
            font-size: 0.18rem;
            color: #ffffff;
            background-image: linear-gradient(-90deg, #ff8b23 0%, #ff6d00 100%);
            border-radius: 100px;
            width: 1rem;
            margin: auto;
          }
          .goRecieveButton {
            border-radius: 100px;
            padding: 0.03rem 0.14rem;
            display: block;
            // height: 0.28rem;
            // line-height: 0.28rem;
            font-size: 0.18rem;
            color: #ffffff;
            background-image: linear-gradient(90deg, #fb0f39 0%, #fc124f 100%);
            width: 1rem;
            margin: auto;
          }
        }
        .recievedImg {
          position: absolute;
          height: 1.22rem;
          width: 1.22rem;
          top: 0;
          right: 0;
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

