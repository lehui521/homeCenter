<template>
  <div class="page">
    <div class="header">
      <span>{{headerObj.title}}</span>
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
      <span v-if="!editStatus" class="header-right" @click="test()">编辑</span>
      <span v-if="editStatus" class="header-right" @click="test()">取消</span>
    </div>
    <div class="content">
      <div class="item" v-for="(item,index) in demoArr" :key="index">
        <div class="van-check" :class="{'van-checked':editStatus}" v-if="editStatus">
          <van-checkbox v-model="testBoxValue">
          </van-checkbox>
        </div>
        <div class="date">
          <p>{{item.time}}</p>
        </div>
        <div class="unchecked" :class="{'checked':editStatus}">
          <slide :key="index">
            <div class="item-body">
              <p class="item-body-text">{{item.title}}</p>
              <img v-if="item.img" class="item-body-img" :src="item.img" alt="">
              <img v-if="!item.img" class="item-body-img" src="static/img/demo-pic.jpg">
              <div class="toDetil">查看详情</div>
            </div>
          </slide>
        </div>
      </div>
    </div>
    <div class="footer">
      <button class="footer-btn">一键删除</button>
      <button class="footer-btn">一键设置已读</button>
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
          title: "系统消息",
          img: ""
        },
        testBoxValue: false,
        editStatus: false,
        demoArr: [{
            time: '2017-08-20',
            title: '双11我以美居之名誓师二战',
            img: ''
          },
          {
            time: '2017-08-20',
            title: '双11我以美居之名誓师二战',
            img: ''
          }
        ]
      }
    },
    methods: {
      test() {
        this.editStatus = !this.editStatus;;
        this.testBoxValue = !this.testBoxValue;
      }
    },
    created() {

    },
    components: {
      HeaderSame,
      slide
    }
  }

</script>
<style lang="scss" scoped>
  .page {
    font-size: .3rem;
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
        right: .3rem;
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
          }
          .img-demo {
            min-height: 20vh;
            background-color: #eee;
          }
          .toDetil {
            padding: 3vw 0 3vw 5vw;
            margin-top: 2vw;
            border-top: 1px solid #D5D5D5;
          }

        }
        .van-check {
          display: inline-block;
          width: 0.72rem;
        }
      }
      .unchecked{
        transform: translateX(0)
      }
      .checked {
        transform: translateX(0.72rem)
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
        color: #3CB850;
        border: none;
      }
      .footer-btn:last-of-type {
        background-color: #3CB850;
        color: #fff;
      }
    }
  }

</style>
