<template>
  <div class="pages">
    <div class="header">
      <span>举报</span>
      <span class="share" @click="submitClick">完成</span>
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
    </div>
    <div class="content">
      <van-cell :title="item.name" class="cellSingle" @click="cellClick(item)" v-for="(item,index) in labelData" :key="index">
        <div :class="queryData.tag_id==item.id?'radio selected':'radio'">
          <span></span>
        </div>
      </van-cell>
      <van-field v-model="queryData.content" type="textarea" placeholder="举报详情描述" rows="2" autosize class="textArea" />
      <van-uploader :after-read="uploadImg" class="uploadImg">
        <img src="static/img/addImg2.png" alt="">
        <img v-lazy="item" alt="" v-for="(item,i) in queryData.image_list" :key="i">
      </van-uploader>
    </div>
  </div>
</template>
<script>
import lrz from "lrz";
export default {
  data: function() {
    return {
      labelData: [],
      queryData: {
        ticket: localStorage.getItem("ticket"),
        type: 1,
        type_id: this.$route.query.diaryId,
        tag_id: "",
        content: "",
        image_list: []
      }
    };
  },
  created: function() {
    this.getLabel();
  },
  methods: {
    getLabel: function() {
      this.tool
        .request({
          url: "report/tag",
          params: {
            ticket: localStorage.getItem("ticket")
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.labelData = res.data;
          }
        });
    },
    cellClick: function(res) {
      this.queryData.tag_id = res.id;
    },
    submitClick: function() {
      this.tool
        .request({
          url: "report/add",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.$dialog
              .alert({
                title: "提示",
                message: res.msg
              })
              .then(() => {
                this.$router.go(-1);
              });
          } else {
            this.$toast({
              type: "text",
              message: res.msg
            });
          }
        });
    },
    uploadImg: function(res) {
      let file = res.file;
      lrz(file, { filedName: file.name }).then(fileData => {
        let form = new FormData();
        form.append("file", fileData.base64);
        this.tool
          .request({
            url: "upload/base64",
            method: "post",
            data: {
              image: fileData.base64
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.queryData.image_list.push(res.data.image);
            }
          });
      });
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


