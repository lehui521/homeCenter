<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="headerNav">
      <div :class="typeId==''?'navActive nav':'nav' " @click="clickNav(allParams)">全部</div>
      <div :class="typeId==item.type_id?'navActive nav':'nav'" v-for="(item,i) in headerNavData" :key="i" @click="clickNav(item)">{{item.name || ''}}</div>
      <div class="navImg" @click="showNav=true">
        <img src="static/img/navDown.png" alt="">
      </div>
    </div>
    <div class="mask" v-if="showNav">
      <div class="navPosition">
        <div class="floor1">
          <span>{{activeTypeName}}</span>
          <img src="static/img/navUp.png" alt="" @click="showNav=false">
        </div>
        <div class="floor2">
          <span @click="clickNav(allParams)" :class="typeId==''?'navActive2':''">全部</span>
          <span :class="typeId==item.type_id?'navActive2':''" v-for="(item,i) in typeData" :key="i" @click="clickNav(item)">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="banner">
      <img v-lazy="bannerData.image" alt="">
    </div>
    <div class="discountProduct">
      <div class="product" v-for="(item,i) in goodData" :key="i">
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
            <span class="goUseButton" @click="$router.push('myCoupon')">去使用</span>
          </div>
          <img src="static/img/yilingqu.png" alt="" class="recievedImg">
        </div>
        <!-- 未领取的样式 -->
        <div class="discountImg" v-else>
          <div class="circle">
            <svgCircle :proNum="item.bfb"></svgCircle>
          </div>
          <div class="discountImgContent">
            <span class="goRecieveButton" @click="recieveCoupon(item)">立即领取</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderSame from "../../../common/sameHeader.vue";
import svgCircle from "../../../common/svgCircle.vue";
export default {
  components: {
    HeaderSame,
    svgCircle
  },
  data: function() {
    return {
      headerObj: {
        title: "折扣商品",
        img: "static/img/sousuo.png",
        text: "discountProduct"
      },
      showNav: false,
      proNum: 50,
      typeId: "",
      allParams: { type_id: "", name: "全部" },
      activeTypeName: "全部",
      bannerData: {},
      typeData: [],
      goodData: [],
      headerNavData: [],
      queryData: {
        ticket:
          this.$route.query.ticket || "JFWsM0I3ESlfC4CrUIXKtVz_bY_b423g_c_c"
      }
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    clickNav: function(res) {
      this.typeId = res.type_id;
      this.activeTypeName = res.name;
      this.getData();
      this.showNav = false;
    },
    recieveCoupon: function(res) {
      this.tool
        .request({
          url: "shop/receivegoodscoupons",
          method: "post",
          params: {
            coupon_id: res.coupon_id,
            ticket: this.queryData.ticket
          }
        })
        .then(res => {
          this.$dialog
            .alert({
              title: "提示",
              message: res.msg
            })
            .then(() => {
              this.getData();
            });
        });
    },
    getData: function() {
      this.tool
        .request({
          url: "v3_coupons/index",
          method: "post",
          params: {
            type_id: this.typeId,
            city_id: this.$route.query.city_id,
            market_id: this.$route.query.market_id
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.bannerData = res.data.banner;
            this.typeData = res.data.category;
            this.goodData = res.data.goods;
            this.headerNavData = [];
            for (var i in [1, 2, 3]) {
              this.headerNavData.push(res.data.category[i]);
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
  padding-bottom: 1.31rem;
  .mask {
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
    width: 100%;
    height: 100%;
    .navPosition {
      margin-top: 0.88rem;
      background: #fff;
      width: 100%;
      padding-top: 0.16rem;
      .floor1 {
        width: 100%;
        font-size: 0.28rem;
        color: #3cb850;
        letter-spacing: 0;
        padding-left: 0.72rem;
        padding-right: 0.2rem;
        box-sizing: border-box;
        img {
          width: 0.32rem;
          float: right;
          margin-top: 0.06rem;
        }
      }
      .floor2 {
        margin-top: 0.16rem;
        font-size: 0.28rem;
        padding-right: 0.3rem;
        padding-top: 0.3rem;
        padding-left: 0.3rem;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        span {
          display: inline-block;
          height: 0.6rem;
          width: 1.5rem;
          background: #f4f4f4;
          font-size: 0.28rem;
          color: #666666;
          border-radius: 4px;
          margin-bottom: 0.3rem;
          text-align: center;
          line-height: 0.6rem;
          margin-left: 0.16rem;
          border: 1px solid #fff;
        }
        .navActive2 {
          color: #3cb850 !important;
          border: 1px solid #3cb850 !important;
          background: #fff !important;
        }
      }
    }
  }
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
    z-index: 999;
    .share {
      position: absolute;
      right: 0.4rem;
      height: 0.33rem;
      top: 0.27rem;
    }
    .back {
      height: 0.32rem;
      position: absolute;
      top: 0.28rem;
      left: 0.3rem;
    }
  }
  .headerNav {
    height: 0.88rem;
    display: flex;
    justify-content: space-between;
    background: #fff;
    .nav {
      width: 23%;
      font-size: 0.28rem;
      color: #666666;
      letter-spacing: 0;
      line-height: 0.88rem;
      text-align: center;
    }
    .navActive {
      color: #3cb850;
    }

    .navImg {
      width: 8%;
      text-align: center;
      img {
        width: 0.3rem;
        float: right;
        margin-top: 0.32rem;
        margin-right: 0.2rem;
      }
    }
  }
  .banner {
    height: 3.2rem;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
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
      min-height: 1.76rem;
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
          min-height: 0.45rem;
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
}
</style>
