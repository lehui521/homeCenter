<template>
  <div class="pages" id="updateMember">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <input type="file" name="file" id="file" style="display:none" @change="uploadFile">
    <div class="content">
      <van-cell title="修改个人头像" is-link class="single" @click="uploadImg">
        <img v-lazy="memberInfo.avatar" alt="" class="touImg">
      </van-cell>
      <van-cell title="昵称" is-link class="single" :value="memberInfo.nickname" @click="$router.push('updateMemberName')">
      </van-cell>
      <van-cell title="性别" is-link class="single" :value="memberInfo.sex==1?'男':memberInfo.sex==2?'女':'无'" @click="showSex=true">
      </van-cell>
      <van-cell title="所在城市" is-link class="single" :value="memberInfo.province+memberInfo.city" @click="showCity=true">
      </van-cell>
      <van-cell title="手机" class="single" :value="memberInfo.mobile">
      </van-cell>
    </div>
    <!-- 所有的城市 -->
    <van-popup v-model="showCity" position="bottom" :overlay="true">
      <van-area :area-list="areaList" value="110101" @confirm="clickCity" @cancel="showCity=false" />
    </van-popup>
    <!-- 性别 -->
    <van-popup v-model="showSex" position="bottom" :overlay="true">
      <van-picker :columns="sexData" @change="onChange" show-toolbar @cancel="showSex=false" @confirm="clickConfirm" />
    </van-popup>
  </div>
</template>
<script>
import HeaderSame from "../../common/sameHeader.vue";
import cityJson from "./city.js";
import lrz from "lrz";
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
      memberInfo: {},
      showCity: false,
      showSex: false,
      areaList: cityJson,
      sexData: [{ text: "男", index: 1 }, { text: "女", index: 2 }],
      fixData: {
        ticket: localStorage.getItem("ticket"),
        sex: "",
        province: "",
        city: "",
        avatar: ""
      }
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    onChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
    },
    clickConfirm: function(value, index) {
      this.fixData.sex = value.index;
      this.updateMemberInfo();
      this.showSex = false;
    },
    clickCity: function(value, index) {
      for (var i in value) {
        if (i == 1) {
          this.fixData.province = value[i].name;
        } else if (i == 2) {
          this.fixData.city = value[i].name;
        }
      }
      this.updateMemberInfo();
      this.showCity = false;
    },
    updateMemberInfo: function() {
      this.tool
        .request({
          url: "/user/setting",
          method: "post",
          params: this.fixData
        })
        .then(res => {
          if (res.status == 200) {
            this.$toast({
              type: "text",
              message: "修改成功"
            });
            this.getData();
          }
        });
    },
    getData: function() {
      this.tool
        .request({
          url: "/user/info",
          method: "post",
          params: {
            ticket: localStorage.getItem("ticket")
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.memberInfo = res.data;
            this.fixData.sex = res.data.sex;
            this.fixData.province = res.data.province;
            this.fixData.city = res.data.city;
            this.fixData.avatar = res.data.avatar;
            this.memberInfo.mobile =
              this.memberInfo.mobile.slice(0, 4) +
              "*****" +
              this.memberInfo.mobile.slice(-3);
          } else {
            this.$dialog.alert({
              title: "提示",
              message: res.msg
            });
          }
        });
    },
    uploadImg: function() {
      document.getElementById("file").click();
    },
    uploadFile: function(e) {
      let file = e.target.files[0];
      lrz(file, { filedName: file.name }).then(fileData => {
        let form = new FormData();
        form.append("file", fileData.base64);
        this.tool
          .request({
            url: "upload/base64",
            method: "post",
            data: {
              image: fileData.base64
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.fixData.avatar = res.data.image;
              this.updateMemberInfo();
            }
          });
      });
    }
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
      border-bottom: 0.01rem solid #e5e5e5;
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


