<template>
    <div class="pages">
        <HeaderSame :headerObj="headerObj"></HeaderSame>
        <div class="contentBox">
            <!-- <div class="userName">
                <input type="text" placeholder="用户名" v-model="queryData.username">
            </div>
            <div class="userName">
                <input type="password" placeholder="密码" v-model="queryData.password">
            </div>
            <div class="submit">
                <span @click="submitLogin">登录</span>
            </div> -->
            <div class="title">快捷登录</div>
            <div class="userphone">
              <input type="text" placeholder="输入手机号">
            </div>
            <div class="useryz"> 
              <input type="text" placeholder="验证码">
              <div></div>
            </div>
            <div class="messyz">
               <input type="text" placeholder="请输入短信验证码">
              <div>获取短信验证码</div>
            </div>
            <div class="prompt">未注册的手机号验证后自动创建用户</div>
            <div class="login">登陆</div>
            <div class="logintip">登录即表示您同意《家品汇用户服务协议》</div>
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
        title: "",
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
  font-size: 0.3rem;
  font-family:PingFangSC-Regular;
  background: #fff;
  // .contentBox {
  //   margin-top: 2rem;
  //   .userName {
  //     text-align: center;
  //     font-size: 0.33rem;
  //     margin-top: 0.6rem;
  //     input {
  //       height: 0.45rem;
  //       border: 0;
  //       border-bottom: 1px solid #999999;
  //       width: 70%;
  //     }
  //   }
  //   .submit {
  //     text-align: center;
  //     margin-top: 0.3rem;
  //     span {
  //       display: inline-block;
  //       font-size: 0.36rem;
  //       background: #4bc161; 
  //       color: #fff;
  //       padding: 0.2rem 1rem;
  //       border-radius: 0.6rem;
  //     }
  //   }
  // }
  .contentBox{
    ::placeholder{
      color: #999;
    }
    padding: 0 0.8rem;
    margin-top: 0.92rem;
    .title{
        font-size:0.58rem;
        font-weight:400;
        color:#424242;
        margin-bottom: 1.73rem;
    }
     .userphone {
      input {
        width: 3.8rem;
        height: 0.98rem;
        border: 0;
        border-bottom: 1px solid #979797;
        padding: 0 0.1rem;
        padding-right: 2rem;
      }
    }
    .useryz{
      margin-bottom: 0.15rem;
      input {
        width: 3.4rem;
        height: 0.98rem;
        border: 0;
        border-bottom: 1px solid #979797;
        padding: 0 0.1rem;
        padding-right: 2.4rem;
      }
      >div{
          width:1.46rem;
          height:0.80rem;
          background:rgba(216,216,216,1);
          position: relative;
          margin-top: -0.91rem;
          margin-left: 4.2rem;
        }
    }
    .messyz{
      margin-bottom: 0.2rem;
      input {
        width: 3rem;
        height: 0.98rem;
        border: 0;
        border-bottom: 1px solid #979797;
        padding: 0 0.1rem;
        padding-right: 2.8rem;
      }
      >div{
          width:3rem;
          height:0.71rem;
          padding-left: 0.17rem;
          border-left: 1px solid #979797;
          color: #3CB850;
          line-height: 0.71rem;
          position: relative;
          margin-top: -0.89rem;
          margin-left: 3.4rem;
        }
    }
    .prompt{
      margin-left: 0.1rem;
      height:1rem;
      font-size:0.24rem;
      font-weight:400;
      color:rgba(153,153,153,1);
      line-height:1rem;
      letter-spacing: 0.01rem;
    }
    .login{
      margin-top: 0.1rem;
      width:5.90rem;
      height:1.00rem;
      line-height: 1rem;
      text-align: center;
      color: #fff;
      background:rgba(60,184,80,1);
    }
     .logintip{
      width:5.90rem;
      height:0.8rem;
      line-height: 0.8rem;
      text-align: center;
      color: #999999;
      font-size: 0.24rem;
    }
  }
}
</style>


