<template>
  <div class="coverDragram">
    <van-checkbox-group v-model="result" @change="changeBoxClick" style="height:100%;">
      <vueWaterfallEasy :imgsArr="coverData" :loadingDotCount="0" srcKey="cover">
        <template slot-scope="props">
          <div class="blank"></div>
          <div class="title">{{props.value.title}}
            <div class="imgNum">
              <img src="static/img/numImg.png" alt="">
              <span>10</span>
            </div>
          </div>
          <div class="blank"></div>
          <div class="cancel" v-if="!taoCheckStatus">
            取消
          </div>
          <van-checkbox :name="props.value" class="checkBox" v-if="taoCheckStatus">
          </van-checkbox>
        </template>
      </vueWaterfallEasy>
    </van-checkbox-group>
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
      result: [],
      taoCheckStatus: false,
      coverData: [],
      queryData: {
        ticket: localStorage.getItem("ticket"),
        page: 1,
        page_size: 15,
        type: "multi_picture"
      }
    };
  },
  created: function() {
    this.getCoverData();
  },
  methods: {
    updateData: function(res) {
      this.taoCheckStatus = res.checkStatus;
    },
    changeBoxClick: function() {},
    getCoverData: function() {
      this.tool
        .request({
          url: "favorite/list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.coverData = res.data.list;
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.coverDragram {
  height: 100%;
  .content {
    background-color: #f8f8f8;
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
    z-index: 999999;
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
    right: 0.16rem;
    height: 0.38rem;
    padding: 0 0.1rem;
    border-radius: 4px;
    border: 1px solid #ffffff;
    font-size: 0.24rem;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 0.38rem;
    img {
      width: 0.28rem;
      float: left;
      margin-top: 0.05rem;
      margin-right: 0.05rem;
    }
  }
}
</style>

