<template>
  <div class="news">
    <div class="left">
      <img :src="newArr.img" alt="">
    </div>
    <div class="right">
      <ul id="newsSwiper">
        <li v-for="(item,index) in newArr.arr" :key="index" @click="clickNews">{{item}}</li>
        <li @click="clickNews">{{newArr.arr[0]}}</li>
      </ul>
      <img src="static/img/rightIcon.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props: ["newArr"],
  mounted: function() {
    this.swiperNew();
  },
  methods: {
    swiperNew: function() {
      let num = 0;
      let news = document.getElementById("newsSwiper");
      setInterval(() => {
        num += 1;
        news.style.transition = "all 0.3s ease-in-out";
        if (num > this.newArr.arr.length) {
          num = 0;
          news.style.transition = "all 0s linear";
        }
        news.style.top = -0.6 * num + "rem";
      }, 2300);
    },
    clickNews: function() {
      if (this.newArr.target == "index") {
        this.$router.push("indexNew");
      } else if (this.newArr.target == "onlineMarket") {
        this.$router.push("onlineMarketNews");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.news {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  box-sizing: border-box;
  .left {
    width: 30%;
    height: 100%;
    border-right: 1px solid #000;
    text-align: center;
    padding: 0.07rem 0;
    box-sizing: border-box;
    img {
      height: 100%;
    }
  }
  .right {
    width: 70%;
    height: 0.6rem;
    position: relative;
    line-height: 0.6rem;
    text-align: right;
    box-sizing: border-box;
    overflow: hidden;
    img {
      height: 0.24rem;
      margin-top: 0.2rem;
    }
    ul {
      position: absolute;
      top: 0;
      width: 100%;
      text-align: left;
      padding-left: 0.3rem;
      padding-right: 0.2rem;
      box-sizing: border-box;
      //   transition: all 0.3s ease-in-out;
      li {
        height: 0.6rem;
        line-height: 0.6rem;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        box-sizing: border-box;
        font-weight: 500;
        font-size: 0.26rem;
      }
    }
  }
}
</style>


