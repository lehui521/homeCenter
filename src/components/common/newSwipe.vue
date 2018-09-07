<template>
  <div class="news">
    <div class="left">
      <img src="static/img/huitoutiao.png" alt="">
    </div>
    <div class="right">
      <ul id="newsSwiper">
        <li v-for="(item,index) in newArr" :key="index" @click="clickNews(item)" v-if="newArr.length!=0">{{item.title}}</li>
        <li @click="clickNews(item)" v-if="newArr.length!=0">{{newArr[0].title}}</li>
        <li v-if="newArr.length==0">暂无新闻</li>
      </ul>
      <div class="img">
        <img src="static/img/rightIcon.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["newArr"],
  data: function() {
    return {
      cityData: JSON.parse(localStorage.getItem("cityData"))
    };
  },
  created: function() {},
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
        if (num > this.newArr.length) {
          num = 0;
          news.style.transition = "all 0s linear";
        }
        news.style.top = -0.6 * num + "rem";
      }, 2300);
    },
    clickNews: function(res) {
      this.$router.push(
        "indexNew?city_id=" + this.cityData.id + "&news_id=" + res.news_id
      );
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    .img {
      height: 100%;
      float: right;
      img {
        height: 0.24rem;
      }
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
        color: #333333;
      }
    }
  }
}
</style>


