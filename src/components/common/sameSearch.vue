<template>
    <div class="header">
        <span class="cancel">取消</span>
        <div class="input">
            <input type="text" v-model="searchData" placeholder="搜索您感兴趣的商品">
            <div class="searchIcon">
                <van-icon name="search" />
            </div>
        </div>
        <span class="search" @click="searchHandle">搜索</span>
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
  padding: 0.08rem 0.17rem;
  display: flex;
  justify-content: space-between;
  .input {
    width: 70%;
    position: relative;
    input {
      background: #f1f2f6;
      border: 0;
      outline: none;
      border-radius: 2px;
      height: 100%;
      font-size: 0.26rem;
      width: 100%;
      padding-left: 0.6rem;
      box-sizing: border-box;
    }
  }
  .cancel {
    display: inline-block;
    width: 15%;
    text-align: center;
    line-height: 0.65rem;
    border: 1px solid #fff;
  }
  .search {
    display: inline-block;
    color: #38f;
    width: 15%;
    text-align: center;
    line-height: 0.65rem;
    border: 1px solid #fff;
  }
  .searchIcon {
    box-sizing: border-box;
    height: 100%;
    line-height: 0.88rem;
    position: absolute;
    left: 0.15rem;
    top: 0;
  }
}
</style>


