<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="TypeList">
      <div class="type" @click="typeClick('budget')">
        <div>
          <span :style="typeStatus =='budget'?'color:#3cb850;':'color: #666666;'">预算</span>
          <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='budget'">
          <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='budget'">
        </div>
      </div>
      <div class="type" @click="typeClick('style')">
        <div>
          <span :style="typeStatus =='style'?'color:#3cb850;':'color: #666666;'">风格</span>
          <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='style'">
          <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='style'">
        </div>
      </div>
      <div class="type" @click="typeClick('home')">
        <div>
          <span :style="typeStatus =='home'?'color:#3cb850;':'color: #666666;'">户型</span>
          <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='home'">
          <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='home'">
        </div>
      </div>
      <div class="type" @click="typeClick('sort')">
        <div>
          <span :style="typeStatus =='sort'?'color:#3cb850;':'color: #666666;'">排序</span>
          <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='sort'">
          <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='sort'">
        </div>
      </div>
    </div>
    <div class="typeMask" v-if="typeStatus!==''">
      <div class="typeContent" v-if="typeStatus=='sort'">
        <div class="single" v-for="i in 10" :key="i">全部</div>
      </div>
    </div>
    <div class="content">
      <div class="diary" @click="$router.push('diaryDetail')">
        <img src="static/img/shichangtuipian.png" alt="">
        <div class="diaryTitle">
          学林苑我的家
        </div>
        <div class="diaryText">
          <span>20-25万/</span>
          <span>半包/</span>
          <span>60m²以下/</span>
          <span>两居/</span>
          <span>宜家</span>
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
        title: "业主日记",
        img: "static/img/add.png",
        text: "ownerDiary"
      },
      typeStatus: ""
    };
  },
  methods: {
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
.pages {
  padding-top: 1.78rem;
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
      width: 25%;
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
    box-sizing: border-box;
    padding: 0.1rem;
    .diary {
      border: 1px solid #d8d8d8;
      box-shadow: #d8d8d8 1px 1px 5px;
      box-sizing: border-box;
      padding: 0.1rem;
      margin-top: 0.26rem;
      img {
        width: 100%;
        height: 4.28rem;
      }
      .diaryTitle {
        padding-left: 0.19rem;
        box-sizing: border-box;
        font-size: 0.3rem;
        color: #333333;
      }
      .diaryText {
        padding-left: 0.19rem;
        box-sizing: border-box;
        font-size: 0.28rem;
        color: #999999;
        margin-top: 0.1rem;
      }
    }
  }
  .typeMask {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 1.78rem;
    left: 0;
    width: 100%;
    height: 100%;
    .typeContent {
      background: #fff;
      display: flex;
      justify-content: flex-start;
      box-sizing: border-box;
      flex-flow: wrap;
      padding-bottom: 0.32rem;
      padding-left: 0.3rem;
      .single {
        height: 0.6rem;
        width: 1.5rem;
        border-radius: 0.08rem;
        margin-top: 0.32rem;
        text-align: center;
        line-height: 0.6rem;
        background: #f7f7f7;
        color: #666666;
        font-size: 0.28rem;
        margin-right: 0.3rem;
      }
    }
  }
}
</style>


