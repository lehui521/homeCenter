<template>
  <div class="pages" id="headerNews">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="headerNav">
      <van-tabs @click="tabClick">
        <van-tab v-for="index in 8" :title="(index==1?'推荐':(('选项 ') + index))" :key="index">
        </van-tab>
      </van-tabs>
    </div>
    <div class="newsContent">
      <div class="recommendNew" @click="$router.push('headerNewDetail')">
        <div class="leftText">
          <div class="text1">的撒旦大苏打是撒旦阿三撒撒旦撒旦撒</div>
          <div class="text2">08-19 · 4727次阅读</div>
        </div>
        <div class="rightText">
          <img src="static/img/banner1.png" alt="">
        </div>
      </div>
      <div class="newsList">
        <div class="date">
          <div class="text1">
            <span>22</span>
          </div>
          <div class="text2">
            <span>星期一</span><br/>
            <span>2018.08</span>
          </div>
        </div>
        <div class="recommendNew">
          <div class="leftText">
            <div class="text1">的撒旦大苏打是撒旦阿三撒撒旦撒旦撒</div>
            <div class="text2">08-19 · 4727次阅读</div>
          </div>
          <div class="rightText">
            <img src="static/img/banner1.png" alt="">
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
        title: "汇头条",
        img: "static/img/sousuo.png",
        text: "headerNew"
      }
    };
  },
  methods: {
    tabClick: function() {}
  }
};
</script>
<style lang="scss">
#headerNews {
  .van-tabs--line .van-tabs__wrap {
    height: 0.72rem;
  }
  .van-tab {
    line-height: 0.72rem;
    padding: 0;
    font-size: 0.26rem;
    background: #43474d;
    color: #fff;
  }
  .van-tabs__line {
    height: 0;
  }
  .van-tab--active {
    background: #1f2326;
    color: #3cb850;
  }
}
.pages {
  padding-top: 0.88rem;
  .headerNav {
    height: 0.72rem;
  }
  .newsContent {
    padding-top: 0.4rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    box-sizing: border-box;
    .recommendNew {
      border-bottom: 1px solid #979797;
      display: flex;
      justify-content: space-between;
      font-size: 0.3rem;
      padding-bottom: 0.44rem;
      margin-bottom: 0.4rem;
      .leftText {
        width: 60%;
        color: #333333;
        position: relative;
        .text2 {
          font-size: 0.24rem;
          color: #333333;
          position: absolute;
          bottom: 0;
        }
      }
      .rightText {
        width: 2rem;
        height: 1.5rem;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
    .newsList {
      .date {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 0.4rem;
        .text1 {
          font-size: 0.48rem;
          color: #333333;
          position: relative;
          width: 0.54rem;
          span {
            position: absolute;
            bottom: 0;
          }
        }
        .text2 {
          font-size: 0.2rem;
          color: #333333;
          margin-left: 0.14rem;
        }
      }
    }
  }
}
</style>


