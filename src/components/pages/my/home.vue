<template>

  <div class="contract brick">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="banner">

    </div>
    <ul class="content">
      <div class="cervix">
        <!-- 体测日期可编辑状态 -->
        <li class="item">
          <label class="item-text ">面积</label>
          <span class="item-input" @click="dateClick('area')">{{memberInfo.house_size_data}}</span>
          <span class="item-right-text item-right-icon" @click="dateClick('area')">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </li>
        <li class="item">
          <label class="item-text ">户型</label>
          <span class="item-input" @click="dateClick('layout')">{{memberInfo.layout_data}}</span>
          <span class="item-right-text item-right-icon" @click="dateClick('layout')">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </li>
        <li class="item" @click="dateClick('budget')">
          <label class="item-text ">预算</label>
          <span class="item-input">{{memberInfo.budget_data}}</span>
          <span class="item-right-text item-right-icon">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </li>
        <li class="item" @click="dateClick('style')">
          <label class="item-text ">装修风格</label>
          <span class="item-input">{{memberInfo.style_data}}</span>
          <span class="item-right-text item-right-icon">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </li>
        <li class="item" @click="dateClick('dec_type')">
          <label class="item-text ">装修方式</label>
          <span class="item-input">{{memberInfo.type_data}}</span>
          <span class="item-right-text item-right-icon">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </li>
        <li class="item" @click="dateClick('city')">
          <label class="item-text ">所在城市</label>
          <span class="item-input">{{memberInfo.province}}{{memberInfo.city}}</span>
          <span class="item-right-text item-right-icon">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </li>
        <li class="item home-input">
          <label class="item-text ">小区名称</label>
          <input class="item-input" type="text" v-model="memberInfo.community" placeholder="输入小区名称">
        </li>
        <li class="item home-input">
          <label class="item-text ">装修公司</label>
          <input class="item-input" type="text" v-model="memberInfo.company_name" placeholder="输入装修公司">
        </li>
      </div>
    </ul>
    <div class="footer">
      <button class="footer-btn" @click="submitClick">立即提交</button>
    </div>
    <!-- <button @click="save">模拟保存</button> -->
    <!-- 面积 -->
    <van-popup v-model="status.showSize" position="bottom" :overlay="true">
      <van-picker value-key="name" :columns="typeData" show-toolbar @cancel="status.showSize=false" @confirm="clickConfirmArea" />
    </van-popup>
    <!-- 户型 -->
    <van-popup v-model="status.showLayout" position="bottom" :overlay="true">
      <van-picker value-key="name" :columns="typeData" show-toolbar @cancel="status.showLayout=false" @confirm="clickConfirmLayout" />
    </van-popup>
    <!-- 预算 -->
    <van-popup v-model="status.showBudget" position="bottom" :overlay="true">
      <van-picker value-key="name" :columns="typeData" show-toolbar @cancel="status.showBudget=false" @confirm="clickConfirmBudget" />
    </van-popup>
    <!-- 装修风格 -->
    <van-popup v-model="status.showStyle" position="bottom" :overlay="true">
      <van-picker value-key="name" :columns="typeData" show-toolbar @cancel="status.showStyle=false" @confirm="clickConfirmStyle" />
    </van-popup>
    <!-- 装修风格 -->
    <van-popup v-model="status.showDecType" position="bottom" :overlay="true">
      <van-picker value-key="name" :columns="typeData" show-toolbar @cancel="status.showDecType=false" @confirm="clickConfirmDecType" />
    </van-popup>
    <!-- 所有的城市 -->
    <van-popup v-model="status.showCity" position="bottom" :overlay="true">
      <van-area :area-list="areaList" value="110101" @confirm="clickCity" @cancel="status.showCity=false" />
    </van-popup>
  </div>
</template>
<script>
import HeaderSame from "../../common/sameHeader.vue";
import cityJson from "./city.js";
export default {
  components: {
    HeaderSame
  },
  data() {
    return {
      headerObj: {
        title: "我的家",
        img: ""
      },
      memberInfo: {},
      typeData: [],
      areaList: cityJson,
      status: {
        showSize: false,
        showLayout: false,
        showBudget: false,
        showStyle: false,
        showDecType: false,
        showCity: false
      },
      labelName: "name",
      labelValue: "value",
      bottomStatus: false,
      arrlist: []
    };
  },
  computed: {},
  created: function() {
    this.getData();
  },
  methods: {
    dateClick(res) {
      if (res == "area") {
        this.getTypeSize(res);
        this.status.showSize = true;
      } else if (res == "layout") {
        this.getTypeSize(res);
        this.status.showLayout = true;
      } else if (res == "budget") {
        this.getTypeSize(res);
        this.status.showBudget = true;
      } else if (res == "style") {
        this.getTypeSize(res);
        this.status.showStyle = true;
      } else if (res == "dec_type") {
        this.getTypeSize(res);
        this.status.showDecType = true;
      } else if (res == "city") {
        this.status.showCity = true;
      }
    },
    clickConfirmArea: function(value, index) {
      this.memberInfo.house_size_data = value.name;
      this.status.showSize = false;
    },
    clickConfirmLayout: function(value, index) {
      this.memberInfo.layout_data = value.name;
      this.status.showLayout = false;
    },
    clickConfirmBudget: function(value, index) {
      this.memberInfo.budget_data = value.name;
      this.status.showBudget = false;
    },
    clickConfirmStyle: function(value, index) {
      this.memberInfo.style_data = value.name;
      this.status.showStyle = false;
    },
    clickConfirmDecType: function(value, index) {
      this.memberInfo.type_data = value.name;
      this.status.showDecType = false;
    },
    clickCity: function(value, index) {
      for (var i in value) {
        if (i == 1) {
          this.memberInfo.province = value[i].name;
        } else if (i == 2) {
          this.memberInfo.city = value[i].name;
        }
      }
      this.status.showCity = false;
    },
    submitClick: function() {
      this.tool
        .request({
          url: "user/config",
          method: "post",
          params: this.memberInfo
        })
        .then(res => {
          if (res.status == 200) {
            this.$dialog
              .alert({
                title: "提示",
                message: "保存成功"
              })
              .then(res => {
                this.getData();
              });
          } else {
            this.$toast({
              type: "text",
              message: res.msg
            });
          }
        });
    },
    getTypeSize: function(res) {
      this.tool
        .request({
          url: "tags/getList",
          method: "post",
          params: {
            tag_ename: res
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.typeData = res.data.tags;
          }
        });
    },
    getData: function() {
      this.tool
        .request({
          url: "/user/info",
          method: "post",
          params: {
            ticket: localStorage.getItem("ticket")
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.memberInfo = res.data;
          } else {
            this.$dialog.alert({
              title: "提示",
              message: res.msg
            });
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../css/brick.scss";

.contract {
  padding-bottom: 4em;
  font-size: 0.3rem;
  padding-top: 0.88rem;
  .banner {
    background: #999999;
    width: 7rem;
    height: 2rem;
    margin: auto;
    border-radius: 0.06rem;
  }
  .content {
    color: #666666;
    .item {
      .item-text {
        padding-left: 1em;
        color: #666666;
      }

      .item-right-icon {
        padding-left: 0.3em;

        i {
          vertical-align: middle;
        }
      }

      .item-right-text {
        width: auto;
        margin-right: 1em;
      }

      .item-unit {
        line-height: 32px;

        span:last-of-type {
          vertical-align: super;
        }
      }

      .require:after {
        content: "*";
        color: red;
      }
    }

    .item-margin-top {
      margin-top: 2vh;
    }

    .item-margin-bottom {
      margin-bottom: 2vh;
    }

    .placeholder-color {
      color: #666666;
    }

    .cervix {
      .item {
        // padding-right: 1em;

        .item-text {
          width: auto;
        }

        .item-input {
          text-align: right;
          color: #666666;
        }
      }

      .home-input {
        .item-input {
          padding-right: 1em;
        }
      }
    }

    .gray-title {
      line-height: 44px;
      text-align: left;
      padding-left: 1em;
      color: #666666;

      p {
        display: inline-block;
      }
    }
  }

  .footer {
    text-align: center;
    margin-top: 1rem;
    padding: 0.5vw;

    .footer-btn {
      background: #3cb850;
      width: 80%;
      padding: 3vw 0;
      color: #fff;
      border: none;
    }
  }
}
</style>
