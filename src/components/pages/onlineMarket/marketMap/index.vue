<template>
    <div class="pages" id="marketMap">
        <div class="header">
            <div class="text" @click="selectClick('type')">
                <span>A-1F场</span>
                <img src="static/img/grayDown.png" alt="" v-if="status.typeStatus!=='type'">
                <img src="static/img/greenUp.png" alt="" v-else>
            </div>
            <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
        </div>
        <div class="typeMask" v-if="status.typeStatus!==''">
            <div class="single" v-for="index in 4" :key="index">
                A-{{index}}F场
            </div>
        </div>
        <div class="footer" v-if="!status.storeListStatus">
            <div class="footerImg">
                <img src="static/img/navUp.png" alt="" @click="status.storeListStatus=true">
            </div>
            <div class="footerText">
                店铺列表
            </div>
        </div>
        <van-popup v-model="status.storeListStatus" position="bottom" :overlay="true" class="storeList">
            <div class="footerImg">
                <img src="static/img/navDown.png" alt="" @click="status.storeListStatus=false">
            </div>
            <div class="footerText">
                店铺列表
            </div>
            <div class="storeNav">
                <van-tabs type="card" class="navContent">
                    <van-tab v-for="index in 10" :title="'选项sadasd ' + index" :key="index">
                    </van-tab>
                </van-tabs>
            </div>
            <div class="storeContent">
                <div class="singleStore" v-for="i in 8" :key="i">
                    <div class="leftImg">
                        <img src="static/img/banner1.png" alt="">
                    </div>
                    <div class="rightText">
                        <div class="text1">关注陶瓷</div>
                        <div class="text2">
                            <span>橱柜</span>
                            <span>|</span>
                            <span>简约</span>
                        </div>
                        <div class="text3">
                            上海市普陀区真东路1109号D2047室
                        </div>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      status: {
        typeStatus: "",
        storeListStatus: false
      }
    };
  },
  methods: {
    selectClick: function(res) {
      if (res == this.status.typeStatus) {
        return (this.status.typeStatus = "");
      }
      this.status.typeStatus = res;
    }
  }
};
</script>
<style lang="scss">
#marketMap {
  padding-top: 0.88rem;
  .header {
    height: 0.88rem;
    background: #fff;
    font-size: 0.3rem;
    color: #999999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    .text {
      display: inline-block;
      height: 0.88rem;
      background: #fff;
      font-size: 0.3rem;
      color: #999999;
      top: 0;
      left: 0;
      text-align: center;
      line-height: 0.88rem;
      img {
        height: 0.14rem;
        float: right;
        margin-top: 0.37rem;
        margin-left: 0.2rem;
      }
    }
    .back {
      height: 0.32rem;
      position: absolute;
      top: 0.28rem;
      left: 0.3rem;
    }
  }
  .typeMask {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0.88rem;
    width: 100%;
    height: 100%;
    .single {
      background: #fff;
      height: 0.88rem;
      text-align: center;
      color: #333333;
      font-size: 0.3rem;
      line-height: 0.88rem;
      border-bottom: 1px solid #979797;
    }
  }
  .footer {
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    .footerImg {
      height: 0.28rem;
      text-align: center;
      width: 100%;
      font-size: 0.28rem;
      padding-bottom: 0.06rem;
      img {
        height: 0.28rem;
      }
    }
    .footerText {
      text-align: center;
      font-size: 0.28rem;
      color: #666666;
    }
  }
  .storeList {
    .footerImg {
      height: 0.28rem;
      text-align: center;
      width: 100%;
      font-size: 0.28rem;
      padding-bottom: 0.06rem;
      img {
        height: 0.28rem;
      }
    }
    .footerText {
      text-align: center;
      font-size: 0.28rem;
      color: #666666;
    }
    .storeNav {
      margin-top: 0.3rem;
      .navContent {
        margin: 0;
      }
      .van-tabs__nav--card {
        margin: 0;
        border: 0;
      }
      .van-tabs__nav--card .van-tab {
        color: #666666;
        background: #f4f4f4;
        font-size: 0.28rem;
        border: 0;
        padding: 0;
        height: 0.6rem;
        line-height: 0.6rem;
        border-radius: 0.08rem;
        margin-right: 0.3rem;
        width: auto;
        padding: 0 0.3rem;
      }
      .van-tabs__nav--card .van-tab.van-tab--active {
        color: #fff;
        background: #333333;
      }
      .van-tabs__nav {
        display: -webkit-box;
      }
    }
  }
  .storeContent {
    height: 9rem;
    overflow-y: scroll;
    overflow-x: hidden;
    .singleStore {
      display: flex;
      justify-content: space-between;
      padding: 0.35rem 0.08rem;
      border-bottom: 1px solid #d5d5d5;
      .leftImg {
        width: 1.76rem;
        height: 1.36rem;
        img {
          width: 1.76rem;
          height: 1.36rem;
        }
      }
      .rightText {
        width: 100%;
        font-size: 0.24rem;
        padding-left: 0.3rem;
        box-sizing: border-box;
        position: relative;
        .text1 {
          font-size: 0.3rem;
          color: #333333;
          margin-bottom: 0.16rem;
        }
        .text2 {
          font-size: 0.24rem;
          color: #3cb850;
        }
        .text3 {
          font-size: 0.24rem;
          color: #666666;
          position: absolute;
          bottom: 0;
          left: 0.3rem;
        }
      }
    }
  }
}
</style>


