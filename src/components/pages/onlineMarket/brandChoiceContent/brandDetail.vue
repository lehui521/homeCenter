<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="banner">
      <img v-lazy="detailData.image" alt="">
    </div>
    <div class="title">
      品牌介绍
    </div>
    <div class="introductionContent" v-html="detailData.content">
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
      },
      detailData: {},
      queryData: {
        brand_id: this.$route.query.brandId
      }
    };
  },
  created: function() {
    this.getDetail();
  },
  methods: {
    getDetail: function() {
      this.tool
        .request({
          url: "brand/info",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.detailData = res.data;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  background: #fff;
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

