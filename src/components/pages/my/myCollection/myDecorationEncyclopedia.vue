<template>
  <div :class="checkStatus?'pages pb-1':'pages'">
    <div class="header">
      <span>收藏装修百科</span>
      <span class="share" @click="checkAllClick('all')" v-if="!checkStatus">全选</span>
      <span class="share" @click="checkAllClick('cancel')" v-if="checkStatus">取消</span>
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
    </div>
    <div class="content">
      <van-checkbox-group v-model="result" @change="checkChange">
        <div class="single" @click="$router.push('decorationEncyclopediaDetail')" v-for="(item,i) in decorationData" :key="i">
          <div class="singleLeft">
            <div class="leftText1">
              {{item.title}}
            </div>
            <div class="singleText2">
              <span>{{item.add_time}}</span>
              <img src="static/img/yan.png" alt="">
              <span>{{item.view_total}}</span>
            </div>
          </div>
          <div class="singleRight">
            <img v-alzy="item.img" alt="">
            <span class="cancel" v-if="!checkStatus">取消</span>
            <van-checkbox :name="i" class="checkSingle" v-if="checkStatus">
            </van-checkbox>
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
      queryData: {
        ticket: localStorage.getItem("ticket"),
        page: 1,
        page_size: 15,
        type: "wiki"
      },
      decorationData: []
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
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
    },
    getData: function() {
      this.tool
        .request({
          url: "favorite/list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.decorationData = res.data.list;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  .content {
    .single {
      background: #fff;
      display: flex;
      justify-content: flex-start;
      padding: 0.2rem 0.19rem;
      box-sizing: border-box;
      border-bottom: 1px solid #979797;
      .singleLeft {
        width: 100%;
        position: relative;
        .leftText1 {
          font-size: 0.3rem;
          color: #333333;
          letter-spacing: 0;
          margin-top: 0.2rem;
        }
        .singleText2 {
          font-size: 0.26rem;
          color: #999999;
          letter-spacing: 0;
          position: absolute;
          bottom: 0;
          left: 0;
          img {
            height: 0.2rem;
            margin-left: 0.28rem;
            margin-right: 0.1rem;
          }
        }
      }
      .singleRight {
        width: 2.5rem;
        height: 1.7rem;
        position: relative;
        img {
          width: 2.5rem;
          height: 1.7rem;
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
          top: 0.11rem;
          right: 0.11rem;
          text-align: center;
        }
        .checkSingle {
          font-size: 0.2rem;
          position: absolute;
          top: 0.11rem;
          right: 0.11rem;
        }
      }
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
}
</style>


