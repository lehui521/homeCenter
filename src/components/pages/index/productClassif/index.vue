<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="content">
      <div class="left">
        <div :class="navIndex==i?'singleActive single':'single'" v-for="i in 20" :key="i" @click="leftNavClick(i)">
          <span>推荐</span>
        </div>
      </div>
      <div class="right">
        <div class="banner">
          <img src="static/img/banner1.png" alt="">
        </div>
        <div class="hotTitle">
          热门分类
        </div>
        <div class="rightContent">
          <div class="singleRight" v-for="i in 4" :key="i">
            <div class="singleImg">
              <img src="static/img/banner1.png" alt="">
            </div>
            <div class="singleName">瓷砖</div>
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
        title: "商品分类",
        img: ""
      },
      navIndex: 1
    };
  },
  methods: {
    leftNavClick: function(index) {
      this.navIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.pages {
  padding-top: 0;
  .content {
    position: fixed;
    height: 100%;
    width: 100%;
    padding-top: 0.88rem;
    box-sizing: border-box;
    .left {
      width: 25%;
      position: absolute;
      left: 0;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      background: #fff;
      .single {
        height: 1rem;
        text-align: center;
        font-size: 0.24rem;
        color: #666666;
        border: 1px solid #f8f8f8;
        line-height: 1rem;
      }
      .singleActive {
        background: #f8f8f8;
        color: #3cb850;
        position: relative;
      }
      .singleActive::after {
        content: "";
        display: inline-block;
        height: 0.42rem;
        width: 0.06rem;
        background: #3cb850;
        position: absolute;
        left: 0;
        top: 0;
        top: 0.29rem;
      }
    }
    .left::-webkit-scrollbar {
      display: none;
    }
    .right {
      width: 73%;
      position: absolute;
      left: 27%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      .banner {
        height: 1.8rem;
        padding-right: 0.2rem;
        box-sizing: border-box;
        margin-top: 0.2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .hotTitle {
        font-size: 0.24rem;
        color: #666666;
        letter-spacing: 0;
        padding: 0.3rem 0;
      }
      .rightContent {
        background: #fff;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .singleRight {
          width: 33%;
          margin-bottom: 0.3rem;
          box-sizing: border-box;
          padding: 0 0.1rem;
          .singleImg {
            width: 100%;
            height: 1.35rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .singleName {
            text-align: center;
            font-size: 0.26rem;
            color: #999999;
            letter-spacing: 0;
            margin-top: 0.1rem;
          }
        }
      }
    }
    .right::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>

