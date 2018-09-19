<template>
  <div class="videoLearn">
    <div class="title" @click="$router.push('videoLearnContent')">
      <img src="static/img/shipinxuezhuangxiu.png" alt="">
      <img src="static/img/rightIcon.png" alt="" class="rightIcon">
    </div>
    <div class="content">
      <div class="video" v-for="(item,index) in list" :key="index">
        <div class="videoContent">
          <img v-lazy="item.img" alt="" style="width:100%;height:100%;">
          <img src="static/img/bofang.png" alt="" class="videoButton" @click="showVideoHandle(item)">
        </div>
        <div class="videoText">{{item.title}}</div>
        <div class="videoHeart">
          <div><img src="static/img/smallBofang.png" alt=""></div>
          <div>
            <span>{{item.view_total}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹出层 -->

  </div>
</template>
<script>
export default {
  props: ["list"],
  data: function() {
    return {};
  },
  methods: {
    showVideoHandle: function(res) {
      this.$router.push("video?url=" + res.play_url);
    }
  }
};
</script>
<style lang="scss" scoped>
.videoLearn {
  font-size: 0.3rem;
  margin-bottom: 0.3rem;
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
    .video {
      border: 1px solid #efefef;
      box-shadow: #efefef 1px 1px 5px;
      padding-bottom: 0.2rem;
      .videoContent {
        height: 4.24rem;
        position: relative;
        .videoButton {
          width: 0.95rem;
          height: 0.95rem;
          position: absolute;
          top: 1.64rem;
          left: 44%;
        }
      }
      .videoText {
        font-size: 0.3rem;
        color: #333333;
        padding-left: 0.38rem;
        box-sizing: border-box;
        margin-top: 0.2rem;
      }
      .videoHeart {
        padding-left: 0.38rem;
        box-sizing: border-box;
        font-size: 0.24rem;
        color: #999999;
        margin-top: 0.1rem;
        display: flex;
        justify-content: flex-start;
        img {
          height: 0.24rem;
          margin-right: 0.1rem;
        }
      }
    }
  }
}
</style>


