<template>
    <div class="pages">
        <HeaderSame :headerObj="headerObj"></HeaderSame>
        <div class="banner">
            <img src="static/img/banner1.png" alt="">
        </div>
        <div class="content">
            <div class="single" v-for="i in 4" :key="i">
                <div class="singleFloor1">
                    <div class="singleTitle">
                    </div>
                    <div class="singleText">
                        <div class="text1">装修准备</div>
                        <div class="text2">确定家装风格，资金到位</div>
                    </div>
                </div>
                <div class="singleFloor2">
                    <img src="static/img/banner1.png" alt="">
                    <span>准备</span>
                </div>
            </div>
        </div>
        <img src="static/img/menu.png" alt="" class="menuButton" @click="showMenu=true">
        <van-popup v-model="showMenu" position="right" :overlay="true" class="menuContent">
            <div class="titleText">目录</div>
            <div class="menuList">
                <div class="single">环保入住</div>
                <div class="single">环保入住</div>
                <div class="single">环保入住</div>
            </div>
        </van-popup>
    </div>
</template>
<script>
import HeaderSame from "../../../common/sameHeader.vue";
export default {
  components: { HeaderSame },
  data: function() {
    return {
      headerObj: {
        title: "装修攻略",
        img: ""
      },
      showMenu: false
    };
  }
};
</script>
<style lang="scss" scoped>
.pages {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: #fff;
  padding-top: 0.88rem;
  box-sizing: border-box;
  padding-bottom: 0.3rem;
  .banner {
    height: 2.8rem;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .content {
    background: #fff;
    padding-top: 0.41rem;
    padding-left: 0.15rem;
    box-sizing: border-box;
    .singleFloor1 {
      display: flex;
      justify-content: space-between;
      .singleTitle {
        height: 0.84rem;
        width: 0.84rem;
        background: #999999;
        border-radius: 50%;
      }
      .singleText {
        width: 100%;
        padding-left: 0.12rem;
        box-sizing: border-box;
        position: relative;
        .text1 {
          font-size: 0.28rem;
          color: #333333;
          letter-spacing: 0;
        }
        .text2 {
          font-size: 0.26rem;
          color: #999999;
          letter-spacing: 0;
          position: absolute;
          bottom: 0;
        }
      }
    }
    .singleFloor2 {
      border-left: 1px solid #d5d5d5;
      font-size: 0.3rem;
      padding-left: 0.52rem;
      margin-left: 0.42rem;
      padding-top: 0.13rem;
      padding-bottom: 0.28rem;
      position: relative;
      img {
        width: 1.48rem;
        height: 1.44rem;
      }
      span {
        display: block;
        position: absolute;
        width: 0.96rem;
        height: 0.5rem;
        border-radius: 100px;
        color: #fff;
        line-height: 0.5rem;
        text-align: center;
        background: rgba(0, 0, 0, 0.55);
        top: 0.65rem;
        left: 0.77rem;
      }
    }
  }
  .menuButton {
    position: fixed;
    bottom: 2.7rem;
    left: 0.19rem;
    height: 0.9rem;
  }
  .menuContent {
    width: 60%;
    height: 100%;
    padding-top: 0.88rem;
    box-sizing: border-box;
    .titleText {
      font-size: 0.3rem;
      color: #333333;
      letter-spacing: 0;
      padding-left: 0.3rem;
      margin-top: 0.36rem;
    }
    .menuList {
      margin-top: 0.52rem;
      margin-left: 0.69rem;
      border-left: 1px solid #d5d5d5;
      padding-top: 0.1rem;
      .single {
        font-size: 0.28rem;
        color: #666666;
        letter-spacing: 0;
        height: 0.5rem;
        line-height: 0.5rem;
        padding-left: 0.26rem;
        margin-bottom: 0.7rem;
        position: relative;
      }
      .single::after {
        content: "";
        display: inline-block;
        width: 0.1rem;
        height: 0.1rem;
        background: #666666;
        border-radius: 50%;
        position: absolute;
        left: -0.05rem;
        top: 0.2rem;
      }
    }
  }
}
</style>


