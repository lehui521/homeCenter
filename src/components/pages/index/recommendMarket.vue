<template>
  <div class="recommendMarket">
    <div class="title">
      <img src="static/img/tuijianshichang.png" alt="">
    </div>
    <div class="marketList">
      <div class="market" v-for="(item,index) in newArr" :key="index" @click="jumpOnlineMarket(item)">
        <div class="marketBorder" :style="index==2?'border:0;':''">
          <div class="marketImg">
            <img v-lazy="item.cover?item.cover:'static/img/shichangtuipian.png'" alt="">
          </div>
          <div class="marketText">
            <div class="marketName">
              <span class="name">{{item.name}}</span>
              <span>{{item.distance}}</span>
            </div>
            <div class="marketTag">
              <van-tag type="success" plain v-for="(tag,i) in item.cate_name" :key="i">{{tag}}</van-tag>
              <!-- <van-tag type="success" plain>灯饰</van-tag> -->
            </div>
            <div class="marketPhone">
              <div class="icon"><img src="static/img/dianhua.png" alt=""></div>

              <span>{{item.contact}}</span>
            </div>
            <div class="marketAddress">
              <div class="icon"><img src="static/img/dizhi.png" alt=""></div>

              <span>{{item.address}}</span>
            </div>
            <div class="marketHot">
              <div class="icon"><img src="static/img/re.png" alt=""></div>
              <span>{{item.hot_title}}</span>
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
export default {
  props: ["newArr"],
  methods: {
    jumpOnlineMarket: function(res) {
      let str = JSON.stringify(res);
      localStorage.setItem("marketData", str);
      this.$router.push("onlineMarket");
    }
  }
};
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
      padding-bottom: 2px;
      padding-top: 4px;
      .marketImg {
        width: 40%;
        box-sizing: border-box;
        padding: 0.1rem;
        height: 2.2rem;
        img {
          width: 100%;
          height: 100%;
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
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .marketTag {
        margin: 0.1rem 0;
        font-size: 0.22rem;
      }
      .marketPhone {
        height: 0.4rem;
        line-height: 0.4rem;
        margin-bottom: 0.1rem;
        font-size: 0.24rem;
        color: #444444;
        display: flex;
        justify-content: flex-start;
        .icon {
          display: flex;
          justify-content: center;
          flex-direction: column;
          height: 100%;
          img {
            height: 0.24rem;
          }
        }
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          width: 100%;
          padding-left: 0.2rem;
          box-sizing: border-box;
        }
      }
      .marketAddress {
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;
        margin-bottom: 0.1rem;
        display: flex;
        justify-content: flex-start;
        .icon {
          display: flex;
          justify-content: center;
          flex-direction: column;
          height: 100%;
          img {
            height: 0.24rem;
          }
        }
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          width: 100%;
          padding-left: 0.2rem;
          box-sizing: border-box;
          font-size: 0.24rem;
          color: #444444;
        }
      }
      .marketHot {
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;
        display: flex;
        justify-content: flex-start;
        .icon {
          display: flex;
          justify-content: center;
          flex-direction: column;
          height: 100%;
          img {
            height: 0.24rem;
          }
        }
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          width: 100%;
          padding-left: 0.2rem;
          box-sizing: border-box;
          font-size: 0.24rem;
          color: #444444;
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


