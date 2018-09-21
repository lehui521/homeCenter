<template>
  <div class="singleDragram">
    <van-checkbox-group v-model="result" @change="changeBoxClick" style="height:100%;">
      <div class="titleContent" v-for="(item,i) in titleData" :key="i">
        <div class="floor1">
          <img v-lazy="item.cover" alt="">
        </div>
        <div class="floor2">
          <div class="text1">{{item.title}}</div>
          <div class="text2">
            {{item.detail}}
          </div>
        </div>
        <div class="cancel" v-if="!zhuanCheckStatus">
          取消
        </div>
        <van-checkbox :name="i" class="checkBox" v-if="zhuanCheckStatus">
        </van-checkbox>
      </div>
    </van-checkbox-group>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      colorData: ["yellow", "#000", "#3CB850", "#FF9100", "#3D64FF"],
      localData: ["不限", "店面", "衣柜", "酒柜", "鞋柜"],
      zhuanCheckStatus: false,
      result: [],
      queryData: {
        ticket: localStorage.getItem("ticket"),
        page: 1,
        page_size: 15,
        type: "album_picture"
      },
      titleData: []
    };
  },
  created: function() {
    this.getTitleData();
  },
  methods: {
    getTitleData: function() {
      this.tool
        .request({
          url: "favorite/list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.titleData = res.data.list;
          }
        });
    },
    changeBoxClick: function() {},
    updateData: function(res) {
      this.zhuanCheckStatus = res.checkStatus;
    }
  }
};
</script>

<style lang="scss" scoped>
.singleDragram {
  height: 100%;
  .content {
    background-color: #f8f8f8;
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
      border-radius: 8px;
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
  .titleContent {
    height: 6.2rem;
    position: relative;
    .floor1 {
      height: 4.2rem;
      width: 100%;
      background: #666666;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .floor2 {
      height: 2rem;
      width: 100%;
      box-sizing: border-box;
      padding-top: 0.3rem;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      .text1 {
        font-size: 0.28rem;
        color: #666666;
        letter-spacing: 0;
      }
      .text2 {
        font-size: 0.24rem;
        color: #999999;
        letter-spacing: 0;
        margin-top: 0.1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        white-space: nowrap;
      }
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
    }
  }
}
</style>

