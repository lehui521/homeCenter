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
      .titleIcon {
        display: flex;
        justify-content: center;
        flex-direction: column;
        img {
          height: 0.36rem;
        }
      }
      .titleText {
        color: #38ba50;
        padding-left: 0.21rem;
      }
    }
  }
}
</style>


