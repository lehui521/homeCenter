<template>
  <div class="page">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="content"></div>
    <div class="footer"></div>
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
    .header {}
    .content {}
    .footer {}
  }

</style>
