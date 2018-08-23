<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="newTitle">
      2018年最佳演员和最佳歌手和最佳奖
    </div>
    <div class="newSource">
      <span>来源：安居客</span>
      <span class="text">发布时间：2018年07月25日</span>
    </div>
    <div class="newContent">
      大家好上的oh对于撒i的撒谎的合适的客户卡德加爱上贺卡好的借口卡客户数据肯定好看按客户的卡换卡尽快哈刷卡机的撒谎的和的
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
        title: "新闻头条",
        img: "static/img/fenxiang.png",
        text: "headerNewDetail"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.pages {
  margin-top: 0.88rem;
  background: #fff;
  .newTitle {
    font-size: 0.3rem;
    margin-bottom: 0.4rem;
    text-align: center;
    color: #333333;
    padding: 0 0.2rem;
    box-sizing: border-box;
  }
  .newSource {
    font-size: 0.22rem;
    color: #999999;
    text-align: left;
    padding: 0 0.2rem;
    box-sizing: border-box;
    .text {
      float: right;
    }
    margin-bottom: 0.28rem;
  }
  .newContent {
    font-size: 0.28rem;
    color: #666666;
    line-height: 0.5rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
  }
}
</style>


