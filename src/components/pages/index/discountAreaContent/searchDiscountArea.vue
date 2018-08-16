<template>
    <div class="pages">
        <searchHeader @searchClick="handleSearch"></searchHeader>
        <!-- 内容 -->
        <div class="discountProduct" v-if="true">
            <div class="product">
                <img src="static/img/banner1.png" alt="" class="discountProImg">
                <div class="producText">
                    <div class="text1">简爱</div>
                    <div class="text2">我乐橱柜</div>
                    <div class="text3">
                        <span>￥2636</span>
                        <s>￥3600</s>
                    </div>
                </div>
                <!-- 已领取的样式 -->
                <div class="discountImg" v-if="false">
                    <div class="discountImgContent">
                        <span class="goUseButton">去使用</span>
                    </div>
                    <img src="static/img/yilingqu.png" alt="" class="recievedImg">
                </div>
                <!-- 未领取的样式 -->
                <div class="discountImg">
                    <div class="circle">
                        <svgCircle :proNum="proNum"></svgCircle>
                        <div class="circleText">
                            <span>已抢</span><br/>
                            <span>50%</span>
                        </div>
                    </div>
                    <div class="discountImgContent">
                        <span class="goRecieveButton">立即领取</span>
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
import svgCircle from "../../../common/svgCircle.vue";
import searchHeader from "../../../common/sameSearch.vue";
export default {
  components: { searchHeader, svgCircle },
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
          .circleText {
            position: absolute;
            top: 0;
            color: #fc124f;
            font-size: 0.24rem;
            height: 100%;
            width: 100%;
            text-align: center;
            top: 0.37rem;
          }
        }
        .discountImgContent {
          border-left: 1px dashed #979797;
          height: 100%;
          position: relative;
          text-align: center;
          .goUseButton {
            padding: 0 0.23rem;
            display: inline-block;
            height: 0.28rem;
            line-height: 0.28rem;
            font-size: 0.18rem;
            color: #ffffff;
            background-image: linear-gradient(-90deg, #ff8b23 0%, #ff6d00 100%);
            border-radius: 100px;
            margin-top: 1.1rem;
          }
          .goRecieveButton {
            border-radius: 100px;
            padding: 0 0.14rem;
            display: inline-block;
            height: 0.28rem;
            line-height: 0.28rem;
            font-size: 0.18rem;
            color: #ffffff;
            background-image: linear-gradient(90deg, #fb0f39 0%, #fc124f 100%);
            margin-top: 1.1rem;
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

