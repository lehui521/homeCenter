<template>
  <div class="page">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="content">
      <ul class="list">
        <li class="item">
          <div class="relativeItem">
            <div class="thumb">
              <img src="static/img/zhuanxiumeitu.png" alt="">
            </div>
            <div class="item-show">
              <p class="item-show-text">装修美图</p>
            </div>
             <div class="item-icon veralign">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="relativeItem">
            <div class="thumb">
              <img src="static/img/cailiao.png" alt="">
            </div>
            <div class="item-show">
              <p class="item-show-text">材料百科</p>
            </div>
             <div class="item-icon veralign">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="relativeItem">
            <div class="thumb">
              <img src="static/img/zhuangxiu.png" alt="">
            </div>
            <div class="item-show">
              <p class="item-show-text">装修百科</p>
            </div>
             <div class="item-icon veralign">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="relativeItem">
            <div class="thumb">
              <img src="static/img/cuxiaohuodong.png" alt="">
            </div>
            <div class="item-show">
              <p class="item-show-text">设计案例</p>
            </div>
             <div class="item-icon veralign">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="relativeItem">
            <div class="thumb">
              <img src="static/img/cuxiaohuodong.png" alt="">
            </div>
            <div class="item-show">
              <p class="item-show-text">促销活动</p>
            </div>
             <div class="item-icon veralign">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
  import HeaderSame from "../../common/sameHeader.vue";
  export default {
    data() {
      return {
        headerObj: {
          title: "我的收藏",
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
    padding-top: 0.88rem;
    font-size: .3rem;
    .header {}
    .content {
      .list {
        .item {
          padding: 2%;
          background-color: #fff;
              border-bottom: 1px solid #D5D5D5;
          .relativeItem {
            position: relative;
            display: block;
            .item-icon {
              color: #eee;
              position: absolute;
              top: 0;
              font-size: 0.6rem;
              right: 2vw;
              height: 100%;
              i {
                vertical-align: middle;
              }
            }
          }
          .thumb {
            width: .8rem;
            display: inline-block;
            vertical-align: middle;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .item-show {
            display: inline-block;
            margin-left: 2%;
            vertical-align: middle;
            .item-show-text {
              font-size: 0.3rem;
              color: #333333;
            }
            .item-show-annotation {
              color: #999999;
              display: inline-block;
              font-size: 0.28rem;
              vertical-align: bottom;
            }
          }
          .item-show-name {
            color: #999999;
            font-size: 12px;
            margin-left: 1vw;
          }
        }
      }
    }
    .footer {}
    .veralign::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      height: 100%;
    }
  }

</style>
