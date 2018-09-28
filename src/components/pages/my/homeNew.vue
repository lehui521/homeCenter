<template>
  <div class="pages">

      <HeaderSame :headerObj="headerObj"></HeaderSame>

      <div class="home-head">

        <img src="https://via.placeholder.com/50x50" />
        <span>设置我的家</span>
        <ul>
          <li>小区名称 |</li>
          <li>现代 |</li>
          <li>一居</li>
        </ul>
        <a href="#">我的日记</a>

      </div>

      <div class="home-flow">
        <div class="sub-flow">

          <div class="flow-info">
            <span>装修准备</span>
            <i class="uncur cur"></i>
          </div>
          <span></span>

          <div class="flow-info">
            <span>合同签订</span>
            <i class="uncur"></i>
          </div>
          <span></span>

          <div class="flow-info">
            <span>拆除改造</span>
            <i class="uncur"></i>
          </div>
          <span></span>

          <div class="flow-info">
            <span>水电布局</span>
            <i class="uncur"></i>
          </div>
          <span></span>

          <div class="flow-info">
            <span>泥木工艺</span>
            <i class="uncur"></i>
          </div>
        </div>

      </div>

      <div class="home-items">

        <h3 class="col-head">代办事项</h3>

        <div class="col-main">

          <div>
            <label>
              <i class="uncur cur"></i>
              <span>收房验房</span>
            </label>
            <a href="#">如何收房验房</a>
          </div>

          <div>
            <label>
              <i class="uncur"></i>
              <span>收房验房</span>
            </label>
            <a href="#">如何收房验房</a>
          </div>

          <div class="col-bottom">
            已完成1项 <span>（请在已经完成的装修事项上打勾）</span>
          </div>
          
        </div>

      </div>

      <div class="home-school">
         <h3 class="col-head">装修学堂</h3>
         <div class="col-main">

           <div>
             <dl>
               <dt>小白必读</dt>
               <dd>装修哪有那么难，小白业主看过来！</dd>
             </dl>
              <img src="https://via.placeholder.com/70x55">
           </div>

           <div>
             <dl>
               <dt>小白必读</dt>
               <dd>装修哪有那么难，小白业主看过来！</dd>
             </dl>
              <img src="https://via.placeholder.com/70x55">
           </div>

         </div>
      </div>

  </div>
</template>
<script>
import HeaderSame from "../../common/sameHeader.vue";
export default {
  components: {
    HeaderSame
  },
  data() {
    return {
      headerObj: {
        title: "我的家",
        img: ""
      },
      
    };
  },
  computed: {},
  created: function() {
    
  },
  methods: {
    
  }
};
</script>
<style lang="scss" scoped>
@import "../../../css/brick.scss";
.home-head{
  margin-top: 44px;
  width: 100%;
  height: 160px;
  background: #D9D9D9;
  padding-top: 20px;
  font-size: 12px;
  >img{
    width: 50px;
    height: 50px;
    display: block;
    margin: 0 auto;
    border: #979797 1px solid;
    border-radius: 50%;
  }
  >span{
    color: #999;
    line-height: 30px;
    text-align: center;
    display: block;
  }
  >ul{
    display: flex;
    color: #333;
    justify-content:center;
    li{
      padding-left: 5px;
    }
  }
  a{
    width: 63px;
    height: 23px;
    border: #3CB850 1px solid;
    line-height: 23px;
    text-align: center;
    background: #fff;
    color: #3CB850;
    display: block;
    margin: 18px auto;
    border-radius: 50px;
  }
}
.home-flow{
  width: 100%;
  font-size: 12px;
  background: #fff;
  height: 50px;
  color: #333;
  overflow-x: auto;
  overflow-y: hidden;
  .sub-flow{
    display: flex;
    width: 420px;
    .flow-info{
      span, i{
        display: block;
        text-align: center;
      }
      span{
        padding: 5px;
      }
    }
    >span{
      width: 30px;
      height: 1px;
      background: #333;
      margin-top: 14px;
    }
  }
}
.uncur{
  width: 16px;
  height: 16px;
  background: url(../../../../static/img/unSel.png) 0 0 no-repeat;
  background-size:16px 16px;
  margin: 0 auto;
  &.cur{
    background: url(../../../../static/img/sel.png) 0 0 no-repeat;
    background-size:16px 16px;
  } 
}
.col-head{
  margin: 0;
  font-size: 14px;
  line-height: 44px;
  text-align: left;
  background: url(../../../../static/img/bgTit.png) 24px center no-repeat;
  background-size:5px 22px;
  padding-left: 34px;
}
.col-main{
  padding: 0 24px;
}
.home-items{
  margin-top: 13px;
  background: #fff;
  font-size: 12px;
  .col-main{
    a{
      color: #3CB850;
    }
    div{
      border-top:1px solid #D5D5D5;
      line-height: 44px;
      display: flex;
      justify-content: space-between;
      label{
        i,span{
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
    .col-bottom{
      display: block;
      font-size: 14px;
      span{
        font-size: 12px;
        color: #3CB850;
      }
    }
  }
}
.home-school{
  margin-top: 13px;
  background: #fff;
  font-size: 12px;
  color: #333;
  .col-main{
    div{
      display: flex;
      justify-content: space-between;
      line-height: 20px;
      padding: 10px 0;
      border-top:1px solid #D5D5D5;
      dt{
        padding-top: 5px;
      }
      dd{
        color: #999;
        padding-top: 5px;
      }
    }
  }
}

</style>
