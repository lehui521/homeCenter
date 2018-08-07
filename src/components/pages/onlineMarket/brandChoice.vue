<template>
    <div class="brandChoice">
        <div class="title">
            <img src="static/img/pinpaijingxuan.png" alt="">
            <img src="static/img/rightIcon.png" alt="" class="rightIcon">
        </div>
        <div class="center">
            <div v-for="(item,index) in [1,2,3,4,5,6,7,8,9]" :key="index">
                <img src="static/img/songxia.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.brandChoice {
  font-size: 0.35rem;
  margin-bottom:0.3rem;
  .title {
    text-align: center;
    padding: 0.36rem 0;
    position: relative;
    img {
      height: 0.28rem;
    }
    .rightIcon {
      position: absolute;
      top: 0.38rem;
      height: 0.24rem;
      right: 0.3rem;
    }
  }
  .center {
      display: flex;
      justify-content: space-between;
      flex-flow: wrap;
      padding:0 0.2rem;
      box-sizing: border-box;
    div {
        margin-top:0.2rem;
        width:2.32rem;
        padding:0.6rem 0.2rem;
        box-shadow: #DEDEDE 2px 5px 10px;
        text-align: center;
        box-sizing: border-box;
      img {
        width: 100%;
      }
    }
  }
}
</style>


