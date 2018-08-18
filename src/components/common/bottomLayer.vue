<template>
  <div class="mask" @click="cancel()">
    <div class="panel" @click="$event.stopPropagation()">
      <div class="panel-header">
        <span class="panel-header-left" @click="cancel()">
          取消
        </span>
        <slot name="header"></slot>
        <!-- <span>成交来源</span> -->
        <span class="panel-header-right" @click="confirm()">确认</span>
      </div>
      <div class="panel-content">
        <ul class="panel-content-list">
          <li class="panel-content-item" :class="{'item-selected':item==returnValue}" v-for="(item,index) in dataList" :key="index" @click="itemClick(item)">
            <p v-if="!labelName">{{item}}</p>
            <p v-if="labelName">{{item[labelName]}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    dataList: {
      default: []
    },
    labelName: {
      default: ""
    },
    valueName: {
      default: ""
    }
  },
  data() {
    return {
      returnValue: ""
    };
  },
  methods: {
    itemClick(value) {
      this.returnValue = value;
    },
    confirm() {
      this.$emit("botConfirm", this.returnValue);
    },
    cancel() {
      this.$emit("botCancel");
      console.log(this.labelName);
      console.log(this.valueName);
      console.log(this.dataList);
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999999;
  .panel {
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 33vh;
    margin: 0 auto;
    background: #fff;
    width: 100%;
    .panel-header {
      padding: 0 1rem;
      line-height: 44px;
      border-bottom: 1px solid #eee;
      text-align: center;
      font-size: 18px;
      .panel-header-left {
        float: left;
        font-size: 15px;
        color: #3cb850;
      }
      .panel-header-right {
        float: right;
        font-size: 15px;
        color: #3cb850;
      }
    }
    .panel-content {
      overflow-y: auto;
      padding-top: 1rem;
      .panel-content-list {
        line-height: 33px;
        text-align: center;
        .item-selected {
          color: #55c9c4;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
