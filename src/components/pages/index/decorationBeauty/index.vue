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
    <div class="contentTotal">
      <singleD v-if="tabActive=='dan'" :styleSingle="singleType[0].list" :spaceSingle="singleType[1].list" :localSingle="singleType[2].list" :colorSingle="singleType[3].list"></singleD>
      <coverD v-if="tabActive=='tao'" :styleCover="coverType[0].list" :houseCover="coverType[2].list" :sizeCover="coverType[3].list" :colorCover="coverType[1].list"></coverD>
      <specialT v-if="tabActive=='zhuan'" :styleSpecial="specialType[0].list" :houseSpecial="specialType[1].list"></specialT>
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
      tabActive: "dan",
      singleType: [{ list: [] }, { list: [] }, { list: [] }, { list: [] }],
      coverType: [{ list: [] }, { list: [] }, { list: [] }, { list: [] }],
      specialType: [{ list: [] }, { list: [] }]
    };
  },
  created: function() {
    this.getType();
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
    },
    getType: function() {
      this.tool
        .request({
          url: "picture/category",
          method: "post"
        })
        .then(res => {
          if (res.status == 200) {
            this.singleType = res.data[0].tags; //单图
            this.coverType = res.data[1].tags; //套图
            this.specialType = res.data[2].tags;
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.pages {
  background: #fff;
  height: 100%;
  padding-top: 1.8rem;
  box-sizing: border-box;
  .header {
    height: 0.88rem;
    border-bottom: 1px solid #e5e5e5;
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
  .contentTotal {
    height: 100%;
    box-sizing: border-box;
  }
}
</style>

