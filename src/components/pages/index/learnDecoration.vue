<template>
  <div class="learnDecoration">
    <div class="title" @click="$router.push('decorationEncyclopedia')">
      <img src="static/img/xuezhuangxiu.png" alt="">
      <img src="static/img/rightIcon.png" alt="" class="rightIcon">
    </div>
    <div class="banner">
      <img v-lazy="newObjBanner.image" alt="">
    </div>
    <div class="center">
      <div class="list" v-for="(item,index) in newObjList" :key="index">
        <img v-lazy="item.image" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["newObjBanner", "newObjList"]
};
</script>
<style lang="scss" scoped>
.learnDecoration {
  font-size: 0.25rem;
  margin-bottom: 0.2rem;
  .title {
    text-align: center;
    padding: 0.36rem 0;
    position: relative;
    img {
      height: 0.28rem;
    }
    .rightIcon {
      position: absolute;
      top: 0.38rem;
      height: 0.24rem;
      right: 0.3rem;
    }
  }
  .banner {
    height: 2.6rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .center {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 0.2rem;
    .list {
      width: 3.46rem;
      padding: 0.1rem;
      box-sizing: border-box;
      box-shadow: #dedede 1px 1px 4px;
      margin-top: 0.2rem;
      border: 1px solid #efefef;
      height: 2.24rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>


