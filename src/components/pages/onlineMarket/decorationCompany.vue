<template>
  <div class="decorationCompany">
    <div class="title" @click="$router.push('decorationCompanyContent')">
      <img src="static/img/zhuangxiugongsi.png" alt="">
      <img src="static/img/rightIcon.png" alt="" class="rightIcon">
    </div>
    <div class="banner">
      <img src="static/img/discountBanner.png" alt="">
    </div>
    <div class="companyCenter">
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
            <div><img src="static/img/xin.png" alt=""></div>
            <div>
              <span>12345</span>
            </div>
            <div><img src="static/img/yan.png" alt=""></div>
            <div>
              <span>65656</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.decorationCompany {
  font-size: 0.3rem;
  .title {
    text-align: center;
    padding: 0.36rem 0;
    position: relative;
    img {
      height: 0.28rem;
    }
    .rightIcon {
      position: absolute;
      top: 0.38rem;
      height: 0.24rem;
      right: 0.3rem;
    }
  }
  .banner {
    height: 2.6rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .companyCenter {
    padding: 0.2rem;
    .company {
      border: 1px solid #efefef;
      margin-top: 0.2rem;
      width: 100%;
      box-shadow: #f1f1f1 2px 2px 5px;
      padding: 0.2rem;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
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
          display: flex;
          justify-content: flex-start;
          img {
            height: 0.24rem;
            margin-right: 0.1rem;
          }
          span {
            margin-right: 0.3rem;
          }
        }
      }
    }
  }
}
</style>


