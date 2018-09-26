<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="brandContent">
      <div class="brand" v-for="(item,i) in brandList" :key="i" @click="$router.push('brandDetail?brandId='+item.brand_id)">
        <img v-lazy="item.image" alt="">
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
        title: "品牌列表",
        img: ""
      },
      status: {
        typeStatus: ""
      },
      queryData: {
        ticket: localStorage.getItem("ticket"),
        market_id: JSON.parse(localStorage.getItem("marketData")).market_id,
        page: 1,
        page_size: 10
      },
      brandList: []
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.tool
        .request({
          url: "brand/list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.brandList = res.data.list;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  .brandContent {
    .brand {
      height: 4rem;
      width: 100%;
      margin-bottom: 0.26rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

