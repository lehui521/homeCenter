<template>
  <div class="pages" id="boutiqueShop">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="banner">
      <img src="static/img/banner1.png" alt="">
    </div>
    <div class="headerNav">
      <div class="nav" v-for="i in 10" :key="i">
        <div class="img"></div>
        <div class="text">瓷砖</div>
      </div>
    </div>
    <div class="typeList">
      <div class="left" @click="typeClick('type')">
        <span :style="status.typeStatus=='type'?'color:#3CB850;':''">类目</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='type'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
      <div class="right" @click="typeClick('sort')">
        <span :style="status.typeStatus=='sort'?'color:#3CB850;':''">排序</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='sort'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
    </div>
    <div class="storeList">
      <!-- 类型的内容 -->
      <div class="typeMask" v-if="status.typeStatus!==''">
        <div class="typeContent" v-if="status.typeStatus=='type'">
          <div class="currentType">
            全部
          </div>
          <div class="typeTitle">建材</div>
          <div class="typeMore">
            <div class="single">瓷砖</div>
            <div class="single">瓷砖</div>
            <div class="single">瓷砖</div>
            <div class="single">瓷砖</div>
            <div class="single">瓷砖</div>
          </div>
        </div>
        <div class="sortContent" v-if="status.typeStatus=='sort'">
          <div class="floor1 activeSort">默认排序</div>
          <div class="floor1">关注最多</div>
          <div class="floor1">距离最近</div>
        </div>
      </div>
      <div class="market" v-for="(item,index) in [1,2,3]" :key="index">
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
            <span>15252111236</span>
          </div>
          <div class="marketAddress">
            <span>上海市徐汇区凯旋路552号</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderSame from "../../../common/sameHeader.vue";
export default {
  components: { HeaderSame },
  data: function() {
    return {
      headerObj: {
        title: "精品店铺",
        img: "static/img/sousuo.png",
        text: "boutiqueShop"
      },
      status: {
        typeStatus: "",
        showTypeStatus: false
      }
    };
  },
  methods: {
    typeClick: function(res) {
      this.status.showTypeStatus = true;
      if (this.status.typeStatus == res) {
        return (this.status.typeStatus = "");
      }
      this.status.typeStatus = res;
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  background: #fff;
  .banner {
    height: 3.46rem;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .headerNav {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: auto;
    .nav {
      width: 20%;
      margin-top: 0.18rem;
      margin-bottom: 0.18rem;
      .img {
        width: 0.96rem;
        height: 0.96rem;
        border-radius: 50%;
        background: #666;
        margin: auto;
      }
      .text {
        font-size: 0.26rem;
        color: #999999;
        letter-spacing: 0;
        text-align: center;
        margin-top: 0.12rem;
      }
    }
  }
  .typeList {
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
    height: 0.9rem;
    margin-top: 0.3rem;
    font-size: 0.28rem;
    color: #666666;
    letter-spacing: 0;
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 0.21rem;
    box-sizing: border-box;
    line-height: 0.48rem;
    div:first-child {
      border-right: 1px solid #d5d5d5;
    }
    .left {
      width: 50%;
      position: relative;
      img {
        width: 0.14rem;
        position: absolute;
        top: 0.2rem;
      }
      span {
        margin-right: 0.1rem;
      }
    }
    .right {
      width: 50%;
      position: relative;
      img {
        width: 0.14rem;
        position: absolute;
        top: 0.2rem;
      }
      span {
        margin-right: 0.1rem;
      }
    }
  }
  .storeList {
    position: relative;
    .typeMask {
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      z-index: 9999;
      .typeContent {
        background: #fff;
        width: 100%;
        padding: 0.31rem 0.3rem;
        box-sizing: border-box;
        .currentType {
          width: 1.5rem;
          height: 0.6rem;
          border: 1px solid #3cb850;
          border-radius: 0.08rem;
          color: #3cb850;
          font-size: 0.28rem;
          text-align: center;
          line-height: 0.6rem;
        }
        .typeTitle {
          height: 0.72rem;
          line-height: 0.72rem;
          text-align: left;
          font-size: 0.3rem;
          color: #333333;
          letter-spacing: 0;
          margin-top: 0.3rem;
        }
        .typeMore {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .single {
            width: 1.5rem;
            height: 0.6rem;
            background: #f4f4f4;
            border-radius: 0.08rem;
            color: #666666;
            font-size: 0.28rem;
            text-align: center;
            line-height: 0.6rem;
            margin-top: 0.3rem;
          }
        }
      }
      .sortContent {
        background: #fff;
        width: 100%;
        .floor1 {
          height: 0.74rem;
          width: 100%;
          border-bottom: 1px solid #d5d5d5;
          line-height: 0.74rem;
          text-align: center;
          font-size: 0.24rem;
        }
        .activeSort {
          color: #3cb850;
        }
      }
    }
    .market {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #d5d5d5;
      padding: 15px 8px;
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
        // margin-bottom: 0.1rem;
        font-size: 0.24rem;
        color: #444444;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          width: 100%;
          box-sizing: border-box;
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
          box-sizing: border-box;
          font-size: 0.24rem;
          color: #444444;
        }
      }
    }
  }
}
</style>


