<template>
  <div class="designerBox">
    <div class="typeList">
      <div class="left" @click="typeClick('style')">
        <span :style="status.typeStatus=='style'?'color:#3CB850;':''">风格</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='style'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
      <div class="right" @click="typeClick('sort')">
        <span :style="status.typeStatus=='sort'?'color:#3CB850;':''">排序</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='sort'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
    </div>
    <div class="designerTypeMask" v-if="status.typeStatus!==''">
      <!-- 风格 -->
      <div class="typeContent" v-if="status.typeStatus=='style'">
        <div class=" local" v-for="i in 5" :key="i">不限</div>
      </div>
      <!-- 排序 -->
      <div v-if="status.typeStatus=='sort'" class="typeContentT">
        <div class="sortType">默认排序</div>
        <div class="sortType">关注最多</div>
        <div class="sortType">浏览最多</div>
        <div class="sortType">成交最多</div>
        <div class="sortType">星级最多</div>
      </div>
    </div>
    <div class="designerContent">
      <div class="designer" v-for="(item,index) in [1,2,3]" :key="index">
        <div class="memberDetail">
          <div class="memberLeft">
            <img src="static/img/touxiang.jpg" alt="" class="tou">
            <p class="heart">
              <img src="static/img/shejishixin.png" alt="">
              <span>551</span>
            </p>
          </div>
          <div class="memberRight">
            <div class="memberName">
              呵呵哒
              <span>找TA</span>
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
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      status: {
        typeStatus: ""
      }
    };
  },
  methods: {
    typeClick: function(res) {
      if (this.status.typeStatus == res) {
        return (this.status.typeStatus = "");
      }
      this.status.typeStatus = res;
    }
  }
};
</script>
<style lang="scss" scoped>
.designerBox {
  font-size: 0.35rem;
  margin-bottom: 0.3rem;
  .typeList {
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
    height: 0.9rem;
    font-size: 0.28rem;
    color: #666666;
    letter-spacing: 0;
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 0.21rem;
    box-sizing: border-box;
    line-height: 0.48rem;
    background: #fff;
    .left {
      width: 50%;
      position: relative;
      border-right: 1px solid #d5d5d5;
      img {
        width: 0.14rem;
        position: absolute;
        top: 0.2rem;
      }
      span {
        margin-right: 0.1rem;
      }
    }
    .right {
      width: 50%;
      position: relative;
      img {
        width: 0.14rem;
        position: absolute;
        top: 0.2rem;
      }
      span {
        margin-right: 0.1rem;
      }
    }
  }
  .designerTypeMask {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 1.78rem;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 999;
    .typeContent {
      width: 100%;
      background: #fff;
      display: flex;
      justify-content: space-between;
      padding: 0 0.3rem;
      box-sizing: border-box;
      flex-flow: wrap;
      padding-bottom: 0.32rem;
      .local {
        background: #f4f4f4;
        color: #666666;
        font-size: 0.28rem;
        height: 0.6rem;
        width: 1.5rem;
        text-align: center;
        line-height: 0.6rem;
        border-radius: 0.08rem;
        margin-top: 0.32rem;
      }
    }
    .typeContentT {
      background: #fff;
      .sortType {
        height: 0.74rem;
        line-height: 0.74rem;
        font-size: 0.24rem;
        color: #666666;
        border-bottom: 1px solid #d5d5d5;
        text-align: center;
      }
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
}
</style>


