// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import '../static/css/main.css'

Vue.use(Vant); //引入vant组件


import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('../static/css/video.css')
import 'font-awesome/css/font-awesome.css';

Vue.use(VideoPlayer)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})