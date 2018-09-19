<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="content">
      <div class="cntentImg"></div>
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
        title: "商家活动",
        type: "H5"
      }
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.tool
        .request({
          url: "v3_activity/detail",
          method: "post",
          params: {
            activity_id: this.$route.query.id
          }
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  .content {
    width: 100%;
    .cntentImg {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>


