<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj" :params="params"></HeaderSame>
    <div class="typeList">
      <div class="left" @click="typeClick('price')">
        <span :style="status.typeStatus=='price'?'color:#3CB850;':''">价格</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='price'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
      <div class="right" @click="typeClick('sort')">
        <span :style="status.typeStatus=='sort'?'color:#3CB850;':''">排序</span>
        <img src="static/img/greenUp.png" alt="" v-if="status.typeStatus=='sort'">
        <img src="static/img/grayDown.png" alt="" v-else>
      </div>
    </div>
    <div class="typeMask" v-if="status.typeStatus!==''">
      <div class="grayMask" @click="status.typeStatus=''"></div>
      <div class="priceType" v-if="status.typeStatus=='price'">
        <div :class="queryData.order=='price_desc'?'single singleActive':'single'" @click="clickType('price_desc')">由高到低</div>
        <div :class="queryData.order=='price_asc'?'single singleActive':'single'" @click="clickType('price_asc')">由低到高</div>
        <div class="button">
          <div class="cancel" @click="status.typeStatus=''">取消</div>
          <div class="ensure" @click="getData">确定</div>
        </div>
      </div>
      <div class="sortType" v-if="status.typeStatus=='sort'">
        <div :class="queryData.order=='sort_asc'?'single singleActive':'single'" @click="clickType('sort_asc')">默认排序</div>
        <div :class="queryData.order=='add_time_desc'?'single singleActive':'single'" @click="clickType('add_time_desc')">新品优先</div>
        <div class="single">
          <input type="text" class="low" v-model="queryData.min_price" placeholder="最低价">
          <span>——</span>
          <input type="text" class="height" v-model="queryData.max_price" placeholder="最高价">
        </div>
        <div class="button">
          <div class="cancel" @click="status.typeStatus=''">取消</div>
          <div class="ensure" @click="getData">确定</div>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <loadList @scrollEnd="scrollEnd">
      <div style="padding:0;">
        <div class="productChoiceContent">
          <div class="list" v-for="(item,index) in productData" :key="index" @click="$router.push('productDetail?goods_id='+item.goods_id)">
            <div class="price">￥{{item.price}}</div>
            <img v-lazy="item.image" alt="">
            <div class="listName">
              {{item.name}}
            </div>
            <div class="text">
              <div class="name">{{item.shop_info.name}}
                <span v-if="$route.query.cityId">| {{item.market_name}}</span>
              </div>
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
        title: "商品精选",
        img: "static/img/sousuo.png",
        text: "productChoice"
      },
      params: {
        typeId: this.$route.query.typeId,
        cityId: this.$route.query.cityId,
        marketId: this.$route.query.marketId,
        categoryId: this.$route.query.categoryId
      },
      status: {
        typeStatus: "",
        showTypeStatus: false
      },
      queryData: {
        page: 1,
        page_size: 10,
        keywords: "",
        category_id: this.$route.query.categoryId,
        market_id: this.$route.query.marketId,
        city_id: this.$route.query.cityId,
        type_id: this.$route.query.typeId,
        min_price: "",
        max_price: "",
        order: "sort_asc"
      },
      productData: [],
      scrollStatus: true
    };
  },
  created: function() {
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
    clickType: function(res) {
      this.queryData.order = res;
    },
    scrollEnd: function(num) {
      this.queryData.page = num;
      if (this.scrollStatus) {
        this.tool
          .request({
            url: "goods/list",
            method: "post",
            params: this.queryData
          })
          .then(res => {
            if (res.status == 200) {
              for (var i in res.data.list) {
                this.productData.push(res.data.list[i]);
              }
              if (res.data.list.length < 10) {
                this.scrollStatus = false;
              }
            }
          });
      }
    },
    getData: function() {
      this.tool
        .request({
          url: "goods/list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.productData = res.data.list;
            this.status.typeStatus = "";
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 1.78rem;
  background: #fff;
  // box-sizing: border-box;
  height: 100%;
  box-sizing: border-box;
  position: relative;
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
    width: 100%;
    left: 0;
    top: 0.88rem;
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
    position: fixed;
    top: 1.78rem;
    width: 100%;
    height: 100%;
    z-index: 9999;
    .grayMask {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.5);
    }
    .priceType {
      text-align: center;
      font-size: 0.24rem;
      color: #666666;
      letter-spacing: 0;
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 999;
      .button {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        div {
          width: 50%;
          text-align: center;
          height: 0.88rem;
          line-height: 0.88rem;
          font-size: 0.3rem;
        }
        .ensure {
          background: #3cb850;
          color: #fff;
        }
      }
      .single {
        border-bottom: 1px solid #d5d5d5;
        height: 0.74rem;
        line-height: 0.74rem;
      }
      .singleActive {
        color: #3cb850;
      }
    }
    .sortType {
      text-align: center;
      font-size: 0.24rem;
      color: #666666;
      letter-spacing: 0;
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 999;
      .button {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        div {
          width: 50%;
          text-align: center;
          height: 0.88rem;
          line-height: 0.88rem;
          font-size: 0.3rem;
        }
        .ensure {
          background: #3cb850;
          color: #fff;
        }
      }
      .single {
        border-bottom: 1px solid #d5d5d5;
        height: 0.74rem;
        line-height: 0.74rem;
        .low,
        .height {
          display: inline-block;
          width: 0.74rem;
          height: 0.32rem;
          border-radius: 0.04rem;
          text-align: center;
          line-height: 0.32rem;
          font-size: 0.2rem;
          border: 1px solid #999999;
        }
      }
      .singleActive {
        color: #3cb850;
        .low,
        .height {
          border: 1px solid #3cb850;
        }
      }
    }
  }
  .productChoiceContent {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 0.2rem;
    .list {
      width: 3.46rem;
      padding: 0.1rem;
      box-sizing: border-box;
      box-shadow: #dedede 2px 5px 10px;
      margin-top: 0.2rem;
      position: relative;
      img {
        width: 3.26rem;
        height: 2.04rem;
      }
      .listName {
        font-weight: 500;
        text-align: center;
        color: #333333;
        font-size: 0.24rem;
      }
      .price {
        position: absolute;
        top: 0.3rem;
        background-color: #fff;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        text-align: left;
        padding: 2px 0;
        padding-left: 3px;
        padding-right: 6px;
        font-size: 0.16rem;
        color: #fbb0b0;
      }
      .text {
        text-align: center;
        color: #666666;
        font-size: 0.18rem;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        .name {
          margin-top: 5px;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>


