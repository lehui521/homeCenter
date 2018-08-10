import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: resolve => require(['../components/common/home'], resolve),
        children: [
            { path: '/', component: resolve => require(['../components/pages/index'], resolve) }, //首页
            { path: '/onlineMarket', component: resolve => require(['../components/pages/onlineMarket'], resolve) }, //网上商场
            { path: '/decorationSchool', component: resolve => require(['../components/pages/decorationSchool'], resolve) }, //装修学堂
            { path: '/my', component: resolve => require(['../components/pages/my'], resolve) }, //我的
        ]
    }]
})