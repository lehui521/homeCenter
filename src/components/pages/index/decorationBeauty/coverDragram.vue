<template>
  <div class="coverDragram">
    <div class="TypeList">
      <div class="type" @click="typeClick('style')">
        <div>
          <span :style="typeStatus =='style'?'color:#3cb850;':'color: #666666;'">风格</span>
          <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='style'">
          <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='style'">
        </div>
      </div>
      <div class="type" @click="typeClick('door')">
        <div>
          <span :style="typeStatus =='door'?'color:#3cb850;':'color: #666666;'">户型</span>
          <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='door'">
          <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='door'">
        </div>
      </div>
      <div class="type" @click="typeClick('local')">
        <div>
          <span :style="typeStatus =='local'?'color:#3cb850;':'color: #666666;'">面积</span>
          <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='local'">
          <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='local'">
        </div>
      </div>
      <div class="type" @click="typeClick('color')">
        <div>
          <span :style="typeStatus =='color'?'color:#3cb850;':'color: #666666;'">颜色</span>
          <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='color'">
          <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='color'">
        </div>
      </div>
      <!-- 颜色 -->
      <div class="typeContent" v-if="typeStatus=='color'">
        <div class="content" :style="'background-color:'+item" v-for="(item,index) in colorData" :key="index"></div>
      </div>
      <!-- 局部 -->
      <div class="typeContent" v-if="typeStatus=='local'">
        <div class="content local" v-for="(item,index) in localData" :key="index">
          {{item}}
        </div>
      </div>
      <!-- 户型 -->
      <div class="typeContent" v-if="typeStatus=='door'">
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
    <van-list v-model="loading" :finished="finished" @load="getData" style="height:100%;" :offset="10">
      <vueWaterfallEasy :imgsArr="imgsArr" :loadingDotCount="0" class="singleCover" :mobileGap="16">
        <template slot-scope="props">
          <div class="blank"></div>
          <div class="title">{{props.value.info}}
            <div class="imgNum">
              <div class="imgN">
                <img src="static/img/numImg.png" alt="">
              </div>
              <span>10</span>
            </div>
          </div>
          <div class="blank"></div>
        </template>
      </vueWaterfallEasy>
    </van-list>
    <!-- 模态框 -->
    <div class="mask" v-if="typeStatus!==''" @click="typeStatus=''">
    </div>
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
      typeStatus: "",
      loading: false,
      finished: false,
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
.coverDragram {
  height: 100%;
  padding-top: 0.2rem;
  background: #f8f8f8;
  box-sizing: border-box;
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
      width: 25%;
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
      border-radius: 0.08rem;
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
    right: 0.3rem;
    height: 0.38rem;
    padding: 0 0.03rem;
    border-radius: 1px;
    font-size: 0.23rem;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 0.38rem;
    .imgN {
      width: 0.28rem;
      float: left;
      margin-right: 0.05rem;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    img {
      width: 0.28rem;
    }
  }
}
</style>

