<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="content">
      <div class="left">
        <div :class="navIndex==-1?'singleActive single':'single'" @click="leftNavClick(recommendData,-1)">
          <span>推荐</span>
        </div>
        <div :class="navIndex==index?'singleActive single':'single'" v-for="(item,index) in goodData" :key="index" @click="leftNavClick(item,index)">
          <span>{{item.name}}</span>
        </div>
      </div>
      <div class="right">
        <div class="banner" v-if="itemData.image">
          <img v-lazy="itemData.image" alt="">
        </div>
        <div class="hotTitle">
          热门分类
        </div>
        <div class="rightContent">
          <div class="singleRight" v-for="(citem,i) in itemData.types" :key="i" @click="jumpProduct(citem)">
            <div class="singleImg">
              <img v-lazy="citem.image" alt="">
            </div>
            <div class="singleName">{{citem.name}}</div>
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
        title: "商品分类",
        img: ""
      },
      navIndex: -1,
      goodData: [],
      itemData: {
        types: [],
        category_id: ""
      },
      recommendData: {
        types: [],
        category_id: ""
      }
    };
  },
  created: function() {
    this.getData();
    this.getRecommendData();
  },
  methods: {
    leftNavClick: function(item, index) {
      this.navIndex = index;
      this.itemData = item;
    },
    getData: function() {
      this.tool
        .request({
          url: "goods/category"
        })
        .then(res => {
          if (res.status == 200) {
            this.goodData = res.data;
          }
        });
    },
    getRecommendData: function() {
      this.tool
        .request({
          url: "goods/recommend_category"
        })
        .then(res => {
          if (res.status == 200) {
            this.itemData.types = res.data;
            this.recommendData.types = res.data;
          }
        });
    },
    jumpProduct: function(res) {
      if (this.$route.query.cityId) {
        this.$router.push(
          "productChoiceContent?typeId=" +
            res.type_id +
            "&cityId=" +
            this.$route.query.cityId +
            "&categoryId=" +
            this.itemData.category_id
        );
      } else if (this.$route.query.marketId) {
        this.$router.push(
          "productChoiceContent?typeId=" +
            res.type_id +
            "&marketId=" +
            this.$route.query.marketId +
            "&categoryId=" +
            this.itemData.category_id
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pages {
  padding-top: 0;
  .content {
    position: fixed;
    height: 100%;
    width: 100%;
    padding-top: 0.88rem;
    box-sizing: border-box;
    .left {
      width: 25%;
      position: absolute;
      left: 0;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      background: #fff;
      .single {
        height: 1rem;
        text-align: center;
        font-size: 0.24rem;
        color: #666666;
        border: 1px solid #f8f8f8;
        line-height: 1rem;
      }
      .singleActive {
        background: #f8f8f8;
        color: #3cb850;
        position: relative;
      }
      .singleActive::after {
        content: "";
        display: inline-block;
        height: 0.42rem;
        width: 0.06rem;
        background: #3cb850;
        position: absolute;
        left: 0;
        top: 0;
        top: 0.29rem;
      }
    }
    .left::-webkit-scrollbar {
      display: none;
    }
    .right {
      width: 73%;
      position: absolute;
      left: 27%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      .banner {
        height: 1.8rem;
        padding-right: 0.2rem;
        box-sizing: border-box;
        margin-top: 0.2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .hotTitle {
        font-size: 0.24rem;
        color: #666666;
        letter-spacing: 0;
        padding: 0.3rem 0;
      }
      .rightContent {
        background: #fff;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .singleRight {
          width: 33%;
          margin-bottom: 0.3rem;
          box-sizing: border-box;
          padding: 0 0.1rem;
          .singleImg {
            width: 100%;
            height: 1.35rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .singleName {
            text-align: center;
            font-size: 0.26rem;
            color: #999999;
            letter-spacing: 0;
            margin-top: 0.1rem;
          }
        }
      }
    }
    .right::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>

