<template>
  <div class="pages">
    <div class="header">
      <span>百科详情</span>
      <img :src="showStar==200?'static/img/greenStar.png':'static/img/grayStar.png'" alt="" class="star" @click="clickCollection(showStar)">
      <img src="static/img/fenxiangB.png" alt="" class="share">
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
    </div>
    <div class="title">
      {{detailData.title}}
    </div>
    <div class="detailContent" v-html="detailData.content">
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      detailData: {},
      showStar: -1
    };
  },
  created: function() {
    this.getData();
    if (localStorage.getItem("ticket")) {
      this.judgeCollection();
    }
  },
  methods: {
    clickCollection: function(num) {
      if (!localStorage.getItem("ticket")) {
        return this.$toast({
          type: "text",
          message: "请登录"
        });
      }
      this.tool
        .request({
          url: num == -1 ? "favorite/add" : num == 200 ? "favorite/remove" : "",
          method: "post",
          params: {
            type_id: this.$route.query.materialId,
            type: "material",
            ticket: localStorage.getItem("ticket")
          }
        })
        .then(res => {
          if (res.status == 200) {
            setTimeout(() => {
              this.$toast({
                type: "text",
                message: num == -1 ? "收藏成功" : "取消成功"
              });
            }, 200);
            this.judgeCollection();
          }
        });
    },
    getData: function() {
      this.tool
        .request({
          url: "material/info",
          method: "post",
          params: {
            material_id: this.$route.query.materialId
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.detailData = res.data;
          }
        });
    },
    judgeCollection: function() {
      this.tool
        .request({
          url: "favorite/status",
          params: {
            type: "material",
            type_id: this.$route.query.materialId,
            ticket: localStorage.getItem("ticket")
          }
        })
        .then(res => {
          this.showStar = res.status;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  background: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  top: 0;
  left: 0;
  .header {
    height: 0.88rem;
    position: fixed;
    width: 100%;
    text-align: center;
    font-size: 0.36rem;
    color: #333333;
    line-height: 0.88rem;
    top: 0;
    background: #fff;
    .share {
      position: absolute;
      right: 0.4rem;
      height: 0.33rem;
      top: 0.27rem;
    }
    .star {
      position: absolute;
      right: 1.1rem;
      height: 0.33rem;
      top: 0.27rem;
    }
    .back {
      height: 0.32rem;
      position: absolute;
      top: 0.28rem;
      left: 0.3rem;
    }
  }
  .title {
    font-size: 0.3rem;
    color: #333333;
    text-align: center;
    padding: 0.25rem 0;
    border-bottom: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;
    background: #fff;
  }
  .detailContent {
    font-size: 0.26rem;
    color: #999999;
    letter-spacing: 0;
    padding: 0.25rem 0.15rem;
    box-sizing: border-box;
  }
}
</style>

