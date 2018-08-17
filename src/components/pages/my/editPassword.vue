<template>
  <div class="page">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="content">
      <div class="item">
        <input type="password" class="item-input" placeholder="当前密码">
      </div>
      <div class="item">
        <input type="password" class="item-input" placeholder="新密码">
      </div>
      <div class="item">
        <input type="password" class="item-input" placeholder="确认密码">
      </div>
    </div>
    <div class="footer">
      <button class="footer-btn">立即提交</button>
    </div>
  </div>
</template>
<script>
  import HeaderSame from "../../common/sameHeader.vue";
  export default {
    data() {
      return {
        headerObj: {
          title: "修改密码",
          img: ""
        },
      }
    },
    methods: {

    },
    created() {

    },
    components: {
      HeaderSame
    }
  }

</script>
<style lang="scss" scoped>
  .page {
    padding-top: 0.88rem;
    font-size: 14px;
    line-height: 44px;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    .header {}
    .content {
      .item {
        padding: 0 2vw;
        .item-input {
          width: 100%;
          border: none;
          border-bottom: 1px solid #999;
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
        padding: 1vw 0;
        color: #fff;
        border: none;
      }
    }
  }

</style>
