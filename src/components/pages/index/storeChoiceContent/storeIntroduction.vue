<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="content">
      <div class="title">
        <div class="iconImg ppjs">
          <img src="static/img/ppjs.png" alt="">
        </div>
        <div class="titleText">品牌介绍</div>
      </div>
      <div class="titleContent">
        {{shopData.brand_info}}
      </div>
      <div class="title">
        <div class="iconImg jyfw">
          <img src="static/img/jyfw.png" alt="">
        </div>
        <div class="titleText">经营范围</div>
      </div>
      <div class="titleContent">
        {{shopData.business_info}}
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
          <img src="static/img/fwbz.png" alt="">
        </div>
        <div class="titleText">服务保障</div>
      </div>
      <div class="titleContent">
        &nbsp;
      </div>

      <div class="title">
        <div class="iconImg jyfw">
          <img src="static/img/yyzs.png" alt="">
        </div>
        <div class="titleText">营业证书</div>
      </div>
      <div class="titleContent businessImg">
        <div class="yimg" v-for="(item,i) in shopData.license_image" :key="i">
          <img :src="item" alt="">
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
        title: "我乐橱柜",
        type: "H5"
      },
      shopData: {}
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.tool
        .request({
          url: "shop/info",
          method: "post",
          params: {
            shop_id: this.$route.query.shop_id
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.shopData = res.data.shop_info;
          }
        });
    }
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


