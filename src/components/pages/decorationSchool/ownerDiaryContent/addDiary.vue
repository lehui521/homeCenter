<template>
  <div class="pages">
    <div class="header">
      <span>新建日记</span>
      <span class="share" @click="nextStep">下一步</span>
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
    </div>
    <div class="title">
      <van-field v-model="queryData.name" clearable placeholder="日记标题" class="titleInput" />
    </div>
    <div class="uploadImg">
      <van-uploader :after-read="uploadImgClick" accept="image/gif, image/jpeg" multiple>
        <img v-lazy="queryData.image==''?'static/img/addImg.png':queryData.image" alt="">
      </van-uploader>
    </div>
  </div>
</template>
<script>
import lrz from "lrz";
export default {
  data: function() {
    return {
      queryData: {
        ticket: localStorage.getItem("ticket"),
        name: "",
        image: ""
      }
    };
  },
  methods: {
    uploadImgClick: function(res) {
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
              this.queryData.image = res.data.image;
            }
          });
      });
    },
    nextStep: function() {
      this.tool
        .request({
          url: "user/setDiary",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.$router.push("addDiaryStep2");
          }
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
  .title {
    height: 1rem;
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
    .titleInput {
      padding: 0 0.3rem;
      line-height: 1rem;
      height: 100%;
      font-size: 0.28rem;
    }
  }
  .uploadImg {
    padding: 0.3rem;
    img {
      height: 1.48rem;
      width: 1.48rem;
    }
  }
}
</style>


