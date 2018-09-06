<template>
    <div class="designerCaseContent">
        <div class="caseHeader">
            案例
        </div>
        <div :class="fixedStatus?'TypeList topFixd':'TypeList'" id="typeList">
            <div class="type" @click="typeClick('style')">
                <div>
                    <span :style="typeStatus =='style'?'color:#3cb850;':'color: #666666;'">风格</span>
                    <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='style'">
                    <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='style'">
                </div>
            </div>
            <div class="type" @click="typeClick('space')">
                <div>
                    <span :style="typeStatus =='space'?'color:#3cb850;':'color: #666666;'">户型</span>
                    <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='space'">
                    <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='space'">
                </div>
            </div>
            <div class="type" @click="typeClick('local')">
                <div>
                    <span :style="typeStatus =='local'?'color:#3cb850;':'color: #666666;'">面积</span>
                    <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='local'">
                    <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='local'">
                </div>
            </div>
            <div class="type" @click="typeClick('color')">
                <div>
                    <span :style="typeStatus =='color'?'color:#3cb850;':'color: #666666;'">排序</span>
                    <img src="static/img/grayDown.png" alt="" v-if="typeStatus!=='color'">
                    <img src="static/img/greenUp.png" alt="" v-if="typeStatus=='color'">
                </div>
            </div>
            <!-- 颜色 -->
            <div class="typeContent" v-if="typeStatus=='color'">
                <div class="content" :style="'background-color:'+item" v-for="(item,index) in colorData" :key="index"></div>
            </div>
            <!-- 局部 -->
            <div class="typeContent" v-if="typeStatus=='local'">
                <div class="content local" v-for="(item,index) in localData" :key="index">
                    {{item}}
                </div>
            </div>
            <!-- 空间 -->
            <div class="typeContent" v-if="typeStatus=='space'">
                <div class="content local" v-for="(item,index) in localData" :key="index">
                    {{item}}
                </div>
            </div>
            <!-- 风格 -->
            <div class="typeContent" v-if="typeStatus=='style'">
                <div class="content local" v-for="(item,index) in localData" :key="index">
                    {{item}}
                </div>
            </div>
        </div>
        <div class="caseContent">
            <div class="mask" v-if="typeStatus!==''" @click="typeStatus=''"></div>
            <div class="single" v-for="i in 4" :key="i">
                <div class="singleImg">
                    <img src="static/img/banner1.png" alt="">
                </div>
                <div class="singleFloor1">
                    <div class="text1">新中式</div>
                    <div class="text2">
                        <span>上海市|中商小区</span>
                    </div>
                </div>
                <div class="singleFloor2">
                    <div class="content1">
                        <div class="contentImg">
                            <img src="static/img/grayStar.png" alt="">
                        </div>

                        <span>3</span>
                    </div>
                    <div class="content1">
                        <div class="contentImg">
                            <img src="static/img/yan.png" alt="">
                        </div>

                        <span>154</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      colorData: ["yellow", "#000", "#3CB850", "#FF9100", "#3D64FF"],
      localData: ["不限", "店面", "衣柜", "酒柜", "鞋柜"],
      typeStatus: "",
      fixedStatus: false
    };
  },
  mounted: function() {
    let top = document.getElementById("typeList").offsetTop;

    window.addEventListener("scroll", () => {
      let windowTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (top - windowTop < 20) {
        this.fixedStatus = true;
      } else {
        this.fixedStatus = false;
      }
    });
  },
  methods: {
    typeClick: function(res) {
      if (this.typeStatus == res) {
        return (this.typeStatus = "");
      }
      this.typeStatus = res;
    }
  }
};
</script>
<style lang="scss" scoped>
.designerCaseContent {
  .caseHeader {
    height: 0.88rem;
    text-align: center;
    font-size: 0.36rem;
    font-weight: 500;
    color: #333333;
    line-height: 0.88rem;
    background: #fff;
  }

  .TypeList {
    height: 0.9rem;
    width: 100%;
    margin-top: 1px solid;
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0;
    box-sizing: border-box;
    background: #fff;
    position: relative;
    .type {
      width: 25%;
      height: 100%;
      border-right: 1px solid #dedede;
      font-size: 0.28rem;
      color: #666666;
      text-align: center;
      div {
        width: 0.75rem;
        text-align: left;
        position: relative;
        margin: auto;
        img {
          position: absolute;
          height: 0.08rem;
          top: 0.16rem;
          right: 0;
        }
      }
    }
    .type:last-child {
      border-right: 0;
    }
    .typeContent {
      position: absolute;
      width: 100%;
      z-index: 999;
      top: 0.9rem;
      background: #fff;
      display: flex;
      justify-content: space-between;
      padding: 0 0.3rem;
      box-sizing: border-box;
      flex-flow: wrap;
      padding-bottom: 0.32rem;
      .content {
        height: 0.6rem;
        width: 1.5rem;
        border-radius: 0.08rem;
        margin-top: 0.32rem;
        text-align: center;
        line-height: 0.6rem;
      }
      .local {
        background: #f4f4f4;
        color: #666666;
        font-size: 0.28rem;
      }
      .content {
        background-color: #f8f8f8;
      }
    }
  }
  .topFixd {
    position: fixed;
    top: 0.88rem;
    left: 0;
    z-index: 999;
  }
  .caseContent {
    position: relative;
    .mask {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 1;
      background: rgba(0, 0, 0, 0.5);
      top: 0;
      z-index: 998;
    }
    .single {
      background: #fff;
      margin-top: 0.2rem;
      .singleImg {
        width: 100%;
        height: 4.74rem;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .singleFloor1 {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        padding: 0.18rem 0.22rem;
        .text1 {
          font-size: 0.3rem;
          color: #333333;
          width: 20%;
        }
        .text2 {
          width: 100%;
          font-size: 0.26rem;
          color: #666666;
          position: relative;
          span {
            position: absolute;
            left: 0;
            bottom: 0;
          }
        }
      }
      .singleFloor2 {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        padding-left: 0.18rem;
        padding-bottom: 0.21rem;
        .content1 {
          font-size: 0.26rem;
          color: #999999;
          margin-right: 0.61rem;
          .contentImg {
            float: left;
            margin-right: 0.1rem;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            img {
              height: 0.25rem;
            }
          }
        }
      }
    }
  }
}
</style>


