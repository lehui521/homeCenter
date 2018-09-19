<template>
  <div class="pages">
    <div class="header">
      <span>编辑姓名</span>
      <span class="share" @click="updateMemberName">保存</span>
      <img src="static/img/leftArrow.png" alt="" class="back" @click="$router.go(-1)">
    </div>
    <div class="inputName">
      <input type="text" placeholder="请输入新名称" v-model="memberName">
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      memberName: ""
    };
  },
  methods: {
    updateMemberName: function() {
      this.tool
        .request({
          url: "/user/setting",
          method: "post",
          params: {
            nickname: this.memberName,
            ticket: localStorage.getItem("ticket")
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.$dialog
              .alert({
                title: "提示",
                message: "修改成功"
              })
              .then(() => {
                this.$router.go(-1);
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
  .header {
    height: 0.88rem;
    position: fixed;
    width: 100%;
    text-align: center;
    font-size: 0.36rem;
    color: #333333;
    line-height: 0.88rem;
    top: 0;
    background: #fff;
    .share {
      position: absolute;
      right: 0.4rem;
      top: 0;
      font-size: 0.3rem;
      height: 100%;
      line-height: 0.88rem;
      color: #999999;
    }
    .back {
      height: 0.32rem;
      position: absolute;
      top: 0.28rem;
      left: 0.3rem;
    }
  }
  .inputName {
    font-size: 0.3rem;
    color: #999999;
    letter-spacing: 0;
    text-align: center;
    margin-top: 0.5rem;
    input {
      width: 5.76rem;
      height: 0.76rem;
      outline: none;
      border: 1px solid #979797;
      border-radius: 0.12rem;
      text-align: center;
    }
  }
}
</style>

