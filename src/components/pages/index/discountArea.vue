<template>
    <div class="discountArea">
        <div class="title">
            <img src="static/img/tuijianshichang.png" alt="">
            <img src="static/img/rightIcon.png" alt="" class="rightIcon">
        </div>
        <div class="banner">
            <img src="static/img/discountBanner.png" alt="">
        </div>
        <div class="center">
            <div class="leftImg">
                <img src="static/img/discountLeft.png" alt="">
            </div>
            <div class="rightImg">
                <div>
                    <img src="static/img/discountRight1.png" alt="">
                </div>
                <div>
                    <img src="static/img/discountRight2.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.discountArea {
  font-size: 0.35rem;
  .title {
    text-align: center;
    padding: 0.5rem 0.2rem;
    img {
      height: 0.4rem;
    }
    .rightIcon{
        float: right;
    }
  }
  .banner{
      height:2.6rem;
      img{
          height:100%;
          width:100%;
      }
  }
  .center{
      height:4.8rem;
      box-sizing: border-box;
      padding:0.1rem;
      display: flex;
      justify-content: space-between;
      div{
          width:50%;
      }
      .leftImg{
          img{
              width:100%;
          }
      }
      .rightImg{
          div{
              height:50%;
              width:100%;
              img{
                  width:100%;
              }
          }
      }
  }
}
</style>


