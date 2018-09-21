<template>
  <div class="pages">
    <div class="header">
      <span>新建日记</span>
      <span class="share" @click="submitClick">完成</span>
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
      <van-field v-model="queryData.content" type="textarea" placeholder="请输入日记内容" rows="2" autosize class="textArea" />
    </div>
    <div class="diarySelect">
      <van-cell title="装修阶段" is-link :value="stepName" class="single" @click="status.showDecorationStage=true" />
      <van-cell title="装修标签" is-link :value="labelName" class="single" @click="status.showLabel=true" />
      <van-cell title="选中日期" is-link :value="queryData.day" class="single" @click="status.showDate=true" />
    </div>
    <van-popup v-model="status.showDecorationStage" position="bottom" :overlay="true" class="typeMask">
      <van-picker value-key="name" show-toolbar :columns="stepData" @cancel="status.showDecorationStage=false" @confirm="stepClick" class="picker" />
    </van-popup>
    <!-- 装修标签 -->
    <van-popup v-model="status.showLabel" position="bottom" :overlay="true" class="typeMask">
      <van-picker value-key="tag_name" show-toolbar :columns="labelData" @cancel="status.showLabel=false" @confirm="labelClick" class="picker" />
    </van-popup>

    <van-popup v-model="status.showDate" position="bottom" :overlay="true" class="typeMask">
      <van-datetime-picker :max-date="minDate" v-model="currentDate" type="date" @cancel="status.showDate=false" @confirm="dateClick" :formatter="formatterDate" />
    </van-popup>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      message: "",
      currentDate: "",
      minDate: new Date(),
      stepName: "",
      labelName: "",
      status: {
        showDecorationStage: false,
        showDate: false,
        showLabel: false
      },
      queryData: {
        decorate_id: "",
        content: "",
        tag_id: "",
        ticket: localStorage.getItem("ticket")
      },
      stepData: [],
      labelData: [{ tag_name: "请先选择装修阶段" }] //装修标签
    };
  },
  created: function() {
    this.getStepData();
  },
  methods: {
    submitClick: function() {
      this.tool
        .request({
          url: "user/editDiary",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.$dialog({
              title: "提示",
              message: res.msg
            });
          } else {
            this.$toast({
              type: "text",
              message: res.msg == "" ? "新增失败" : res.msg
            });
          }
        });
    },
    getStepData: function() {
      this.tool
        .request({
          url: "tags/getList",
          method: "post",
          params: {
            tag_ename: "decorate"
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.stepData = res.data.tags;
          }
        });
    },
    getLabelData: function() {
      this.tool
        .request({
          url: "tags/getChildList",
          method: "post",
          params: {
            tag_id: this.queryData.decorate_id
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.labelData = res.data;
          }
        });
    },
    stepClick: function(res) {
      this.queryData.decorate_id = res.id;
      this.stepName = res.name;
      this.status.showDecorationStage = false;
      this.getLabelData();
    },
    labelClick: function(res) {
      this.queryData.tag_id = res.tag_id;
      this.labelName = res.tag_name;
      this.status.showLabel = false;
    },
    dateClick: function(res) {
      let year = res.getFullYear();
      let month = parseInt(res.getMonth()) + 1;
      if (parseInt(month) < 10) {
        month = "0" + month;
      }
      let day = res.getDate();
      if (parseInt(day) < 10) {
        day = "0" + day;
      }
      let str = year + "-" + month + "-" + day;
      this.queryData.day = str;
      this.status.showDate = false;
    },
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


