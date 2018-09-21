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
          <span :style="typeStatus =='space'?'color:#3cb850;':'color: #666666;'">空间</span>
          <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='space'">
          <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='space'">
        </div>
      </div>
      <div class="type" @click="typeClick('local')">
        <div>
          <span :style="typeStatus =='local'?'color:#3cb850;':'color: #666666;'">局部</span>
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
        <div :class="queryData.color==item.id?'contentActive content':'content'" :style="'background-color:#'+item.content" v-for="(item,index) in colorSingle" :key="index" @click="typeSelectClickColor(item,'color')">
          <span v-if="item.content==''">{{item.name}}</span>
        </div>
      </div>
      <!-- 局部 -->
      <div class="typeContent" v-if="typeStatus=='local'">
        <div :class="queryData.area==item.id?'contentActive content local':'content local'" v-for="(item,index) in localSingle" :key="index" @click="typeSelectClickColor(item,'local')">
          {{item.name}}
        </div>
      </div>
      <!-- 空间 -->
      <div class="typeContent" v-if="typeStatus=='space'">
        <div :class="queryData.space==item.id?'contentActive content local':'content local'" v-for="(item,index) in spaceSingle" :key="index" @click="typeSelectClickColor(item,'space')">
          {{item.name}}
        </div>
      </div>
      <!-- 风格 -->
      <div class="typeContent" v-if="typeStatus=='style'">
        <div :class="queryData.style==item.id?'contentActive content local':'content local'" v-for="(item,index) in styleSingle" :key="index" @click="typeSelectClickColor(item,'style')">
          {{item.name}}
        </div>
      </div>
    </div>
    <Scroll :on-refresh="onRefresh" :on-infinite="scrollEnd" ref="scroll">
      <vueWaterfallEasy :imgsArr="singleData" srcKey="cover" :loadingDotCount="0" :mobileGap="16" id="water" @click="singleClick">
      </vueWaterfallEasy>
    </Scroll>
    <!-- 模态框 -->
    <div class="mask" v-if="typeStatus!==''" @click="typeStatus=''">
    </div>
  </div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import Scroll from "../../../common/test.vue";
import { ImagePreview } from "vant";
export default {
  props: ["styleSingle", "spaceSingle", "localSingle", "colorSingle"],
  components: { vueWaterfallEasy, Scroll },
  data: function() {
    return {
      colorData: ["yellow", "#000", "#3CB850", "#FF9100", "#3D64FF"],
      localData: ["不限", "店面", "衣柜", "酒柜", "鞋柜"],
      typeStatus: "",
      queryData: {
        ticket: localStorage.getItem("ticket"),
        page: 1,
        page_size: 15,
        category_id: 1,
        space: 0,
        style: 0,
        area: 0,
        color: 0,
        place: 0,
        layout: 0
      },
      singleData: [],
      loading: true
    };
  },
  created: function() {
    this.getData();
  },
  mounted: function() {
    let that = this;
  },
  methods: {
    singleClick: function(index, value) {
      let arr = [];
      arr.push(value.value.cover);
      ImagePreview(arr);
    },
    onRefresh: function(done) {
      return done();
    },
    getData: function() {
      this.tool
        .request({
          url: "picture/list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.singleData = res.data.list;
          }
        });
    },
    scrollEnd: function(done) {
      this.queryData.page += 1;
      this.tool
        .request({
          url: "picture/list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            for (var i in res.data.list) {
              this.singleData.push(res.data.list[i]);
              // this.loading = false;
            }
            if (res.data.list.length < 15) {
              this.$el.querySelector(".load-more span").innerHTML =
                "没有更多了";
              return;
            }
            done();
          }
        });
    },
    typeClick: function(res) {
      if (this.typeStatus == res) {
        return (this.typeStatus = "");
      }
      this.typeStatus = res;
    },
    typeSelectClickColor: function(item, type) {
      if (type == "color") {
        this.queryData.color = item.id;
      } else if (type == "local") {
        this.queryData.area = item.id;
      } else if (type == "space") {
        this.queryData.space = item.id;
      } else if (type == "style") {
        this.queryData.style = item.id;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.singleDragram {
  height: 100%;
  padding-top: 0.2rem;
  box-sizing: border-box;
  background: #f8f8f8;
  .contentWater {
    padding: 0;
    height: 500px !important;
  }
  .TypeList {
    position: fixed;
    z-index: 999;
    top: 0.9rem;
    height: 0.9rem;
    width: 100%;
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
  .contentActive {
    border: 1px solid rgb(61, 204, 66);
    color: rgb(61, 204, 66) !important;
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
    font-size: 0.28rem;
    color: #666666;
    .content {
      height: 0.6rem;
      width: 1.5rem;
      border-radius: 0.08rem;
      margin-top: 0.32rem;
      text-align: center;
      line-height: 0.6rem;
      border: 1px solid #fff;
      background-color: #f8f8f8;
    }
    .local {
      background: #f4f4f4;
      color: #666666;
      font-size: 0.28rem;
    }
  }
}
</style>

