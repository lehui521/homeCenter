<template>
  <div class="lookPictureLearn">
    <div class="title" @click="$router.push('decorationBeauty')">
      <img src="static/img/kantuxuesheji.png" alt="">
      <img src="static/img/rightIcon.png" alt="" class="rightIcon">
    </div>
    <div class="content">
      <div class="list" v-for="(item,index) in list" :key="index" @click="singleClick(item)">
        <img v-lazy="item.cover" alt="">
        <div class="text">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { ImagePreview } from "vant";
export default {
  props: ["list"],
  methods: {
    singleClick: function(res) {
      let arr = [];
      arr.push(res.cover);
      ImagePreview(arr);
    }
  }
};
</script>
<style lang="scss" scoped>
.lookPictureLearn {
  font-size: 0.3rem;
  .title {
    text-align: center;
    padding: 0.36rem 0.2rem;
    img {
      height: 0.28rem;
    }
    .rightIcon {
      float: right;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    box-sizing: border-box;
    background: #f8f8f8;
    padding: 0.2rem;
    .list {
      width: 3.47rem;
      border: 1px solid #efefef;
      padding: 0.1rem;
      box-sizing: border-box;
      box-shadow: #efefef 0 2px 5px 0;
      margin-bottom: 0.2rem;
      background: #fff;
      img {
        width: 100%;
        height: 2.04rem;
      }
      .text {
        text-align: center;
        font-size: 0.26rem;
        color: #666666;
        letter-spacing: 0;
        margin-top: 0.06rem;
      }
    }
  }
}
</style>


