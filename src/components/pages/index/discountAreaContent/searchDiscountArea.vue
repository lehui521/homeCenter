<template>
  <div class="pages">
    <searchHeader @searchClick="handleSearch"></searchHeader>
    <!-- 内容 -->
    <div class="discountProduct" v-if="showStatus==1">
      <div class="product" v-for="(item,i) in searchData" :key="i">
        <img :src="item.image" alt="" class="discountProImg">
        <div class="producText" @click="$router.push('productDetail?goods_id='+item.goods_id)">
          <div class="text1">{{item.shop_name}}&nbsp;&nbsp;{{item.name}}</div>
          <div class="text2">{{item.market}}</div>
          <div class="text3">
            <span>￥{{item.zkprice/100}}</span>
            <s>￥{{item.price/100}}</s>
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
          </div>
          <div class="discountImgContent">
            <span class="goRecieveButton" @click="recieveCoupon(item)">立即领取</span>
          </div>
        </div>
      </div>
    </div>
    <div class="noProduct" v-if="showStatus==2">
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
      proNum: "3%",
      searchData: [],
      showStatus: 0
    };
  },
  methods: {
    handleSearch: function(res) {
      this.tool
        .request({
          url: "/v3_coupons/searchcoupon",
          method: "post",
          params: {
            keyword: res
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.searchData = res.data;
            if (this.searchData.length == 0) {
              this.showStatus = 2;
            } else {
              this.showStatus = 1;
            }
          } else {
            this.$dialog
              .alert({
                title: "提示",
                message: res.msg
              })
              .then(() => {
                this.showStatus = 0;
              });
          }
        });
    },
    recieveCoupon: function(res) {
      this.tool
        .request({
          url: "shop/receivegoodscoupons",
          method: "post",
          params: {
            coupon_id: res.coupon_id,
            ticket: localStorage.getItem("ticket")
          }
        })
        .then(res => {
          this.$dialog
            .alert({
              title: "提示",
              message: res.msg
            })
            .then(() => {
              this.handleSearch();
            });
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
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 3.5rem;
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
        margin-top: 0.2rem;
        position: relative;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        border-left: 1px dashed #979797;
        .circle {
          width: 100%;
          text-align: center;
          height: 1rem;
          margin-bottom: 0.06rem;
        }
        .discountImgContent {
          position: relative;
          margin: auto;
          text-align: center;
          font-size: 0.18rem;
          margin-top: 0.1rem;
          .goUseButton {
            display: inline-block; // height: 0.28rem;
            // line-height: 0.28rem;
            box-sizing: border-box;
            font-size: 0.18rem;
            color: #ffffff;
            background-image: linear-gradient(-90deg, #ff8b23 0%, #ff6d00 100%);
            border-radius: 100px;
            margin-top: 1.1rem;
            width: 15vw;
            height: 5vw;
            line-height: 5vw;
          }
          .goRecieveButton {
            border-radius: 100px;
            display: inline-block; // height: 0.28rem;
            // line-height: 0.28rem;
            font-size: 0.18rem;
            color: #ffffff;
            background-image: linear-gradient(90deg, #fb0f39 0%, #fc124f 100%);
            width: 15vw;
            height: 5vw;
            line-height: 5vw;
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

