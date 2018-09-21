<template>
  <div :class="checkStatus?'pages pb-1 ':'pages'">
    <div class="header">
      <span>关注设计师</span>
      <span class="share" @click="checkAllClick('all')" v-if="!checkStatus">全选</span>
      <span class="share" @click="checkAllClick('cancel')" v-if="checkStatus">取消</span>
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
    </div>
    <div class="designerContent">
      <van-checkbox-group v-model="result">

        <div class="designer" v-for="(item,index) in designerData" :key="index">
          <div class="memberDetail">
            <div class="memberLeft">
              <img src="static/img/touxiang.jpg" alt="" class="tou">
              <div class="heart">
                <img src="static/img/shejishixin.png" alt="">
                <span>551</span>
              </div>
            </div>
            <div class="memberRight">
              <div class="memberName">
                呵呵哒
                <span v-if="!checkStatus">取消</span>
                <van-checkbox :name="item" class="cancelCheck" v-if="checkStatus">
                </van-checkbox>
              </div>
              <div class="tag">
                <van-tag type="success" plain>明星</van-tag>
                <van-tag type="success" plain>资深</van-tag>
              </div>
              <div class="address">
                <span>上海市</span>
                <span>15年</span>
              </div>
              <div class="textD">
                <span>现代</span>
                <span>简欧</span>
                <span>美式</span>
                <span>北欧</span>
              </div>
            </div>
          </div>
          <div class="designerImg">
            <img src="static/img/shichangtuipian.png" alt="">
            <img src="static/img/shichangtuipian.png" alt="">
            <img src="static/img/shichangtuipian.png" alt="">
          </div>
        </div>
      </van-checkbox-group>
    </div>
    <div class="cancelFocus" :style="checkStatus?'height:1rem':''">取消收藏</div>
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
        type: "designer"
      },
      designerData: []
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
            this.designerData = res.data.list;
          }
        });
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
    z-index: 99999;
    border-bottom: 1px solid #d5d5d5;
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
  .designerContent {
    padding: 0.2rem;
    box-sizing: border-box;
    .designer {
      background: #fff;
      border: 1px solid #efefef;
      margin-top: 0.2rem;
      width: 100%;
      box-shadow: #f1f1f1 2px 2px 5px;
      padding: 0.46rem 0.26rem;
      box-sizing: border-box;
      .memberDetail {
        display: flex;
        justify-content: space-between;
        .memberLeft {
          width: 35%;
          text-align: center;
          .tou {
            height: 1.26rem;
            border-radius: 50%;
          }
          .heart {
            font-size: 0.24rem;
            color: #38ba50;
            text-align: center;
            margin-top: 0.14rem;
            img {
              height: 0.24rem;
              margin-right: 5px;
            }
          }
        }
        .memberRight {
          width: 65%;
          .memberName {
            color: #333333;
            font-size: 0.3rem;
            font-weight: 500;
            span {
              display: inline-block;
              padding: 2px 10px;
              border-radius: 30px;
              background: #38ba50;
              color: #fff;
              float: right;
              font-size: 0.2rem;
            }
            .cancelCheck {
              float: right;
            }
          }
          .tag {
            margin-top: 0.1rem;
          }
          .address {
            font-size: 0.26rem;
            color: #666666;
            font-weight: 500;
            margin-top: 0.1rem;
            span {
              margin-right: 0.1rem;
            }
          }
          .textD {
            margin-top: 0.1rem;
            font-size: 0.26rem;
            color: #999999;
            span {
              display: inline-block;
              border-right: 1px solid #d5d5d5;
              padding-right: 5px;
              box-sizing: border-box;
            }
            span:last-child {
              border-right: 0;
            }
          }
        }
      }
      .designerImg {
        display: flex;
        justify-content: space-between;
        margin-top: 0.1rem;
        img {
          display: inline-block;
          height: 1.6rem;
          margin-right: 0.14rem;
          width: 32%;
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


