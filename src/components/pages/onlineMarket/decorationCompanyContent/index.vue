<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="banner">
      <img src="static/img/banner1.png" alt="">
    </div>
    <div class="typeList">
      <div class="left" @click="typeClick('screen')">
        <span :style="status.typeStatus=='screen'?'color:#3CB850;':''">筛选</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='screen'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
      <div class="right" @click="typeClick('sort')">
        <span :style="status.typeStatus=='sort'?'color:#3CB850;':''">排序</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='sort'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
    </div>
    <div class="companyCenter">
      <div class="designerTypeMask" v-if="status.typeStatus!==''">
        <!-- 筛选 -->
        <div class="typeContent" v-if="status.typeStatus=='screen'">
          <div class="screenContent">
            <div class="screenTitle">服务保障</div>
            <div class="screenList">
              <div class=" local" v-for="i in 5" :key="i">不限</div>
            </div>
          </div>
          <div class="typeButton">
            <div class="btn1">重置</div>
            <div class="btn2">确定</div>
          </div>
        </div>
        <!-- 排序 -->
        <div v-if="status.typeStatus=='sort'" class="typeContentT">
          <div class="sortType">关注最多</div>
          <div class="sortType">离我最近</div>
          <div class="sortType">评分最高</div>
        </div>
      </div>
      <!-- 内容 -->
      <div class="company" v-for="(item,index) in [1,2,3]" :key="index">
        <div class="companyImg">
          <img src="static/img/shichangtuipian.png" alt="">
        </div>
        <div class="companyContent">
          <div class="name">
            境远装饰
            <span>找TA</span>
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
    </div>

  </div>
</template>
<script>
import HeaderSame from "../../../common/sameHeader.vue";
export default {
  components: { HeaderSame },
  data: function() {
    return {
      headerObj: {
        title: "装修公司",
        img: "static/img/sousuo.png",
        text: "decorationCompany"
      },
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
.pages {
  padding-top: 0.88rem;
  .banner {
    height: 3.46rem;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
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
  .companyCenter {
    padding: 0.2rem;
    font-size: 0.3rem;
    position: relative;
    .designerTypeMask {
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      left: 0;
      z-index: 999;
      .typeContent {
        width: 100%;
        background: #fff;

        .typeButton {
          display: flex;
          justify-content: space-between;
          margin-top: 0.5rem;
          .btn1 {
            width: 50%;
            height: 1rem;
            text-align: center;
            line-height: 1rem;
            font-size: 0.3rem;
            color: #3cb850;
          }
          .btn2 {
            width: 50%;
            height: 1rem;
            text-align: center;
            line-height: 1rem;
            font-size: 0.3rem;
            background: #3cb850;
            color: #fff;
          }
        }
        .screenContent {
          padding: 0 0.3rem;
          box-sizing: border-box;
          padding-bottom: 0.32rem;
          .screenTitle {
            font-size: 0.3rem;
            color: #333333;
            padding-top: 0.21rem;
          }
          .screenList {
            display: flex;
            justify-content: space-between;
            flex-flow: wrap;
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
}
</style>


