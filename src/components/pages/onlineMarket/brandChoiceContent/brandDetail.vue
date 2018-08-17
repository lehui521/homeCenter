<template>
    <div class="pages">
        <HeaderSame :headerObj="headerObj"></HeaderSame>
        <div class="banner">
            <img src="static/img/banner1.png" alt="">
        </div>
        <div class="title">
            品牌介绍
        </div>
        <div class="introductionContent">
            都好看啊几节课 科纳克里看了看你可怜你 的美女 上啊看是 安静的空间内
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
        title: "品牌详情",
        img: "static/img/fenxiang.png",
        text: "brandDetailShare"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  .banner {
    height: 4rem;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .title {
    font-size: 0.3rem;
    color: #666666;
    height: 0.5rem;
    width: 2rem;
    border: 1px solid #38ba50;
    line-height: 0.5rem;
    text-align: center;
    margin: auto;
    margin-top: 0.4rem;
    margin-bottom: 0.2rem;
  }
  .introductionContent {
    font-size: 0.26rem;
    color: #999999;
    padding: 0 0.26rem;
    box-sizing: border-box;
  }
}
</style>

