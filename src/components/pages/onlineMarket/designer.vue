<template>
  <div class="designer">
    <div class="title">
      <img src="static/img/shejishi.png" alt="">
      <img src="static/img/rightIcon.png" alt="" class="rightIcon">
    </div>
    <div class="designerContent">
      <div class="designer" v-for="(item,index) in list" :key="index">
        <div class="memberDetail">
          <div class="memberLeft">
            <img v-lazy="item.avatar" alt="" class="tou">
            <p class="heart">
              <img src="static/img/shejishixin.png" alt="">
              <span>{{item.fav_total}}</span>
            </p>
          </div>
          <div class="memberRight">
            <div class="memberName">
              {{item.name}}
              <span @click="$router.push('designerDetail')">找TA</span>
            </div>
            <div class="tag">
              <van-tag type="success" plain v-for="(tag,i) in item.tag_title" :key="i">{{tag}}</van-tag>
            </div>
            <div class="address">
              <span>{{item.province}}</span>
              <span>{{item.year}}</span>
            </div>
            <div class="textD">
              <span v-for="(stag,i) in item.style_title" :key="i">{{stag}}</span>
            </div>
          </div>
        </div>
        <div class="designerImg">
          <img v-lazy="image" alt="" v-for="(image,i) in item.decorator_image" :key="i">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["list"]
};
</script>
<style lang="scss" scoped>
.designer {
  font-size: 0.35rem;
  margin-bottom: 0.3rem;
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
  .designerContent {
    padding: 0.2rem;
    padding-top: 0;
    box-sizing: border-box;
    .designer {
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
              padding: 1px 7px;
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
              // padding-right: 5px;
              box-sizing: border-box;
              position: relative;
            }
            span::after {
              content: "|";
              display: inline-block;
              margin-left: 0.1rem;
            }
            span:last-child::after {
              content: "";
              margin-left: 0;
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


