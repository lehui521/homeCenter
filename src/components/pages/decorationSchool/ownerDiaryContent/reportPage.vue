<template>
    <div class="pages">
        <div class="header">
            <span>举报</span>
            <span class="share">完成</span>
            <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
        </div>
        <div class="content">
            <van-cell :title="item.value" class="cellSingle" @click="cellClick(item.id)" v-for="(item,index) in radioData" :key="index">
                <div :class="selectId==item.id?'radio selected':'radio'">
                    <span></span>
                </div>
            </van-cell>
            <van-field v-model="message" type="textarea" placeholder="举报详情描述" rows="2" autosize class="textArea" />
            <van-uploader :after-read="uploadImg" class="uploadImg">
                <img src="static/img/addImg2.png" alt="">
            </van-uploader>
        </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      radioData: [
        { value: "色情", id: 0 },
        { value: "暴力", id: 1 },
        { value: "政治敏感", id: 2 },
        { value: "欺诈", id: 3 },
        { value: "违法", id: 4 }
      ],
      selectId: 0,
      message: ""
    };
  },
  methods: {
    cellClick: function(res) {
      this.selectId = res;
    },
    uploadImg: function() {}
  }
};
</script>
<style lang="scss" scoped>
.pages {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 0.88rem;
  top: 0;
  box-sizing: border-box;
  background: #fff;
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
    .share {
      position: absolute;
      right: 0.4rem;
      top: 0;
      font-size: 0.3rem;
      height: 100%;
      line-height: 0.88rem;
      color: #999999;
    }
    .back {
      height: 0.32rem;
      position: absolute;
      top: 0.28rem;
      left: 0.3rem;
    }
  }
  .content {
    margin-top: 1px;
    .cellSingle {
      padding: 0;
      height: 0.9rem;
      line-height: 0.9rem;
      font-size: 0.26rem;
      color: #666666;
      letter-spacing: 0;
      padding-left: 0.3rem;
      position: relative;
      border-bottom: 1px solid #d5d5d5;
      .radio {
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
        border: 1px solid #d5d5d5;
        box-sizing: border-box;
        font-size: 0.1rem;
        position: relative;
        padding: 0.05rem;
        box-sizing: border-box;
        position: absolute;
        right: 0.5rem;
        top: 0.3rem;
      }
      .selected:after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #3cb850;
      }
    }
    .textArea {
      border-bottom: 1px solid #d5d5d5;
      font-size: 0.2rem;
      padding-top: 0.25rem;
      padding-left: 0.3rem;
    }
    .uploadImg {
      padding: 0.2rem;
      img {
        width: 1.48rem;
        height: 1.48rem;
      }
    }
  }
}
</style>


