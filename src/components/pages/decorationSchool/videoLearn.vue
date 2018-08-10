<template>
    <div class="videoLearn">
        <div class="title">
            <img src="static/img/shipinxuezhuangxiu.png" alt="">
            <img src="static/img/rightIcon.png" alt="" class="rightIcon">
        </div>
        <div class="content">
            <div class="video" v-for="(item,index) in [1,2]" :key="index">
                <div class="videoContent">
                    <video src="static/img/1.mp4" width="100%" height="100%"></video>
                    <img src="static/img/bofang.png" alt="" class="videoButton" @click="showVideoHandle">
                </div>
                <div class="videoText">帮你搞定小卧室装修烦恼</div>
                <div class="videoHeart">
                    <img src="static/img/smallBofang.png" alt="">
                    <span>555</span>
                </div>
            </div>
        </div>
        <!-- 弹出层 -->
        <div v-show="showVideo" class="mask">
            <span class="closeIcon" @click="showVideo = false;">X</span>
            <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions" v-if="showVideo" style="height:100%;"></video-player>
        </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      showVideo: false,
      playerOptions: {
        playbackRates: [], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src: "static/img/1.mp4" //url地址
          }
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  methods: {
    showVideoHandle: function(res) {
      this.showVideo = true;
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
      margin-bottom: 0.2rem;
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
        img {
          height: 0.24rem;
          float: left;
          margin-top: 0.01rem;
          margin-right: 0.1rem;
        }
      }
    }
  }
  .mask {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 99999;
    .closeIcon {
      position: absolute;
      top: 0.2rem;
      left: 0.2rem;
      color: white;
      font-size: 0.5rem;
      z-index: 999999;
    }
  }
}
</style>


