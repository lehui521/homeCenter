<template>
  <div class="pages">
    <div class="header">
      <span>视频列表</span>
      <!-- <img src="static/img/fenxiangB.png" alt="" class="share">
            <img src="static/img/grayStar.png" alt="" class="star"> -->
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
    </div>
    <loadList @scrollEnd="scrollEnd">
      <div class="content">
        <div class="video" v-for="(item,index) in list" :key="index">
          <div class="videoContent">
            <img v-lazy="item.img" alt="" style="width:100%;height:100%;">
            <img src="static/img/bofang.png" alt="" class="videoButton" @click="showVideoHandle(item)">
          </div>
          <div class="videoText">{{item.title}}</div>
          <div class="videoHeart">
            <div><img src="static/img/smallBofang.png" alt=""></div>
            <div>
              <span>{{item.view_total}}</span>
            </div>
          </div>
        </div>
      </div>
    </loadList>

  </div>
</template>
<script>
import loadList from "../../../common/load.vue";
export default {
  components: { loadList },
  data: function() {
    return {
      list: [],
      queryData: {
        page: 1,
        page_size: 10
      },
      scrollStatus: true
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    scrollEnd: function(num) {
      this.queryData.page = num;
      if (this.scrollStatus) {
        this.tool
          .request({
            url: "video/list",
            method: "post",
            params: this.queryData
          })
          .then(res => {
            if (res.status == 200) {
              for (var i in res.data.list) {
                this.list.push(res.data.list[i]);
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
          url: "video/list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.list = res.data.list;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  height: 100%;
  box-sizing: border-box;
  .header {
    height: 0.88rem;
    position: fixed;
    width: 100%;
    text-align: center;
    font-size: 0.36rem;
    color: #333333;
    line-height: 0.88rem;
    top: 0;
    background: #fff;
    z-index: 99999;
    .share {
      position: absolute;
      right: 0.4rem;
      height: 0.33rem;
      top: 0.27rem;
    }
    .star {
      position: absolute;
      right: 1rem;
      height: 0.33rem;
      top: 0.27rem;
    }
    .back {
      height: 0.32rem;
      position: absolute;
      top: 0.28rem;
      left: 0.3rem;
    }
  }
  .content {
    .video {
      border: 1px solid #efefef;
      box-shadow: #efefef 1px 1px 5px;
      padding-bottom: 0.2rem;
      .videoContent {
        height: 4.24rem;
        position: relative;
        .videoButton {
          width: 0.95rem;
          height: 0.95rem;
          position: absolute;
          top: 1.64rem;
          left: 44%;
        }
      }
      .videoText {
        font-size: 0.3rem;
        color: #333333;
        padding-left: 0.38rem;
        box-sizing: border-box;
        margin-top: 0.2rem;
      }
      .videoHeart {
        padding-left: 0.38rem;
        box-sizing: border-box;
        font-size: 0.24rem;
        color: #999999;
        margin-top: 0.1rem;
        display: flex;
        justify-content: flex-start;
        img {
          height: 0.24rem;
          margin-right: 0.1rem;
        }
      }
    }
  }
}
</style>


