<template>
  <div class="decorationCase">
    <div class="title" @click="$router.push('decorationCaseContent')">
      <img src="static/img/zhuangxiuanli.png" alt="">
      <img src="static/img/rightIcon.png" alt="" class="rightIcon">
    </div>
    <div class="banner">
      <img v-lazy="newObjBanner.image" alt="">
    </div>
    <div class="center">
      <div class="list" v-for="(item,index) in newObjList" :key="index" @click="$router.push('caseDetail')">
        <img v-lazy="item.image" alt="">
        <div class="listName">
          {{item.title}}
        </div>
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
.decorationCase {
  font-size: 0.3rem;
  margin-bottom: 0.3rem;
  .title {
    text-align: center;
    padding: 0.5rem 0.2rem;
    img {
      height: 0.28rem;
    }
    .rightIcon {
      float: right;
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
      img {
        width: 3.26rem;
        height: 2.04rem;
      }
      .listName {
        margin: 0.13rem 0;
        font-weight: 500;
        text-align: center;
        color: #333333;
        font-size: 0.28rem;
      }
    }
  }
}
</style>


