<template>
    <div class="pages">
        <HeaderSame :headerObj="headerObj"></HeaderSame>
        <div class="content">
            <div class="moneyImg">

            </div>
            <div class="moneyInput">
                <input type="text" placeholder="请输入要兑换的金额">
                <span>兑换</span>
            </div>
            <div class="cellMoneyContent">
                <div class="single" v-for="i in 6" :key="i">
                    <div class="text1">用户扣减</div>
                    <div class="text2">
                        <span class="date">2018</span>
                        <span class="reduce">-4</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderSame from "../../common/sameHeader.vue";
export default {
  components: { HeaderSame },
  data: function() {
    return {
      headerObj: {
        title: "金币",
        img: ""
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  .content {
    background: #fff;
    .moneyImg {
      width: 100%;
      height: 2.4rem;
      border: 1px solid red;
    }
    .moneyInput {
      font-size: 0.2rem;
      text-align: center;
      margin-top: 0.44rem;
      input {
        font-size: 0.2rem;
        color: #999999;
        text-align: center;
        width: 3.99rem;
        height: 0.65rem;
        outline: none;
        border-radius: 0.12rem;
        border: 1px solid #979797;
        margin-right: 0.5rem;
      }
      span {
        padding: 0.06rem 0.18rem;
        text-align: center;
        background: #38ba50;
        color: #fff;
        font-size: 0.12rem;
        border-radius: 0.12rem;
      }
    }
  }
  .cellMoneyContent {
    padding-left: 0.18rem;
    box-sizing: border-box;
    font-size: 0.24rem;
    padding-right: 0.22rem;
    margin-top: 0.6rem;
    .single {
      font-size: 0.24rem;
      padding-left: 0.1rem;
      padding-right: 0.1rem;
      box-sizing: border-box;
      border-bottom: 1px dashed #979797;
      .text1 {
        font-size: 0.3rem;
        color: #333333;
        letter-spacing: 0;
        text-align: left;
        margin-top: 0.1rem;
      }
      .text2 {
        font-size: 0.24rem;
        color: #999999;
        letter-spacing: 0;
        text-align: left;
        margin-bottom: 0.1rem;
        margin-top: 0.06rem;
        .reduce {
          color: #4a90e2;
          letter-spacing: 0;
          float: right;
        }
        .add {
          color: #f22e2e;
          letter-spacing: 0;
          float: right;
        }
      }
    }
  }
}
</style>


