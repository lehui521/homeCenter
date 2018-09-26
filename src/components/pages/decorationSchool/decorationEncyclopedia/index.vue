<template>
  <div class="pages" id="decorationEncyclopedia">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="headerNav">
      <van-tabs :line-width="50" @click="mainClickType" v-model="mainActive">
        <van-tab v-for="(item,i) in decorationData" :title="item.name" :key="i">
          <div class="typeNav">
            <van-tabs v-model="singleActive" @click="singleClickType">
              <van-tab v-for="(tag,num) in item.types" :title="tag.name" :key="num">
              </van-tab>
            </van-tabs>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- <div class="typeNav">
      <van-tabs>
        <van-tab v-for="index in 8" :title="'厨房装修' + index" :key="index">
        </van-tab>
      </van-tabs>
    </div> -->
    <div class="content">
      <div class="single" @click="$router.push('decorationEncyclopediaDetail?wikiId='+item.wiki_id)" v-for="(item,i) in decorationContentData" :key="i">
        <div class="singleLeft">
          <div class="leftText1">
            {{item.title}}
          </div>
          <div class="singleText2">
            <span>{{item.add_time}}</span>
            <img src="static/img/yan.png" alt="">
            <span>{{item.view_total}}</span>
          </div>
        </div>
        <div class="singleRight">
          <img v-lazy="item.img" alt="">
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
        title: "装修百科",
        img: ""
      },
      mainActive: "",
      singleActive: "",
      decorationData: [],
      decorationContentData: [],
      queryData: {
        category_id: "",
        type_id: "",
        page: 1,
        page_size: 10
      }
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    mainClickType: function(index, title) {
      this.queryData.category_id = this.decorationData[
        this.mainActive
      ].category_id;
      this.queryData.type_id = this.decorationData[this.mainActive].types[
        this.singleActive
      ].type_id;
      this.getContentData();
    },
    singleClickType: function() {
      this.queryData.type_id = this.decorationData[this.mainActive].types[
        this.singleActive
      ].type_id;
      this.getContentData();
    },
    getData: function() {
      this.tool
        .request({
          url: "wiki/category",
          method: "post"
        })
        .then(res => {
          if (res.status == 200) {
            this.decorationData = res.data;
            this.queryData.category_id = res.data[0].category_id;
            this.queryData.type_id = res.data[0].types[0].type_id;
            this.getContentData();
          }
        });
    },
    getContentData: function() {
      this.tool
        .request({
          url: "wiki/list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.decorationContentData = res.data.list;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 2.64rem;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .headerNav {
    height: 0.88rem;
    position: fixed;
    top: 0.88rem;
    width: 100%;
    left: 0;
    box-sizing: border-box;
    z-index: 9999;
    background: #fff;
  }
  .typeNav {
    height: 0.88rem;
    position: fixed;
    top: 1.76rem;
    width: 100%;
    left: 0;
    border-top: 1px solid #e5e5e5;
    z-index: 9999;
    background: #fff;
  }
  .content {
    .single {
      display: flex;
      justify-content: flex-start;
      padding: 0.2rem 0.19rem;
      box-sizing: border-box;
      border-bottom: 1px solid #e5e5e5;
      .singleLeft {
        width: 100%;
        position: relative;
        .leftText1 {
          font-size: 0.3rem;
          color: #333333;
          letter-spacing: 0;
          margin-top: 0.2rem;
        }
        .singleText2 {
          font-size: 0.26rem;
          color: #999999;
          letter-spacing: 0;
          position: absolute;
          bottom: 0;
          left: 0;
          img {
            height: 0.2rem;
            margin-left: 0.28rem;
            margin-right: 0.1rem;
          }
        }
      }
      .singleRight {
        width: 2.5rem;
        height: 1.7rem;
        img {
          width: 2.5rem;
          height: 1.7rem;
        }
      }
    }
  }
}
</style>


