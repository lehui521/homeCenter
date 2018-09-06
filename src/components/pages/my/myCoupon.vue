<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="tabList">
      <div class="tab" @click="clickTab('noUse')" :style="status.tabStatus=='noUse'?status.tabStyle:''">未使用</div>
      <div class="tab" @click="clickTab('used')" :style="status.tabStatus=='used'?status.tabStyle:''">已使用</div>
      <div class="tab" @click="clickTab('overdue')" :style="status.tabStatus=='overdue'?status.tabStyle:''">已过期</div>
    </div>
    <div class="couponList" v-if="status.tabStatus=='noUse'">
      <!-- 满减券 -->
      <div class="couponImg">
        <div class="left">
          <div class="leftText">
            <div class="leftText1">
              我乐橱柜
            </div>
            <div class="leftText2">
              上海家饰佳徐汇店
            </div>
            <div class="leftText3">
              2018.7.12-2019.12.12
            </div>
            <div class="leftButton" @click="status.showSubtraction=true">
              立即领取
            </div>
          </div>
          <img src="static/img/couponBg.png" alt="" class="couponLeftImg">
        </div>
        <div class="right">
          <img src="static/img/manjian.png" alt="" class="rightImg">
          <div class="rightText1">30元</div>
          <div class="rightText2">满30元可用</div>
        </div>
      </div>
      <!-- 折扣券 -->
      <div class="couponImg disCountBorder">
        <div class="left">
          <div class="leftText">
            <div class="leftText1">
              我乐橱柜
            </div>
            <div class="leftText2">
              上海家饰佳徐汇店
            </div>
            <div class="leftText3">
              2018.7.12-2019.12.12
            </div>
            <div class="leftButton discountColor" @click="status.showDiscount=true">
              立即领取
            </div>
          </div>
          <img src="static/img/zhekouBg.png" alt="" class="couponLeftImg">
        </div>
        <div class="right">
          <img src="static/img/zhekou.png" alt="" class="rightImg">
          <div class="rightText1 discountColor">9.5折</div>
        </div>
      </div>
    </div>
    <!-- 弹出使用弹框 -->
    <van-popup v-model="status.showSubtraction">
      <div class="topImg">
        <span class="cancel" @click="status.showSubtraction=false">×</span>
        <div class="topText">
          <div class="text1">￥100</div>
          <div class="text2">满1000元可用</div>
          <div class="text3">满减劵</div>
        </div>
        <div class="bottomText">
          <div class="text1">
            有效期：
            <span style="color:#666666;">2018.6.12-2018.12.11</span>
          </div>
          <div class="text1">
            适用范围：
            <span style="color:#666666;">适用于该店铺商品支付时使用</span>
          </div>
          <div class="text1">
            使用规则：
            <span style="color:#666666;">不可与其他优惠券叠加使用</span>
          </div>
          <div class="topImg-btn">
            <img src="static/img/redution.png" alt="">
          </div>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="status.showDiscount">
      <div class="topImg" style="background-image:url(../../static/img/zhekouTan.png)">
        <span class="cancel" @click="status.showDiscount=false">×</span>
        <div class="topText">
          <div class="text1">9折</div>
          <div class="text3">折扣劵</div>
        </div>
        <div class="bottomText">
          <div class="text1">
            有效期：
            <span style="color:#666666;">2018.6.12-2018.12.11</span>
          </div>
          <div class="text1">
            适用范围：
            <span style="color:#666666;">适用于该店铺商品支付时使用</span>
          </div>
          <div class="text1">
            使用规则：
            <span style="color:#666666;">不可与其他优惠券叠加使用</span>
          </div>
          <div class="topImg-btn">
            <img src="static/img/discount.png" alt="">
          </div>
        </div>
      </div>
    </van-popup>
    <div class="couponList" v-if="status.tabStatus=='used'">
      <div class="couponImg borderUsedColor">
        <div class="left">
          <div class="leftText">
            <div class="leftText1">
              我乐橱柜
            </div>
            <div class="leftText2">
              上海家饰佳徐汇店
            </div>
            <div class="leftText3">
              2018.7.12-2019.12.12
            </div>
            <div class="leftButton usedColor">
              已使用
            </div>
          </div>
          <img src="static/img/couponBgUsed.png" alt="" class="couponLeftImg">
        </div>
        <div class="right">
          <img src="static/img/manjianUsed.png" alt="" class="rightImg">
          <div class="rightText1 usedColor">30元</div>
          <div class="rightText2 usedColor">满30元可用</div>
        </div>
      </div>
    </div>
    <!-- 已过期 -->
    <div class="couponList" v-if="status.tabStatus=='overdue'">
      <div class="couponImg borderUsedColor">
        <div class="left">
          <div class="leftText">
            <div class="leftText1">
              我乐橱柜
            </div>
            <div class="leftText2">
              上海家饰佳徐汇店
            </div>
            <div class="leftText3">
              2018.7.12-2019.12.12
            </div>
            <div class="leftButton usedColor">
              已过期
            </div>
          </div>
          <img src="static/img/couponBgUsed.png" alt="" class="couponLeftImg">
        </div>
        <div class="right">
          <img src="static/img/manjianUsed.png" alt="" class="rightImg">
          <div class="rightText1 usedColor">30元</div>
          <div class="rightText2 usedColor">满30元可用</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderSame from "../../common/sameHeader.vue";
export default {
  components: {
    HeaderSame
  },
  data: function() {
    return {
      headerObj: {
        title: "我的优惠劵",
        img: ""
      },
      status: {
        tabStatus: "noUse",
        tabStyle: "color:#fff;background:#33bf82;",
        showSubtraction: false, //满减
        showDiscount: false //折扣
      }
    };
  },
  created: function() {
    // this.getData();
  },
  methods: {
    clickTab: function(res) {
      this.status.tabStatus = res;
    },
    getData: function() {
      this.tool
        .request({
          url: "v3_user/coupon"
        })
        .then(res => {
          if (res.status == 200) {
            console.log(res);
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  .tabList {
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 0 0.6rem;
    box-sizing: border-box;
    width: 100%;
    margin-top: 0.26rem;
    .tab {
      border: 1px solid #33bf82;
      width: 100%;
      height: 0.62rem;
      font-size: 0.28rem;
      color: #33bf82;
      text-align: center;
      line-height: 0.62rem;
    }
    .tab:first-child {
      border-top-left-radius: 100px;
      border-bottom-left-radius: 100px;
      border-right: 0;
    }
    .tab:last-child {
      border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
      border-left: 0;
    }
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
        }
        .leftText2,
        .leftText3 {
          font-size: 0.24rem;
          color: #ffffff;
        }
        .leftButton {
          width: 2.26rem;
          padding: 0.03rem 0;
          text-align: center;
          font-size: 0.24rem;
          color: #f5a623;
          background: #fff;
          border-radius: 4px;
          position: absolute;
          bottom: 0.17rem;
          left: 1.33rem;
        }
        .usedColor {
          color: #9b9b9b;
        }
        .discountColor {
          color: #94d343;
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
      .discountColor {
        color: #94d343;
      }
    }
  }
  .borderUsedColor {
    border: 1.5px solid #9b9b9b;
  }
  .disCountBorder {
    border: 1.5px solid #94d343;
  }
  .topImg {
    height: 7.2rem;
    width: 6rem;
    background-image: url(../../../../static/img/manjianTan.png);
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid rgba(0, 0, 0, 0);
    .cancel {
      position: absolute;
      top: 0.3rem;
      color: #fff;
      right: 0.6rem;
      font-size: 23px;
    }
    .topText {
      width: 100%;
      text-align: center;
      .text1 {
        margin-top: 0.58rem;
        font-size: 0.64rem;
        color: #ffffff;
        letter-spacing: 0.1rem;
      }
      .text2 {
        font-size: 0.36rem;
        color: #ffffff;
        margin-top: 0.3rem;
        letter-spacing: 0.1rem;
      }
      .text3 {
        font-size: 0.64rem;
        color: #ffffff;
        letter-spacing: 0.24rem;
        margin-top: 0.3rem;
      }
    }
    .bottomText {
      width: 100%;
      text-align: left;
      font-size: 0.24rem;
      padding-left: 0.7rem;
      padding-right: 0.6rem;
      box-sizing: border-box;
      position: absolute;
      top: 3.6rem;
      .text1 {
        color: #333333;
        margin-top: 0.43rem;
      }
      .topImg-btn {
        width: 35.7vw;
        margin: auto;
        margin-top: 0.3rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

.van-popup {
  background: rgba(0, 0, 0, 0);
  overflow-y: hidden;
}
</style>
