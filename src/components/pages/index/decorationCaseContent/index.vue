<template>
  <div class="pages">
    <header class="header">
      <div class="tabList">
        <div class="line" id="line" :style="tabStyle"></div>
        <div class="tab" @click="tabClick('member')">设计师</div>
        <div class="tab" @click="tabClick('case')">案例</div>
      </div>
      <div class="back">
        <img src="static/img/leftArrow.png" alt="" class="icon" @click="$router.go(-1)">
      </div>
    </header>
    <caseD v-if="status.typeStatus=='case'"></caseD>
    <designerD v-if="status.typeStatus=='member'"></designerD>
  </div>
</template>
<script>
import caseD from "./case.vue";
import designerD from "./designer.vue";
export default {
  components: { caseD, designerD },
  data: function() {
    return {
      tabStyle: "transform: translateX(0);",
      status: {
        typeStatus: "member",
        showTypeStatus: false
      }
    };
  },
  methods: {
    tabClick: function(res) {
      this.status.typeStatus = res;
      if (res == "member") {
        this.tabStyle = "transform: translateX(0);";
      } else if (res == "case") {
        this.tabStyle = "transform: translateX(2.84rem);";
      }
      //   this.tabActive = res;
    },
    typeClick: function(res) {
      this.status.showTypeStatus = true;
      if (this.status.typeStatus == res) {
        return (this.status.typeStatus = "");
      }
      this.status.typeStatus = res;
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
}
.header {
  height: 0.88rem;
  border-bottom: 1px solid #d5d5d5;
  position: fixed;
  top: 0;
  z-index: 999;
  background: #fff;
  width: 100%;
  .tabList {
    width: 48%;
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
      left: 0.17rem;
    }
  }
  .back {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    .icon {
      height: 0.32rem;
      margin-left: 0.32rem;
      margin-bottom: 0.28rem;
    }
  }
}
</style>


