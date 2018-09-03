<template>
  <div class="header">
    <div class="searchInput">
      <div class="searchIcon">
        <van-icon name="search" />
      </div>
      <div class="input">
        <input type="text" placeholder="请输入搜索内容" @keyup.enter.native="searchHandle">
      </div>
    </div>
    <div class="cancel" @click="$router.go(-1)">取消</div>
    <!-- <span class="cancel">取消</span> -->
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      searchData: ""
    };
  },
  methods: {
    searchHandle: function() {
      this.$emit("searchClick", this.searchData);
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  height: 0.88rem;
  background: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 0.26rem;
  color: #666666;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  .searchInput {
    width: 6rem;
    height: 0.56rem;
    display: flex;
    justify-content: flex-start;
    margin-top: 0.08rem;
    .searchIcon {
      font-size: 0.26rem;
      background: #f1f2f6;
      width: 0.68rem;
      text-align: center;
      height: 0.56rem;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .input {
      width: 100%;
      font-size: 0.26rem;
      height: 100%;
      input {
        background: #f1f2f6;
        border: 0;
        outline: none;
        border-radius: 2px;
        height: 100%;
        font-size: 0.26rem;
        width: 100%;
        padding: 0;
      }
    }
  }
  .cancel {
    width: 10%;
    text-align: center;
    font-size: 0.26rem;
    line-height: 0.72rem;
    color: #666666;
    text-align: center;
  }
}
</style>


