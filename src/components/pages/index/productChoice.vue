<template>
    <div class="productChoice">
        <div class="title">
            <img src="static/img/shangpinjingxuan.png" alt="">
            <img src="static/img/rightIcon.png" alt="" class="rightIcon">
        </div>
        <div class="banner">
            <img src="static/img/discountBanner.png" alt="">
        </div>
        <div class="center">
            <div class="list" v-for="(item,index) in [1,2,3,4]" :key="index">
                <div class="price">￥5555</div>
                <img src="static/img/shichangtuipian.png" alt="">
                <div class="listName">
                    秋夕-现代橱柜
                </div>
                <div class="text">
                    <span class="name" style="padding-right:5px;">九牧恒大店</span>
                    <span class="name">上海恒大陶瓷市场</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.productChoice {
  font-size: 0.35rem;
  margin-bottom: 0.3rem;
  .title {
    text-align: center;
    padding: 0.5rem 0.2rem;
    img {
      height: 0.4rem;
    }
    .rightIcon {
      float: right;
    }
  }
  .banner {
    height: 2.6rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .center {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    .list {
      width: 50%;
      padding: 0.3rem;
      box-sizing: border-box;
      box-shadow: #efefef 1px 1px 6px;
      position: relative;
      .price {
        position: absolute;
        top: 0.5rem;
        background-color: #fff;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        text-align: left;
        padding: 2px 0;
        padding-left: 3px;
        padding-right: 6px;
        font-size: 0.28rem;
        color: #fbb0b0;
      }
      img {
        width: 100%;
        height: 2.3rem;
      }
      .listName {
        font-weight: 500;
        text-align: center;
        color: #4e4e4e;
      }
      .text {
        text-align: right;
        color: #4e4e4e;
        font-size: 0.28rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .name {
          display: inline-block;
          width: 50%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: left;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>


