<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="newTitle">
      {{newDataDetail.title}}
    </div>
    <div class="newSource">
      <span>来源：安居客</span>
      <span class="text">发布时间：{{newDataDetail.update_time}}</span>
    </div>
    <div class="newContent" v-html="newDataDetail.content">
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
        img: "static/img/fenxiang.png",
        text: "headerNewDetail",
        type: "H5"
      },
      newDataDetail: {}
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.tool
        .request({
          url: "news/info",
          method: "post",
          params: {
            news_id: this.$route.query.newId
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.newDataDetail = res.data;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  margin-top: 0.88rem;
  background: #fff;
  padding-top: 0;
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
    width: 100%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
}
</style>


