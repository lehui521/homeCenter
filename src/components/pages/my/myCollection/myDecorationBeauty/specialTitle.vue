<template>
  <div class="singleDragram">
    <van-list v-model="loading" :finished="finished" @load="getData" style="height:100%;" :offset="5">
      <van-checkbox-group v-model="result" @change="changeBoxClick" style="height:100%;">
        <div class="titleContent" v-for="i in [1,2,3]" :key="i">
          <div class="floor1"></div>
          <div class="floor2">
            <div class="text1">明亮色彩美式居室</div>
            <div class="text2">
              三楼看见含打开了解决伤口撒卡没睡醒吗什么撒库拉首开纪；是 奥贾兰落地镜安呢。
            </div>
          </div>
          <div class="cancel" v-if="!zhuanCheckStatus">
            取消
          </div>
          <van-checkbox :name="i" class="checkBox" v-if="zhuanCheckStatus">
          </van-checkbox>
        </div>
      </van-checkbox-group>
    </van-list>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      colorData: ["yellow", "#000", "#3CB850", "#FF9100", "#3D64FF"],
      localData: ["不限", "店面", "衣柜", "酒柜", "鞋柜"],
      loading: false,
      finished: false,
      zhuanCheckStatus: false,
      result: [],
      imgsArr: [
        { src: "static/img/touxiang.jpg" },
        {
          src: "static/img/shichangtuipian.png"
        },
        { src: "static/img/touxiang.jpg" },
        {
          src: "static/img/shichangtuipian.png"
        },
        { src: "static/img/touxiang.jpg" },
        {
          src: "static/img/shichangtuipian.png"
        },
        { src: "static/img/touxiang.jpg" },
        {
          src: "static/img/shichangtuipian.png"
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
    changeBoxClick: function() {},
    updateData: function(res) {
      this.zhuanCheckStatus = res.checkStatus;
    }
  }
};
</script>

<style lang="scss" scoped>
.singleDragram {
  height: 100%;
  .content {
    background-color: #f8f8f8;
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
    .content {
      height: 0.6rem;
      width: 1.5rem;
      border-radius: 8px;
      margin-top: 0.32rem;
      text-align: center;
      line-height: 0.6rem;
    }
    .local {
      background: #f4f4f4;
      color: #666666;
      font-size: 0.28rem;
    }
  }
  .titleContent {
    height: 6.2rem;
    position: relative;
    .floor1 {
      height: 4.2rem;
      width: 100%;
      background: #666666;
    }
    .floor2 {
      height: 2rem;
      width: 100%;
      box-sizing: border-box;
      padding-top: 0.3rem;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      .text1 {
        font-size: 0.28rem;
        color: #666666;
        letter-spacing: 0;
      }
      .text2 {
        font-size: 0.24rem;
        color: #999999;
        letter-spacing: 0;
        margin-top: 0.1rem;
      }
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
    }
  }
}
</style>

