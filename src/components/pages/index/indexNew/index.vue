<template>
  <div class="pages" id="headerNews">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="headerNav">
      <van-tabs @click="tabClick">
        <van-tab v-for="(item,i) in navData" :title="item.name" :key="i" :index="item.name">
        </van-tab>
      </van-tabs>
    </div>
    <div class="newsContent">
      <div class="recommendNew" @click="jumpNewDetail(newData.topNew)">
        <div class="leftText">
          <div class="text1">{{newData.topNew.title}}</div>
          <div class="text2">{{newData.topNew.date}} · {{newData.topNew.click}}次阅读</div>
        </div>
        <div class="rightText">
          <img :src="newData.topNew.image" alt="">
        </div>
      </div>
      <div class="newsList" v-for="(item,i) in newData.listNew" :key="i">
        <div class="date">
          <div class="text1">
            <span>{{item.group_title.day}}</span>
          </div>
          <div class="text2">
            <span>{{item.group_title.week}}</span><br/>
            <span>20{{item.group_title.date}}</span>
          </div>
        </div>
        <div class="recommendNew" v-for="(newN,index) in item.list" :key="index" @click="jumpNewDetail(newN)">
          <div class="leftText">
            <div class="text1">{{newN.title}}</div>
            <div class="text2">{{newN.add_time}} · {{newN.click}}次阅读</div>
          </div>
          <div class="rightText">
            <img :src="newN.image" alt="">
          </div>
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
        title: this.$route.query.market_id ? "新闻头条" : "汇头条",
        img: "static/img/sousuo.png",
        text: "indexNews"
      },
      newData: {
        topNew: {},
        listNew: []
      },
      navData: [],
      cateId: 0
    };
  },
  created: function() {
    this.getData();
    this.getNavData();
  },
  methods: {
    jumpNewDetail: function(res) {
      this.$router.push("headerNewDetail?newId=" + res.news_id);
    },
    tabClick: function(res, title) {
      for (var i in this.navData) {
        if (title == this.navData[i].name) {
          this.cateId = this.navData[i].id;
          this.getData();
        }
      }
    },
    getData: function() {
      this.tool
        .request({
          url: "v3_index/toutiao",
          method: "post",
          params: {
            market_id: this.$route.query.market_id || "",
            city_id: this.$route.query.city_id || "",
            news_id: this.$route.query.news_id,
            cate_id: this.cateId
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.newData.topNew = res.data.top;
            this.newData.listNew = res.data.list;
          }
        });
    },
    getNavData: function() {
      this.tool
        .request({
          url: "v3_index/getTypeToutiao",
          method: "post"
        })
        .then(res => {
          if (res.status == 200) {
            this.navData = res.data.cate_list;
          }
        });
    }
  }
};
</script>
<style lang="scss">
#headerNews {
  padding-top: 1.6rem;
  position: fixed;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  background: #fff;
  .headerNav {
    height: 0.72rem;
    position: fixed;
    top: 0.88rem;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  .newsContent {
    padding-top: 0.4rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    box-sizing: border-box;
    .recommendNew {
      border-bottom: 1px solid #979797;
      display: flex;
      justify-content: space-between;
      font-size: 0.3rem;
      padding-bottom: 0.44rem;
      margin-bottom: 0.4rem;
      .leftText {
        width: 60%;
        color: #333333;
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .text1 {
          height: auto;
          word-wrap: break-word;
        }
        .text2 {
          font-size: 0.24rem;
          color: #333333;
        }
      }
      .rightText {
        width: 2rem;
        height: 1.5rem;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
    .newsList {
      .date {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 0.4rem;
        .text1 {
          font-size: 0.48rem;
          color: #333333;
          position: relative;
          width: 0.54rem;
          span {
            position: absolute;
            bottom: 0;
          }
        }
        .text2 {
          font-size: 0.2rem;
          color: #333333;
          margin-left: 0.14rem;
        }
      }
    }
  }
  .van-tabs--line .van-tabs__wrap {
    height: 0.72rem;
    width: 100%;
  }
  .van-tab {
    line-height: 0.72rem;
    font-size: 0.26rem;
    background: #43474d;
    color: #fff;
    padding: 0 0.3rem;
  }
  .van-tabs__line {
    height: 0;
  }
  .van-tab--active {
    background: #1f2326;
    color: #3cb850;
  }

  .van-tabs__nav {
    display: flex;
    justify-content: space-between;
  }
}
</style>


