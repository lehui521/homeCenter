// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import '../static/css/main.css'

Vue.use(Vant); //引入vant组件
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: '../static/img/zwf.png',
    loading: '../static/img/zwf.png',
    attempt: 1
})
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('../static/css/video.css')
import 'font-awesome/css/font-awesome.css';
Vue.prototype.goBack = function() {
    if (window.HostApp) {
        window.HostApp.goBack()
    } else {
        this.$router.go(-1)
    }
}
Vue.use(VideoPlayer)

//axios
axios.defaults.baseURL = 'https://test.dfmeiju.com.cn'; //"https://www.dfmeiju.com.cn"
// axios.defaults.baseURL = "https://www.dfmeiju.com.cn";
Vue.prototype.$axios = axios;
axios.interceptors.request.use(
    config => {
        let token = localStorage.getItem("token");
        if (token) {
            config.headers.ticket = token;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    });
Vue.prototype.tool = {
    ajax: function(opt) {
        let config = {
            method: opt.method || 'get',
            url: opt.url,
            data: opt.data || null,
            params: opt.params || null
        }
        return axios(config);
    },
    request: function(opt) {
        return new Promise((resolve, reject) => {
            app.$toast.loading({
                duration: 0, // 持续展示 toast
                forbidClick: true, // 禁用背景点击
                loadingType: 'spinner',
            })
            this.ajax(opt).then((res) => {
                if (res && res.data) {
                    if (res.data.status == 200) {
                        resolve(res.data);
                        app.$toast.clear()
                    } else {
                        resolve(res.data);
                        app.$toast.clear()
                    }
                }
            }).catch((error) => {
                app.$dialog.alert({
                    title: '提示',
                    message: '服务器内部错误'
                }).then(() => {
                    // on close
                });
            });
        })
    }
}
const app = new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})