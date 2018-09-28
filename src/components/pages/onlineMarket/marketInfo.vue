<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="contentBox">
      <div class="headerTitle">
        <div class="titleIcon">
          <img src="static/img/ppjs.png" alt="">
        </div>
        <div class="titleText">市场介绍</div>
      </div>
      <div class="titleContent">
        {{marketInfo.info}}
      </div>
      <!-- 经营范围 -->
      <div class="headerTitle">
        <div class="titleIcon">
          <img src="static/img/jyfw.png" alt="">
        </div>
        <div class="titleText">经营范围</div>
      </div>
      <div class="titleContent">
        {{marketInfo.business_scope}}
      </div>
      <!-- 商城地址 -->
      <div class="headerTitle">
        <div class="titleIcon">
          <img src="static/img/scdizhi.png" alt="">
        </div>
        <div class="titleText">商城地址</div>
      </div>
      <div class="titleContent titleFlex">
        <div>{{marketInfo.address}}</div>
        <div class="rightImg">
          <img src="static/img/fanhui.png" alt="">
        </div>
      </div>
      <!-- 服务电话 -->
      <div class="headerTitle">
        <div class="titleIcon scdianhua">
          <img src="static/img/scdianhua.png" alt="">
        </div>
        <div class="titleText">服务电话</div>
      </div>
      <div class="titleContent">
        {{marketInfo.contact}}
      </div>
      <!-- 市场地图 -->
      <div class="headerTitle">
        <div class="titleIcon">
          <img src="static/img/scditu.png" alt="">
        </div>
        <div class="titleText">市场地图</div>
        <div class="rightImgC"><img src="static/img/fanhui.png" alt=""></div>
      </div>
      <!-- 其它 -->
      <div class="headerTitle">
        <div class="titleIcon">
          <img src="static/img/scqita.png" alt="">
        </div>
        <div class="titleText">其它</div>
      </div>
      <div class="titleContent">
        {{marketInfo.other}}
      </div>
    </div>
  </div>
</template>
<script>
import HeaderSame from "../../common/sameHeader.vue";
export default {
  components: { HeaderSame },
  data: function() {
    return {
      headerObj: {
        title: "市场简介",
        img: ""
      },
      marketData: {},
      marketInfo: {}
    };
  },
  created: function() {
    this.marketData = JSON.parse(localStorage.getItem("marketData"));
    this.getData();
    // console.log(this.marketData);
  },
  methods: {
    getData: function() {
      this.tool
        .request({
          url: "v3_market/index",
          method: "post",
          params: {
            market_id: this.marketData.market_id,
            lng: this.marketData.lng,
            lat: this.marketData.lat
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.marketInfo = res.data.market_info;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  box-sizing: border-box;
  background: #fff;
  .contentBox {
    font-size: 0.3rem;
    .headerTitle {
      display: flex;
      justify-content: flex-start;
      padding-left: 0.3rem;
      box-sizing: border-box;
      margin-top: 0.26rem;
      width: 100%;
      position: relative;
      .titleIcon {
        display: flex;
        justify-content: center;
        flex-direction: column;
        img {
          height: 0.36rem;
          width: auto;
        }
      }
      .scdianhua {
        img {
          height: 0.3rem;
        }
      }
      .titleText {
        color: #38ba50;
        padding-left: 0.21rem;
      }
      .rightImgC {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        position: absolute;
        right: 0.3rem;
        top: 0;
        img {
          height: 0.25rem;
        }
      }
    }
    .titleContent {
      font-size: 0.3rem;
      color: #666666;
      padding: 0 0.3rem;
      box-sizing: border-box;
      margin-top: 0.1rem;
    }
    .titleFlex {
      display: flex;
      justify-content: space-between;
      .rightImg {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        img {
          height: 0.25rem;
        }
      }
    }
  }
}
</style>


