<template>
  <div class="discountArea">
    <div class="title" @click="jump">
      <img src="static/img/zhekouzhuanqu.png" alt="">
      <img src="static/img/rightIcon.png" alt="" class="rightIcon">
    </div>
    <div class="banner">
      <img v-lazy="banner.image" alt="">
    </div>
    <div class="center">
      <div class="leftImg" v-for="(item,i) in list" :key="i" v-if="i==0">
        <img v-lazy="item.image" alt="">
      </div>
      <div class="rightImg">
        <div v-for="(item,i) in list" :key="i" v-if="i!=0">
          <img v-lazy="item.image" alt="">
        </div>
        <!-- <div>
          <img src="static/img/discountRight2.png" alt="">
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["banner", "list"],
  data: function() {
    return {
      market_id: JSON.parse(localStorage.getItem("marketData")).market_id
    };
  },
  methods: {
    jump: function() {
      this.$router.push({
        path: "discountAreaContent",
        query: {
          market_id: this.market_id
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.discountArea {
  font-size: 0.25rem;
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
  .center {
    height: 4.8rem;
    box-sizing: border-box;
    padding: 0.1rem;
    display: flex;
    justify-content: space-between;
    div {
      width: 49%;
    }
    .leftImg {
      border: 1px solid #efefef;
      box-shadow: #dbdbdb 1px 1px 4px;

      img {
        width: 100%;
        height: 4.1rem;
        border-radius: 0.4rem;
      }
    }
    .rightImg {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      div {
        height: 48%;
        width: 100%;
        box-shadow: #dbdbdb 1px 1px 4px;
        border: 1px solid #efefef;
        img {
          width: 100%;
          height: 100%;
          margin-bottom: 0.1rem;
          border-radius: 0.4rem;
        }
      }
    }
  }
}
</style>


