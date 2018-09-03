<template>
  <div class="pages" id="marketList">
    <div class="header">
      <div class="back">
        <img src="static/img/leftArrow.png" alt="" class="headerImg" @click="$router.go(-1)">
      </div>
      <div class="searchInput">
        <div class="searchIcon">
          <van-icon name="search" />
        </div>
        <div class="input">
          <input type="text" placeholder="请输入市场名称" @keyup.enter.native="search" @focus="status.searchStatus=false" @blur="status.searchStatus=true">
        </div>
      </div>
    </div>
    <div v-if="status.searchStatus">
      <div class="banner">
        <img src="static/img/banner1.png" alt="">
      </div>
      <div class="typeList">
        <div class="left" @click="typeClick('type')">
          <span :style="status.typeStatus=='type'?'color:#3CB850;':''">主营业务</span>
          <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='type'">
          <img src="static/img/grayDown.png" alt="" v-else>
        </div>
        <div class="right" @click="typeClick('sort')">
          <span :style="status.typeStatus=='sort'?'color:#3CB850;':''">排序</span>
          <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='sort'">
          <img src="static/img/grayDown.png" alt="" v-else>
        </div>
      </div>
      <div class="content">
        <div class="market" v-for="(item,index) in [1,2,3]" :key="index">
          <div class="marketImg">
            <img src="static/img/shichangtuipian.png" alt="">
          </div>
          <div class="marketText">
            <div class="marketName">
              <span class="name">上海家饰佳徐汇店</span>
              <span>64m</span>
            </div>
            <div class="marketTag">
              <van-tag type="success" plain>家具</van-tag>
              <van-tag type="success" plain>灯饰</van-tag>
            </div>
            <div class="marketPhone">
              <div class="icon">
                <img src="static/img/dianhua.png" alt="">
              </div>
              <span>15252111236</span>
            </div>
            <div class="marketAddress">
              <div class="icon">
                <img src="static/img/dizhi.png" alt="">
              </div>
              <span>上海市徐汇区凯旋路552号</span>
            </div>
            <div class="marketHot">
              <div class="icon">
                <img src="static/img/re.png" alt="">
              </div>
              <span>市场新开业，品牌大放价</span>
            </div>
          </div>
        </div>
      </div>
      <div class="typeMask" v-if="status.typeStatus!==''">
        <div class="maskContent" v-if="status.typeStatus=='type'">
          <div class="singleTop">不限</div>
          <van-checkbox-group v-model="result">
            <van-cell-group>
              <van-cell v-for="item in [1,2,3]" clickable :key="item" :title="`复选框 ${item}`" class="singleCheck">
                <van-checkbox :name="item" ref="checkboxes" />
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
          <div class="singleButton">
            <button>确定</button>
          </div>
        </div>
        <div class="maskContent" v-if="status.typeStatus=='sort'">
          <div class="singleTop">不限</div>
          <van-checkbox-group v-model="result">
            <van-cell-group>
              <van-cell v-for="item in [1,2,3]" clickable :key="item" :title="`建材 ${item}`" class="singleCheck">
                <van-checkbox :name="item" ref="checkboxes" />
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
          <div class="singleButton">
            <button>确定</button>
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
        showTypeStatus: false,
        searchStatus: true
      },
      result: []
    };
  },
  methods: {
    search: function() {},
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
  .header {
    height: 0.88rem;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    .back {
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      left: 0.3rem;
      top: 0;
      .headerImg {
        height: 0.32rem;
      }
    }
  }

  .searchInput {
    width: 5.6rem;
    height: 0.56rem;
    margin: auto;
    margin-top: 0.16rem;
    display: flex;
    justify-content: flex-start;
    .searchIcon {
      font-size: 0.26rem;
      background: #f1f2f6;
      width: 0.68rem;
      text-align: center;
      height: 0.56rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .input {
      width: 100%;
      font-size: 0.26rem;
      height: 100%;
      input {
        background: #f1f2f6;
        border: 0;
        outline: none;
        border-radius: 2px;
        height: 100%;
        font-size: 0.26rem;
        width: 100%;
        padding: 0;
      }
    }
  }
  .banner {
    width: 100%;
    height: 1.92rem;
    img {
      width: 100%;
      height: 100%;
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
  .content {
    .market {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #d5d5d5;
      padding: 15px 8px;
      background: #fff;
      .marketImg {
        width: 40%;
        box-sizing: border-box;
        padding: 0.1rem;
        img {
          width: 100%;
        }
      }
      .marketText {
        width: 60%;
        padding: 0.1rem;
        .marketName {
          display: flex;
          justify-content: space-between;
          span {
            display: inline-block;
            line-height: 0.4rem;
            font-size: 0.24rem;
          }
          .name {
            font-size: 0.3rem;
            font-weight: 540;
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
        margin-bottom: 0.1rem;
        font-size: 0.24rem;
        color: #444444;
        display: flex;
        justify-content: flex-start;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          width: 100%;
          padding-left: 0.2rem;
          box-sizing: border-box;
        }
        .icon {
          height: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          img {
            height: 0.24rem;
          }
        }
      }
      .marketAddress {
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;
        margin-bottom: 0.1rem;
        display: flex;
        justify-content: flex-start;
        .icon {
          height: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          img {
            height: 0.24rem;
          }
        }
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          width: 100%;
          padding-left: 0.2rem;
          box-sizing: border-box;
          font-size: 0.24rem;
          color: #444444;
        }
      }
      .marketHot {
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;
        display: flex;
        justify-content: flex-start;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          width: 100%;
          padding-left: 0.2rem;
          box-sizing: border-box;
          font-size: 0.24rem;
          color: #444444;
        }
        .icon {
          height: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          img {
            height: 0.24rem;
          }
        }
      }
    }
    .market:last-of-type {
      border-bottom: 0;
    }
  }
  .typeMask {
    position: fixed;
    top: 3.7rem;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    left: 0;
    height: 100%;
    .maskContent {
      background: #fff;
      width: 100%;
      padding-left: 0.3rem;
      box-sizing: border-box;
      .singleTop {
        height: 0.9rem;
        border-bottom: 1px solid #dddddd;
        font-size: 0.3rem;
        color: #737373;
        letter-spacing: 0;
        background: #fff;
        width: 100%;
        line-height: 0.9rem;
        padding-left: 0.1rem;
        box-sizing: border-box;
      }
      .singleButton {
        height: 0.9rem;
        font-size: 0.3rem;
        padding-top: 0.1rem;
        button {
          width: 6.9rem;
          height: 0.8rem;
          border: 0;
          background: #3cb953;
          line-height: 0.8rem;
          text-align: center;
          color: #fff;
          font-size: 0.3rem;
          border-radius: 4px;
        }
      }
      .singleCheck {
        font-size: 0.3rem;
        color: #737373;
        padding: 0;
        height: 0.9rem;
        border-bottom: 1px solid #dddddd;
        line-height: 0.9rem;
        padding-left: 0.1rem;
        box-sizing: border-box;
        padding-right: 0.4rem;
      }
    }
  }
}
</style>


