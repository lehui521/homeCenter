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
        <div :class="queryData.color==item.id?'contentActive content':'content'" :style="'background-color:#'+item.content" v-for="(item,index) in colorCover" :key="index" @click="typeSelectClickColor(item,'color')">
          <span v-if="item.content==''">{{item.name}}</span>
        </div>
      </div>
      <!-- 面积 -->
      <div class="typeContent" v-if="typeStatus=='local'">
        <div :class="queryData.area==item.id?'contentActive content local':'content local'" v-for="(item,index) in sizeCover" :key="index" @click="typeSelectClickColor(item,'size')">
          {{item.name}}
        </div>
      </div>
      <!-- 户型 -->
      <div class="typeContent" v-if="typeStatus=='door'">
        <div :class="queryData.layout==item.id?'contentActive content local':'content local'" v-for="(item,index) in houseCover" :key="index" @click="typeSelectClickColor(item,'layout')">
          {{item.name}}
        </div>
      </div>
      <!-- 风格 -->
      <div class="typeContent" v-if="typeStatus=='style'">
        <div :class="queryData.style==item.id?'contentActive content local':'content local'" v-for="(item,index) in styleCover" :key="index" @click="typeSelectClickColor(item,'style')">
          {{item.name}}
        </div>
      </div>
    </div>
    <Scroll :on-refresh="onRefresh" :on-infinite="scrollEnd" ref="scroll">
      <vueWaterfallEasy :imgsArr="coverData" :loadingDotCount="0" srcKey="cover" class="singleCover" :mobileGap="16" @click="coverClick">
        <template slot-scope="props">
          <div class="blank"></div>
          <div class="title">{{props.value.title}}
            <div class="imgNum">
              <div class="imgN">
                <img src="static/img/numImg.png" alt="">
              </div>
              <span>{{props.value.content.length}}</span>
            </div>
          </div>
          <div class="blank"></div>
        </template>
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
  props: ["styleCover", "houseCover", "sizeCover", "colorCover"],
  components: { vueWaterfallEasy, Scroll },
  data: function() {
    return {
      typeStatus: "",
      queryData: {
        ticket: localStorage.getItem("ticket"),
        page: 1,
        page_size: 15,
        category_id: 2,
        space: 0,
        style: 0,
        area: 0,
        color: 0,
        place: 0,
        layout: 0
      },
      loading: true,
      coverData: []
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    coverClick: function(index, value) {
      let arr = [];
      for (var i in value.value.content) {
        arr.push(value.value.content[i].img);
      }
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
            this.coverData = res.data.list;
          }
        });
    },
    scrollEnd: function(done) {
      this.queryData.page += 1;
      this.loading = true;
      setTimeout(() => {
        this.tool
          .request({
            url: "picture/list",
            method: "post",
            params: this.queryData
          })
          .then(res => {
            if (res.status == 200) {
              for (var i in res.data.list) {
                this.coverData.push(res.data.list[i]);
              }
              if (res.data.list.length < 15) {
                this.$el.querySelector(".load-more span").innerHTML =
                  "没有更多了";
                return;
              }
              done();
            }
          });
      }, 1000);
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
      } else if (type == "size") {
        this.queryData.area = item.id;
      } else if (type == "layout") {
        this.queryData.layout = item.id;
      } else if (type == "style") {
        this.queryData.style = item.id;
      }
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
    border: 1px solid #fff;
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
    text-align: center;
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

