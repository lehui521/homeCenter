<template>
  <div class="coverDragram">
    <van-list v-model="loading" :finished="finished" @load="getData" style="height:100%;" :offset="10">
      <van-checkbox-group v-model="result" @change="changeBoxClick" style="height:100%;">
        <vueWaterfallEasy :imgsArr="imgsArr" :loadingDotCount="0">
          <template slot-scope="props">
            <div class="blank"></div>
            <div class="title">{{props.value.info}}
              <div class="imgNum">
                <img src="static/img/numImg.png" alt="">
                <span>10</span>
              </div>
            </div>
            <div class="blank"></div>
            <div class="cancel" v-if="!taoCheckStatus">
              取消
            </div>
            <van-checkbox :name="props.value" class="checkBox" v-if="taoCheckStatus">
            </van-checkbox>
          </template>
        </vueWaterfallEasy>
      </van-checkbox-group>
    </van-list>
  </div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  components: { vueWaterfallEasy },
  data: function() {
    return {
      colorData: ["yellow", "#000", "#3CB850", "#FF9100", "#3D64FF"],
      localData: ["不限", "店面", "衣柜", "酒柜", "鞋柜"],
      result: [],
      loading: false,
      finished: false,
      taoCheckStatus: false,
      imgsArr: [
        { src: "static/img/touxiang.jpg", info: "温暖趣味北欧三居" },
        {
          src: "static/img/shichangtuipian.png",
          info: "温暖趣味北欧三居"
        },
        { src: "static/img/touxiang.jpg", info: "温暖趣味北欧三居" },
        {
          src: "static/img/shichangtuipian.png",
          info: "温暖趣味北欧三居"
        },
        { src: "static/img/touxiang.jpg", info: "温暖趣味北欧三居" },
        {
          src: "static/img/shichangtuipian.png",
          info: "温暖趣味北欧三居"
        },
        { src: "static/img/touxiang.jpg", info: "温暖趣味北欧三居" },
        {
          src: "static/img/shichangtuipian.png",
          info: "温暖趣味北欧三居"
        }
      ]
    };
  },
  methods: {
    getData: function() {
      setTimeout(() => {
        this.imgsArr = this.imgsArr.concat(this.imgsArr);
        this.loading = false;
        this.finished = true;
      }, 1000);

      //   this.imgsArr = this.imgsArr.concat(this.imgsArr);
      console.log(5555);
      //   this.$refs.waterfall.waterfallOver();
    },
    updateData: function(res) {
      this.taoCheckStatus = res.checkStatus;
    },
    changeBoxClick: function() {}
  }
};
</script>

<style lang="scss" scoped>
.coverDragram {
  height: 100%;
  .content {
    background-color: #f8f8f8;
  }
  .cancel {
    width: 0.8rem;
    height: 0.32rem;
    font-size: 0.2rem;
    color: #fff;
    text-align: center;
    line-height: 0.32rem;
    border-radius: 100px;
    background: #3cb850;
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
  }
  .checkBox {
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    font-size: 0.2rem;
    z-index: 999999;
  }
  .typeContent {
    position: absolute;
    width: 100%;
    z-index: 999;
    top: 0.9rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 0.3rem;
    box-sizing: border-box;
    flex-flow: wrap;
    padding-bottom: 0.32rem;
    .local {
      background: #f4f4f4;
      color: #666666;
      font-size: 0.28rem;
    }
  }
  .title {
    padding: 0 0.2rem;
    font-size: 0.28rem;
    color: #666666;
    letter-spacing: 0;
  }
  .blank {
    height: 0.15rem;
  }
  .imgNum {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 1rem;
    right: 0.16rem;
    height: 0.38rem;
    padding: 0 0.1rem;
    border-radius: 4px;
    border: 1px solid #ffffff;
    font-size: 0.24rem;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 0.38rem;
    img {
      width: 0.28rem;
      float: left;
      margin-top: 0.05rem;
      margin-right: 0.05rem;
    }
  }
}
</style>

