<template>
  <div class="page" id="yijian">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <input type="file" name="file" id="file" @change="fileChange" style="display:none;">
    <div class="content">
      <div>
        <p class="label">标签</p>
        <van-tabs type="card" class="lableContent" :swipe-threshold="3" @click="tabClick">
          <van-tab v-for="(item,i) in labelData" :title="item.name" :key="i">
          </van-tab>
        </van-tabs>
      </div>
      <div>
        <p class="label">改进建议</p>
        <textarea name="" id="" cols="28" rows="5" v-model="queryData.content" class="item-input" placeholder="期待您宝贵的意见"></textarea>
        <div class="addImg">
          <img src="static/img/upload-plus.png" alt="" @click="clickFile">
          <img v-lazy="item" alt="" v-for="(item,index) in queryData.images" :key="index">
        </div>
      </div>
      <div>
        <p class="label">联系方式</p>
        <input type="number" class="item-input" placeholder="留下联系方式可以更方便联系您" v-model="queryData.contact">
      </div>
    </div>
    <div class="footer" @click="submitClick">
      立即提交
    </div>
  </div>
</template>
<script>
import HeaderSame from "../../common/sameHeader.vue";
import lrz from "lrz";
export default {
  data() {
    return {
      headerObj: {
        title: "意见反馈",
        img: ""
      },
      labelData: [],
      queryData: {
        images: [],
        ticket: localStorage.getItem("ticket"),
        contact: "",
        content: "",
        tag_id: "",
        tag_name: ""
      }
    };
  },
  created: function() {
    this.getLabel();
  },
  methods: {
    tabClick: function(i, title) {
      this.queryData.tag_name = title;
      for (var i in this.labelData) {
        if (title == this.labelData[i].name) {
          this.queryData.tag_id = this.labelData[i].id;
        }
      }
    },
    submitClick: function() {
      this.tool
        .request({
          url: "feedback/add",
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
                this.queryData = {
                  images: [],
                  ticket: localStorage.getItem("ticket"),
                  contact: "",
                  content: "",
                  tag_id: "",
                  tag_name: ""
                };
              });
          } else {
            this.$toast({
              type: "text",
              message: res.msg
            });
          }
        });
    },
    fileChange: function(e) {
      let file = e.target.files[0];
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
              this.queryData.images.push(res.data.image);
            }
          });
      });
    },
    clickFile: function() {
      document.getElementById("file").click();
    },
    getLabel: function() {
      this.tool
        .request({
          url: "feedback/tag"
        })
        .then(res => {
          if (res.status == 200) {
            this.labelData = res.data;
            this.queryData.tag_id = this.labelData[0].id;
            this.queryData.tag_name = this.labelData[0].name;
          }
        });
    }
  },
  components: {
    HeaderSame
  }
};
</script>
<style lang="scss">
#yijian {
  padding-top: 0.88rem;
  font-size: 0.3rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  color: #666666;
  overflow: hidden;
  .header {
  }
  .content {
    .label {
      background: #f8f8f8;
      box-sizing: border-box;
      padding-left: 0.3rem;
    }
    .lableContent {
      margin: 0.2rem 0;
      margin-left: 0.2rem;
    }
    .addImg {
      padding-left: 0.3rem;
      box-sizing: border-box;
      img {
        width: 1.48rem;
        height: 1.48rem;
      }
    }
    .item-input {
      width: 100%;
      border: none;
      text-indent: 0.3rem;
    }
  }
  .footer {
    text-align: center;
    width: 60%;
    background: #3cb850;
    color: #fff;
    line-height: 0.88rem;
    margin: auto;
    margin-top: 2rem;
    border-radius: 4px;
  }
  .van-tabs__nav--card {
    margin: 0;
    border: 0;
  }
  .van-tabs__nav--card .van-tab {
    color: #666666;
    background: #f4f4f4;
    font-size: 0.28rem;
    border: 0;
    padding: 0;
    height: 0.6rem;
    line-height: 0.6rem;
    border-radius: 0.08rem;
    margin-right: 0.3rem;
    width: auto;
    padding: 0 0.3rem;
    border: 1px solid #fff;
  }
  .van-ellipsis {
    width: 100%;
  }
  .van-tabs__nav--card .van-tab.van-tab--active {
    color: #3cb850;
    background: #fff;
    border: 1px solid #3cb850;
  }
  .van-tabs__nav {
    display: -webkit-box;
  }
}
</style>
