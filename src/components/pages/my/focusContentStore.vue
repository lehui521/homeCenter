<template>
  <div :class="checkStatus?'pages pb-1 ':'pages'">
    <div class="header">
      <span>关注商场店铺</span>
      <span class="share" @click="checkAllClick('all')" v-if="!checkStatus">全选</span>
      <span class="share" @click="checkAllClick('cancel')" v-if="checkStatus">取消</span>
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
    </div>
    <div class="storeList">
      <van-checkbox-group v-model="result" @change="checkChange">
        <div class="market" v-for="(item,index) in storeData" :key="index">
          <div class="marketImg">
            <img v-lazy="item.image" alt="">
          </div>
          <div class="marketText">
            <div class="marketName">
              <span class="name">{{item.name}}</span>
              <span class="cancel" v-if="!checkStatus">取消</span>
              <van-checkbox :name="item" v-if="checkStatus" class="checkBox">
              </van-checkbox>
            </div>
            <div class="marketTag">
              <van-tag type="success" plain>{{item.category_name}}</van-tag>
              <!-- <van-tag type="success" plain>灯饰</van-tag> -->
            </div>
            <div class="marketPhone">
              <span>{{item.contact}}</span>
            </div>
            <div class="marketAddress">
              <span>{{item.address}}</span>
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
      storeData: [],
      queryData: {
        ticket: localStorage.getItem("ticket"),
        page: 1,
        page_size: 15,
        type: "shop"
      }
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
            this.storeData = res.data.list;
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
  .storeList {
    position: relative;
    .market {
      background: #fff;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #d5d5d5;
      padding: 15px 8px;
      .marketImg {
        width: 40%;
        box-sizing: border-box;
        padding: 0.1rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .marketText {
        width: 60%;
        padding: 0.1rem;
        .marketName {
          display: flex;
          justify-content: space-between;
          position: relative;
          .name {
            font-size: 0.3rem;
            font-weight: 540;
            display: inline-block;
            line-height: 0.4rem;
            font-size: 0.24rem;
          }
          .cancel {
            display: inline-block;
            padding: 2px 10px;
            border-radius: 30px;
            background: #38ba50;
            color: #fff;
            float: right;
            font-size: 0.2rem;
          }
          .checkBox {
            position: absolute;
            font-size: 0.2rem;
            top: 0;
            right: 0;
          }
        }
      }
      .marketTag {
        margin: 0.1rem 0;
        font-size: 0.22rem;
      }
      .marketPhone {
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;
        // margin-bottom: 0.1rem;
        font-size: 0.24rem;
        color: #444444;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          width: 100%;
          box-sizing: border-box;
        }
      }
      .marketAddress {
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;
        margin-bottom: 0.1rem;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          width: 100%;
          box-sizing: border-box;
          font-size: 0.24rem;
          color: #444444;
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


