<template>
    <div class="pages">
        <HeaderSame :headerObj="headerObj"></HeaderSame>
        <div class="contentBox">
            <img v-lazy="messageDetail.image" alt="">
            <div v-html="messageDetail.content"></div>
        </div>
    </div>
</template>
<script>
import HeaderSame from "../../common/sameHeader.vue";
export default {
  components: {
    HeaderSame
  },
  data: function() {
    return {
      headerObj: {
        title: "系统消息详情",
        img: ""
      },
      messageDetail: {}
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.tool
        .request({
          url: "message/info",
          method: "post",
          params: {
            ticket: localStorage.getItem("ticket"),
            message_id: this.$route.query.messageId
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.messageDetail = res.data;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  width: 100%;
  font-size: 0.3rem;
  .contentBox {
    width: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    img {
      width: 100%;
    }
  }
}
</style>


