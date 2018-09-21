<template>
  <div :class="checkStatus?'pages pb-1 ':'pages'">
    <div class="header">
      <span>收藏设计案例</span>
      <span class="share" @click="checkAllClick('all')" v-if="!checkStatus">全选</span>
      <span class="share" @click="checkAllClick('cancel')" v-if="checkStatus">取消</span>
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
    </div>
    <div class="caseContent">
      <van-checkbox-group v-model="result" @change="checkChange">
        <div class="single" v-for="(item,i) in caseData" :key="i">
          <div class="singleImg">
            <img v-lazy="item.image" alt="">
            <span class="cancel" v-if="!checkStatus">取消</span>
            <van-checkbox :name="i" class="checkSingle" v-if="checkStatus">
            </van-checkbox>
          </div>
          <div class="singleFloor1">
            <div class="text1">{{item.community}}</div>
            <div class="text2">
              <span>{{item.detail_title}}</span>
            </div>
          </div>
          <div class="singleFloor2">
            <div class="content1">
              <img src="static/img/grayStar.png" alt="">
              <span>3</span>
            </div>
            <div class="content1">
              <img src="static/img/yan.png" alt="">
              <span>154</span>
            </div>
          </div>
        </div>
      </van-checkbox-group>
    </div>
    <!-- <van-popup v-model="checkStatus" position="bottom" :overlay="false"> -->
    <div class="cancelFocus" :style="checkStatus?'height:1rem':''">取消收藏</div>
    <!-- </van-popup> -->
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      result: [],
      checkStatus: false,
      caseData: [],
      queryData: {
        ticket: localStorage.getItem("ticket"),
        page: 1,
        page_size: 15,
        type: "design_case"
      }
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.tool
        .request({
          url: "favorite/list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.caseData = res.data.list;
          }
        });
    },
    checkChange: function(res) {
      console.log(res);
    },
    checkAllClick: function(res) {
      if (res == "all") {
        this.checkStatus = true;
        this.result = [1, 2, 3];
      } else if (res == "cancel") {
        this.checkStatus = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
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
    border-bottom: 1px solid #d5d5d5;
    z-index: 999;
    .share {
      position: absolute;
      right: 0.4rem;
      height: 0.33rem;
      top: 0.27rem;
      font-size: 0.3rem;
      color: #666666;
      letter-spacing: 0;
      line-height: 0.33rem;
    }
    .back {
      height: 0.32rem;
      position: absolute;
      top: 0.28rem;
      left: 0.3rem;
    }
  }

  .cancelFocus {
    width: 100%;
    height: 0;
    text-align: center;
    font-size: 0.36rem;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 1rem;
    background: #38ba50;
    position: fixed;
    bottom: 0;
    left: 0;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }
  .caseContent {
    .single {
      background: #fff;
      .singleImg {
        width: 100%;
        height: 4.74rem;
        position: relative;
        img {
          height: 100%;
          width: 100%;
        }
        .cancel {
          display: inline-block;
          width: 0.8rem;
          height: 0.32rem;
          line-height: 0.32rem;
          border-radius: 30px;
          background: #38ba50;
          color: #fff;
          float: right;
          font-size: 0.2rem;
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          text-align: center;
        }
        .checkSingle {
          font-size: 0.2rem;
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
        }
      }
      .singleFloor1 {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        padding: 0.18rem 0.22rem;
        .text1 {
          font-size: 0.3rem;
          color: #333333;
          width: 20%;
        }
        .text2 {
          width: 100%;
          font-size: 0.26rem;
          color: #666666;
          position: relative;
          height: 0.4rem;
          line-height: 0.4rem;
          span {
            position: absolute;
            left: 0;
            bottom: 0;
          }
        }
      }
      .singleFloor2 {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        padding-left: 0.18rem;
        padding-bottom: 0.21rem;
        .content1 {
          font-size: 0.26rem;
          color: #999999;
          margin-right: 0.61rem;
          img {
            height: 0.25rem;
            float: left;
            margin-top: 0.02rem;
            margin-right: 0.1rem;
          }
        }
      }
    }
  }
}
</style>


