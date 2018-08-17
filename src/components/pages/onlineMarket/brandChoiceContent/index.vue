<template>
    <div class="pages">
        <HeaderSame :headerObj="headerObj"></HeaderSame>
        <div class="brandContent">
            <div class="brand" v-for="i in 3" :key="i" @click="$router.push('brandDetail')">
                <img src="static/img/banner1.png" alt="">
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
      }
    };
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

