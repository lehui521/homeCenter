<template>
    <div class="ownerDiary">
        <div class="title">
            <img src="static/img/yezhuriji.png" alt="">
            <img src="static/img/rightIcon.png" alt="" class="rightIcon">
        </div>
        <div class="content">
            <div class="diary">
                <img src="static/img/shichangtuipian.png" alt="">
                <div class="diaryTitle">
                    学林苑我的家
                </div>
                <div class="diaryText">
                    <span>20-25万/</span>
                    <span>半包/</span>
                    <span>60m²以下/</span>
                    <span>两居/</span>
                    <span>宜家</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.ownerDiary {
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
    box-sizing: border-box;
    padding: 0.1rem;
    .diary {
      border: 1px solid #d8d8d8;
      box-shadow: #d8d8d8 1px 1px 5px;
      box-sizing: border-box;
      padding: 0.1rem;
      img {
        width: 100%;
        height: 4.28rem;
      }
      .diaryTitle {
        padding-left: 0.19rem;
        box-sizing: border-box;
        font-size: 0.3rem;
        color: #333333;
      }
      .diaryText {
        padding-left: 0.19rem;
        box-sizing: border-box;
        font-size: 0.28rem;
        color: #999999;
        margin-top: 0.1rem;
      }
    }
  }
}
</style>


