<template>
  <div class="page">
    <header :class="showHeaderStyle?'header bgWhite':'header'">
      <div class="address" @click="$router.push('marketList')">
        <span>{{marketData.name}}</span>
        <img src="static/img/weizhi.png" alt="">
      </div>
      <div class="headerIcon" v-if="!showHeaderStyle">
        <img src="static/img/fenxiang.png" alt="">
      </div>
      <div class="headerIcon" v-if="showHeaderStyle">
        <img src="static/img/fenxiangB.png" alt="">
      </div>
    </header>
    <div class="banner">
      <img v-lazy="marketData.cover" style="width:100%;height:100%;" class="bannerImg" />
    </div>
    <div class="indexNav">
      <div class="navImg" @click="$router.push('marketMap')">
        <img src="static/img/shichangditu.png" alt="">
        <span>市场地图</span>
      </div>
      <div class="navImg" @click="$router.push('boutiqueShop')">
        <img src="static/img/jingpindianpu.png" alt="">
        <span>精品店铺</span>
      </div>
      <div class="navImg" @click="$router.push('productClassif')">
        <img src="static/img/shangpinfenlei.png" alt="">
        <span>商品分类</span>
      </div>
      <div class="navImg" @click="$router.push('salesPromotion?market_id='+marketData.market_id)">
        <img src="static/img/cuxiaohuodong.png" alt="">
        <span>促销活动</span>
      </div>
    </div>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <div class="marketDetail">
      <div class="name" @click="$router.push('marketInfo')">
        <span>{{marketData.name}}</span>
        <img src="static/img/rightIcon.png" alt="" class="rightIcon">
        <span class="icon">简介</span>
      </div>
      <div class="describe" @click="$router.push('marketInfo')">
        <span class="text1">上海红星美凯龙商场阿萨德喀什几乎是可敬的会卡金黄色的框架框架建行卡手机号的</span>
        <u class="text2">全文</u>
      </div>
      <div class="tag">
        <van-tag type="success" plain v-for="(item,i) in marketData.cate_name" :key="i">{{item}}</van-tag>
        <!-- <van-tag type="success" plain>家居</van-tag>
        <van-tag type="success" plain>灯饰</van-tag>
        <van-tag type="success" plain>五金</van-tag> -->
      </div>
      <div class="phone">
        <img src="static/img/dianhua.png" alt="">
        <span>{{marketData.contact}}</span>
      </div>
      <div class="Maddress">
        <img src="static/img/dizhi.png" alt="">
        <span class="address">{{marketData.address}}
        </span>
        <span class="distance">{{marketData.distance}}</span>
      </div>
    </div>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <newSwipe :newArr="marketListData.marketNew"></newSwipe>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <discountA :banner="marketListData.discountData.banner" :list="marketListData.discountData.list"></discountA>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <storeC :banner="marketListData.storeData.banner" :list="marketListData.storeData.list"></storeC>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <productC :banner="marketListData.productData.banner" :list="marketListData.productData.list"></productC>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <brandC :banner="marketListData.brandData.banner" :list="marketListData.brandData.list"></brandC>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <decorationC :banner="marketListData.companyData.banner" :list="marketListData.companyData.list">
    </decorationC>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <Designer :list="marketListData.degsinData"></Designer>
  </div>
</template>
<script>
//汇头条
import newSwipe from "../../common/onlineMarketNew.vue";
//折扣专区
import discountA from "./discountArea.vue";
//店铺精选
import storeC from "./storeChoice.vue";
//商品精选
import productC from "./productChoice.vue";
//品牌精选
import brandC from "./brandChoice.vue";
//装修公司
import decorationC from "./decorationCompany.vue";
//设计师
import Designer from "./designer.vue";
export default {
  components: {
    newSwipe,
    discountA,
    storeC,
    productC,
    brandC,
    decorationC,
    Designer
  },
  data: function() {
    return {
      showHeaderStyle: false,
      marketData: {},
      marketListData: {
        banner: [],
        marketNew: [],
        discountData: {
          banner: {},
          list: []
        },
        storeData: {
          banner: {},
          list: []
        },
        productData: {
          banner: {},
          list: []
        },
        brandData: {
          banner: {},
          list: []
        },
        companyData: {
          banner: {},
          list: []
        },
        degsinData: []
      }
    };
  },
  mounted: function() {
    this.scrollHandle();
  },
  created: function() {
    if (!localStorage.getItem("marketData")) {
      return this.$dialog
        .alert({
          title: "提示",
          message: "请选择市场"
        })
        .then(() => {
          this.$router.push("marketList");
        });
    } else {
      this.marketData = JSON.parse(localStorage.getItem("marketData"));
    }
    this.getData();
  },
  methods: {
    scrollHandle: function(e) {
      document.addEventListener("scroll", e => {
        let header = document.getElementById("header");
        let top =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;
        if (parseInt(top) > 100) {
          this.showHeaderStyle = true;
        } else {
          this.showHeaderStyle = false;
        }
      });
    },
    getData: function() {
      this.tool
        .request({
          url: "v3_market/index",
          method: "post",
          params: {
            market_id: this.marketData.market_id,
            lng: this.marketData.lng,
            lat: this.marketData.lat
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.marketListData.banner = res.data.banner;
            this.marketListData.marketNew = res.data.toutiao.list;

            this.marketListData.discountData.banner =
              res.data.discount_data.banner;
            this.marketListData.discountData.list =
              res.data.discount_data.list.list;
            //店铺精选
            this.marketListData.storeData.banner = res.data.shop_data.banner;
            this.marketListData.storeData.list = res.data.shop_data.list.list;
            //商品精选
            this.marketListData.productData.banner = res.data.goods_data.banner;
            this.marketListData.productData.list =
              res.data.goods_data.list.list;
            //品牌精选
            this.marketListData.brandData.banner = res.data.brand_data.banner;
            this.marketListData.brandData.list = res.data.brand_data.list.list;
            //装修公司
            this.marketListData.companyData.banner =
              res.data.company_data.banner;
            this.marketListData.companyData.list =
              res.data.company_data.list.list;

            this.marketListData.degsinData = res.data.degsin_data.list.list;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.page {
  background: #fff;
  font-size: 0.3rem;
  .header {
    height: 0.88rem;
    background: rgba(255, 255, 255, 0);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    padding: 0.15rem 0.2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
    .address {
      min-width: 1.5rem;
      height: 0.54rem;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      font-size: 0.24rem;
      line-height: 0.54rem;
      text-align: center;
      color: #333333;
      font-weight: 500;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      img {
        width: 0.16rem;
        float: right;
        margin-top: 0.2rem;
        margin-left: 0.1rem;
      }
    }
    .headerIcon {
      height: 0.6rem;
      text-align: right;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-right: 0.2rem;
      img {
        width: 0.33rem;
        height: 0.33rem;
      }
    }
  }
  .bgWhite {
    background: rgba(255, 255, 255, 1);
    transition: all 0.3s ease-in-out;
  }
  .banner {
    height: 4.5rem;
    .bannerImg {
      height: 4.3rem;
      width: 100%;
    }
  }
  .indexNav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    .navImg {
      width: 25%;
      text-align: center;
      font-size: 0.24rem;
      img {
        width: 0.88rem;
        height: 0.88rem;
      }
      span {
        margin-top: 0.1rem;
        display: block;
        font-weight: 500;
      }
    }
  }
  .marketDetail {
    padding: 0.2rem;
    .name {
      font-size: 0.3rem;
      font-weight: 500;
      height: 0.6rem;
      line-height: 0.6rem;
      color: #444444;
      .icon {
        float: right;
        color: #38ba50;
        font-size: 0.24rem;
        margin-right: 10px;
      }
      img {
        height: 0.24rem;
        float: right;
        margin-top: 0.17rem;
      }
    }
    .describe {
      font-size: 0.24rem;
      font-weight: 500;
      height: 0.8rem;
      display: flex;
      justify-content: space-between;
      .text1 {
        // overflow: hidden;
        display: inline-block;
        height: 0.8rem;
        width: 80%;
        color: #666666;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .text2 {
        display: inline-block;
        height: 0.8rem;
        color: #38ba50;
        line-height: 1.3rem;
      }
    }
  }
  .tag {
    // margin-top: 0.2rem;
  }
  .phone {
    margin-top: 0.2rem;
    position: relative;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-bottom: 0.1rem;
    color: #666666;
    font-size: 0.24rem;
    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: inline-block;
      width: 100%;
      padding-left: 0.45rem;
      box-sizing: border-box;
    }
    img {
      height: 0.24rem;
      position: absolute;
      top: 0.02rem;
      left: 0;
    }
  }
  .Maddress {
    margin-top: 0.2rem;
    position: relative;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-bottom: 0.1rem;
    color: #666666;
    font-size: 0.24rem;
    position: relative;
    .distance {
      position: absolute;
      right: 0;
      top: 0;
    }
    .address {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: inline-block;
      width: 100%;
      padding-left: 0.45rem;
      box-sizing: border-box;
    }
    img {
      height: 0.24rem;
      position: absolute;
      top: 0.02rem;
      left: 0;
    }
  }
}
</style>


