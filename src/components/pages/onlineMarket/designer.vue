<template>
  <div class="designer">
    <div class="title">
      <img src="static/img/shejishi.png" alt="">
      <img src="static/img/rightIcon.png" alt="" class="rightIcon">
    </div>
    <div class="designerContent">
      <div class="designer" v-for="(item,index) in [1,2,3]" :key="index">
        <div class="memberDetail">
          <div class="memberLeft">
            <img src="static/img/touxiang.jpg" alt="" class="tou">
            <p class="heart">
              <img src="static/img/shejishixin.png" alt="">
              <span>551</span>
            </p>
          </div>
          <div class="memberRight">
            <div class="memberName">
              呵呵哒
              <span>找TA</span>
            </div>
            <div class="tag">
              <van-tag type="success" plain>明星</van-tag>
              <van-tag type="success" plain>资深</van-tag>
            </div>
            <div class="address">
              <span>上海市</span>
              <span>15年</span>
            </div>
            <div class="textD">
              <span>现代</span>
              <span>简欧</span>
              <span>美式</span>
              <span>北欧</span>
            </div>
          </div>
        </div>
        <div class="designerImg">
          <img src="static/img/shichangtuipian.png" alt="">
          <img src="static/img/shichangtuipian.png" alt="">
          <img src="static/img/shichangtuipian.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.designer {
  font-size: 0.35rem;
  margin-bottom: 0.3rem;
  .title {
    text-align: center;
    padding: 0.36rem 0;
    position: relative;
    img {
      height: 0.28rem;
    }
    .rightIcon {
      position: absolute;
      top: 0.38rem;
      height: 0.24rem;
      right: 0.3rem;
    }
  }
  .designerContent {
    padding: 0.2rem;
    padding-top: 0;
    box-sizing: border-box;
    .designer {
      border: 1px solid #efefef;
      margin-top: 0.2rem;
      width: 100%;
      box-shadow: #f1f1f1 2px 2px 5px;
      padding: 0.46rem 0.26rem;
      box-sizing: border-box;
      .memberDetail {
        display: flex;
        justify-content: space-between;
        .memberLeft {
          width: 35%;
          text-align: center;
          .tou {
            height: 1.26rem;
            border-radius: 50%;
          }
          .heart {
            font-size: 0.24rem;
            color: #38ba50;
            text-align: center;
            margin-top: 0.14rem;
            img {
              height: 0.24rem;
              margin-right: 5px;
            }
          }
        }
        .memberRight {
          width: 65%;
          .memberName {
            color: #333333;
            font-size: 0.3rem;
            font-weight: 500;
            span {
              display: inline-block;
              padding: 2px 10px;
              border-radius: 30px;
              background: #38ba50;
              color: #fff;
              float: right;
              font-size: 0.2rem;
            }
          }
          .tag {
            margin-top: 0.1rem;
          }
          .address {
            font-size: 0.26rem;
            color: #666666;
            font-weight: 500;
            margin-top: 0.1rem;
            span {
              margin-right: 0.1rem;
            }
          }
          .textD {
            margin-top: 0.1rem;
            font-size: 0.26rem;
            color: #999999;
            span {
              display: inline-block;
              border-right: 1px solid #d5d5d5;
              padding-right: 5px;
              box-sizing: border-box;
            }
            span:last-child {
              border-right: 0;
            }
          }
        }
      }
      .designerImg {
        display: flex;
        justify-content: space-between;
        margin-top: 0.1rem;
        img {
          display: inline-block;
          height: 1.6rem;
          margin-right: 0.14rem;
          width: 32%;
        }
      }
    }
  }
}
</style>


