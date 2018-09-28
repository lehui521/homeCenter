<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj" :params="params"></HeaderSame>
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
    <!-- 类型的内容 -->
    <div class="typeMask" v-if="status.typeStatus!==''">
      <div class="typeContent" v-if="status.typeStatus=='type'">
        <div :class="queryData.category_id==''?'currentType singleActive':'currentType'" @click="clickType('')">
          全部
        </div>
        <div v-for="(item,i) in typeData.categoryList" :key="i">
          <div class="typeTitle">{{item.name}}</div>
          <div class="typeMore">
            <div :class="queryData.category_id==tag.id?'single singleActive':'single'" v-for="(tag,num) in item.tags" :key="num" @click="clickType(tag.id)">{{tag.name}}</div>
          </div>
        </div>
      </div>
      <div class="sortContent" v-if="status.typeStatus=='sort'">
        <!-- <div class="floor1 activeSort">默认排序</div> -->
        <div :class="queryData.order==item.id?'floor1 activeSort':'floor1'" v-for="(item,i) in typeData.orderList" :key="i" @click="orderClick(item.id)">{{item.name}}</div>
      </div>
    </div>
    <loadList @scrollEnd="scrollEnd">
      <div class="storeList">
        <div class="market" v-for="(item,index) in storeData" :key="index" @click="$router.push('storeDetail?shop_id='+item.shop_id)">
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
              <!-- <van-tag type="success" plain>灯饰</van-tag> -->
            </div>
            <div class="marketPhone">
              <span>{{item.market_name}}</span>
            </div>
            <div class="marketAddress">
              <span>{{item.address}}</span>
            </div>
          </div>
        </div>
      </div>
    </loadList>

  </div>
</template>
<script>
import HeaderSame from "../../../common/sameHeader.vue";
import loadList from "../../../common/load.vue";
export default {
  components: { HeaderSame, loadList },
  data: function() {
    return {
      headerObj: {
        title: "店铺精选",
        img: "static/img/sousuo.png",
        text: "storeChoice"
      },
      status: {
        typeStatus: "",
        showTypeStatus: false
      },
      typeData: {
        categoryList: [],
        orderList: []
      },
      storeData: [],
      queryData: {
        city_id: this.$route.query.cityId,
        page: 1,
        page_size: 10,
        keywords: "",
        category_id: "",
        market_id: this.$route.query.marketId,
        order: 0,
        lng: this.$route.query.lng,
        lat: this.$route.query.lat
      },
      params: {
        city_id: this.$route.query.cityId,
        lng: this.$route.query.lng,
        lat: this.$route.query.lat
      },
      scrollStatus: true
    };
  },
  created: function() {
    this.getStoreType();
    this.getData();
  },
  methods: {
    typeClick: function(res) {
      this.status.showTypeStatus = true;
      if (this.status.typeStatus == res) {
        return (this.status.typeStatus = "");
      }
      this.status.typeStatus = res;
    },
    clickType: function(id) {
      this.queryData.category_id = id;
      this.getData();
      this.status.typeStatus = "";
    },
    orderClick: function(id) {
      this.queryData.order = id;
      this.getData();
      this.status.typeStatus = "";
    },
    scrollEnd: function(num) {
      this.queryData.page = num;
      if (this.scrollStatus) {
        this.tool
          .request({
            url: "shop/list",
            method: "post",
            params: this.queryData
          })
          .then(res => {
            if (res.status == 200) {
              for (var i in res.data.list) {
                this.storeData.push(res.data.list[i]);
              }
              if (res.data.list.length < this.queryData.page_size) {
                return (this.scrollStatus = false);
              }
            }
          });
      }
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
            this.typeData.categoryList = res.data.category_list[0].tags;
            this.typeData.orderList = res.data.category_list[1].tags;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 1.78rem;
  height: 100%;
  .typeList {
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
    height: 0.9rem;
    font-size: 0.28rem;
    color: #666666;
    letter-spacing: 0;
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 0.21rem;
    box-sizing: border-box;
    line-height: 0.48rem;
    background: #fff;
    position: fixed;
    left: 0;
    top: 0.88rem;
    width: 100%;
    z-index: 999;
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
  .typeMask {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 1.78rem;
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
        border: 1px solid #fff;
        border-radius: 0.08rem;
        color: #666666;
        font-size: 0.28rem;
        text-align: center;
        line-height: 0.6rem;
        background: #f4f4f4;
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
          border: 1px solid #fff;
        }
        .singleActive {
          border: 1px solid #3cb850;
          color: #3cb850;
        }
      }
      .singleActive {
        border: 1px solid #3cb850;
        color: #3cb850;
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
  .storeList {
    position: relative;
    background: #fff;
    .market {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #d5d5d5;
      padding: 15px 8px;
      .marketImg {
        width: 40%;
        box-sizing: border-box;
        padding: 0.1rem;
        img {
          width: 100%;
          height: 100%;
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


