<template>
  <div class="page">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="content">
      <div class="label">
        <p>标签</p>
      </div>
      <div>
        <p class="label">改进建议</p>
        <textarea name="" id="" cols="30" rows="3" class="item-input" placeholder="期待您宝贵的意见"></textarea>
        <div class="addImg">
          <img src="static/img/upload-plus.png" alt="">
        </div>
      </div>
      <div>
        <p class="label">联系方式</p>
        <input type="text" class="item-input" placeholder="留下联系方式可以更方便联系您">
      </div>
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
        title: "意见反馈",
        img: ""
      }
    };
  },
  methods: {},
  created() {},
  components: {
    HeaderSame
  }
};
</script>
<style lang="scss" scoped>
.page {
  padding-top: 0.88rem;
  font-size: 14px;
  line-height: 44px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  color: #666666;
  overflow: hidden;
  .header {
  }
  .content {
    .label {
      background: #f8f8f8;
      padding-left: 0.3rem;
      box-sizing: border-box;
    }
    .addImg {
      padding-left: 0.3rem;
      box-sizing: border-box;
      img {
        width: 1.48rem;
        height: 1.48rem;
      }
    }
    .item-input {
      width: 100%;
      border: none;
      text-indent: 0.3rem;
    }
  }
  .footer {
  }
}
</style>
