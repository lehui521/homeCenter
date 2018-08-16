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
                { path: '/my', component: resolve => require(['../components/pages/my'], resolve) } //我的
            ]
        },
        { path: '/decorationBeauty', component: resolve => require(['../components/pages/index/decorationBeauty/index'], resolve) }, //装修美图
        { path: '/boutiqueShop', component: resolve => require(['../components/pages/index/boutiqueShop/index'], resolve) }, //精品店铺
        { path: '/productClassif', component: resolve => require(['../components/pages/index/productClassif/index'], resolve) }, //商品分类
        { path: '/salesPromotion', component: resolve => require(['../components/pages/index/salesPromotion/index'], resolve) }, //促销活动
        { path: '/searchSalesPro', component: resolve => require(['../components/pages/index/salesPromotion/searchSalesPro'], resolve) }, //促销搜索
        { path: '/indexNew', component: resolve => require(['../components/pages/index/indexNew'], resolve) }, //首页汇头条
        { path: '/productChoiceContent', component: resolve => require(['../components/pages/index/productChoiceContent'], resolve) }, //商品精选
        { path: '/searchProductChoice', component: resolve => require(['../components/pages/index/productChoiceContent/searchProductChoice'], resolve) }, //商品精选搜索
        { path: '/storeChoiceContent', component: resolve => require(['../components/pages/index/storeChoiceContent'], resolve) }, //店铺精选
        { path: '/searchStoreChoice', component: resolve => require(['../components/pages/index/storeChoiceContent/searchStoreChoice'], resolve) }, //店铺精选搜索
        { path: '/discountAreaContent', component: resolve => require(['../components/pages/index/discountAreaContent'], resolve) }, //折扣专区
        { path: '/searchDiscountArea', component: resolve => require(['../components/pages/index/discountAreaContent/searchDiscountArea'], resolve) }, //折扣商品搜索
        { path: '/decorationCaseContent', component: resolve => require(['../components/pages/index/decorationCaseContent'], resolve) }, //装修案例
    ]
})