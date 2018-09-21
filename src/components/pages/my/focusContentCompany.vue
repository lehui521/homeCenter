<template>
  <div :class="checkStatus?'pages pb-1 ':'pages'">
    <div class="header">
      <span>关注装修公司</span>
      <span class="share" @click="checkAllClick('all')" v-if="!checkStatus">全选</span>
      <span class="share" @click="checkAllClick('cancel')" v-if="checkStatus">取消</span>
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
    </div>
    <div class="companyCenter">
      <van-checkbox-group v-model="result" @change="checkChange">
        <div class="company" v-for="(item,index) in companyData" :key="index">
          <div class="companyImg">
            <img src="static/img/shichangtuipian.png" alt="">
          </div>
          <div class="companyContent">
            <div class="name">
              境远装饰
              <span v-if="!checkStatus">取消</span>
              <van-checkbox :name="item" class="checkSingle" v-if="checkStatus">
              </van-checkbox>
            </div>
            <div class="tag">
              <van-tag type="success" plain>推荐</van-tag>
              <van-tag type="success" plain>认证</van-tag>
            </div>
            <div class="address">
              上海真北路520号
            </div>
            <div class="icon">
              <img src="static/img/xin.png" alt="">
              <span>12345</span>
              <img src="static/img/yan.png" alt="">
              <span>65656</span>
            </div>
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
        type: "company"
      },
      companyData: []
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
            this.companyData = res.data.list;
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
  .companyCenter {
    padding: 0.2rem;
    font-size: 0.2rem;
    .company {
      border: 1px solid #efefef;
      margin-top: 0.2rem;
      width: 100%;
      box-shadow: #f1f1f1 2px 2px 5px;
      padding: 0.2rem;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      background: #fff;
      font-size: 0.2rem;
      .companyImg {
        width: 35%;
        height: 1.8rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .companyContent {
        width: 65%;
        padding-left: 0.2rem;
        box-sizing: border-box;
        padding-right: 0.1rem;
        .name {
          font-size: 0.3rem;
          color: #333333;
          font-weight: 500;
          span {
            display: inline-block;
            padding: 2px 10px;
            border-radius: 30px;
            background: #38ba50;
            color: #fff;
            float: right;
            font-size: 0.2rem;
            margin-top: 0.1rem;
          }
          .checkSingle {
            float: right;
          }
        }
        .tag {
          margin-top: 0.1rem;
        }
        .address {
          color: #444444;
          font-size: 0.26rem;
          line-height: 0.55rem;
        }
        .icon {
          font-size: 0.24rem;
          color: #999999;
          margin-top: 0.05rem;
          img {
            height: 0.24rem;
            float: left;
            margin-top: 0.01rem;
          }
          span {
            margin: 0 0.2rem;
            float: left;
          }
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


