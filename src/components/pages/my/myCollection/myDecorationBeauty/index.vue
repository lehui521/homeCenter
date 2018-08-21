<template>
  <div :class="checkStatus?'pages pb-1 ':'pages'">
    <div class="header">
      <span>收藏装修美图</span>
      <span class="share" @click="checkAllClick('all')" v-if="!status.checkStatus">全选</span>
      <span class="share" @click="checkAllClick('cancel')" v-if="status.checkStatus">取消</span>
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
    </div>
    <header class="headerNav">
      <div class="tabList">
        <div class="line" id="line" :style="tabStyle"></div>
        <div class="tab" @click="tabClick('dan')">单图</div>
        <div class="tab" @click="tabClick('tao')">套图</div>
        <div class="tab" @click="tabClick('zhuan')">专题</div>
      </div>
    </header>
    <div class="content">
      <singleD v-if="status.tabActive=='dan'" ref="singleD"></singleD>
      <coverD v-if="status.tabActive=='tao'" ref="coverD"></coverD>
      <specialT v-if="status.tabActive=='zhuan'" ref="specialT"></specialT>
    </div>
    <div class="cancelFocus" :style="status.checkStatus?'height:1rem':''">取消收藏</div>
  </div>
</template>
<script>
import singleD from "./singleDragram.vue";
//套图
import coverD from "./coverDragram.vue";
//专题
import specialT from "./specialTitle.vue";
export default {
  components: { singleD, coverD, specialT },
  data: function() {
    return {
      tabStyle: "transform: translateX(0);",
      result: [],
      status: {
        checkStatus: false,
        tabActive: "dan"
      }
    };
  },
  methods: {
    tabClick: function(res) {
      this.status.tabActive = res;
      this.status.checkStatus = false;
      if (res == "dan") {
        this.tabStyle = "transform: translateX(0);";
      } else if (res == "tao") {
        this.tabStyle = "transform: translateX(1.96rem);";
      } else if (res == "zhuan") {
        this.tabStyle = "transform: translateX(3.91rem);";
      }
      //   this.tabActive = res;
    },
    checkChange: function(res) {
      console.log(res);
    },
    checkAllClick: function(res) {
      if (res == "all") {
        this.status.checkStatus = true;
        this.result = [1, 2, 3];
      } else if (res == "cancel") {
        this.status.checkStatus = false;
      }
      if (this.status.tabActive == "dan") {
        this.$refs.singleD.updateData(this.status);
      } else if (this.status.tabActive == "tao") {
        this.$refs.coverD.updateData(this.status);
      } else if (this.status.tabActive == "zhuan") {
        this.$refs.specialT.updateData(this.status);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pages {
  background: #fff;
  height: 100%;
  padding-top: 1.76rem;
  .header {
    height: 0.88rem;
    position: fixed;
    width: 100%;
    text-align: center;
    font-size: 0.36rem;
    color: #333333;
    line-height: 0.88rem;
    top: 0;
    background: #fff;
    border-bottom: 1px solid #d5d5d5;
    z-index: 999;
    .share {
      position: absolute;
      right: 0.4rem;
      height: 0.33rem;
      top: 0.27rem;
      font-size: 0.3rem;
      color: #666666;
      letter-spacing: 0;
      line-height: 0.33rem;
    }
    .back {
      height: 0.32rem;
      position: absolute;
      top: 0.28rem;
      left: 0.3rem;
    }
  }
  .headerNav {
    height: 0.88rem;
    border-bottom: 1px solid #d5d5d5;
    position: fixed;
    top: 0.88rem;
    z-index: 999;
    background: #fff;
    width: 100%;
    .tabList {
      width: 60%;
      margin: auto;
      height: 100%;
      display: flex;
      justify-content: space-between;
      position: relative;
      .tab {
        font-size: 0.3rem;
        height: 100%;
        line-height: 0.88rem;
      }
      .line {
        height: 2px;
        width: 0.6rem;
        background: #50bf82;
        border-radius: 100px;
        position: absolute;
        bottom: -1px;
        transition: all 0.3s ease-in-out;
        z-index: 999;
      }
    }
  }
  .content {
    height: 100%;
  }
  .cancelFocus {
    width: 100%;
    height: 0;
    text-align: center;
    font-size: 0.36rem;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 1rem;
    background: #38ba50;
    position: fixed;
    bottom: 0;
    left: 0;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }
}
</style>

