<template>
  <div class="page">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="content brick">
      <ul class="list">
        <router-link class="item" to="/myOinion">
          <label class="item-text require">意见反馈</label>
          <span class="item-input">{{formData.decorate}}</span>
          <span class="item-right-text item-right-icon" @click="dateClick">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </router-link>
        <li class="item">
          <label class="item-text require">清除缓存</label>
          <span class="item-input">{{formData.decorate}}</span>
          <span class="item-right-text item-right-icon" @click="dateClick">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </li>
        <router-link class="item" to="/myAboutUs">
          <label class="item-text require">关于我们</label>
          <span class="item-input">{{formData.decorate}}</span>
          <span class="item-right-text item-right-icon" @click="dateClick">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </router-link>
        <router-link class="item" to="/myEditPassword">
          <label class="item-text require">修改密码</label>
          <span class="item-input">{{formData.decorate}}</span>
          <span class="item-right-text item-right-icon" @click="dateClick">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </router-link>
        <li class="item">
          <label class="item-text require">推送消息</label>
          <!-- <span class="item-input">{{formData.decorate}}</span> -->
          <span class="item-right-text item-right-icon" @click="dateClick">
            <van-switch v-model="checked" class="item-swith" />
          </span>
        </li>
      </ul>
    </div>
    <div class="footer">
      <button class="footer-btn">退出登陆</button>
    </div>
  </div>
</template>
<script>
import HeaderSame from "../../common/sameHeader.vue";
export default {
    data() {
        return {
            headerObj: {
                title: "设置",
                img: ""
            },
            formData: {},
            checked: false
        };
    },
    methods: {
        dateClick() {}
    },
    created() {},
    components: {
        HeaderSame
    }
};
</script>
<style lang="scss" scoped>
.page {
    padding-top: 0.88rem;
    font-size: 0.3rem;
    .header {
    }
    .content {
        line-height: 44px;
        .list {
            .item {
                padding: 1% 4%;
                background-color: #fff;
                border-bottom: 1px solid #979797;
                display: block;
                color: inherit;
                .item-text {
                    font-size: 16px;
                    color: #666666;
                }
                .item-right-text {
                    float: right;
                    font-size: 20px;
                }
                .item-swith {
                    vertical-align: middle;
                }
            }
        }
    }
    .footer {
        text-align: center;
        margin-top: 1rem;
        padding: 0.5vw;
        .footer-btn {
            background: #fff;
            width: 80%;
            padding: 3vw 0;
            color: #3cb850;
            border: none;
            border: 1px solid #3cb850;
        }
    }
    .veralign::before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        height: 100%;
    }
}
</style>
