<template>
    <div class="pages">
        <HeaderSame :headerObj="headerObj"></HeaderSame>
        <div class="diaryImg">
            <img v-lazy="diaryData.diaryInfo.image" alt="">
            <!-- <span class="report" @click="reportClick">举报</span> -->
        </div>
        <div class="finishIcon">
            <img src="static/img/dunpai.png" alt="">
            <span>毕业照</span>
        </div>
        <div class="finishImg">
            <img v-lazy="item" alt="" v-for="(item,i) in diaryData.diaryInfo.over_images" :key="i">
        </div>
        <div class="grayBlank"></div>
        <div class="finishText" v-for="(item,i) in diaryData.diaryContentList" :key="i" :ref="i">
            <div class="leftImg">
                <img src="static/img/greenDot.png" alt="">
            </div>
            <div class="rightText">
                <div class="text1">
                    <span>{{item.decorate_name}}</span>
                    <span class="tag">{{item.tag_name}}</span>
                </div>
                <div class="text2">
                    {{item.content}}
                </div>
                <div class="rightImg">
                    <div class="scrollImg">
                        <img v-lazy="image.img" alt="" v-for="(image,num) in item.image_content" :key="num">
                    </div>
                </div>
            </div>
        </div>
        <img src="static/img/menu.png" alt="" class="menuButton" @click="showMenu=true">
        <van-popup v-model="showMenu" position="right" :overlay="true" class="menuContent">
            <div class="titleText">目录</div>
            <div class="menuList">
                <div :class="menuIndex==i?'single singleActive':'single'" v-for="(item,i) in diaryData.diaryContentList" :key="i" @click="menuClick(item,i)">{{item.decorate_name}}</div>
            </div>
        </van-popup>
    </div>
</template>
<script>
import HeaderSame from "../../common/sameHeader.vue";
export default {
  components: { HeaderSame },
  data: function() {
    return {
      headerObj: {
        title: "日记详情",
        img: "static/img/fenxiang.png",
        text: "diaryDetail"
      },
      showMenu: false,
      diaryData: {
        diaryInfo: {},
        diaryContentList: []
      },
      menuIndex: 0
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    menuClick: function(item, i) {
      this.menuIndex = i;
      this.$refs[i][0].scrollIntoView();
    },
    getData: function() {
      this.tool
        .request({
          url: "user/diaryContent",
          method: "post",
          params: {
            ticket: localStorage.getItem("ticket")
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.diaryData.diaryInfo = res.data.diary_info;
            this.diaryData.diaryContentList = res.data.diary_content_list;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  background: #fff;
  padding-top: 0.88rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  .diaryImg {
    height: 3.6rem;
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .report {
      position: absolute;
      display: inline-block;
      bottom: 0.14rem;
      right: 0.18rem;
      width: 0.88rem;
      height: 0.46rem;
      line-height: 0.46rem;
      font-size: 0.26rem;
      color: #fff;
      text-align: center;
      background: #151415;
      border-radius: 100px;
    }
  }
  .finishIcon {
    font-size: 0.3rem;
    color: #333333;
    letter-spacing: 0;
    padding-left: 0.39rem;
    padding-top: 0.3rem;
    box-sizing: border-box;
    img {
      height: 0.4rem;
      float: left;
      margin-right: 0.17rem;
    }
  }
  .finishImg {
    height: 2rem;
    width: 100%;
    border: 1px solid #fff;
    margin-top: 0.15rem;
    padding-left: 0.2rem;
    box-sizing: border-box;
    margin-bottom: 0.1rem;
    img {
      height: 100%;
      width: 2.5rem;
      height: 2rem;
    }
  }
  .finishText {
    display: flex;
    justify-content: flex-start;
    padding-left: 0.44rem;
    padding-right: 0.39rem;
    padding-top: 0.24rem;
    box-sizing: border-box;
    background: #fff;
    .leftImg {
      width: 0.22rem;
      margin-right: 0.21rem;
      img {
        width: 0.22rem;
        float: left;
        margin-top: 0.1rem;
      }
    }
    .rightText {
      width: 100%;
      .text1 {
        font-size: 0.3rem;
        color: #333333;
        letter-spacing: 0;
        .tag {
          display: inline-block;
          height: 0.4rem;
          width: 1.26rem;
          text-align: center;
          line-height: 0.4rem;
          border: 1px solid #f4b231;
          color: #f4b231;
          margin-left: 0.2rem;
        }
      }
      .text2 {
        font-size: 0.26rem;
        color: #999999;
        letter-spacing: 0;
      }
      .rightImg {
        width: 100%;
        margin-top: 0.2rem;
        position: relative;
        height: 2rem;
        overflow: hidden;
        overflow-x: scroll;
        overflow-y: hidden;
        .scrollImg {
          position: absolute;
          height: 100%;
          width: auto;
          display: flex;
          justify-content: flex-start;
          img {
            width: 2.5rem;
            height: 2rem;
            margin-right: 0.2rem;
          }
        }
      }
    }
  }
  .menuButton {
    position: fixed;
    bottom: 2.7rem;
    left: 0.19rem;
    height: 0.9rem;
  }
  .menuContent {
    width: 60%;
    height: 100%;
    padding-top: 0.88rem;
    box-sizing: border-box;
    .titleText {
      font-size: 0.3rem;
      color: #333333;
      letter-spacing: 0;
      padding-left: 0.3rem;
      margin-top: 0.36rem;
    }
    .menuList {
      margin-top: 0.52rem;
      margin-left: 0.69rem;
      border-left: 1px solid #d5d5d5;
      padding-top: 0.1rem;
      .single {
        font-size: 0.28rem;
        color: #666666;
        letter-spacing: 0;
        height: 0.5rem;
        line-height: 0.5rem;
        padding-left: 0.26rem;
        margin-bottom: 0.7rem;
        position: relative;
      }
      .single::after {
        content: "";
        display: inline-block;
        width: 0.1rem;
        height: 0.1rem;
        background: #666666;
        border-radius: 50%;
        position: absolute;
        left: -0.05rem;
        top: 0.2rem;
      }
      .singleActive {
        color: rgb(73, 192, 95);
      }
      .singleActive::after {
        background: rgb(73, 192, 95);
      }
    }
  }
}
</style>

