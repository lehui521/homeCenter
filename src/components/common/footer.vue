<template>
  <div class="footer">
    <div @click="handleClick('/')" class="footerItem">
      <img src="static/img/index.png" alt="" v-if="clickStatus!='/'">
      <img src="static/img/indexA.png" alt="" v-if="clickStatus=='/'">
      <span :style="clickStatus=='/'?'color:#49C05F;':''">首页</span>
    </div>
    <div @click="handleClick('/onlineMarket')" class="footerItem">
      <img src="static/img/onlineMart.png" alt="" v-if="clickStatus!='/onlineMarket'">
      <img src="static/img/onlineMartA.png" alt="" v-if="clickStatus=='/onlineMarket'">
      <span :style="clickStatus=='/onlineMarket'?'color:#49C05F;':''">网上市场</span>
    </div>
    <div @click="handleClick('/decorationSchool')" class="footerItem">
      <img src="static/img/decorate.png" alt="" v-if="clickStatus!='/decorationSchool'">
      <img src="static/img/decorateA.png" alt="" v-if="clickStatus=='/decorationSchool'">
      <span :style="clickStatus=='/decorationSchool'?'color:#49C05F;':''">装修学堂</span>
    </div>
    <div @click="handleClick('/my')" class="footerItem">
      <img src="static/img/my.png" alt="" v-if="clickStatus!='/my'">
      <img src="static/img/myA.png" alt="" v-if="clickStatus=='/my'">
      <span :style="clickStatus=='/my'?'color:#49C05F;':''">我的</span>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      clickStatus: "/"
    };
  },
  mounted: function() {
    this.clickStatus = this.$route.path;
  },
  methods: {
    handleClick: function(index) {
      this.clickStatus = index;
      if (index == "/") {
        this.$router.push("/");
      } else if (index == "/onlineMarket") {
        this.$router.push("/onlineMarket");
      } else if (index == "/decorationSchool") {
        this.$router.push("/decorationSchool");
      } else if (index == "/my") {
        this.$router.push("/my");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.footer {
  height: 1.1rem;
  border-top: 2px solid #efefef;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: #fff;
  z-index: 999;
  .footerItem {
    width: 25%;
    height: 100%;
    text-align: center;
    padding-top: 0.05rem;
    box-sizing: border-box;
    flex-direction: column;
    display: flex;
    align-items: center;
    img {
      display: block;
      width: 0.5rem;
      height: 0.6rem;
    }
    span {
      display: block;
      font-size: 0.2rem;
    }
  }
}
</style>


