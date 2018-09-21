<template>
  <div class="singleDragram">
    <van-checkbox-group v-model="result" @change="changeBoxClick" style="height:100%;">
      <vueWaterfallEasy :imgsArr="singleData" class="content" srcKey="cover" :loadingDotCount="0">
        <template slot-scope="props">
          <div class="cancel" v-if="!danCheckStatus">
            取消
          </div>
          <van-checkbox :name="props.value" class="checkBox" v-if="danCheckStatus">
          </van-checkbox>
        </template>
      </vueWaterfallEasy>
    </van-checkbox-group>
  </div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  props: ["checkData"],
  components: { vueWaterfallEasy },
  data: function() {
    return {
      colorData: ["yellow", "#000", "#3CB850", "#FF9100", "#3D64FF"],
      localData: ["不限", "店面", "衣柜", "酒柜", "鞋柜"],
      result: [],
      danCheckStatus: false,
      queryData: {
        ticket: localStorage.getItem("ticket"),
        page: 1,
        page_size: 15,
        type: "single_picture"
      },
      singleData: []
    };
  },
  watch: {
    checkData: function() {
      if (this.checkData.tabActive == "dan") {
        this.danCheckStatus = this.checkData.checkStatus;
      }
    }
  },
  mounted: function() {},
  created: function() {
    this.getData();
  },
  methods: {
    changeBoxClick: function(res) {
      console.log(res);
    },
    updateData: function(res) {
      if (res.tabActive == "dan") {
        this.danCheckStatus = res.checkStatus;
      }
    },
    getData: function() {
      this.tool
        .request({
          url: "favorite/list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.singleData = res.data.list;
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.singleDragram {
  height: 100%;
  .content {
    background-color: #f8f8f8;
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
    }
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
}
</style>

