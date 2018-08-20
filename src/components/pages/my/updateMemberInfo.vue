<template>
    <div class="pages" id="updateMember">
        <HeaderSame :headerObj="headerObj"></HeaderSame>
        <div class="content">
            <van-cell title="修改个人头像" is-link class="single" @click="uploadImg">
                <img src="static/img/touxiang.jpg" alt="" class="touImg">
            </van-cell>
            <van-cell title="昵称" is-link class="single" value="杨文" @click="$router.push('updateMemberName')">
            </van-cell>
            <van-cell title="性别" is-link class="single" value="男" @click="showSex=true">
            </van-cell>
            <van-cell title="所在城市" is-link class="single" value="合肥" @click="showCity=true">
            </van-cell>
            <van-cell title="手机" class="single" value="1525211369">
            </van-cell>
        </div>
        <!-- 所有的城市 -->
        <van-popup v-model="showCity" position="bottom" :overlay="true">
            <van-picker :columns="citys" @change="onChange" show-toolbar @cancel="showCity=false" @confirm="showCity=false" />
        </van-popup>
        <!-- 性别 -->
        <van-popup v-model="showSex" position="bottom" :overlay="true">
            <van-picker :columns="sexData" @change="onChange" show-toolbar @cancel="showSex=false" @confirm="clickConfirm" />
        </van-popup>
    </div>
</template>
<script>
import HeaderSame from "../../common/sameHeader.vue";
const citys = {
  浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
  福建: ["福州", "厦门", "莆田", "三明", "泉州"]
};
export default {
  components: { HeaderSame },
  data: function() {
    return {
      headerObj: {
        title: "编辑资料",
        img: ""
      },
      showCity: false,
      showSex: false,
      citys: [
        {
          values: Object.keys(citys)
        },
        {
          values: citys["浙江"],
          defaultIndex: 0
        }
      ],
      sexData: [{ text: "男", index: 5 }, { text: "女", index: 9 }]
    };
  },
  methods: {
    onChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
    },
    clickConfirm: function(value, index) {
      console.log(value);
    },
    uploadImg: function() {}
  }
};
</script>
<style lang="scss" scoped>
.pages {
  padding-top: 0.88rem;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .content {
    padding-left: 0.4rem;
    box-sizing: border-box;
    .single {
      height: 1.08rem;
      font-size: 0.3rem;
      color: #666666;
      letter-spacing: 0;
      padding: 0;
      border-bottom: 1px solid #979797;
      line-height: 1.08rem;
      padding-right: 0.3rem;
      box-sizing: border-box;
      .touImg {
        width: 0.88rem;
        height: 0.88rem;
        border-radius: 50%;
        margin-top: 0.1rem;
      }
    }
  }
}
</style>


