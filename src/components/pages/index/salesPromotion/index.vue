<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="banner">
      <img src="static/img/banner1.png" alt="">
    </div>
    <div class="grayBlank"></div>
    <tab-list :tabArr="tabArr" @tabClick="handleClickTab"></tab-list>
    <div class="marketActive" v-if="status.tabStatus=='market'">
      <div class="active">
        <div class="activeImg">
          <img src="static/img/banner1.png" alt="">
        </div>
        <div class="activeText">
          <div class="left">
            <span class="text1">我乐橱柜国庆促销</span>
            <!-- <span class="text1">|</span> -->
            <span class="text2">上海红星美凯龙asdasdasd</span>
          </div>
          <div class="right">
            <img src="static/img/rightArrow.png" alt="">
            <span class="text3">了解详情</span>
          </div>

        </div>
      </div>
    </div>
    <div class="storer" v-if="status.tabStatus=='storer'">
      <div class="grayBlank"></div>
      <div class="storeNav">
        <div class="nav storeNav-green" @click="clickNav">全部</div>
        <div class="nav" @click="clickNav">地板</div>
        <div class="nav" @click="clickNav">橱柜</div>
        <div class="nav" @click="clickNav">石材</div>
        <div class="navImg" @click="status.showNav=true">
          <img src="static/img/navDown.png" alt="">
        </div>
      </div>
      <div class="storeActive">
        <!-- 类型内容 -->
        <div class="mask" v-if="status.showNav">
          <div class="navPosition">
            <div class="floor1">
              <span>全部</span>
              <img src="static/img/navUp.png" alt="" @click="status.showNav=false">
            </div>
            <div class="floor2">
              <span>全部</span>
              <span>全部</span>
              <span>全部</span>
              <span>全部</span>
              <span>全部</span>
            </div>
          </div>
        </div>
        <div class="active">
          <div class="activeImg">
            <img src="static/img/banner1.png" alt="">
          </div>
          <div class="activeText">
            <div class="left">
              <span class="text1">我乐橱柜国庆促销</span>
              <!-- <span class="text1">|</span> -->
              <span class="text2">上海红星美凯龙asdasdasd</span>
            </div>
            <div class="right">
              <img src="static/img/rightArrow.png" alt="">
              <span class="text3">了解详情</span>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import HeaderSame from "../../../common/sameHeader.vue";
import tabList from "../../../common/tab.vue";
export default {
  components: { HeaderSame, tabList },
  data: function() {
    return {
      tabArr: [
        { code: "market", label: "市场活动" },
        { code: "storer", label: "商家活动" }
      ],
      status: {
        tabStatus: "market",
        showNav: false
      },
      headerObj: {
        title: "促销活动",
        img: "static/img/sousuo.png",
        text: "salesPromotion"
      }
    };
  },
  methods: {
    tabClick: function(res) {
      this.status.tabStatus = res;
    },
    handleClickTab: function(res) {
      console.log(res);
      this.status.tabStatus = res;
    },
    clickNav: function() {}
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  .banner {
    height: 2.4rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .marketActive {
    background: #f7f7f7;
    box-sizing: border-box;
    padding: 0.2rem;
    .active {
      .activeImg {
        height: 3.2rem;
        width: 100%;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
    .activeText {
      background: #fff;
      font-size: 0.26rem;
      padding: 0.24rem 0.19rem 0.23rem 0.33rem;
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        justify-content: space-between;
        .text1 {
          color: #333333;
          display: inline-block;
          padding-right: 0.1rem;
          border-right: 1px solid #333;
        }
        .text2 {
          font-size: 0.22rem;
          color: #999999;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 1.98rem;
          box-sizing: border-box;
          padding-top: 0.03rem;
          padding-left: 0;
          margin-left: .1rem;
        }
      }
      .right {
        .text3 {
          font-size: 0.24rem;
          color: #333333;
          float: right;
          margin-right: 0.11rem;
        }
        img {
          height: 0.2rem;
          float: right;
          margin-top: 0.06rem;
        }
      }
    }
  }
  .storer {
    .storeNav {
      height: 0.88rem;
      display: flex;
      justify-content: space-between;
      background: #fff;
      .nav {
        width: 23%;
        font-size: 0.28rem;
        color: #666666;
        letter-spacing: 0;
        line-height: 0.88rem;
        text-align: center;
      }
      .storeNav-green{
        color: #3cb850;
      }
      .navImg {
        width: 8%;
        text-align: center;
        img {
          width: 0.3rem;
          float: right;
          margin-top: 0.32rem;
          margin-right: 0.2rem;
        }
      }
    }
    .storeActive {
      background: #f7f7f7;
      box-sizing: border-box;
      padding: 0.2rem;
      position: relative;
      .mask {
        position: absolute;
        top: -0.88rem;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 99;
        width: 100%;
        height: 100%;
        .navPosition {
          background: #fff;
          width: 100%;
          padding-top: 0.16rem;
          .floor1 {
            width: 100%;
            font-size: 0.28rem;
            color: #3cb850;
            letter-spacing: 0;
            padding-left: 0.72rem;
            padding-right: 0.2rem;
            box-sizing: border-box;
            img {
              width: 0.32rem;
              float: right;
              margin-top: 0.06rem;
            }
          }
          .floor2 {
            margin-top: 0.16rem;
            font-size: 0.28rem;
            padding-right: 0.3rem;
            padding-top: 0.3rem;
            padding-left: 0.3rem;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            span {
              display: inline-block;
              height: 0.6rem;
              width: 1.5rem;
              background: #f4f4f4;
              font-size: 0.28rem;
              color: #666666;
              border-radius: 4px;
              margin-bottom: 0.3rem;
              text-align: center;
              line-height: 0.6rem;
            }
          }
        }
      }
      .active {
        .activeImg {
          height: 3.2rem;
          width: 100%;
          img {
            height: 100%;
            width: 100%;
          }
        }
      }
      .activeText {
        background: #fff;
        font-size: 0.26rem;
        padding: 0.24rem 0.19rem 0.23rem 0.33rem;
        display: flex;
        justify-content: space-between;
        .left {
          display: flex;
          justify-content: space-between;
          .text1 {
            color: #333333;
            display: inline-block;
            padding-right: 0.1rem;
            border-right: 1px solid #333;
          }
          .text2 {
            font-size: 0.22rem;
            color: #999999;
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 1.98rem;
            box-sizing: border-box;
            padding-top: 0.03rem;
            padding-left: 0;
            margin-left: .1rem;
          }
        }
        .right {
          .text3 {
            font-size: 0.24rem;
            color: #333333;
            float: right;
            margin-right: 0.11rem;
          }
          img {
            height: 0.2rem;
            float: right;
            margin-top: 0.06rem;
          }
        }
      }
    }
  }
}
</style>


