<template>
  <div class="pages" id="boutiqueShop">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="banner">
      <van-swipe :autoplay="3000" style="height:100%;">
        <van-swipe-item v-for="(image, index) in contentData.banner" :key="index">
          <img v-lazy="image.image" style="width:100%;height:100%;" class="bannerImg" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="headerNav">
      <div class="nav" v-for="(item,i) in contentData.categoryList" :key="i">
        <div class="img">
          <img :src="item.icon" alt="">
        </div>
        <div class="text">{{item.name}}</div>
      </div>
      <div class="nav" @click="showAllType=true">
        <div class="img">
          <img src="static/img/touxiang.jpg" alt="">
        </div>
        <div class="text">全部</div>
      </div>
    </div>
    <div class="typeList">
      <div class="left" @click="typeClick('type')">
        <span :style="status.typeStatus=='type'?'color:#3CB850;':''">类目</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='type'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
      <div class="right" @click="typeClick('sort')">
        <span :style="status.typeStatus=='sort'?'color:#3CB850;':''">排序</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='sort'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
    </div>
    <div class="storeList">
      <!-- 类型的内容 -->
      <div class="typeMask" v-if="status.typeStatus!==''">
        <div class="typeContent" v-if="status.typeStatus=='type'">
          <div class="currentType">
            全部
          </div>
          <div v-for="(item,i) in contentData.typeList" :key="i">
            <div class="typeTitle">{{item.name}}</div>
            <div class="typeMore">
              <div class="single" v-for="(tag,num) in item.tags" :key="num">{{tag.name}}</div>
            </div>
          </div>
        </div>
        <div class="sortContent" v-if="status.typeStatus=='sort'">
          <!-- <div class="floor1 activeSort">默认排序</div> -->
          <div class="floor1" v-for="(item,i) in contentData.sortList" :key="i">{{item.name}}</div>
        </div>
      </div>
      <div class="market" v-for="(item,index) in storeData" :key="index">
        <div class="marketImg">
          <img v-lazy="item.image" alt="">
        </div>
        <div class="marketText">
          <div class="marketName">
            <span class="name">{{item.name}}</span>
            <span>{{item.distance}}</span>
          </div>
          <div class="marketTag">
            <van-tag type="success" plain>{{item.category_name}}</van-tag>
          </div>
          <div class="marketPhone">
            <span>15252111236</span>
          </div>
          <div class="marketAddress">
            <span>{{item.address}}</span>
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="showAllType" position="right" :overlay="true" class="allType">
      <all-type :allType="contentData.typeList" @clickType="clickType"></all-type>
      <span class="closeIcon" @click="showAllType=false">X</span>
    </van-popup>
  </div>
</template>
<script>
import HeaderSame from "../../../common/sameHeader.vue";
import allType from "./allType.vue";
export default {
  components: { HeaderSame, allType },
  data: function() {
    return {
      showAllType: false,
      headerObj: {
        title: "精品旺铺",
        img: "static/img/sousuo.png",
        text: "boutiqueShop"
      },
      status: {
        typeStatus: "",
        showTypeStatus: false
      },
      contentData: {
        banner: [],
        categoryList: [],
        typeList: [],
        sortList: []
      },
      queryData: {
        page: 1,
        page_size: 10,
        keywords: "",
        category_id: "",
        market_id: "",
        order: "",
        city_id: JSON.parse(localStorage.getItem("cityData")).city_id
      },
      storeData: []
    };
  },
  created: function() {
    if (localStorage.getItem("marketData")) {
      this.queryData.market_id = JSON.parse(
        localStorage.getItem("marketData")
      ).market_id;
    } else {
      return this.$dialog
        .alert({
          title: "提示",
          message: "请选择市场"
        })
        .then(() => {
          this.$router.push("marketList");
        });
    }
    this.getData();
    this.getStoreContent();
    this.getStoreType();
  },
  methods: {
    typeClick: function(res) {
      this.status.showTypeStatus = true;
      if (this.status.typeStatus == res) {
        return (this.status.typeStatus = "");
      }
      this.status.typeStatus = res;
    },
    clickType: function(res) {
      this.showAllType = false;
      console.log(res);
    },
    getStoreContent: function() {
      this.tool
        .request({
          url: "shop/index",
          method: "post",
          params: {
            city_id: JSON.parse(localStorage.getItem("cityData")).id,
            market_id: JSON.parse(localStorage.getItem("marketData")).market_id
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.contentData.banner = res.data.banner;
            for (var i = 0; i < 9; i++) {
              this.contentData.categoryList.push(
                res.data.category_list[0].tags[i]
              );
            }
          }
        });
    },
    getData: function() {
      this.tool
        .request({
          url: "shop/list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.storeData = res.data.list;
          }
        });
    },
    getStoreType: function() {
      this.tool
        .request({
          url: "v1_shop/category"
        })
        .then(res => {
          if (res.status == 200) {
            this.contentData.typeList = res.data.category_list[0].tags;
            this.contentData.sortList = res.data.category_list[1].tags;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  background: #fff;
  .allType {
    height: 100%;
    width: 100%;
    padding-top: 0.88rem;
    box-sizing: border-box;
    .closeIcon {
      position: absolute;
      left: 0.5rem;
      top: 1rem;
      font-size: 0.39rem;
    }
  }
  .banner {
    height: 3.46rem;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .headerNav {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: auto;
    .nav {
      width: 20%;
      margin-top: 0.18rem;
      margin-bottom: 0.18rem;
      .img {
        width: 0.96rem;
        height: 0.96rem;
        border-radius: 50%;
        margin: auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        font-size: 0.26rem;
        color: #999999;
        letter-spacing: 0;
        text-align: center;
        margin-top: 0.12rem;
      }
    }
  }
  .typeList {
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
    height: 0.9rem;
    margin-top: 0.3rem;
    font-size: 0.28rem;
    color: #666666;
    letter-spacing: 0;
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 0.21rem;
    box-sizing: border-box;
    line-height: 0.48rem;
    div:first-child {
      border-right: 1px solid #d5d5d5;
    }
    .left {
      width: 50%;
      position: relative;
      img {
        width: 0.14rem;
        position: absolute;
        top: 0.2rem;
      }
      span {
        margin-right: 0.1rem;
      }
    }
    .right {
      width: 50%;
      position: relative;
      img {
        width: 0.14rem;
        position: absolute;
        top: 0.2rem;
      }
      span {
        margin-right: 0.1rem;
      }
    }
  }
  .storeList {
    position: relative;
    .typeMask {
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      z-index: 9999;
      .typeContent {
        background: #fff;
        width: 100%;
        padding: 0.31rem 0.3rem;
        box-sizing: border-box;
        .currentType {
          width: 1.5rem;
          height: 0.6rem;
          border: 1px solid #3cb850;
          border-radius: 0.08rem;
          color: #3cb850;
          font-size: 0.28rem;
          text-align: center;
          line-height: 0.6rem;
        }
        .typeTitle {
          height: 0.72rem;
          line-height: 0.72rem;
          text-align: left;
          font-size: 0.3rem;
          color: #333333;
          letter-spacing: 0;
          margin-top: 0.3rem;
        }
        .typeMore {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .single {
            width: 1.5rem;
            height: 0.6rem;
            background: #f4f4f4;
            border-radius: 0.08rem;
            color: #666666;
            font-size: 0.28rem;
            text-align: center;
            line-height: 0.6rem;
            margin-top: 0.3rem;
          }
        }
      }
      .sortContent {
        background: #fff;
        width: 100%;
        .floor1 {
          height: 0.74rem;
          width: 100%;
          border-bottom: 1px solid #d5d5d5;
          line-height: 0.74rem;
          text-align: center;
          font-size: 0.24rem;
        }
        .activeSort {
          color: #3cb850;
        }
      }
    }
    .market {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #d5d5d5;
      padding: 15px 8px;
      padding-bottom: 0.11rem;
      .marketImg {
        width: 40%;
        box-sizing: border-box;
        padding: 0.1rem;
        img {
          width: 100%;
        }
      }
      .marketText {
        width: 60%;
        padding: 0.1rem;
        .marketName {
          display: flex;
          justify-content: space-between;
          span {
            display: inline-block;
            line-height: 0.4rem;
            font-size: 0.24rem;
          }
          .name {
            font-size: 0.3rem;
            font-weight: 540;
          }
        }
      }
      .marketTag {
        margin: 0.1rem 0;
        font-size: 0.22rem;
      }
      .marketPhone {
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;
        // margin-bottom: 0.1rem;
        font-size: 0.24rem;
        color: #444444;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          width: 100%;
          box-sizing: border-box;
        }
      }
      .marketAddress {
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;
        margin-bottom: 0.1rem;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          width: 100%;
          box-sizing: border-box;
          font-size: 0.24rem;
          color: #444444;
        }
      }
    }
  }
}
</style>


