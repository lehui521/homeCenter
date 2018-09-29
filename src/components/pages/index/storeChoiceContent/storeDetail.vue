<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj" :params="shopShare"></HeaderSame>
    <div class="banner">
      <!-- <img :src="shopDetailData.image" alt=""> -->
      <van-swipe :autoplay="3000" style="height:100%;">
        <van-swipe-item v-for="(image, index) in shopDetailData.image_list" :key="index">
          <img v-lazy="image" style="width:100%;height:100%;" class="bannerImg" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="storeNameImg">
      <img :src="shopDetailData.image" alt="" class="storeImg">
      <div class="storeName">
        <div class="name">
          <span>{{shopDetailData.name}}</span>
          <img src="static/img/rightArrow.png" alt="">
          <span class="nameRight" @click="$router.push('storeIntroduction?shop_id='+queryData.shopId)">简介</span>
        </div>
        <div class="brief">
          <span>{{shopDetailData.category_name}}</span>
          <!-- <span>|</span>
          <span>简约</span>
          <span>|</span>
          <span>家具</span> -->
        </div>
        <div class="storeTag">
          <span class="sTag" v-for="(item,index) in shopDetailData.tags" :key="index">{{item}}</span>
          <!-- <span class="sTag">别墅</span> -->
        </div>
      </div>
    </div>
    <div class="storeAddress">
      <span @click="navMap">{{shopDetailData.address}}</span>
      <div class="addressleftImg " @click="callStore">
        <img src="static/img/dianhua.png" alt="">
      </div>
      <div class="addressrightImg" style="border-right:1px solid #e9e9e9;" @click="navMap">
        <img src="static/img/dizhi.png" alt="">
      </div>
    </div>
    <div class="market">
      <span>所属市场：</span>
      <span style="color:#999999;">{{shopDetailData.market_name}}</span>
    </div>
    <div class="grayBlank" v-if="couponData.length!=0"></div>
    <div class="discount" @click="status.showCoupon=true" v-if="couponData.length!=0">
      <img src="static/img/juan.png" alt="" class="juan">
      <span>优惠劵</span>
      <img src="static/img/rightArrow.png" alt="" class="rightArrow">
    </div>
    <div class="grayBlank"></div>
    <div class="storeDetailTab">
      <span class="tab" @click="clickStoreDetail(1)" :style="status.storeTabStatus==1?storeTabStyle:''">折扣商品</span>
      <span class="tab" @click="clickStoreDetail(2)" :style="status.storeTabStatus==2?storeTabStyle:''">全部商品</span>
      <span class="tab" @click="clickStoreDetail(3)" :style="status.storeTabStatus==3?storeTabStyle:''">商家活动</span>
      <p class="greenLine" :style="lineStyle"></p>
    </div>
    <div class="discountProduct" v-if="status.storeTabStatus==1">
      <div class="product" v-for="(item,i) in discountData" :key="i">
        <img :src="item.image || 'static/img/banner1.png'" alt="" class="discountProImg">
        <div class="producText">
          <div class="text1">{{item.goodsname}}</div>
          <div class="text2">{{item.shop_name}}</div>
          <div class="text3">
            <span>￥{{item.zkprice}}</span>
            <s>￥{{item.price}}</s>
          </div>
        </div>
        <!-- 已领取的样式 -->
        <div class="discountImg" v-if="item.lqstatus==1">
          <div class="discountImgContent">
            <span class="goUseButton">去使用</span>
          </div>
          <img src="static/img/yilingqu.png" alt="" class="recievedImg">
        </div>
        <!-- 未领取的样式 -->
        <div class="discountImg" v-if="item.lqstatus==2 || !item.lqstatus">
          <div class="circle">
            <svgCircle :proNum="item.bfb"></svgCircle>
          </div>
          <div class="discountImgContent">
            <span class="goRecieveButton" @click="recieveCoupon(item)">立即领取</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 全部商品 -->
    <div class="allProduct" v-if="status.storeTabStatus==2">
      <div class="productType">
        <div @click="typeClick('price')">
          <span :style="status.typeStatus=='price'?'color:#3cb850;':''">价格</span>
          <img src="static/img/grayDown.png" alt="" v-if="status.typeStatus!=='price'">
          <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='price'">
        </div>
        <div @click="typeClick('sort')">
          <span :style="status.typeStatus=='sort'?'color:#3cb850;':''">排序</span>
          <img src="static/img/grayDown.png" alt="" v-if="status.typeStatus!=='sort'">
          <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='sort'">
        </div>
      </div>
      <!-- 排序 -->
      <div class="sort" :style="status.typeStatus=='sort'?'height:3.16rem;':''">
        <div @click="clickSort('sort_asc')" :style="queryData.order=='sort_asc'?'color:#3cb850':''">默认排序</div>
        <div @click="clickSort('add_time_desc')" :style="queryData.order=='add_time_desc'?'color:#3cb850':''">新品优先</div>
        <div @click="clickSort('price')">
          <!-- <span class="priceS" :style="status.sortTypeStatus=='price'?'border:1px solid #3cb850;color:#3cb850':''">最低价</span> -->
          <input type="text" class="sort-input" placeholder="最低价" v-model="queryData.minPrice">
          <span>——</span>
          <input type="text" class="sort-input" placeholder="最高价" v-model="queryData.maxPrice">
          <!-- <span class="priceS" :style="status.sortTypeStatus=='price'?'border:1px solid #3cb850;color:#3cb850':''">最高价</span> -->
        </div>
        <div class="btn">
          <div class="cancelBtn" @click="status.typeStatus=''">取消</div>
          <div class="ensureBtn" @click="getProductData">确定</div>
        </div>
      </div>
      <!-- 价格 -->
      <div class="sort" :style="status.typeStatus=='price'?'height:2.42rem;':''">
        <div @click="clickPrice('price_desc')" :style="queryData.order=='price_desc'?'color:#3cb850':''">由高到低</div>
        <div @click="clickPrice('price_asc')" :style="queryData.order=='price_asc'?'color:#3cb850':''">由低到高</div>
        <div class="btn">
          <div class="cancelBtn" @click="status.typeStatus=''">取消</div>
          <div class="ensureBtn" @click="getProductData">确定</div>
        </div>
      </div>
      <div class="productList">
        <div class="list" v-for="(item,index) in productData" :key="index" @click="$router.push('productDetail?goods_id='+item.goods_id+'&pathInto=shop')">
          <div class="price">￥{{item.price}}</div>
          <img :src="item.image" alt="">
          <div class="listName">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <!-- 商家活动 -->
    <div class="storeActive" v-if="status.storeTabStatus==3">
      <div class="active" @click="$router.push('storeAD?id='+item.activity_id)" v-for="(item,index) in storeActiveData" :key="index">
        <div class="activeImg">
          <img :src="item.image?item.image:'static/img/banner1.png'" alt="">
        </div>
        <div class="textA">
          <span class="textA1">{{item.title}} </span>
          <span class="textA2">{{item.detail}}</span>
          <img src="static/img/rightArrow.png" alt="" class="textAImg">
          <span class="textA3">了解详情</span>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="attention" @click="clickFocus(200)" v-if="collectStatus!==200">关注</div>
      <div class="attention" @click="clickFocus(-1)" v-if="collectStatus==200">取消关注</div>
      <div class="phoneSeller" @click="callStore">联系商家</div>
    </footer>
    <van-popup v-model="status.showCoupon" position="bottom" :overlay="true" class="tanDiscount">
      <div class="couponTitle">优惠券</div>
      <div class="couponContent">
        <div class="couponImg" v-for="(item ,i) in couponData" :key="i">
          <div class="left">
            <div class="leftText">
              <div class="leftText1">
                {{item.name}}
              </div>
              <div class="leftText2">
                {{item.shopname}}
              </div>
              <div class="leftText3">
                {{item.begin_time}} - {{item.end_time}}
              </div>
              <div class="leftButton" @click="recieveCouponClick(item)">
                立即领取
              </div>
            </div>
            <img src="static/img/couponBg.png" alt="" class="couponLeftImg">
          </div>
          <div class="right">
            <img src="static/img/manjian.png" alt="" class="rightImg">
            <div class="rightText1">{{item.coupon}}元</div>
            <div class="rightText2">满{{item.full}}元可用</div>
          </div>
        </div>
      </div>

      <div class="couponButton" @click="status.showCoupon=false">完成</div>
    </van-popup>
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
      queryData: {
        shopId: this.$route.query.shop_id,
        ticket: this.$route.query.ticket || localStorage.getItem("ticket"),
        minPrice: "",
        maxPrice: "",
        order: "sort_asc"
      },
      shopShare: {},
      status: {
        typeStatus: "", //类型状态
        storeTabStatus: 1, //切换状态
        showCoupon: false //优惠券的显示状态
      },
      headerObj: {
        title: "店铺详情",
        img: "static/img/fenxiangB.png",
        text: "share",
        type: this.$route.query.pathInto == "product" ? "H5" : ""
      },
      storeTabStyle: "color:#333333;",
      lineStyle: "",
      shopDetailData: {}, //店铺详情数据
      productData: [], //全部商品
      discountData: [], //折扣商品
      couponData: [], //优惠劵
      storeActiveData: [], //店铺活动
      collectStatus: 200,
      proNum: "3%" //进度条数值
    };
  },
  created: function() {
    this.getData();
    this.getStoreActive();
    this.getProductData();
    this.getDiscountCoupon();
    this.getCopons();
    this.judgeCollection();
  },
  methods: {
    clickSort: function(sort) {
      this.queryData.order = sort;
      if (sort !== "price") {
        this.queryData.minPrice = "";
        this.queryData.maxPrice = "";
      }
    },
    recieveCouponClick: function(res) {
      if (!localStorage.getItem("ticket")) {
        this.$toast({
          type: "text",
          text: "请登录"
        });
      }
      this.tool
        .request({
          url: "shop/receivegoodscoupons",
          method: "post",
          params: {
            coupon_id: res.coupon_id,
            type: 1,
            id: this.shopDetailData.shop_id,
            ticket: localStorage.getItem("ticket")
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.$toast({
              type: "text",
              message: "领取成功"
            });
          } else {
            this.$toast({
              type: "text",
              message: res.msg
            });
          }
        });
    },
    navMap: function() {
      let params = {
        lat: this.shopDetailData.lat,
        lng: this.shopDetailData.lng,
        name: this.shopDetailData.name
      };
      if (window.HostApp) {
        // let data = JSON.stringify(params);
        window.HostApp.location(params.lat, params.lng, params.name);
      } else {
      }
    },
    clickPrice: function(price) {
      this.queryData.order = price;
      this.queryData.minPrice = "";
      this.queryData.maxPrice = "";
    },
    callStore: function(item) {
      window.location.href = "tel://" + this.shopDetailData.contact;
      if (window.HostApp) {
        window.HostApp.call(this.shopDetailData.contact);
      }
    },
    recieveCoupon: function(item) {
      //领取优惠
      this.tool
        .request({
          url: "shop/receivegoodscoupons",
          method: "post",
          params: {
            coupon_id: item.id,
            type: item.type,
            id: item.goods_id,
            ticket: this.queryData.ticket
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.$dialog
              .alert({
                title: "提示",
                message: "领取成功"
              })
              .then(() => {
                this.getDiscountCoupon();
              });
          } else {
            this.$dialog
              .alert({
                title: "提示",
                message: res.msg
              })
              .then(() => {
                this.getDiscountCoupon();
              });
          }
        });
    },
    clickFocus: function(num) {
      if (!localStorage.getItem("ticket") || !this.$route.query.ticket) {
        return this.$toast({
          type: "text",
          message: "请登录"
        });
      }
      localStorage.getItem("ticket");
      this.tool
        .request({
          url: num == 200 ? "favorite/add" : num == -1 ? "favorite/remove" : "",
          method: "post",
          params: {
            type_id: this.queryData.shopId,
            type: "shop",
            ticket: this.queryData.ticket
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.judgeCollection();
            setTimeout(() => {
              this.$toast({
                type: "text",
                message: num == 200 ? "关注成功" : "取消成功"
              });
            }, 200);
          }
        });
    },
    typeClick: function(res) {
      if (this.status.typeStatus == res) {
        return (this.status.typeStatus = "");
      }
      this.status.typeStatus = res;
      if (this.status.typeStatus == "sort") {
      }
    },
    judgeCollection: function() {
      this.tool
        .request({
          url: "favorite/status",
          method: "post",
          params: {
            type: "shop",
            type_id: this.queryData.shopId,
            ticket: this.queryData.ticket
          }
        })
        .then(res => {
          this.collectStatus = res.status;
        });
    },
    getData: function() {
      this.tool
        .request({
          url: "shop/info",
          method: "post",
          params: {
            shop_id: this.queryData.shopId
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.shopDetailData = res.data.shop_info;
            this.shopDetailData.tags = res.data.shop_info.tags.split(";");
            this.shopShare = {
              image: res.data.shop_info.image,
              title:
                res.data.shop_info.name +
                "----" +
                res.data.shop_info.market_name,
              des:
                "向您推荐" +
                res.data.shop_info.market_name +
                res.data.shop_info.name +
                "精品店" +
                res.data.shop_info.address,
              path: "shop/" + res.data.shop_info.shop_id
            };
          }
        });
    },
    getStoreActive: function() {
      this.tool
        .request({
          url: "shop/activity",
          method: "post",
          params: {
            shop_id: this.queryData.shopId
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.storeActiveData = res.data.active_info;
          }
        });
    },
    getProductData: function() {
      this.tool
        .request({
          url: "shop/shopgoods",
          method: "post",
          params: {
            shop_id: this.queryData.shopId,
            min_price: this.queryData.minPrice,
            max_price: this.queryData.maxPrice,
            order: this.queryData.order
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.productData = res.data.list;
          }
        });
    },
    getDiscountCoupon: function() {
      this.tool
        .request({
          url: "shop/goodscoupons",
          method: "post",
          params: {
            shop_id: this.queryData.shopId
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.discountData = res.data.goodscoupons;
          }
        });
    },
    getCopons: function() {
      this.tool
        .request({
          url: "shop/shopcoupons",
          method: "post",
          params: {
            shop_id: this.queryData.shopId
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.couponData = res.data.shopcoupons;
          }
        });
    },
    clickStoreDetail: function(res) {
      this.status.storeTabStatus = res;
      if (res == 1) {
        this.lineStyle = "transform:translateX(0)";
      } else if (res == 2) {
        this.lineStyle = "transform:translateX(2.5rem)";
      } else if (res == 3) {
        this.lineStyle = "transform:translateX(5rem)";
      }
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
  .storeNameImg {
    padding-left: 0.3rem;
    padding-top: 0.29rem;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    .storeImg {
      height: 1.36rem;
      width: 1.76rem;
    }
    .storeName {
      font-size: 0.3rem;
      padding-left: 0.3rem;
      width: 100%;
      padding-right: 0.38rem;
      .name {
        font-size: 0.3rem;
        color: #333333;
        .nameRight {
          font-size: 0.24rem;
          color: #adb0b5;
          float: right;
          margin-top: 0.03rem;
          margin-right: 0.1rem;
        }
        img {
          height: 0.24rem;
          float: right;
          margin-top: 0.08rem;
        }
      }
      .brief {
        font-size: 0.24rem;
        color: #444444;
        padding: 0.08rem 0;
        span {
          display: inline-block;
          padding-right: 0.02rem;
        }
        span:last-child {
          border-right: 0;
        }
      }
      .storeTag {
        font-size: 0.22rem;
        span:first-child {
          margin-left: 0;
        }
        .sTag {
          display: inline-block;
          color: #3cb850;
          background: #fafdfa;
          padding: 0.04rem 0.08rem;
          margin-right: 0.1rem;
        }
      }
    }
  }
  .storeAddress {
    width: 100%;
    padding-left: 0.3rem;
    padding-top: 0.23rem;
    box-sizing: border-box;
    padding-right: 0.38rem;
    font-size: 0.24rem;
    color: #666666;
    padding-bottom: 0.36rem;
    .addressleftImg {
      float: right;
      margin-top: 0.02rem;
      img {
        height: 0.28rem;
      }
    }
    .addressrightImg {
      float: right;
      margin-right: 0.33rem;
      padding-right: 0.33rem;
      margin-top: 0.02rem;
      img {
        height: 0.28rem;
      }
    }
  }
  .market {
    font-size: 0.24rem;
    color: #666666;
    padding-left: 0.31rem;
    margin-bottom: 0.22rem;
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
  .storeDetailTab {
    font-size: 0.3rem;
    color: #666666;
    height: 0.88rem;
    line-height: 0.48rem;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.2rem 0;
    position: relative;
    border-bottom: 1px solid #e9e9e9;
    .tab {
      display: inline-block;
      width: 50%;
      text-align: center;
    }
    .greenLine {
      display: block;
      background: #50bf82;
      border-radius: 100px;
      width: 0.59rem;
      height: 2px;
      position: absolute;
      bottom: 0;
      transition: all 0.3s ease-in-out;
      left: 0.96rem;
    }
  }
  .discountProduct {
    padding-left: 0.19rem;
    box-sizing: border-box;
    padding-top: 0.22rem;
    .product {
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
          height: 1.01rem;
          width: 1.01rem;
          top: 0;
          right: 0;
        }
      }
    }
  }
  .footer {
    height: 1.01rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    line-height: 1.01rem;
    font-size: 0.3rem;
    text-align: center;
    .attention {
      background: #fff;
      color: #50bf82;
      width: 50%;
    }
    .phoneSeller {
      background: #3cb850;
      color: #fff;
      width: 50%;
    }
  }
  .allProduct {
    width: 100%;
    .sort {
      transition: all 0.3s ease-in-out;
      overflow: hidden;
      height: 0px;
      width: 100%;
      .btn {
        margin-top: 0.1rem;
        height: 0.88rem;
        line-height: 0.88rem;
        display: flex;
        justify-content: space-between;
        .cancelBtn {
          font-size: 0.3rem;
          text-align: center;
          color: #3cb850;
          width: 50%;
        }
        .ensureBtn {
          background: #3cb850;
          color: #fff;
          font-size: 0.3rem;
          text-align: center;
          width: 50%;
        }
      }
      .sort-input {
        // border: 1px solid #eee;
        display: inline-block;
        font-size: 0.2rem;
        color: #666666;
        height: 0.32rem;
        width: 0.74rem;
        text-align: center;
        line-height: 0.32rem;
        border: 1px solid #999999;
        border-radius: 4px;
      }
      .sort-input:focus {
        // color: #3cb850;
        border-color: #3cb850;
        // background-color: #3cb850;
      }
      .sort-input:focus :placeholder {
      }
      div {
        height: 0.74rem;
        border-bottom: 1px solid #d5d5d5;
        line-height: 0.74rem;
        font-size: 0.24rem;
        color: #666666;
        letter-spacing: 0;
        text-align: center;
        .priceS {
          display: inline-block;
          font-size: 0.2rem;
          color: #666666;
          height: 0.32rem;
          width: 0.74rem;
          text-align: center;
          line-height: 0.32rem;
          border: 1px solid #999999;
          border-radius: 4px;
        }
        span:first-child {
          margin-right: 0.4rem;
        }
        span:last-child {
          margin-left: 0.4rem;
        }
      }
    }
    .productType {
      box-sizing: border-box;
      padding: 0.15rem 0;
      height: 0.88rem;
      border-bottom: 1px solid #e9e9e9;
      display: flex;
      justify-content: space-between;
      height: 100%;
      div {
        width: 50%;
        text-align: center;
        font-size: 0.3rem;
        color: #666666;
        height: 100%;
        line-height: 0.58rem;
        position: relative;
        span {
          margin-right: 0.1rem;
        }
        img {
          height: 0.08rem;
          position: absolute;
          top: 0.25rem;
        }
      }
      div:first-child {
        border-right: 1px solid #e9e9e9;
      }
    }
    .productList {
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
        border: 1px solid #efefef;
        font-size: 0.24rem;
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
      }
    }
  }
  .storeActive {
    padding: 0.24rem 0.21rem;
    box-sizing: border-box;
    .active {
      border: 1px solid #efefef;
      box-shadow: #efef 1px 1px 5px;
      width: 100%;
      .activeImg {
        height: 4.35rem;
        width: 100%;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .textA {
        height: 0.84rem;
        line-height: 0.84rem;
        font-size: 0.2rem;
        padding: 0 0.3rem;
        box-sizing: border-box;
        .textA1 {
          font-size: 0.26rem;
          color: #333333;
        }
        .textA2 {
          font-size: 0.22rem;
          color: #999999;
          padding-left: 0.1rem;
          border-left: 1px solid #333333;
        }
        .textA3 {
          font-size: 0.24rem;
          color: #333333;
          float: right;
        }
        .textAImg {
          float: right;
          height: 0.24rem;
          margin-top: 0.3rem;
          margin-left: 0.1rem;
        }
      }
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
