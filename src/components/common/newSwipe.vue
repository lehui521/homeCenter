<template>
    <div class="news">
        <div class="left">
            <img src="static/img/huitoutiao.png" alt="">
        </div>
        <div class="right">
            <ul id="newsSwiper">
                <li v-for="(item,index) in newArr" :key="index">{{item}}</li>
                <li>{{newArr[0]}}</li>
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
        if (num > this.newArr.length) {
          num = 0;
          news.style.transition = "all 0s linear";
        }
        news.style.top = -40 * num + "px";
      }, 2300);
    }
  }
};
</script>
<style lang="scss" scoped>
.news {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  .left {
    width: 30%;
    height: 100%;
    border-right: 1px solid #d5d5d5;
    text-align: center;
    img {
      width: 76px;
      height: 29px;
      margin-top: 5.5px;
    }
  }
  .right {
    width: 70%;
    height: 40px;
    position: relative;
    line-height: 40px;
    text-align: right;
    box-sizing: border-box;
    overflow: hidden;
    img {
      width: 12px;
      height: 21px;
      margin-top: 0.2rem;
    }
    ul {
      position: absolute;
      top: 0;
      width: 100%;
      text-align: left;
      padding-left: 10px;
      padding-right: 13px;
      box-sizing: border-box;
      //   transition: all 0.3s ease-in-out;
      li {
        height: 40px;
        line-height: 40px;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        box-sizing: border-box;
        font-weight: 500px;
        font-size: 0.4rem;
      }
    }
  }
}
</style>


