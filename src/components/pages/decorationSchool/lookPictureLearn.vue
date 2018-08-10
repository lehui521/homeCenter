<template>
    <div class="lookPictureLearn">
        <div class="title">
            <img src="static/img/kantuxuesheji.png" alt="">
            <img src="static/img/rightIcon.png" alt="" class="rightIcon">
        </div>
        <div class="content">
            <div class="list" v-for="(item,index) in [1,2,3,4]" :key="index">
                <img src="static/img/shichangtuipian.png" alt="">
                <div class="text">令人愉悦的纯净白</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.lookPictureLearn {
  font-size: 0.3rem;
  margin-bottom: 0.3rem;
  .title {
    text-align: center;
    padding: 0.36rem 0.2rem;
    img {
      height: 0.28rem;
    }
    .rightIcon {
      float: right;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    box-sizing: border-box;
    background: #f8f8f8;
    padding: 0.2rem;
    .list {
      width: 3.45rem;
      border: 1px solid #efefef;
      padding: 0.1rem;
      box-sizing: border-box;
      box-shadow: #efefef 0 2px 5px 0;
      margin-bottom: 0.2rem;
      img {
        width: 100%;
        height: 2.04rem;
      }
      .text {
        text-align: center;
        font-size: 0.26rem;
        color: #666666;
        letter-spacing: 0;
        margin-top: 0.06rem;
      }
    }
  }
}
</style>


