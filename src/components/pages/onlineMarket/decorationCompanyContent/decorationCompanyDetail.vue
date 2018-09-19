<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="banner">
      <img src="static/img/banner1.png" alt="">
    </div>
    <div class="storeNameImg">
      <img src="static/img/banner1.png" alt="" class="storeImg">
      <div class="storeName">
        <div class="name" @click="$router.push('companyIntroduction')">
          <span>我乐橱柜</span>
          <div class="nameImg">
            <img src="static/img/rightArrow.png" alt="">
          </div>
          <span class="nameRight">简介</span>
        </div>
        <div class="storeTag">
          <span class="sTag">实木</span>
          <span class="sTag">别墅</span>
        </div>
        <div class="brief">
          上海市红星美凯龙真北路商场
        </div>
      </div>
    </div>
    <div class="storeAddress">
      <span>上海市普陀区真北路1109号D2047室</span>
      <div class="addressleftImg ">
        <img src="static/img/dianhua.png" alt="">
      </div>
      <div class="addressrightImg" style="border-right:1px solid #e9e9e9;">
        <img src="static/img/dizhi.png" alt="">
      </div>
    </div>
    <div class="cellDesigner">
      <span class="text1">设计师团队</span>
      <div class="rightArrow">
        <img src="static/img/rightArrow.png" alt="">
      </div>
      <span class="text2">1位设计师</span>
    </div>
    <div class="designer">
      <div class="floor1Box">
        <div class="imgRight">
          <img src="static/img/touxiang.jpg" alt="">
        </div>
        <div class="textLeft">
          <div class="nameTop">
            <span>张三</span>
            <span class="tag">找TA</span>
          </div>
          <div class="nameBottom">8年设计经验</div>
          <div class="nameTag">
            <span>现代</span>
            <span>北欧</span>
          </div>
        </div>
      </div>
    </div>
    <decorationCompany></decorationCompany>
  </div>
</template>
<script>
import HeaderSame from "../../../common/sameHeader.vue";
import decorationCompany from "./decorationCompanyCase.vue";
export default {
  components: { HeaderSame, decorationCompany },
  data: function() {
    return {
      headerObj: {
        title: "装修公司",
        img: "static/img/fenxiangB.png",
        text: "decorationCompanyDetail"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  .banner {
    height: 3.98rem;
    width: 100%;
    img {
      height: 3.98rem;
      width: 100%;
    }
  }
  .storeNameImg {
    padding-left: 0.3rem;
    padding-top: 0.29rem;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    background: #fff;
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
        height: 0.45rem;
        line-height: 0.45rem;
        .nameRight {
          font-size: 0.24rem;
          color: #adb0b5;
          float: right;
          margin-top: 0.03rem;
          margin-right: 0.1rem;
        }
        .nameImg {
          height: 100%;
          float: right;
          display: flex;
          justify-content: center;
          flex-direction: column;
          img {
            height: 0.24rem;
          }
        }
      }
      .brief {
        height: 0.45rem;
        line-height: 0.45rem;
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
        height: 0.45rem;
        line-height: 0.45rem;
        span:first-child {
          margin-left: 0;
        }
        .sTag {
          display: inline-block;
          color: #3cb850;
          background: #fafdfa;
          padding: 0.04rem 0.08rem;
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
    background: #fff;
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
  .cellDesigner {
    margin-top: 0.26rem;
    height: 1rem;
    font-size: 0.28rem;
    color: #666666;
    background: #fff;
    line-height: 1rem;
    .text1 {
      margin-left: 0.3rem;
    }
    .text2 {
      float: right;
      margin-right: 0.4rem;
    }
    .rightArrow {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      float: right;
      margin-right: 0.38rem;
      img {
        height: 0.24rem;
      }
    }
  }
  .designer {
    width: 100%;
    height: 2.06rem;
    padding: 0.19rem 0.2rem;
    box-sizing: border-box;
    .floor1Box {
      height: 1rem;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      .imgRight {
        width: 1rem;
        height: 100%;
        img {
          height: 100%;
          width: 1rem;
          border-radius: 50%;
        }
      }
      .textLeft {
        width: 100%;
        height: 100%;
        font-size: 0.26rem;
        padding-left: 0.22rem;
        box-sizing: border-box;
        .nameTop {
          font-weight: 500;
          font-size: 0.3rem;
          line-height: 0.5rem;
          .tag {
            display: inline-block;
            width: 0.8rem;
            height: 0.32rem;
            line-height: 0.34rem;
            text-align: center;
            color: #fff;
            font-size: 0.2rem;
            background: #3cb850;
            border-radius: 100px;
            float: right;
          }
        }
        .nameBottom {
          font-weight: 500;
          color: #999999;
          font-size: 0.26rem;
          line-height: 0.5rem;
        }
        .nameTag {
          font-size: 0.22rem;
          span {
            display: inline-block;
            width: 0.66rem;
            height: 0.46rem;
            background: #fafdfa;
            text-align: center;
            line-height: 0.46rem;
            color: #38ba50;
            margin-right: 0.09rem;
          }
        }
      }
    }
  }
}
</style>


