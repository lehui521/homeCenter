<template>
  <div class="pages">

      <HeaderSame :headerObj="headerObj"></HeaderSame>

      <div class="home-head">

        <img :src="userInfo.avatar||'https://via.placeholder.com/50x50'" />
        <router-link to="/myHome" class="set">设置我的家</router-link>
        <ul>
          <li>{{`${userInfo.community||'无'} |`}}</li>
          <li>{{`${userInfo.style_data||'无'} |`}}</li>
          <li>{{userInfo.layout_data||'无'}}</li>
        </ul>
        <router-link to="" class="link">我的日记</router-link>

      </div>

      <div class="home-flow">
        <div class="sub-flow" :style="{width:tags.length*85+'px'}">
          <div v-for="(item,i) in tags" :key="i" @click="setSkillTags(item.id,i)">
            <div class="flow-info" >
              <span>{{item.name||'无'}}</span>
              <i :class="`uncur ${item.checked ? 'cur':''}`"></i>
            </div>
            <span class="rborder" v-if="i<tags.length-1"></span>
          </div>
          
        </div>

      </div>

      <div class="home-items">

        <h3 class="col-head">代办事项</h3>

        <div class="col-main">

          <div v-for="(item,i) in eventList" :key="i" @click="setEventList(i)">
            <label>
              <i :class="`uncur ${item.checked ? 'cur' : ''}`"></i>
              <span>{{item.name||'无'}}</span>
            </label>
            <a :href="item.jump_url">{{item.subname}}</a>
          </div>

          <div class="col-bottom">
            已完成{{eventTotal}}项 <span>（请在已经完成的装修事项上打勾）</span>
          </div>
          
        </div>

      </div>

      <div class="home-school">
         <h3 class="col-head">装修学堂</h3>
         <div class="col-main">

           <div v-for="(item,i) in skillList" :key="i">
             <dl>
               <dt>{{item.title||'无'}}</dt>
               <dd>{{item.sub_title||'无'}}</dd>
             </dl>
              <img :src="item.img||'https://via.placeholder.com/70x55'">
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
      ticket:'',
      userInfo:{
        avatar:'',
        community:'',
        style_data:'',
        layout_data:''
      },
      tags:[],
      eventList:[],
      eventTotal:0,
      skillList:[]
    };
  },
  computed: {},
  created: function() {
    this.ticket = localStorage.getItem("ticket"); //'dg2lMBVsEX1UC_bWDFYHMsFX9YO033OY_c'
    if (!this.ticket) {
      //this.$router.push("login");
    }
    this.getSkillCategory();
  },
  methods: {
    //获取用户信息
    getUserInfo(){
      this.tool.request({
        url: "user/info",
        method: "post",
        params: {
          ticket: this.ticket
        }
      }).then(res => {
        if(res.status == 200) {
          this.userInfo = res.data;
          this.getSkillTags();
          this.skillCategory.map(item =>{
            if(item.name == this.userInfo.decorate_data){
              this.category_id = item.category_id;
              return;
            }
          })
          this.category_id && this.getSkillList(this.category_id);
        }else{
          this.$dialog.alert({
            title: "提示",
            message: res.msg
          });
        }
      })
    },
    //获取获取装修标签
    getSkillTags(){
      this.tool.request({
        url: "tags/getList",
        method: "post",
        params: {
          tag_ename:'decorate'
        }
      }).then(res => {
        if(res.status == 200) {
          res.data.tags.map(item =>{
            if(item.name == this.userInfo.decorate_data){
              item.checked = true;
              this.decorate_id = item.id;
              return;
            }
          })
          this.tags = res.data.tags;
          this.decorate_id && this.getEventList(this.decorate_id)
        }else{
          this.$dialog.alert({
            title: "提示",
            message: res.msg
          });
        }
      })
    },
    //获取获取代办事项
    getEventList(decorate_id){
      this.tool.request({
        url: "event/list",
        method: "post",
        params: {
          ticket:this.ticket,
          decorate_id:decorate_id
        }
      }).then(res => {
        if(res.status == 200) {
          res.data.map(item =>{
            item.checked = item.is_finish;
            if(item.checked){
              this.eventTotal++
            }
          })
          this.eventList = res.data;
        }else{
          this.$dialog.alert({
            title: "提示",
            message: res.msg
          });
        }
      })
    },
    //获取我的家-下面的装修课堂
    getSkillList(category_id){
      this.tool.request({
        url: "skill/list",
        method: "post",
        params: {
          category_id:category_id
        }
      }).then(res => {
        if(res.status == 200) {
          this.skillList = res.data;
        }else{
          this.$dialog.alert({
            title: "提示",
            message: res.msg
          });
        }
      })
    },
    //获取装修分类
    getSkillCategory(){
      this.tool.request({
        url: "skill/category",
        method: "post",
        params: {}
      }).then(res => {
        if(res.status == 200) {
          this.skillCategory = res.data;
          this.skillCategory && this.getUserInfo();
        }else{
          this.$dialog.alert({
            title: "提示",
            message: res.msg
          });
        }
      })
    },
    //switch选中效果
    setSwitch(list,index,type){
      if(!list.length) return;
      if(!type){
        list.map(item =>{
          item.checked = false;
        });
      }
      list[index].checked = !list[index].checked;
      this.$forceUpdate();
      return list[index].checked;
    },
    
    //设置装修阶段
    setSkillTags(decorate_id,index){
      this.setSwitch(this.tags,index);
      this.tool.request({
        url: "user/config",
        method: "post",
        params: {
          ticket:this.ticket,
          decorate:decorate_id
        }
      }).then(res => {
        if(res.status == 200) {
          this.getEventList(decorate_id)
        }else{
          this.$dialog.alert({
            title: "提示",
            message: res.msg
          });
        }
      })
    },
    //设置代码事项
    setEventList(index){
      this.setSwitch(this.eventList,index,'checkbox') ? (this.eventTotal++) : (this.eventTotal--);
    }
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
  >.set{
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
  .link{
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
    > div{
      display: flex;
    }
    .flow-info{
      span, i{
        display: block;
        text-align: center;
      }
      span{
        padding: 5px;
      }
    }
    span.rborder{
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
      line-height: 16px;
      padding: 10px 0;
      border-top:1px solid #D5D5D5;
      dt{
        padding-top: 5px;
      }
      dd{
        color: #999;
        padding-top: 5px;
      }
      img{
        width: 75px;
        height: 55px;
      }
    }
  }
}

</style>
