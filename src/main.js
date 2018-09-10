// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import '../static/css/main.css'

Vue.use(Vant); //引入vant组件


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
axios.defaults.baseURL = 'http://test.dfmeiju.com.cn/'; //"https://www.dfmeiju.com.cn"
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
            this.ajax(opt).then((res) => {
                if (res && res.data) {
                    if (res.data.status == 200) {
                        resolve(res.data);
                    } else {
                        resolve(res.data);
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