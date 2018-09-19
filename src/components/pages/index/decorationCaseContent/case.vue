<template>
  <div class="case">
    <div class="typeList">
      <div class="left" @click="typeClick('style')">
        <span :style="status.typeStatus=='style'?'color:#3CB850;':''">风格</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='style'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
      <div class="left" @click="typeClick('homeSize')">
        <span :style="status.typeStatus=='homeSize'?'color:#3CB850;':''">户型</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='homeSize'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
      <div class="left" @click="typeClick('size')">
        <span :style="status.typeStatus=='size'?'color:#3CB850;':''">面积</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='size'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
      <div class="right" @click="typeClick('sort')">
        <span :style="status.typeStatus=='sort'?'color:#3CB850;':''">排序</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='sort'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
    </div>
    <div class="caseTypeMask" v-if="status.typeStatus!==''">
      <!-- 风格 -->
      <div class="typeContent" v-if="status.typeStatus=='style'">
        <div class=" local" v-for="i in 5" :key="i">不限</div>
      </div>
      <!-- 户型 -->
      <div class="typeContent" v-if="status.typeStatus=='homeSize'">
        <div class=" local" v-for="i in 5" :key="i">
          欧美
        </div>
      </div>
      <!-- 面积 -->
      <div class="typeContent" v-if="status.typeStatus=='size'">
        <div class=" local" v-for="i in 5" :key="i">
          50平以下
        </div>
      </div>
      <!-- 排序 -->
      <div v-if="status.typeStatus=='sort'" class="typeContentT">
        <div class="sortType">默认排序</div>
        <div class="sortType">收藏最多</div>
        <div class="sortType">浏览最多</div>
      </div>
    </div>
    <div class="caseContent">
      <div class="single" v-for="(item,index) in caseData" :key="index">
        <div class="singleImg">
          <img v-lazy="item.image" alt="">
        </div>
        <div class="singleFloor1">
          <div class="text1">{{item.title}}</div>
          <div class="text2">
            <span>{{item.city}}|{{item.community}}</span>
          </div>
        </div>
        <div class="singleFloor2">
          <div class="content1">
            <div class="contentImg">
              <img src="static/img/grayStar.png" alt="">
            </div>
            <span>{{item.fav_total}}</span>
          </div>
          <div class="content1">
            <div class="contentImg">
              <img src="static/img/yan.png" alt="">
            </div>
            <span>{{item.view_total}}</span>
          </div>
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
        typeStatus: "",
        showTypeStatus: false
      },
      queryData: {
        city_id: JSON.parse(localStorage.getItem("cityData")).city_id,
        market_id: "",
        page_size: 10,
        page: 1
      },
      caseData: []
    };
  },
  created: function() {
    if (localStorage.getItem("marketData")) {
      this.queryData.market_id = JSON.parse(
        localStorage.getItem("marketData")
      ).market_id;
    } else {
      return this.$dialog
        .alert({
          title: "提示",
          message: "请选择市场"
        })
        .then(() => {
          this.$router.push("marketList");
        });
    }
    this.getCaseData();
  },
  methods: {
    typeClick: function(res) {
      this.status.showTypeStatus = true;
      if (this.status.typeStatus == res) {
        return (this.status.typeStatus = "");
      }
      this.status.typeStatus = res;
    },
    getCaseData: function() {
      this.tool
        .request({
          url: "decorator/case_list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.caseData = res.data.list;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.case {
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
    position: fixed;
    top: 0.88rem;
    left: 0;
    width: 100%;

    .left {
      width: 25%;
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
      width: 25%;
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
  .caseTypeMask {
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
  .caseContent {
    .single {
      background: #fff;
      .singleImg {
        width: 100%;
        height: 4.74rem;
        img {
          height: 100%;
          width: 100%;
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
          .contentImg {
            float: left;
            margin-right: 0.1rem;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            img {
              height: 0.25rem;
            }
          }
        }
      }
    }
  }
}
</style>


