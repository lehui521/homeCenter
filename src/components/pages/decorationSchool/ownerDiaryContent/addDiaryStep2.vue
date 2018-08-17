<template>
    <div class="pages">
        <div class="header">
            <span>新建日记</span>
            <span class="share">完成</span>
            <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
        </div>
        <div class="diaryImg">
            <img src="static/img/banner1.png" alt="">
        </div>
        <div class="smallImg">
            <img src="static/img/grayImg.png" alt="">
            <img src="static/img/grayCamera.png" alt="">
        </div>
        <div class="diaryTextContent">
            <van-field v-model="message" type="textarea" placeholder="请输入日记内容" rows="2" autosize class="textArea" />
        </div>
        <div class="diarySelect">
            <van-cell title="装修阶段" is-link value="泥木验收" class="single" @click="status.showDecorationStage=true" />
            <van-cell title="装修标签" is-link value="准备" class="single" />
            <van-cell title="选中日期" is-link value="2017-10-10" class="single" @click="status.showDate=true" />
        </div>
        <van-popup v-model="status.showDecorationStage" position="bottom" :overlay="true" class="typeMask">
            <van-picker show-toolbar :columns="columns" @cancel="status.showDecorationStage=false" @confirm="status.showDecorationStage=false" class="picker" />
        </van-popup>
        <van-popup v-model="status.showDate" position="bottom" :overlay="true" class="typeMask">
            <van-datetime-picker :min-date="minDate" v-model="currentDate" type="date" @cancel="status.showDate=false" @confirm="status.showDate=false" :formatter="formatterDate" />
        </van-popup>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      message: "",
      currentDate: "",
      minDate: new Date("2017-01-01"),
      status: {
        showDecorationStage: false,
        showDate: false
      },
      columns: [
        { text: "装修准备", defaultIndex: 0 },
        { text: "合同签订", defaultIndex: 1 },
        { text: "拆除改造", defaultIndex: 2 }
      ]
    };
  },
  methods: {
    uploadImgClick: function() {},
    formatterDate: function(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type == "day") {
        return `${value}日`;
      }
      return value;
    }
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
  .diaryImg {
    height: 6rem;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .smallImg {
    font-size: 0.24rem;
    padding-top: 0.2rem;
    padding-left: 0.2rem;
    img {
      height: 0.24rem;
      margin-right: 0.35rem;
    }
  }
  .diaryTextContent {
    margin-top: 0.36rem;
    .textArea {
      background: #f8f8f8;
      color: #999999;
      font-size: 0.24rem;
      padding: 0.14rem 0.2rem;
    }
  }
  .diarySelect {
    .single {
      border-bottom: 1px solid #d5d5d5;
      font-size: 0.26rem;
      color: #666666;
    }
    .typeMask {
      font-size: 0.3rem;
      .picker {
        font-size: 0.3rem;
      }
    }
  }
}
</style>


