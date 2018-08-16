<template>
  <div class="singleDragram">
    <div class="TypeList">
      <div class="type" @click="typeClick('style')">
        <div>
          <span :style="typeStatus =='style'?'color:#3cb850;':'color: #666666;'">风格</span>
          <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='style'">
          <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='style'">
        </div>
      </div>
      <div class="type" @click="typeClick('space')">
        <div>
          <span :style="typeStatus =='space'?'color:#3cb850;':'color: #666666;'">户型</span>
          <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='space'">
          <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='space'">
        </div>
      </div>
      <!-- 户型 -->
      <div class="typeContent" v-if="typeStatus=='space'">
        <div class="content local" v-for="(item,index) in localData" :key="index">
          {{item}}
        </div>
      </div>
      <!-- 风格 -->
      <div class="typeContent" v-if="typeStatus=='style'">
        <div class="content local" v-for="(item,index) in localData" :key="index">
          {{item}}
        </div>
      </div>
    </div>
    <van-list v-model="loading" :finished="finished" @load="getData" style="height:100%;" :offset="5">
      <div class="titleContent">
        <div class="floor1"></div>
        <div class="floor2">
          <div class="text1">明亮色彩美式居室</div>
          <div class="text2">
            三楼看见含打开了解决伤口撒卡没睡醒吗什么撒库拉首开纪；是 奥贾兰落地镜安呢。
          </div>
        </div>
      </div>
    </van-list>
    <!-- 模态框 -->
    <div class="mask" v-if="typeStatus!==''" @click="typeStatus=''">
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      colorData: ["yellow", "#000", "#3CB850", "#FF9100", "#3D64FF"],
      localData: ["不限", "店面", "衣柜", "酒柜", "鞋柜"],
      typeStatus: "",
      loading: false,
      finished: false,
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
    typeClick: function(res) {
      if (this.typeStatus == res) {
        return (this.typeStatus = "");
      }
      this.typeStatus = res;
    }
  }
};
</script>

<style lang="scss" scoped>
.singleDragram {
  height: 100%;
  .TypeList {
    position: fixed;
    z-index: 999;
    top: 0.9rem;
    height: 0.9rem;
    width: 100%;
    margin-top: 1px solid;
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0;
    box-sizing: border-box;
    background: #fff;
    .type {
      width: 50%;
      height: 100%;
      border-right: 1px solid #dedede;
      font-size: 0.28rem;
      color: #666666;
      text-align: center;
      div {
        width: 0.75rem;
        text-align: left;
        position: relative;
        margin: auto;
        img {
          position: absolute;
          height: 0.08rem;
          top: 0.16rem;
          right: 0;
        }
      }
    }
    .type:last-child {
      border-right: 0;
    }
  }
  .content {
    background-color: #f8f8f8;
  }
  .mask {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
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
    .floor1 {
      height: 4.2rem;
      width: 100%;
      background: #666666;
    }
    .floor2 {
      height: 2rem;
      width: 100%;
      border: 1px solid red;
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
  }
}
</style>

