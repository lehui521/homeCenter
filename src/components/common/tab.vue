<template>
    <div>
        <div class="tabList">
            <div class="tab" @click="tabClick(item.code,index)" v-for="(item,index) in tabArr" :key="index" :style="index==tabIndex?'color: #333333;':''">{{item.label}}</div>
            <div class="line" :style="lineStyles"></div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["tabArr"],
  data: function() {
    return {
      tabIndex: 0,
      lineStyles: "",
      tabwidth: "",
      translateWidth: 0
    };
  },
  mounted: function() {
    this.tabwidth = (window.screen.width - 20) / this.tabArr.length;
    this.lineStyles = "left:" + parseInt((this.tabwidth - 30) / 2 + 10) + "px;";
  },
  methods: {
    tabClick: function(res, index) {
      let width = (window.screen.width - 20) / this.tabArr.length * index;
      this.lineStyles =
        "left:" +
        parseInt((this.tabwidth - 30) / 2 + 10) +
        "px;" +
        "transform:translateX(" +
        width +
        "px);";
      this.tabIndex = index;
      this.$emit("tabClick", res);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabList {
  font-size: 0.3rem;
  color: #666666;
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
  height: 0.72rem;
  box-sizing: border-box;
  position: relative;
  background: #fff;
  .tab {
    width: 100%;
    text-align: center;
    line-height: 0.72rem;
  }
  .line {
    height: 0.05rem;
    background: #50bf82;
    border-radius: 100px;
    width: 30px;
    position: absolute;
    bottom: 0;
    left: 10px;
    transition: all 0.3s ease-in-out;
  }
}
</style>

