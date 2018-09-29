<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj" :params="shareProduct"></HeaderSame>
    <div class="banner">
      <!-- <img src="static/img/banner1.png" alt=""> -->
      <img :src="detail.image" alt="">
    </div>
    <div class="productDetail">
      <div class="productName">{{detail.name}}</div>
      <div class="productText">
        {{detail.subname}}
      </div>
      <div class="productTag">
        <span class="sTag" v-for="(item,index) in detail.tags" :key="index">{{item}}</span>
      </div>
      <div class="newPrice" v-if="detail.discount_price==0 || detail.discount_price==''">
        <span class="price">￥{{detail.price}}</span>
        <span class="kucun">库存：{{detail.stock}}</span>
      </div>
      <div class="newPrice" v-else>
        <span class="price">￥{{detail.discount_price}}</span>
        <s class="zkprice">￥{{detail.price}}</s>
        <span class="kucun">库存：{{detail.stock}}</span>
      </div>
      <!-- <div class="oldPrice">
        <s>￥3600</s>
      </div> -->
    </div>
    <div class="grayBlank" v-if="couponData.length!=0"></div>
    <div class="discount" @click="showCoupon=true" v-if="couponData.length!=0">
      <img src="static/img/juan.png" alt="" class="juan">
      <span>满减券</span>
      <img src="static/img/rightArrow.png" alt="" class="rightArrow">
    </div>
    <div class="grayBlank"></div>
    <div class="productDetailTab">
      <span class="tab" @click="clickProductDetail(1)" :style="productTabStatus==1?productTabStyle:''">商品详情</span>
      <span class="tab tabRight" @click="clickProductDetail(2)" :style="productTabStatus==2?productTabStyle:''">规格参数</span>
      <p class="greenLine" :style="lineStyle"></p>
    </div>
    <div class="productDetailImg" v-if="productTabStatus==1">
      <!-- <img src="static/img/banner1.png" alt=""> -->
      <div v-for="(item,index) in detail.image_list" :key="index">
        <img alt="" :src="item">
      </div>
    </div>
    <div class="parameter" v-if="productTabStatus==2">
      <div class="text" v-for="(item,i) in detail.attr" :key="i">
        <span class="title1">{{item.name}}</span>
        <span class="title2">{{item.value}}</span>
      </div>
    </div>
    <footer class="footer">
      <div class="collection" @click="handleCollection(200)" v-if="collectionStatus!==200">
        <img src="static/img/collection.png" alt="">
        <span>收藏</span>
      </div>
      <div class="collection" @click="handleCollection(-1)" v-if="collectionStatus==200">
        <span>取消收藏</span>
      </div>
      <div class="inStore" @click="$router.push('storeDetail?shop_id='+detail.shop_id+'&pathInto=product')">进入店铺</div>
      <div class="phoneSeller" @click="callProduct">联系商家</div>
    </footer>
    <van-popup v-model="showProductCoupon" position="bottom" :overlay="true">
      <div class="couponTitle">优惠券</div>
      <div class="couponContent">
        <div class="couponImg" v-for="(item ,i) in couponData" :key="i">
          <div class="left">
            <div class="leftText">
              <div class="leftText1">
                {{item.name}}
              </div>
              <div class="leftText2">
                {{item.shop_name}}
              </div>
              <div class="leftText3">
                2018.7.12-2019.12.12
              </div>
              <div class="leftButton" v-if="item.lqstatus==2">
                立即领取
              </div>
              <div class="leftButton" v-if="item.lqstatus==1">
                已领取
              </div>
            </div>
            <img src="static/img/zhekouBg.png" alt="" class="couponLeftImg">
          </div>
          <div class="right">
            <img src="static/img/zhekou.png" alt="" class="rightImg">
            <div class="rightText1">30元</div>
            <div class="rightText2">满30元可用</div>
          </div>
        </div>
        <div class="couponButton" @click="status.showCoupon=false">完成</div>
      </div>

    </van-popup>
  </div>
</template>
<script>
import HeaderSame from "../../../common/sameHeader.vue";
export default {
  components: {
    HeaderSame
  },
  data() {
    return {
      headerObj: {
        title: "商品详情",
        img: "static/img/fenxiangB.png",
        text: "share",
        type: this.$route.query.pathInto == "shop" ? "H5" : ""
      },
      productTabStatus: 1,
      productTabStyle: "color:#333333;",
      lineStyle: "",
      queryData: {
        ticket: this.$route.query.ticket || localStorage.getItem("ticket"),
        goodId: this.$route.query.goods_id
      },
      detail: {},
      collectionStatus: -1,
      couponData: [],
      shareProduct: {}, //分享
      showProductCoupon: false //商品优惠劵
    };
  },
  created() {
    this.getData();
    this.judgeCollection();
    this.getCouponData();
  },
  methods: {
    clickProductDetail: function(res) {
      if (res == 1) {
        this.lineStyle = "transform:translateX(0)";
      } else if (res == 2) {
        this.lineStyle = "transform:translateX(3.74rem)";
      }
      this.productTabStatus = res;
    },
    callProduct: function() {
      window.location.href = "tel://" + this.detail.shop_info.contact;
      if (window.HostApp) {
        window.HostApp.call(this.detail.shop_info.contact);
      }
    },
    getData() {
      let param = {
        url: "goods/info",
        params: {
          goods_id: this.queryData.goodId
        }
      };
      this.tool.request(param).then(data => {
        this.shareProduct = {
          image: data.data.image,
          title: data.data.name + "----" + data.data.shop_info.name,
          des:
            "向您推荐" +
            data.data.market_name +
            data.data.shop_info.name +
            "的精品" +
            data.data.name,
          path: "goods/" + data.data.goods_id
        };
        this.detail = data.data;
      });
    },
    getCouponData: function() {
      this.tool
        .request({
          url: "v3_coupons/index",
          method: "post",
          params: {
            type_id: this.queryData.goodId
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.couponData = res.data.goods;
          }
        });
    },
    handleCollection: function(num) {
      if (!localStorage.getItem("ticket") || !this.$route.query.ticket) {
        return this.$toast({
          type: "text",
          message: "请登录"
        });
      }
      this.tool
        .request({
          url: num == 200 ? "favorite/add" : "favorite/remove",
          method: "post",
          params: {
            ticket: this.queryData.ticket,
            type: "goods",
            type_id: this.queryData.goodId
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.judgeCollection();
            setTimeout(() => {
              this.$toast({
                type: "text",
                message: num == 200 ? "收藏成功" : "取消成功"
              });
            }, 200);
          }
        });
    },
    // 判断是否收藏
    judgeCollection() {
      this.tool
        .request({
          url: "favorite/status",
          method: "post",
          params: {
            ticket: this.queryData.ticket,
            type: "goods",
            type_id: this.queryData.goodId
          }
        })
        .then(res => {
          this.collectionStatus = res.status;
        });
    },
    //去收藏、取消收藏
    toCollect() {
      let param = {
        url: "favorite/remove",
        params: {
          type: this.type,
          type_id: this.type_id,
          ticket: this.ticket
        }
      };
      this.tool.request(param).then(data => {
        console.log(data.data);
        this.detail = data.data;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  background: #fff;
  padding-bottom: 1.31rem;

  .banner {
    height: 3.98rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .productDetail {
    padding-top: 0.46rem;
    box-sizing: border-box;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-bottom: 0.23rem;

    .productName {
      font-size: 0.3rem;
      color: #333333;
    }

    .productText {
      font-size: 0.24rem;
      color: #999999;
      margin-top: 0.14rem;
    }

    .productTag {
      font-size: 0.22rem;
      margin: 0.14rem 0;
      .sTag {
        display: inline-block;
        color: #3cb850;
        background: #fafdfa;
        padding: 0.04rem 0.08rem;
        margin-right: 0.1rem;
      }
    }

    .newPrice {
      font-size: 0.36rem;
      line-height: 0.36rem;

      .price {
        font-size: 0.36rem;
        color: #e26f72;
      }
      .zkprice {
        font-size: 0.29rem;
        color: #999999;
      }
      .kucun {
        font-size: 0.24rem;
        color: #999999;
        float: right;
      }
    }

    .oldPrice {
      font-size: 0.24rem;
      color: #999999;
      margin-top: 0.12rem;
    }
  }

  .discount {
    height: 0.88rem;
    font-size: 0.2rem;
    color: #999999;
    line-height: 0.88rem;
    padding-left: 0.34rem;
    padding-right: 0.38rem;
    box-sizing: border-box;

    .rightArrow {
      float: right;
      height: 0.24rem;
      margin-top: 0.32rem;
    }

    .juan {
      height: 0.28rem;
      float: left;
      margin-top: 0.29rem;
      margin-right: 0.3rem;
    }
  }

  .productDetailTab {
    font-size: 0.3rem;
    color: #666666;
    height: 0.88rem;
    line-height: 0.48rem;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.2rem 0;
    position: relative;

    .tab {
      display: inline-block;
      width: 50%;
      border-right: 1px solid #979797;
      text-align: center;
    }

    .tabRight {
      border-right: 0;
    }

    .greenLine {
      display: block;
      background: #50bf82;
      border-radius: 100px;
      width: 0.59rem;
      height: 0.1rem;
      position: absolute;
      bottom: 0;
      transition: all 0.3s ease-in-out;
      left: 1.58rem;
    }
  }

  .productDetailImg {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .parameter {
    font-size: 0.24rem;

    .text {
      box-sizing: border-box;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
      display: flex;
      justify-content: space-between;
      margin-top: 0.3rem;

      span {
        display: inline-block;
      }

      .title1 {
        width: 30%;
        color: #999999;
      }

      .title2 {
        width: 60%;
        color: #444444;
      }
    }
  }

  .footer {
    height: 1.01rem;
    position: fixed;
    bottom: 0;
    box-shadow: #666666 2px 8px 2px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    line-height: 1.01rem;
    font-size: 0.3rem;

    .collection {
      width: 20%;
      background: #ffffff;
      text-align: center;
      color: #3cb850;
      border-top: 1px solid #efefef;

      img {
        height: 0.31rem;
        float: left;
        margin-top: 0.33rem;
        margin-left: 0.2rem;
      }
    }

    .inStore {
      width: 40%;
      background: #3cb850;
      text-align: center;
      color: #fff;
    }

    .phoneSeller {
      width: 40%;
      background: #43474d;
      text-align: center;
      color: #fff;
    }
  }
  .couponTitle {
    margin: auto;
    font-size: 0.3rem;
    color: #333333;
    text-align: center;
    margin-top: 0.42rem;
    width: 5.75rem;
  }
  .couponImg {
    width: 5.75rem;
    height: 1.88rem;
    border: 1.5px solid #f5a623;
    margin: auto;
    margin-top: 0.58rem;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    margin-bottom: 0.46rem;
    .left {
      width: 67%;
      box-sizing: border-box;
      position: relative;
      .leftText {
        padding-top: 0.1rem;
        padding-left: 0.33rem;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 999;
        .leftText1 {
          font-size: 0.36rem;
          color: #ffffff;
          margin-bottom: 0.05rem;
          width: 3.5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .leftText2,
        .leftText3 {
          font-size: 0.24rem;
          color: #ffffff;
        }
        .leftButton {
          width: 2.26rem;
          height: 0.35rem;
          text-align: center;
          font-size: 0.24rem;
          color: #f5a623;
          line-height: 0.35rem;
          background: #fff;
          border-radius: 4px;
          position: absolute;
          bottom: 0.17rem;
          left: 1.33rem;
        }
        .usedColor {
          color: #9b9b9b;
        }
      }
      .couponLeftImg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
      }
    }
    .right {
      width: 33%;
      text-align: center;
      position: relative;
      .rightText1 {
        font-size: 0.36rem;
        color: #f5a623;
        margin-top: 0.64rem;
      }
      .rightText2 {
        font-size: 0.18rem;
        color: #f5a623;
        margin-top: 0.13rem;
      }
      .rightImg {
        position: absolute;
        top: 0;
        right: 0;
        height: 1rem;
      }
      .usedColor {
        color: #9b9b9b;
      }
    }
  }
  .couponButton {
    height: 1rem;
    text-align: center;
    font-size: 0.3rem;
    color: #ffffff;
    line-height: 1rem;
    background: #3cb850;
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    z-index: 99999;
  }
  .couponContent {
    height: 7rem;
    margin-bottom: 1rem;
    overflow-y: scroll;
  }
}
</style>
