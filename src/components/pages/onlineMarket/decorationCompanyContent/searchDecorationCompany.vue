<template>
    <div class="pages">
        <searchHeader @searchClick="handleSearch"></searchHeader>
        <!-- 内容 -->
        <div class="companyCenter" v-if="true">
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
        <div class="noProduct" v-else>
            <img src="static/img/noProduct.png" alt="">
            <div class="text">未搜索到相关商品</div>
        </div>
    </div>
</template>
<script>
import searchHeader from "../../../common/sameSearch.vue";
export default {
  components: { searchHeader },
  data: function() {
    return {};
  },
  methods: {
    handleSearch: function(res) {
      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  .header {
    height: 0.88rem;
    background: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    font-size: 0.26rem;
    color: #666666;
    box-sizing: border-box;
    padding: 0.08rem 0.17rem;
    display: flex;
    justify-content: space-between;
    .input {
      width: 70%;
      position: relative;
      input {
        background: #f1f2f6;
        border: 0;
        outline: none;
        border-radius: 2px;
        height: 100%;
        font-size: 0.26rem;
        width: 100%;
        padding-left: 0.6rem;
        box-sizing: border-box;
      }
    }
    .cancel {
      display: inline-block;
      width: 15%;
      text-align: center;
      line-height: 0.65rem;
      border: 1px solid #fff;
    }
    .search {
      display: inline-block;
      color: #38f;
      width: 15%;
      text-align: center;
      line-height: 0.65rem;
      border: 1px solid #fff;
    }
    .searchIcon {
      box-sizing: border-box;
      height: 100%;
      line-height: 0.88rem;
      position: absolute;
      left: 0.15rem;
      top: 0;
    }
  }
  .companyCenter {
    padding: 0.2rem;
    font-size: 0.3rem;
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
  .noProduct {
    text-align: center;
    margin-top: 4rem;
    font-size: 0.26rem;
    color: #adb0b5;
    img {
      height: 1.1rem;
    }
    .text {
      margin-top: 0.44rem;
    }
  }
}
</style>

