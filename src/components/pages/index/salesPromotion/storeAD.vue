<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="content">
      <div class="cntentImg">
        <img v-lazy="item.image" alt="" v-for="(item,i) in storeA" :key="i">
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
        title: "商家活动",
        type: "H5"
      },
      storeA: []
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
          if (res.status == 200) {
            this.storeA = res.data.list;
          }
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


