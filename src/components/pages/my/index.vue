<template>
  <div class="pages">
    <header class="header">
      我的
    </header>
    <div class="member">
      <div class="left">
        <div class="leftImg">
          <img src="static/img/touxiang.jpg" alt="">
        </div>
        <div class="leftText">
          <div class="name">
            <p class="nameC">heheda</p>
            <p class="button">编辑资料</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="rightImg1"></div>
        <div class="rightImg2">
          <span>55</span>
        </div>
      </div>
    </div>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <router-link class="myNews" to="/myMessage">
      <img src="static/img/myxiaoxi.png" alt="" class="leftImg">
      <span>消息</span>
      <img src="static/img/fanhui.png" alt="" class="rightIcon">
    </router-link>
    <div class="myNews">
      <img src="static/img/myyouhuiquan.png" alt="" class="leftImg">
      <span>优惠券</span>
      <img src="static/img/fanhui.png" alt="" class="rightIcon">
    </div>
    <!-- 分割距离 -->
    <div class="grayBlank">
    </div>
    <router-link class="myNews" to="/myHome">
      <img src="static/img/myhome.png" alt="" class="leftImg">
      <span>我的家</span>
      <img src="static/img/fanhui.png" alt="" class="rightIcon">
    </router-link>
    <router-link class="myNews" to="/myFocus">
      <img src="static/img/myguanzhu.png" alt="" class="leftImg">
      <span>关注</span>
      <img src="static/img/fanhui.png" alt="" class="rightIcon">
    </router-link>
    <router-link class="myNews" to="/myCollection">
      <img src="static/img/myshoucang.png" alt="" class="leftImg">
      <span>收藏</span>
      <img src="static/img/fanhui.png" alt="" class="rightIcon">
    </router-link>
    <router-link class="myNews" to="/mySetting">
      <img src="static/img/myshezhi.png" alt="" class="leftImg">
      <span>设置</span>
      <img src="static/img/fanhui.png" alt="" class="rightIcon">
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
  .pages {
    .header {
      height: 0.88rem;
      text-align: center;
      font-size: 0.36rem;
      color: #333333;
      line-height: 0.88rem;
      background-color: #fff;
    }
    .member {
      height: 1.78rem;
      border: 1px solid #f8f8f8;
      display: flex;
      justify-content: space-between;
      background: #fff;
      .left {
        width: 50%;
        display: flex;
        justify-content: space-between;
        .leftImg {
          width: 50%;
          text-align: center;
          img {
            width: 1.14rem;
            height: 1.14rem;
            border-radius: 50%;
            margin-top: 0.32rem;
          }
        }
        .leftText {
          width: 50%;
          text-align: left;
          .name {
            margin-top: 0.32rem;
            height: 1.14rem;
            font-size: 0.3rem;
            color: #333333;
            letter-spacing: 0;
            .nameC {
              height: 0.57rem;
              line-height: 0.57rem;
            }
            .button {
              font-size: 0.18rem;
              color: #666666;
              border: 1px solid #e7e7e7;
              border-radius: 100px;
              width: 1rem;
              text-align: center;
              margin-top: 0.19rem;
            }
          }
        }
      }
      .right {
        width: 50%;
        padding-top: 0.52rem;
        box-sizing: border-box;
        padding-right: 0.34rem;
        .rightImg1 {
          height: 0.74rem;
          width: 1.02rem;
          float: right;
          background-image: url("../../../../static/img/qiandao.png");
          background-repeat: no-repeat;
          background-size: cover;
        }
        .rightImg2 {
          width: 0.78rem;
          height: 0.74rem;
          float: right;
          background-image: url("../../../../static/img/qiandao2.png");
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          span {
            text-align: center;
            display: inline-block;
            width: 100%;
            position: absolute;
            bottom: 0.05rem;
            font-size: 0.22rem;
            color: #999999;
            letter-spacing: 0;
          }
        }
      }
    }
    .myNews {
      height: 0.88rem;
      background: #fff;
      border-top: 1px solid #d5d5d5;
      border-bottom: 1px solid #d5d5d5;
      padding: 0 0.3rem;
      box-sizing: border-box;
      display: block;
      .leftImg {
        height: 0.39rem;
        width: 0.4rem;
        float: left;
        margin-top: 0.24rem;
      }
      span {
        display: inline-block;
        line-height: 0.88rem;
        font-size: 0.26rem;
        color: #666666;
        letter-spacing: 0;
        float: left;
        margin-left: 0.25rem;
      }
      .rightIcon {
        height: 0.24rem;
        float: right;
        margin-top: 0.32rem;
      }
    }
  }

</style>
