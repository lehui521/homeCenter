<template>
  <div class="pages">
    <header class="header">
      <div class="tabList">
        <div class="line" id="line" :style="tabStyle"></div>
        <div class="tab" @click="tabClick('dan')">单图</div>
        <div class="tab" @click="tabClick('tao')">套图</div>
        <div class="tab" @click="tabClick('zhuan')">专题</div>
      </div>
      <div class="back">
        <img src="static/img/leftArrow.png" alt="" class="icon" @click="$router.go(-1)">
      </div>
    </header>
    <div class="content">
      <singleD v-if="tabActive=='dan'"></singleD>
      <coverD v-if="tabActive=='tao'"></coverD>
      <specialT v-if="tabActive=='zhuan'"></specialT>
    </div>
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
      tabActive: "dan"
    };
  },
  methods: {
    tabClick: function(res) {
      this.tabActive = res;
      if (res == "dan") {
        this.tabStyle = "transform: translateX(0);";
      } else if (res == "tao") {
        this.tabStyle = "transform: translateX(1.96rem);";
      } else if (res == "zhuan") {
        this.tabStyle = "transform: translateX(3.91rem);";
      }
      //   this.tabActive = res;
    }
  }
};
</script>

<style lang="scss" scoped>
.pages {
  background: #fff;
  height: 100%;
  padding-top: 1.8rem;
  .header {
    height: 0.88rem;
    border-bottom: 1px solid #d5d5d5;
    position: fixed;
    top: 0;
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
        bottom: 0;
      }
    }
    .back {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .icon {
        height: 0.32rem;
        margin-left: 0.32rem;
      }
    }
  }
  .content {
    height: 100%;
  }
}
</style>

