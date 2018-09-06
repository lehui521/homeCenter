<template>
    <div class="wrapper">
        <header class="header">
            <div class="closeImg" @click="$router.go(-1)">
                <img src="static/img/close.png" alt="">
            </div>
            <span>选择城市</span>
        </header>
        <div class="content" ref="wrapper">
            <div>
                <div class="floor1" ref="GPS">GPS定位城市</div>
                <div class="floor2">定位失败</div>
                <div class="hotCity">
                    <div class="title" res="HOT">
                        <div>热门城市</div>
                        <div class="titleRight">
                            <img src="static/img/shape.png" alt="">
                            <span>加盟家品汇</span>
                        </div>
                    </div>
                    <div class="citys">
                        <div class="singleCity" v-for="(item,index) in hotCity" :key="index" @click="clickCityHot(item)">
                            {{item.city_name}}
                        </div>
                    </div>
                </div>
                <div class="allCity" v-for="(item,index) in allCity" :key="index" v-show="item.length!==0" :ref="index">
                    <div class="title">{{index}}</div>
                    <div class="cityArr">
                        <div class="cellCity" v-for="(city,i) in item" :key="i" @click="clickCityAll(city)">
                            {{city.name}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="letters">
            <div @click="clickLetter('GPS')">GPS</div>
            <div @click="clickLetter('HOT')">热门</div>
            <div v-for="(item,index) in letters" :key="index" @click="clickLetter(item)">
                {{item}}
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  data: function() {
    return {
      hotCity: [],
      allCity: {},
      letters: "ABCDEFGHJKLMNOPQRSTWXYZ".split(""),
      options: {
        click: true,
        scrollY: true
      }
    };
  },
  created: function() {
    this.getData();
    console.log(this.allCity);
  },
  mounted: function() {
    this.scroll = new Bscroll(this.$refs.wrapper, this.options);
  },
  methods: {
    clickLetter: function(res) {
      let dom = this.$refs[res][0];
      this.scroll.scrollToElement(dom);
    },
    clickCityAll: function(res) {
      let cityData = JSON.stringify(res);
      localStorage.setItem("cityData", cityData);
      this.$router.go(-1);
    },
    clickCityHot: function(res) {
      let cityData = {
        name: res.city_name,
        id: res.city_id,
        lat: res.lat,
        lng: res.lng,
        pinyin: res.pinyin
      };
      cityData = JSON.stringify(cityData);
      localStorage.setItem("cityData", cityData);
      this.$router.go(-1);
    },
    getData: function() {
      this.tool
        .request({
          url: "v3_index/getAllRegion"
        })
        .then(res => {
          if (res.status == 200) {
            this.hotCity = res.data.hot_city;
            let that = this;
            let letters = this.letters;
            for (var i in letters) {
              that.allCity[letters[i]] = [];
              for (var j in res.data.all_city) {
                if (letters[i] == res.data.all_city[j].pinyin.slice(0, 1)) {
                  this.allCity[letters[i]].push(res.data.all_city[j]);
                }
              }
            }
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  padding-top: 0.88rem;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  .header {
    height: 0.88rem;
    text-align: center;
    font-size: 0.36rem;
    color: #333333;
    line-height: 0.88rem;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    .closeImg {
      position: absolute;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      left: 0.3rem;
      top: 0;
      img {
        height: 0.3rem;
      }
    }
  }
  .content {
    box-sizing: border-box;
    height: 1rem;
    .floor1 {
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.26rem;
      color: #999999;
      padding-left: 0.3rem;
      box-sizing: border-box;
    }
    .floor2 {
      height: 0.88rem;
      line-height: 0.88rem;
      background: #fff;
      font-size: 0.26rem;
      color: #999999;
      padding-left: 0.3rem;
    }
    .hotCity {
      .title {
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.26rem;
        color: #999999;
        padding-left: 0.3rem;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        .titleRight {
          color: #fe8932;
          font-size: 0.23rem;
          margin-left: 0.3rem;
          line-height: 0.6rem;
          img {
            height: 0.23rem;
          }
        }
      }
      .citys {
        background: #fff;
        width: 100%;
        padding: 0.2rem 0.3rem;
        padding-top: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .singleCity {
          margin-right: 0.2rem;
          width: 1.4rem;
          height: 0.7rem;
          border-radius: 0.1rem;
          line-height: 0.7rem;
          text-align: center;
          color: #666666;
          font-size: 0.3rem;
          border: 1px solid #d5d5d5;
          margin-top: 0.2rem;
        }
        .singleCity:active {
          background: #d5d5d5;
        }
      }
    }
    .allCity {
      .title {
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.26rem;
        color: #999999;
        padding-left: 0.3rem;
        box-sizing: border-box;
      }
      .cityArr {
        .cellCity {
          height: 0.8rem;
          line-height: 0.8rem;
          padding-left: 0.3rem;
          box-sizing: border-box;
          color: #333333;
          font-size: 0.29rem;
          background: #fff;
          border-bottom: 1px solid #d5d5d5;
        }
        .cellCity:last-of-type {
          border-bottom: 0;
        }
      }
    }
  }
  .letters {
    position: fixed;
    width: auto;
    height: 100%;
    font-size: 0.26rem;
    color: #3eba55;
    right: 0.1rem;
    top: 0;
    text-align: center;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 1rem 0;
    box-sizing: border-box;
  }
}
</style>


