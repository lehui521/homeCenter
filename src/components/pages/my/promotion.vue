<template>
    <div class="page">
        <div class="header">
            <span>{{headerObj.title}}</span>
            <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
            <span v-if="!editStatus" class="header-right" @click="test()">编辑</span>
            <span v-if="editStatus" class="header-right" @click="test()">取消</span>
        </div>
        <div class="content">
            <van-checkbox-group v-model="testBoxValue" @change="checkBoxChange">
                <div class="item" v-for="(item,index) in systemData" :key="index" @click="$router.push('systemMessageDetail?messageId='+item.message_id)">
                    <div class="van-check" :class="{'van-checked':editStatus}" v-if="editStatus">
                        <van-checkbox :key="index" :name="item.message_id">
                        </van-checkbox>
                    </div>
                    <div class="date">
                        <p>{{item.add_time}}</p>
                    </div>
                    <div class="unchecked" :class="{'checked':editStatus}">
                        <slide :key="index" :id="item.message_id" @sendFu="getData" :type="1">
                            <div class="item-body">
                                <p class="item-body-text">{{item.title}}</p>
                                <img class="item-body-img" v-lazy="item.image" alt="">
                                <div class="toDetil">查看详情</div>
                            </div>
                        </slide>
                    </div>
                </div>
            </van-checkbox-group>
        </div>
        <div class="footer">
            <button class="footer-btn" @click="deleteMore">一键删除</button>
            <button class="footer-btn" @click="readMore">一键设置已读</button>
        </div>
    </div>
</template>
<script>
import HeaderSame from "../../common/sameHeader.vue";
import slide from "../../common/slideDelete.vue";
export default {
  data() {
    return {
      headerObj: {
        title: "促销优惠",
        img: ""
      },
      testBoxValue: [],
      editStatus: false,
      systemData: []
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    test() {
      this.editStatus = !this.editStatus;
    },
    checkBoxChange: function(res) {
      console.log(this.testBoxValue);
    },
    deleteMore: function() {
      if (this.testBoxValue.length == 0) {
        return this.$toast({
          type: "text",
          message: "请选择消息"
        });
      }
      let data = this.testBoxValue.join(",");
      this.$dialog
        .confirm({
          title: "提示",
          message: "确定要删除吗"
        })
        .then(() => {
          this.tool
            .request({
              url: "message/remove",
              method: "post",
              params: {
                ticket: localStorage.getItem("ticket"),
                type: 1,
                message_ids: data
              }
            })
            .then(res => {
              if (res.status == 200) {
                this.$dialog
                  .alert({
                    title: "提示",
                    message: "删除成功"
                  })
                  .then(res => {
                    this.getData();
                  });
              }
            });
        });
    },
    readMore: function() {
      if (this.testBoxValue.length == 0) {
        return this.$toast({
          type: "text",
          message: "请选择消息"
        });
      }
      let data = this.testBoxValue.join(",");
      this.tool
        .request({
          url: "message/read",
          method: "post",
          params: {
            ticket: localStorage.getItem("ticket"),
            type: 1,
            message_ids: data
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.$toast({
              type: "text",
              message: "读取成功"
            });
          }
        });
    },
    getData: function() {
      this.tool
        .request({
          url: "message/list",
          method: "post",
          params: {
            ticket: localStorage.getItem("ticket"),
            type: 1
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.systemData = res.data;
          }
        });
    }
  },
  components: {
    HeaderSame,
    slide
  }
};
</script>
<style lang="scss" scoped>
.page {
  font-size: 0.3rem;
  padding-top: 0.88rem;
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
    z-index: 9999;
    .share {
      position: absolute;
      right: 0.4rem;
      height: 0.33rem;
      top: 0.27rem;
    }
    .back {
      height: 0.32rem;
      position: absolute;
      top: 0.28rem;
      left: 0.3rem;
    }
    .header-right {
      position: absolute;
      right: 0.3rem;
    }
  }
  .content {
    padding-bottom: 1rem;
    .item {
      position: relative;
      .date {
        padding: 3vw 0;
        text-align: center;
      }
      .item-body {
        background-color: #fff;
        margin: 0 3vw;
        max-height: 8rem;
        .item-body-text {
          padding: 3vw 0;
          text-indent: 5vw;
        }
        .item-body-img {
          width: 100%;
          height: 4.2rem;
        }
        .img-demo {
          min-height: 20vh;
          background-color: #eee;
        }
        .toDetil {
          padding: 3vw 0 3vw 5vw;
          margin-top: 2vw;
          border-top: 1px solid #d5d5d5;
        }
      }
      .van-check {
        display: inline-block;
        width: 0.72rem;
      }
    }
    .unchecked {
      transform: translateX(0);
    }
    .checked {
      transform: translateX(0.72rem);
    }
    .van-checked {
      position: absolute;
      bottom: 3.23rem;
      text-align: center;
    }
  }
  .footer {
    position: fixed;
    height: 1rem;
    bottom: 0;
    width: 100%;
    display: flex;
    .footer-btn {
      flex: 1;
      background-color: #fff;
      color: #3cb850;
      border: none;
    }
    .footer-btn:last-of-type {
      background-color: #3cb850;
      color: #fff;
    }
  }
}
</style>
