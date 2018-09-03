<template>
  <div class="recommendMarket">
    <div class="title">
      <img src="static/img/tuijianshichang.png" alt="">
    </div>
    <div class="marketList">
      <div class="market" v-for="(item,index) in [1,2,3]" :key="index">
        <div class="marketBorder" :style="index==2?'border:0;':''">
          <div class="marketImg">
            <img src="static/img/shichangtuipian.png" alt="">
          </div>
          <div class="marketText">
            <div class="marketName">
              <span class="name">上海家饰佳徐汇店</span>
              <span>64m</span>
            </div>
            <div class="marketTag">
              <van-tag type="success" plain>家具</van-tag>
              <van-tag type="success" plain>灯饰</van-tag>
            </div>
            <div class="marketPhone">
              <img src="static/img/dianhua.png" alt="">
              <span>15252111236</span>
            </div>
            <div class="marketAddress">
              <img src="static/img/dizhi.png" alt="">
              <span>上海市徐汇区凯旋路552号</span>
            </div>
            <div class="marketHot">
              <img src="static/img/re.png" alt="">
              <span>市场新开业，品牌大放价</span>
            </div>
          </div>
        </div>
      </div>
      <div class="more" @click="$router.push('marketList')">
        <div class="moreInner">
          查看更多市场>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.recommendMarket {
  font-size: 0.25rem;
  .title {
    text-align: center;
    padding: 0.36rem 0;
    img {
      height: 0.28rem;
    }
  }
  .market {
    padding-left: 15px;
    .marketBorder {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e9ecf3;
      padding: 15px 8px;
      padding-left: 0;
      .marketImg {
        width: 40%;
        box-sizing: border-box;
        padding: 0.1rem;
        img {
          width: 100%;
        }
      }
      .marketText {
        width: 60%;
        padding: 0.1rem;
        .marketName {
          display: flex;
          justify-content: space-between;
          span {
            display: inline-block;
            line-height: 0.4rem;
            font-size: 0.24rem;
          }
          .name {
            font-size: 0.3rem;
            font-weight: 540;
          }
        }
      }
      .marketTag {
        margin: 0.1rem 0;
        font-size: 0.22rem;
      }
      .marketPhone {
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;
        margin-bottom: 0.1rem;
        font-size: 0.24rem;
        color: #444444;
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
      .marketAddress {
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;
        margin-bottom: 0.1rem;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          width: 100%;
          padding-left: 0.45rem;
          box-sizing: border-box;
          font-size: 0.24rem;
          color: #444444;
        }
        img {
          height: 0.24rem;
          position: absolute;
          top: 0.02rem;
          left: 0;
        }
      }
      .marketHot {
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          width: 100%;
          padding-left: 0.45rem;
          box-sizing: border-box;
          font-size: 0.24rem;
          color: #444444;
        }
        img {
          height: 0.24rem;
          position: absolute;
          top: 0.04rem;
          left: 0;
        }
      }
    }
  }
  .market:last-of-type {
    border-bottom: 0;
  }
  .more {
    padding: 0px 8px;
    box-sizing: border-box;
    .moreInner {
      font-size: 0.28rem;
      height: 0.7rem;
      background: #fbfbfb;
      text-align: center;
      line-height: 0.7rem;
      color: #666666;
      margin-bottom: 0.1rem;
    }
  }
}
</style>


