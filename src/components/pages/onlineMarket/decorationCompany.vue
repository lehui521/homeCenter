<template>
  <div class="decorationCompany">
    <div class="title" @click="$router.push('decorationCompanyContent')">
      <img src="static/img/zhuangxiugongsi.png" alt="">
      <img src="static/img/rightIcon.png" alt="" class="rightIcon">
    </div>
    <div class="banner">
      <img v-lazy="banner.image" alt="">
    </div>
    <div class="companyCenter">
      <div class="company" v-for="(item,index) in list" :key="index" @click="$router.push('decorationCompanyDetail')">
        <div class="companyImg">
          <img v-lazy="item.avatar" alt="">
        </div>
        <div class="companyContent">
          <div class="name">
            {{item.name}}
            <span>找TA</span>
          </div>
          <div class="tag">
            <van-tag type="success" plain v-for="(tag,i) in item.tag_title" :key="i">{{tag}}</van-tag>
          </div>
          <div class="address">
            {{item.address}}
          </div>
          <div class="icon">
            <div class="iconImg"><img src="static/img/xin.png" alt=""></div>
            <div>
              <span>{{item.star_rank}}</span>
            </div>
            <div class="iconImg"><img src="static/img/yan.png" alt=""></div>
            <div>
              <span>{{item.view_total}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["banner", "list"]
};
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
            padding: 1px 7px;
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
          .iconImg {
            display: flex;
            justify-content: center;
            flex-direction: column;
            img {
              height: 0.24rem;
              margin-right: 0.1rem;
            }
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


