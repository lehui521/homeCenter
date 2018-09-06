<template>
  <div class="pages" id="decorationEncyclopedia">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="headerNav">
      <van-tabs :line-width="50">
        <van-tab v-for="index in 8" :title="'装修百科' + index" :key="index">
        </van-tab>
      </van-tabs>
    </div>
    <div class="typeNav">
      <van-tabs>
        <van-tab v-for="index in 8" :title="'厨房装修' + index" :key="index">
        </van-tab>
      </van-tabs>
    </div>
    <div class="content">
      <div class="single" @click="$router.push('decorationEncyclopediaDetail')">
        <div class="singleLeft">
          <div class="leftText1">
            集成墙饰多少钱一平方
          </div>
          <div class="singleText2">
            <span>2017-12-19</span>
            <img src="static/img/yan.png" alt="">
            <span>154</span>
          </div>
        </div>
        <div class="singleRight">
          <img src="static/img/banner1.png" alt="">
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
        title: "装修百科",
        img: ""
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 2.64rem;
  background: #fff;
  .headerNav {
    height: 0.88rem;
    position: fixed;
    top: 0.88rem;
    width: 100%;
    left: 0;
    box-sizing: border-box;
  }
  .typeNav {
    height: 0.88rem;
    position: fixed;
    top: 1.76rem;
    width: 100%;
    left: 0;
    border-top: 1px solid #979797;
  }
  .content {
    .single {
      display: flex;
      justify-content: flex-start;
      padding: 0.2rem 0.19rem;
      box-sizing: border-box;
      border-bottom: 1px solid #979797;
      .singleLeft {
        width: 100%;
        position: relative;
        .leftText1 {
          font-size: 0.3rem;
          color: #333333;
          letter-spacing: 0;
          margin-top: 0.2rem;
        }
        .singleText2 {
          font-size: 0.26rem;
          color: #999999;
          letter-spacing: 0;
          position: absolute;
          bottom: 0;
          left: 0;
          img {
            height: 0.2rem;
            margin-left: 0.28rem;
            margin-right: 0.1rem;
          }
        }
      }
      .singleRight {
        width: 2.5rem;
        height: 1.7rem;
        img {
          width: 2.5rem;
          height: 1.7rem;
        }
      }
    }
  }
}
</style>


