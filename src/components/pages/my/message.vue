<template>
  <div class="page">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="content">
      <ul class="list">
        <li class="item">
          <router-link class="relativeItem" to="promotion">
            <div class="thumb">
              <img src="static/img/demo.jpg" alt="">
              <span class="info" v-if="numData[0].num!=0">{{numData[0].num}}</span>
            </div>
            <div class="item-show">
              <p class="item-show-text">促销优惠</p>
              <p class="item-show-annotation">各种优惠信息等你来抢</p>
            </div>
            <div class="item-icon veralign">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </router-link>
        </li>
        <li class="item">
          <router-link class="relativeItem" to="decorationRoom">
            <div class="thumb">
              <img src="static/img/demo.jpg" alt="">
              <span class="info" v-if="numData[0].num!=0">{{numData[0].num}}</span>
            </div>
            <div class="item-show">
              <p class="item-show-text">装修客厅</p>
              <p class="item-show-annotation">各种优惠信息等你来抢</p>
            </div>
            <div class="item-icon veralign">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </router-link>
        </li>
        <li class="item">
          <router-link class="relativeItem" to="/systemMessage">
            <div class="thumb">
              <img src="static/img/demo.jpg" alt="">
              <span class="info" v-if="numData[0].num!=0">{{numData[0].num}}</span>
            </div>
            <div class="item-show">
              <p class="item-show-text">系统消息</p>
              <p class="item-show-annotation">各种优惠信息等你来抢</p>
            </div>
            <div class="item-icon veralign">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import HeaderSame from "../../common/sameHeader.vue";
export default {
  data() {
    return {
      headerObj: {
        title: "消息",
        img: ""
      },
      numData: [{}, {}, {}]
    };
  },
  methods: {},
  created() {
    this.getNum();
  },
  components: {
    HeaderSame
  },
  methods: {
    getNum: function() {
      this.tool
        .request({
          url: "message/message",
          method: "post",
          params: {
            ticket: localStorage.getItem("ticket")
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.numData = res.data;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.page {
  padding-top: 0.88rem;
  font-size: 0.3rem;

  .header {
  }

  .content {
    .list {
      .item {
        padding: 2%;
        background-color: #fff;
        border-bottom: 1px solid #d5d5d5;

        .relativeItem {
          position: relative;
          display: block;

          .item-icon {
            color: #eee;
            position: absolute;
            top: 0;
            font-size: 0.6rem;
            right: 2vw;
            height: 100%;

            i {
              vertical-align: middle;
            }
          }
        }

        .thumb {
          width: 0.8rem;
          display: inline-block;
          vertical-align: middle;
          position: relative;
          .info {
            display: block;
            width: 0.33rem;
            height: 0.33rem;
            text-align: center;
            line-height: 0.33rem;
            background: red;
            color: #fff;
            border-radius: 50%;
            position: absolute;
            top: -2px;
            right: -2px;
            font-size: 0.15rem;
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }

        .item-show {
          display: inline-block;
          margin-left: 2%;
          vertical-align: middle;

          .item-show-text {
            position: absolute;
            top: 0;
            font-size: 0.3rem;
            color: #333333;
          }

          .item-show-annotation {
            position: absolute;
            color: #999999;
            display: inline-block;
            font-size: 0.28rem;
            vertical-align: bottom;
          }
        }

        .item-show-name {
          color: #999999;
          font-size: 12px;
          margin-left: 1vw;
        }
      }
    }
  }

  .footer {
  }

  .veralign::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
}
</style>
