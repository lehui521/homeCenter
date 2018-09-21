<template>
  <div :class="checkStatus?'pages pb-1':'pages'">
    <div class="header">
      <span>收藏精选商品</span>
      <span class="share" @click="checkAllClick('all')" v-if="!checkStatus">全选</span>
      <span class="share" @click="checkAllClick('cancel')" v-if="checkStatus">取消</span>
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
    </div>
    <van-checkbox-group v-model="result" @change="checkChange">
      <div class="center">
        <div class="list" v-for="(item,index) in salesData" :key="index" @click="$router.push('productDetail')">
          <div class="price">￥{{item.price}}</div>
          <img v-lazy="item.image" alt="">
          <div class="listName">
            {{item.name}}
          </div>
          <div class="text">
            <span class="name" style="padding-right:0.1rem;">{{item.shop_info.name}}
            </span>
            <span class="name">{{item.market_name}}</span>
          </div>
          <span class="cancel" v-if="!checkStatus">取消</span>
          <van-checkbox :name="item" class="checkSingle" v-if="checkStatus">
          </van-checkbox>
        </div>
      </div>
    </van-checkbox-group>
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
        type: "goods"
      },
      salesData: []
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
        this.result = [1, 2, 3, 4];
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
            this.salesData = res.data.list;
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
  .center {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 0.2rem;
    font-size: 0.16rem;
    .list {
      width: 3.46rem;
      padding: 0.1rem;
      box-sizing: border-box;
      box-shadow: #dedede 2px 5px 10px;
      margin-top: 0.2rem;
      position: relative;
      font-size: 0.16rem;
      img {
        width: 3.26rem;
        height: 2.04rem;
      }
      .listName {
        font-weight: 500;
        text-align: center;
        color: #333333;
        font-size: 0.24rem;
      }
      .price {
        position: absolute;
        top: 0.3rem;
        background-color: #fff;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        text-align: left;
        padding: 2px 0;
        padding-left: 3px;
        padding-right: 6px;
        font-size: 0.16rem;
        color: #fbb0b0;
      }
      .text {
        text-align: right;
        color: #666666;
        font-size: 0.18rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .name {
          margin-top: 5px;
          display: inline-block;
          width: 50%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: left;
          box-sizing: border-box;
        }
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
        top: 0.22rem;
        right: 0.22rem;
        text-align: center;
      }
      .checkSingle {
        font-size: 0.2rem;
        position: absolute;
        top: 0.22rem;
        right: 0.22rem;
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


