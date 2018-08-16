<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="typeList">
      <div class="left" @click="typeClick('price')">
        <span :style="status.typeStatus=='price'?'color:#3CB850;':''">价格</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='price'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
      <div class="right" @click="typeClick('sort')">
        <span :style="status.typeStatus=='sort'?'color:#3CB850;':''">排序</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='sort'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
    </div>
    <div class="typeMask" v-if="status.typeStatus!==''">
      <div class="priceType" v-if="status.typeStatus=='price'">
        <div class="single">由高到低</div>
        <div class="single">由低到高</div>
      </div>
      <div class="sortType" v-if="status.typeStatus=='sort'">
        <div class="single">默认排序</div>
        <div class="single">新品优先</div>
        <div class="single singleActive">
          <span class="low">最低价</span>
          <span>——</span>
          <span class="height">最高价</span>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="productChoiceContent">
      <div class="list" v-for="(item,index) in [1,2,3,4]" :key="index">
        <div class="price">￥5555</div>
        <img src="static/img/shichangtuipian.png" alt="">
        <div class="listName">
          秋夕-现代橱柜
        </div>
        <div class="text">
          <span class="name">九牧恒大店</span>
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
        title: "商品精选",
        img: "static/img/sousuo.png",
        text: "productChoice"
      },
      status: {
        typeStatus: "",
        showTypeStatus: false
      }
    };
  },
  methods: {
    typeClick: function(res) {
      this.status.showTypeStatus = true;
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
    div:first-child {
      border-right: 1px solid #d5d5d5;
    }
    .left {
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
  .typeMask {
    position: fixed;
    top: 1.78rem;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    .priceType {
      text-align: center;
      font-size: 0.24rem;
      color: #666666;
      letter-spacing: 0;
      background: #fff;
      .single {
        border-bottom: 1px solid #d5d5d5;
        height: 0.74rem;
        line-height: 0.74rem;
      }
      .singleActive {
        color: #3cb850;
      }
    }
    .sortType {
      text-align: center;
      font-size: 0.24rem;
      color: #666666;
      letter-spacing: 0;
      background: #fff;
      .single {
        border-bottom: 1px solid #d5d5d5;
        height: 0.74rem;
        line-height: 0.74rem;
        .low,
        .height {
          display: inline-block;
          width: 0.74rem;
          height: 0.32rem;
          border-radius: 0.04rem;
          text-align: center;
          line-height: 0.32rem;
          font-size: 0.2rem;
          border: 1px solid #999999;
        }
      }
      .singleActive {
        color: #3cb850;
        .low,
        .height {
          border: 1px solid #3cb850;
        }
      }
    }
  }
  .productChoiceContent {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 0.2rem;
    .list {
      width: 3.46rem;
      padding: 0.1rem;
      box-sizing: border-box;
      box-shadow: #dedede 2px 5px 10px;
      margin-top: 0.2rem;
      position: relative;
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
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>


