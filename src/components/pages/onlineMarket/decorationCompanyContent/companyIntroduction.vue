<template>
    <div class="pages">
        <HeaderSame :headerObj="headerObj"></HeaderSame>
        <div class="content">
            <div class="title">
                <div class="iconImg ppjs">
                    <img src="static/img/ppjs.png" alt="">
                </div>
                <div class="titleText">公司介绍</div>
            </div>
            <div class="titleContent">
                asdsad
            </div>

            <div class="title">
                <div class="iconImg jyfw">
                    <img src="static/img/jyfw.png" alt="">
                </div>
                <div class="titleText">服务区域</div>
            </div>
            <div class="titleContent">
                asdasd
            </div>

            <!-- <div class="title">
        <div class="iconImg"></div>
        <div class="titleText">店铺地址</div>
      </div>
      <div class="titleContent">
        {{shopData.city+shopData.market_place}}
      </div> -->
            <div class="title">
                <div class="iconImg jyfw">
                    <img src="static/img/yyzs.png" alt="">
                </div>
                <div class="titleText">公司资质</div>
            </div>
            <div class="titleContent">
                &nbsp;
            </div>

            <div class="title">
                <div class="iconImg jyfw">
                    <img src="static/img/gssj.png" alt="">
                </div>
                <div class="titleText">公司实景</div>
            </div>
            <div class="titleContent businessImg">
                <div class="yimg" v-for="(item,i) in [1,2]" :key="i">
                    <img src="static/img/banner1.png" alt="">
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
        title: "装修公司简介"
      },
      shopData: {}
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData: function() {}
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  font-size: 0.3rem;
  color: #333333;
  background: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  .content {
    padding: 0.3rem 0.12rem;
    box-sizing: border-box;
    .title {
      display: flex;
      justify-content: flex-start;
      height: 0.5rem;
      line-height: 0.5rem;
      .iconImg {
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      .ppjs {
        width: 0.36rem;
        img {
          width: 100%;
        }
      }
      .jyfw {
        width: 0.34rem;
        img {
          width: 100%;
        }
      }
      .titleText {
        font-size: 0.3rem;
        color: #3cb850;
        margin-left: 0.25rem;
      }
    }
    .titleContent {
      font-size: 0.28rem;
      color: #999999;
      margin: 0.23rem 0;
      line-height: 0.45rem;
    }
    .businessImg {
      display: flex;
      justify-content: flex-start;
      .yimg {
        width: 2.5rem;
        height: 2rem;
        margin-right: 0.3rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>


