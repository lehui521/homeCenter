<template>
    <div class="pages">
        <HeaderSame :headerObj="headerObj"></HeaderSame>
        <div class="contentBox">
            <div class="userName">
                <input type="text" placeholder="用户名" v-model="queryData.username">
            </div>
            <div class="userName">
                <input type="password" placeholder="密码" v-model="queryData.password">
            </div>
            <div class="submit">
                <span @click="submitLogin">登录</span>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderSame from "../common/sameHeader.vue";
export default {
  components: { HeaderSame },
  data: function() {
    return {
      headerObj: {
        title: "登录",
        img: ""
      },
      queryData: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submitLogin: function() {
      this.tool
        .request({
          url: "/user/login",
          method: "post",
          params: this.queryData
        })
        .then(res => {
          if (res.status == 200) {
            let str = JSON.stringify(res.data);
            localStorage.setItem("memberData", str);
            localStorage.setItem("ticket", res.data.ticket);
            this.$router.go(-1);
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
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  .contentBox {
    margin-top: 2rem;
    .userName {
      text-align: center;
      font-size: 0.33rem;
      margin-top: 0.6rem;
      input {
        height: 0.45rem;
        border: 0;
        border-bottom: 1px solid #999999;
        width: 70%;
      }
    }
    .submit {
      text-align: center;
      margin-top: 0.3rem;
      span {
        display: inline-block;
        font-size: 0.36rem;
        background: #4bc161;
        color: #fff;
        padding: 0.2rem 1rem;
        border-radius: 0.6rem;
      }
    }
  }
}
</style>


