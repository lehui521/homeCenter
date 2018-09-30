<template>
   <div class="pages">
       <HeaderSame :headerObj="headerObj"></HeaderSame> 
       <div class="content">
           <div class="designer">
               <div class="imgdiv">
                   <img src="" alt="">
               </div>
               <div class="name">戴智翔</div>
               <div class="tiplist">
                   <div>资深</div>
                   <div>明星</div>
               </div>
               <div class="titlelist">
                   <div><img src="static/img/yan.png" alt=""> <span>728</span></div>
                   <div><img src="static/img/xin.png" alt=""> <span>58</span></div>
                   <div><img src="static/img/yan.png" alt=""> <span>33</span></div>
               </div>
           </div>
           <div class="detailli">
               <div>                  
                   <div><div></div><div>上海市</div>&nbsp;<div>8年设计经验</div></div>
                   <div>从事设计工作8年，环境才健康商城进市场累计撒开车实现此次调查...</div>
               </div>
               <div>                  
                   <div><div></div><div>擅长风格</div></div>
                   <div class="tiplist2">
                       <div>资深</div>
                       <div>资深</div>
                       <div>资深</div>
                       <div>资深</div>
                       <div>资深</div>
                   </div>
               </div>
               <div>         
                   <div><div></div>所属市场</div>
                   <div><span>上海的考场上的V型</span><img src="static/img/rightArrow.png" alt=""></div>
               </div>
               <div>            
                   <div><div></div>所属市场</div>
                   <div><span>上海的考场上的V型</span><img src="static/img/rightArrow.png" alt=""></div>
               </div>
           </div>
           <div class="desfoot">
               <div>关注</div>
               <div>找TA设计</div>
           </div>
       </div>

   </div>
</template>
<script>
import HeaderSame from "../../../common/sameHeader.vue";
export default {
  components: { HeaderSame },
  data: function() {
    return {
      headerObj: {
        title: "设计师详情",
        img: "static/img/fenxiangB.png",
        text: "Share"
      },
      shopData: {}
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData: function() {}
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  font-size: 0.28rem;
  color: #333333;
  font-family: PingFangSC-Regular;
  background: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  overflow-x:hidden;
  .content {
    background: #fff;
    .designer {
      padding-top: 0.14rem;
      text-align: center;
      .imgdiv {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        background: #d8d8d8;
        margin: 0 auto;
        margin-bottom: 0.14rem;
      }
      .name {
        letter-spacing: 0;
        margin-bottom: 0.3rem;
      }
      .tiplist {
        width: 5rem;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 0.55rem;
        > div {
          width: 0.66rem;
          height: 0.46rem;
          line-height: 0.5rem;
          background: #fafdfa;
          text-align: center;
          font-size: 0.22rem;
          color: #38ba50;
        }
        > div:not(:last-child) {
          margin-right: 0.4rem;
        }
      }
      .titlelist {
        width: 5rem;
        height: 0.38rem;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 0.55rem;
        color: #999;
        > div {
          width: 1.51rem;
          height: 0.38rem;
          text-align: center;
        }
        > div:not(:last-child) {
          border-right: 0.02rem dashed #979797;
        }
        > div > span {
          vertical-align: middle;
        }
        > div:first-child > img {
          width: 0.33rem;
          height: 0.22rem;
          vertical-align: middle;
        }
        > div:nth-child(2) > img {
          width: 0.3rem;
          height: 0.28rem;
          vertical-align: middle;
        }
        > div:nth-child(3) > img {
          width: 0.3rem;
          height: 0.28rem;
          vertical-align: middle;
        }
      }
    }
    .detailli {
      img {
        height: 0.24rem;
        vertical-align: middle;
        margin-left: 0.2rem;
      }
      > div:first-child > div:nth-child(2) {
        padding-left: 0.32rem;
        margin-bottom: 0.31rem;
        padding-right: 0.29rem;
      }
      > div > div:first-child {
        height: 0.42rem;
        line-height: 0.42rem;
        display: flex;
        margin-bottom: 0.21rem;
        margin-left: 0.3rem;
        > div:first-child {
          background: #3cb850;
          height: 0.42rem;
          width: 0.1rem;
          border-radius: 0.1rem;
          margin-right: 0.08rem;
        }
      }
      > div:nth-child(3) {
        display: flex;
        justify-content: space-between;
        padding-right: 0.3rem;
        border-bottom: 1px solid #d5d5d5;
        margin-bottom: 0.26rem;
        > div:nth-child(2)> span {
            vertical-align: middle;
        }
      }
      > div:nth-child(4) {
        display: flex;
        justify-content: space-between;
        padding-right: 0.3rem;
        border-bottom: 0.26rem solid #f8f8f8;
        > div:nth-child(2) > span  {
            vertical-align: middle;
        }
      }
      .tiplist2 {
        width: 10rem;
        padding-left: 0.4rem;
        padding-bottom: 0.11rem;
        border-bottom: 1px solid #d5d5d5;
        display: flex;
        margin: 0.3rem 0;
        > div {
          width: 0.66rem;
          height: 0.46rem;
          line-height: 0.5rem;
          background: #fafdfa;
          text-align: center;
          font-size: 0.22rem;
          color: #38ba50;
          margin-right: 0.4rem;
        }
      }
    }
    .desfoot {
      position: fixed;
      bottom: 0;
      display: flex;
      height: 1rem;
      line-height: 1rem;
      width: 100%;
      > div {
        width: 50%;
        text-align: center;
        background: #fff;
        color: #50bf82;
        letter-spacing: 0.05rem;
      }
      > div:nth-child(2) {
        background: #3cb850;
        color: #fff;
      }
    }
  }
}
</style>

