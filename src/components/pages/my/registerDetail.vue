<template>
  <div class="pages">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="content">
      <div class="moneyImg">
        金币：{{point}}
      </div>
      <div class="moneyInput">
        <input type="text" placeholder="请输入要兑换的金额" v-model="inputPoint">
        <span @click="exchangeMoney">兑换</span>
      </div>
      <div class="cellMoneyContent">
        <div class="single" v-for="(item,i) in pointData" :key="i">
          <div class="text1">{{item.reason}}</div>
          <div class="text2">
            <span class="date">{{item.add_time}}</span>
            <span class="reduce">{{item.type==2?'-':''}}{{item.point}}</span>
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
      },
      queryData: {
        ticket: localStorage.getItem("ticket"),
        page: 1,
        page_size: 20
      },
      pointData: [],
      point: "",
      inputPoint: ""
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.tool
        .request({
          url: "point/list",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            this.pointData = res.data.list;
            this.point = res.data.total_point;
          }
        });
    },
    exchangeMoney: function() {
      this.tool
        .request({
          url: "point/reduce",
          method: "post",
          params: {
            ticket: this.queryData.ticket,
            point: this.inputPoint
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.$dialog
              .alert({
                title: "提示",
                message: "兑换成功"
              })
              .then(() => {
                this.getData();
              });
          } else {
            this.$toast({
              type: "text",
              message: res.msg
            });
          }
        });
    }
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
      text-align: center;
      line-height: 2.4rem;
      font-size: 0.36rem;
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


