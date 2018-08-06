<template>
    <div class="footer">
        <div @click="handleClick(1)" class="footerItem">
            <img src="static/img/index.png" alt="" v-if="clickStatus!=1">
            <img src="static/img/indexA.png" alt="" v-if="clickStatus==1">
            <span :style="clickStatus==1?'color:#49C05F;':''">首页</span>
        </div>
        <div @click="handleClick(2)" class="footerItem">
                <img src="static/img/onlineMart.png" alt="" v-if="clickStatus!=2">
                <img src="static/img/onlineMartA.png" alt="" v-if="clickStatus==2">
                <span :style="clickStatus==2?'color:#49C05F;':''">网上市场</span>
        </div>
        <div @click="handleClick(3)" class="footerItem">
            
                <img src="static/img/decorate.png" alt="" v-if="clickStatus!=3">
                <img src="static/img/decorateA.png" alt="" v-if="clickStatus==3">
                <span :style="clickStatus==3?'color:#49C05F;':''">装修学堂</span>
            
        </div>
        <div @click="handleClick(4)" class="footerItem">
            
                <img src="static/img/my.png" alt="" v-if="clickStatus!=4">
                <img src="static/img/myA.png" alt="" v-if="clickStatus==4">
                <span :style="clickStatus==4?'color:#49C05F;':''">我的</span>
            
        </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      clickStatus: 1
    };
  },
  methods: {
    handleClick: function(index) {
      this.clickStatus = index;
      if (index == 1) {
        console.log("首页");
      } else if (index == 2) {
        console.log("网上市场");
      } else if (index == 3) {
        console.log("装修学堂");
      } else if (index == 4) {
        console.log("我的");
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


