<template>
  <div class="page">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="content">
      <div class="content-body">
        <div class="logo">
          <!-- <img src="static/img/onlineMart.png" alt=""> -->
        </div>
        <p class="content-body-text">家品汇</p>
        <p class="content-body-version">当前版本V2.2</p>
      </div>
      <div class="content-text">
        <p>家品汇--互联网装修平台</p>
      </div>
      <p class="agreement">家品汇软件服务协议</p>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import HeaderSame from "../../common/sameHeader.vue";

export default {
  components: { HeaderSame },
  data() {
    return {
      headerObj: {
        title: "关于我们",
        img: ""
      }
    };
  },
  methods: {},
  created() {}
};
</script>
<style lang="scss" scoped>
.page {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  font-size: 14px;
  padding-top: 0.88rem;
  background: #fff;
  color: #333333;
  .header {
  }
  .content {
    .content-body {
      padding: 10vw 0;
      text-align: center;
      border-bottom: 1px solid #eee;
      .logo {
        background: #999999;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 0.18rem;
        margin: auto;
      }
      .content-body-text {
        font-size: 18px;
        font-weight: bold;
        margin-top: 3vw;
      }
      .content-body-version {
        font-size: 0.3rem;
        margin-top: 2vw;
        color: #999999;
      }
    }
    .content-text {
      text-indent: 2em;
      padding-top: 4vw;
    }
    .agreement {
      margin-top: 5vw;
      text-align: center;
      text-decoration: underline;
      color: #6cc895;
    }
  }
  .footer {
  }
}
</style>
