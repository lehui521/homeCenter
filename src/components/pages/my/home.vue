<template>

  <div class="contract brick">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <ul class="content">
      <div class="cervix">
        <!-- 体测日期可编辑状态 -->
        <li class="item">
          <label class="item-text require">面积</label>
          <span v-if="!formData.area" class="item-input" @click="dateClick(1)">
            {{formData.area}}
          </span>
          <span class="item-right-text item-right-icon item-unit" @click="dateClick(1)">
            <!-- <i class="fa fa-angle-right" aria-hidden="true"></i> -->
            <span>m</span>
            <span>2</span>
          </span>
        </li>
        <li class="item">
          <label class="item-text require">户型</label>
          <span class="item-input" @click="dateClick(2)">{{formData.doorModelName}}</span>
          <span class="item-right-text item-right-icon" @click="dateClick(2)">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </li>
        <li class="item">
          <label class="item-text require">预算</label>
          <span class="item-input">{{formData.budget}}</span>
          <span class="item-right-text item-right-icon" @click="dateClick">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </li>
        <li class="item">
          <label class="item-text require">装修风格</label>
          <span class="item-input">{{formData.decorate}}</span>
          <span class="item-right-text item-right-icon" @click="dateClick">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </li>
        <li class="item">
          <label class="item-text require">装修方式</label>
          <span class="item-input">{{formData.decorateWay}}</span>
          <span class="item-right-text item-right-icon" @click="dateClick">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </li>
        <li class="item">
          <label class="item-text require">所在城市</label>
          <span class="item-input">{{formData.city}}</span>
          <span class="item-right-text item-right-icon" @click="dateClick">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </li>
        <li class="item home-input">
          <label class="item-text require">小区名称</label>
          <input class="item-input" type="number" v-model="formData.community" placeholder="我的世界">
        </li>
        <li class="item home-input">
          <label class="item-text require">装修公司</label>
          <input class="item-input" type="number" v-model="formData.company" placeholder="宜家">
        </li>
      </div>
    </ul>
    <div class="footer">
      <button class="footer-btn">立即提交</button>
    </div>
    <!-- <button @click="save">模拟保存</button> -->
    <bottomLayer v-if="bottomStatus" :value-name='labelValue' :label-name="labelName" :dataList="arrlist"
      v-on:botConfirm="botConfirm" v-on:botCancel="botCancel">
      <template slot="header">
        <!-- <span>审批人</span> -->
      </template>
    </bottomLayer>
  </div>
</template>
<script>
  import HeaderSame from "../../common/sameHeader.vue";
  import bottomLayer from '../../common/bottomLayer';
  export default {
    data() {
      return {
        headerObj: {
          title: "我的家",
          img: ""
        },
        labelName: 'name',
        labelValue: 'value',
        formData: {
          doorModelName: '',
          doorModelValue: '',
          area: '',
          budget: '',
          decorate: '',
          decorateWay: '',
          city: '',
          community: '',
          company: ''
        },
        bottomStatus: false,
        arrlist: [],
        areaList: [{
            name: '60m以下',
            value: '1'
          },
          {
            name: '60m以上',
            value: '2'
          }
        ],

      };
    },
    computed: {},
    methods: {
      // 获取申请转课合同的详情
      getDetail() {
        let param = {
          url: "/trainer/body/gauging/v1/info",
          params: {
            reportId: this.formData.reportId,
            memberId: this.formData.memberId
          }
        };
        this.$showLoading();
        this.request(param).then(data => {
          this.$hideLoading();
          if (!data.data) {
            return;
          }
          this.formData.age = data.data.age;
          this.formData.bmi = data.data.bmi;
          this.formData.bodyFatPercent = data.data.bodyFatPercent;
          this.formData.bodyFatWeight = data.data.bodyFatWeight;
          this.approveFilesList = data.data.bodyReportFiles.split(',');
          this.formData.firstTime = data.data.firstTime;
          this.formData.height = data.data.height;
          this.formData.kcal = data.data.kcal;
          this.formData.memberId = data.data.memberId;
          this.formData.memberMobile = data.data.memberMobile;
          this.formData.memberName = data.data.memberName;
          this.formData.emark = data.data.emark;
          this.formData.reportDate = data.data.reportDate;
          this.formData.sex = data.data.sex;
          this.formData.sexName = data.data.sex == 1 ? '男' : '女';
          this.formData.skeletalMuscleWeight = data.data.skeletalMuscleWeight;
          this.formData.storeId = data.data.storeId;
          this.formData.trainerId = data.data.trainerId;
          this.formData.trainerName = data.data.trainerName;
          this.formData.visceralAdiposeGrade = data.data.visceralAdiposeGrade;
          this.formData.weight = data.data.weight;
          this.formData.whr = data.data.whr;
        });
      },
      dateClick(index) {
        this.bottomStatus = true;
        if (index == 2) {
          this.arrlist = this.areaList;
        }
      },
      //审批人选择回调事件
      botConfirm(value) {
        this.formData.doorModelName = value[this.labelName];
        this.formData.doorModelValue = value[this.labelValue];
        this.bottomStatus = false;
      },
      //审批人选择取消事件
      botCancel() {
        this.bottomStatus = false;
      },
      //格式化日期: yyyy-MM-dd
      formatDate(date) {
        var myyear = date.getFullYear();
        var mymonth = date.getMonth() + 1;
        var myweekday = date.getDate();
        if (mymonth < 10) {
          mymonth = "0" + mymonth;
        }
        if (myweekday < 10) {
          myweekday = "0" + myweekday;
        }
        return myyear + "-" + mymonth + "-" + myweekday;
      },
    },
    created() {},
    components: {
      bottomLayer,
      HeaderSame
    }
  };

</script>
<style lang="scss" scoped>
  @import "../../../css/brick.scss";

  .contract {
    padding-bottom: 4em;
    font-size: .3rem;
    padding-top: 0.88rem;

    .content {
      .item {
        .item-text {
          padding-left: 1em;
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
        color: #bcbcbc;
      }

      .cervix {
        .item {
          // padding-right: 1em;

          .item-text {
            width: auto;
          }

          .item-input {
            text-align: right;
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
        color: #999999;

        p {
          display: inline-block;
        }
      }
    }

    .footer {
      text-align: center;
      margin-top: 1rem;
      padding: .5vw;

      .footer-btn {
        background: #3CB850;
        width: 80%;
        padding: 3vw 0;
        color: #fff;
        border: none;
      }
    }
  }

</style>
