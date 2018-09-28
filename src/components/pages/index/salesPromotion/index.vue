<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="banner" v-for="(item,i) in detail.banner" :key="i" v-if="i==0">
      <img v-lazy="item.image" alt="">
    </div>
    <div class="grayBlank"></div>
    <tab-list :tabArr="tabArr" @tabClick="handleClickTab"></tab-list>
    <div class="marketActive" v-if="status.tabStatus=='market'">
      <div class="active" v-for="(item) in detail.list.list" :key="item.activity_id" @click="$router.push('marketAD?id='+item.activity_id)">
        <div class="activeImg">
          <img :src="item.image" alt="">
        </div>
        <div class="activeText">
          <div class="left">
            <span class="text1">{{item.title}}</span>
            <!-- <span class="text1">|</span> -->
            <!-- <span class="text2">上海红星美凯龙asdasdasd</span> -->
          </div>
          <div class="right">
            <img src="static/img/rightArrow.png" alt="">
            <span class="text3">了解详情</span>
          </div>

        </div>
      </div>
    </div>
    <div class="storer" v-if="status.tabStatus=='storer'">
      <div class="grayBlank"></div>

      <div class="storeActive">
        <div class="storeNav">
          <!-- <div class="nav storeNav-green" @click="tablistClick()">{{tabStr}}</div> -->
          <!-- <div class="nav" @click="tablistClick()" :class="{'storeNav-green':tabStr=='全部'}">全部</div> -->
          <div class="nav" v-for="(item) in _tabListLimit" :key="item.type_id" @click='tablistClick(item)' :class="{'headerNav-green':tabStr==item.title}">{{item.title}}</div>
          <!-- <div class="nav" @click="clickNav">地板</div>
        <div class="nav" @click="clickNav">橱柜</div>
        <div class="nav" @click="clickNav">石材</div> -->
          <div class="navImg" @click="status.showNav=true">
            <img src="static/img/navDown.png" alt="">
          </div>
        </div>
        <!-- 类型内容 -->
        <div class="mask" v-if="status.showNav">
          <div class="navPosition">
            <div class="floor1">
              <span>{{tabStr}}</span>
              <img src="static/img/navUp.png" alt="" @click="status.showNav=false">
            </div>
            <div class="floor2">
              <span v-for="(item) in _tabList" :key="item.type_id" @click='tablistClick(item)' :class="{'storeNav-green':tabStr==item.title}">{{item.title}}</span>
            </div>
          </div>
        </div>
        <!-- <div class="active">
          <div class="activeImg">
            <img src="static/img/banner1.png" alt="">
          </div>
          <div class="activeText">
            <div class="left">
              <span class="text1">我乐橱柜国庆促销</span>
              <span class="text2">上海红星美凯龙asdasdasd</span>
            </div>
            <div class="right">
              <img src="static/img/rightArrow.png" alt="">
              <span class="text3">了解详情</span>
            </div>
          </div>
        </div> -->
        <div class="active" v-for="(item) in detail.list.list" :key="item.activity_id" @click="$router.push('storeAD?id='+item.activity_id)">
          <div class="activeImg">
            <img :src="item.image" alt="">
          </div>
          <div class="activeText">
            <div class="left">
              <span class="text1">{{item.title}}</span>
              <!-- <span class="text1">|</span> -->
              <!-- <span class="text2">上海红星美凯龙asdasdasd</span> -->
            </div>
            <div class="right">
              <img src="static/img/rightArrow.png" alt="">
              <span class="text3">了解详情</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import HeaderSame from "../../../common/sameHeader.vue";
import tabList from "../../../common/tab.vue";
export default {
  components: {
    HeaderSame,
    tabList
  },
  data: function() {
    return {
      tabArr: [
        {
          code: "market",
          label: "市场活动"
        },
        {
          code: "storer",
          label: "商家活动"
        }
      ],
      status: {
        tabStatus: "market",
        showNav: false
      },
      headerObj: {
        title: "促销活动",
        img: "static/img/sousuo.png",
        text: "salesPromotion",
        salesType: 1
      },
      type: 1,
      type_id: "",
      detail: {
        list: {}
      },
      _tabList: [],
      _tabListLimit: [],
      tabStr: "全部"
    };
  },
  methods: {
    tabClick: function(res) {
      this.status.tabStatus = res;
    },
    handleClickTab: function(res) {
      if (res == "market") {
        this.headerObj.salesType = 1;
      } else {
        this.headerObj.salesType = 2;
      }
      this.status.tabStatus = res;
      this.getData();
    },
    tablistClick(item) {
      this.tabStr = (item && item.title) || "全部";
      this.type_id = (item && item.type_id) || "";
      this.getData();
    },
    getData() {
      let param = {
        url: "v3_activity/index",
        params: {
          type: this.status.tabStatus == "market" ? 1 : 2,
          type_id: this.type_id || ""
        }
      };
      this.tool.request(param).then(data => {
        this.detail = data.data;
      });
    },
    getTabList() {
      let param = {
        url: "v3_activity/goodsCate"
      };
      this.tool.request(param).then(data => {
        console.log(data.data);
        this._tabList = data.data.list;
        this._tabList.unshift({
          title: "全部",
          type_id: ""
        });
        this._tabListLimit = this._tabList.slice(0, 4);
      });
    }
  },
  created() {
    this.getData();
    this.getTabList();
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;

  .banner {
    height: 2.4rem;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .marketActive {
    background: #f7f7f7;
    box-sizing: border-box;
    padding: 0.2rem;

    .active {
      .activeImg {
        height: 3.6rem;
        width: 100%;

        img {
          height: 100%;
          width: 100%;
        }
      }
    }

    .activeText {
      background: #fff;
      font-size: 0.26rem;
      padding: 0.24rem 0.19rem 0.23rem 0.33rem;
      display: flex;
      justify-content: space-between;

      .left {
        // display: flex;
        // justify-content: space-between;
        .text1 {
          color: #333333;
          display: inline-block;

          float: left;
        }

        .text2 {
          border-left: 1px solid #333;
          padding-left: 0.1rem;
          font-size: 0.22rem;
          color: #999999;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 1.98rem;
          box-sizing: border-box;
          margin-left: 0.1rem;
          float: left;
          margin-top: 0.04rem;
        }
      }

      .right {
        .text3 {
          font-size: 0.24rem;
          color: #333333;
          float: right;
          margin-right: 0.11rem;
        }

        img {
          height: 0.2rem;
          float: right;
          margin-top: 0.06rem;
        }
      }
    }
  }

  .storer {
    .storeNav {
      height: 0.88rem;
      display: flex;
      // justify-content: space-between;
      background: #fff;
      position: relative;

      .nav {
        width: 23%;
        font-size: 0.28rem;
        color: #666666;
        letter-spacing: 0;
        line-height: 0.88rem;
        text-align: center;
      }

      .navImg {
        width: 8%;
        text-align: center;
        position: absolute;
        right: 5px;

        img {
          width: 0.3rem;
          float: right;
          margin-top: 0.32rem;
          margin-right: 0.2rem;
        }
      }
    }

    .storeActive {
      background: #f7f7f7;
      box-sizing: border-box;
      padding: 0;
      position: relative;
      .active {
        padding: 0.2rem;
        box-sizing: border-box;
      }
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 99;
        width: 100%;
        height: 100%;

        .navPosition {
          background: #fff;
          width: 100%;
          padding-top: 0.16rem;

          .floor1 {
            width: 100%;
            font-size: 0.28rem;
            color: #3cb850;
            letter-spacing: 0;
            padding-left: 0.72rem;
            padding-right: 0.2rem;
            box-sizing: border-box;

            img {
              width: 0.32rem;
              float: right;
              margin-top: 0.06rem;
            }
          }

          .floor2 {
            margin-top: 0.16rem;
            font-size: 0.28rem;
            padding-right: 0.3rem;
            padding-top: 0.3rem;
            padding-left: 0.3rem;
            box-sizing: border-box;
            display: flex;
            // justify-content: space-between;
            flex-wrap: wrap;

            span {
              display: inline-block;
              height: 0.6rem;
              width: 1.5rem;
              background: #f4f4f4;
              font-size: 0.28rem;
              color: #666666;
              border-radius: 4px;
              margin-bottom: 0.3rem;
              text-align: center;
              line-height: 0.6rem;
              margin-left: 1vw;
            }
          }
        }
      }

      .active {
        .activeImg {
          height: 3.6rem;
          width: 100%;

          img {
            height: 100%;
            width: 100%;
          }
        }
      }

      .activeText {
        background: #fff;
        font-size: 0.26rem;
        padding: 0.24rem 0.19rem 0.23rem 0.33rem;
        display: flex;
        justify-content: space-between;

        .left {
          display: flex;
          justify-content: space-between;

          .text1 {
            color: #333333;
            display: inline-block;
            padding-right: 0.1rem;
            border-right: 1px solid #333;
          }

          .text2 {
            font-size: 0.22rem;
            color: #999999;
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 1.98rem;
            box-sizing: border-box;
            padding-top: 0.03rem;
            padding-left: 0;
            margin-left: 0.1rem;
          }
        }

        .right {
          .text3 {
            font-size: 0.24rem;
            color: #333333;
            float: right;
            margin-right: 0.11rem;
          }

          img {
            height: 0.2rem;
            float: right;
            margin-top: 0.06rem;
          }
        }
      }
    }
  }
  .headerNav-green {
    color: #3cb850 !important;
  }
  .storeNav-green {
    color: #3cb850 !important;
    border: 1px solid #3cb850;
    background: #fff;
  }
}
</style>
