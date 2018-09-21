<template>
  <div class="singleDragram">
    <div class="TypeList">
      <div class="type" @click="typeClick('style')">
        <div>
          <span :style="typeStatus =='style'?'color:#3cb850;':'color: #666666;'">风格</span>
          <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='style'">
          <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='style'">
        </div>
      </div>
      <div class="type" @click="typeClick('space')">
        <div>
          <span :style="typeStatus =='space'?'color:#3cb850;':'color: #666666;'">户型</span>
          <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='space'">
          <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='space'">
        </div>
      </div>
      <!-- 户型 -->
      <div class="typeContent" v-if="typeStatus=='space'">
        <div :class="queryData.layout==item.id?'contentActive content local':'content local'" v-for="(item,index) in houseSpecial" :key="index" @click="typeSelectClickColor(item,'house')">
          {{item.name}}
        </div>
      </div>
      <!-- 风格 -->
      <div class="typeContent" v-if="typeStatus=='style'">
        <div :class="queryData.style==item.id?'contentActive content local':'content local'" v-for="(item,index) in styleSpecial" :key="index" @click="typeSelectClickColor(item,'style')">
          {{item.name}}
        </div>
      </div>
    </div>
    <loadList @scrollEnd="scrollEnd">
      <div>
        <div class="titleContent" @click="$router.push('specialTitleDetail')" v-for="(item,i) in specialData" :key="i">
          <div class="floor1">
            <img v-lazy="item.cover" alt="">
          </div>
          <div class="floor2">
            <div class="text1">{{item.title}}</div>
            <div class="text2">
              {{item.detail}}
            </div>
          </div>
        </div>
      </div>
    </loadList>
    <!-- 模态框 -->
    <div class="mask" v-if="typeStatus!==''" @click="typeStatus=''">
    </div>
  </div>
</template>
<script>
import loadList from "../../../common/load.vue";
export default {
  props: ["styleSpecial", "houseSpecial"],
  components: { loadList },
  data: function() {
    return {
      typeStatus: "",
      loading: false,
      finished: false,
      imgsArr: [],
      queryData: {
        ticket: localStorage.getItem("ticket"),
        page: 1,
        page_size: 15,
        category_id: 3,
        space: 0,
        style: 0,
        area: 0,
        color: 0,
        place: 0,
        layout: 0
      },
      specialData: [],
      loading: true
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.tool
        .request({
          url: "picture/list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.specialData = res.data.list;
          }
        });
    },
    scrollEnd: function(num) {
      this.queryData.page = num;
      if (this.loading) {
        this.tool
          .request({
            url: "picture/list",
            method: "post",
            params: this.queryData
          })
          .then(res => {
            if (res.status == 200) {
              if (res.data.list.length < 15) {
                this.loading = false;
              }
              for (var i in res.data.list) {
                this.singleData.push(res.data.list[i]);
              }
            }
          });
      }
    },
    typeSelectClickColor: function(item, type) {
      if (type == "house") {
        this.queryData.layout = item.id;
      } else if (type == "style") {
        this.queryData.style = item.id;
      }
    },
    typeClick: function(res) {
      if (this.typeStatus == res) {
        return (this.typeStatus = "");
      }
      this.typeStatus = res;
    }
  }
};
</script>

<style lang="scss" scoped>
.singleDragram {
  height: 100%;
  .TypeList {
    position: fixed;
    z-index: 999;
    top: 0.9rem;
    height: 0.9rem;
    width: 100%;
    margin-top: 1px solid;
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0;
    box-sizing: border-box;
    background: #fff;
    .type {
      width: 50%;
      height: 100%;
      border-right: 1px solid #dedede;
      font-size: 0.28rem;
      color: #666666;
      text-align: center;
      div {
        width: 0.75rem;
        text-align: left;
        position: relative;
        margin: auto;
        img {
          position: absolute;
          height: 0.08rem;
          top: 0.16rem;
          right: 0;
        }
      }
    }
    .type:last-child {
      border-right: 0;
    }
  }
  .content {
    background-color: #f8f8f8;
  }
  .mask {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
  }
  .typeContent {
    position: absolute;
    width: 100%;
    z-index: 999;
    top: 0.9rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 0.3rem;
    box-sizing: border-box;
    flex-flow: wrap;
    padding-bottom: 0.32rem;
    .content {
      height: 0.6rem;
      width: 1.5rem;
      border-radius: 8px;
      margin-top: 0.32rem;
      text-align: center;
      line-height: 0.6rem;
      border: 1px solid #fff;
    }
    .local {
      background: #f4f4f4;
      color: #666666;
      font-size: 0.28rem;
    }
    .contentActive {
      border: 1px solid rgb(61, 204, 66);
      color: rgb(61, 204, 66) !important;
      background-color: #f8f8f8;
    }
  }
  .titleContent {
    height: 6.2rem;
    .floor1 {
      height: 4.2rem;
      width: 100%;
      background: #666666;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .floor2 {
      height: 2rem;
      width: 100%;
      box-sizing: border-box;
      padding-top: 0.3rem;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      .text1 {
        font-size: 0.28rem;
        color: #666666;
        letter-spacing: 0;
      }
      .text2 {
        font-size: 0.24rem;
        color: #999999;
        letter-spacing: 0;
        margin-top: 0.1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        white-space: nowrap;
      }
    }
  }
}
</style>

