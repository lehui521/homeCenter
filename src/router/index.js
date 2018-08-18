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
        { path: '/productDetail', component: resolve => require(['../components/pages/index/productChoiceContent/productDetail'], resolve) }, //商品详情
        { path: '/searchProductChoice', component: resolve => require(['../components/pages/index/productChoiceContent/searchProductChoice'], resolve) }, //商品精选搜索
        { path: '/storeChoiceContent', component: resolve => require(['../components/pages/index/storeChoiceContent'], resolve) }, //店铺精选
        { path: '/storeDetail', component: resolve => require(['../components/pages/index/storeChoiceContent/storeDetail'], resolve) }, //店铺详情
        { path: '/searchStoreChoice', component: resolve => require(['../components/pages/index/storeChoiceContent/searchStoreChoice'], resolve) }, //店铺精选搜索
        { path: '/discountAreaContent', component: resolve => require(['../components/pages/index/discountAreaContent'], resolve) }, //折扣专区
        { path: '/searchDiscountArea', component: resolve => require(['../components/pages/index/discountAreaContent/searchDiscountArea'], resolve) }, //折扣商品搜索
        { path: '/decorationCaseContent', component: resolve => require(['../components/pages/index/decorationCaseContent'], resolve) }, //装修案例
        { path:'/myMessage',component:()=>import ('../components/pages/my/message') },
        { path:'/myHome',component:()=>import ('../components/pages/my/home') },
        { path:'/myFocus',component:()=>import ('../components/pages/my/focus') },
        { path:'/mySetting',component:()=>import ('../components/pages/my/setting') },
        { path:'/myAboutUs',component:()=>import ('../components/pages/my/aboutUs') },
        { path:'/myEditPassword',component:()=>import ('../components/pages/my/editPassword') },
        { path:'/myOinion',component:()=>import ('../components/pages/my/opinion') },
        { path:'/myCollection',component:()=>import ('../components/pages/my/collection') },
        { path: '/marketList', component: resolve => require(['../components/pages/index/marketList'], resolve) }, //市场列表
        { path: '/decorationCompanyContent', component: resolve => require(['../components/pages/onlineMarket/decorationCompanyContent'], resolve) }, //装修公司
        { path: '/searchDecorationCompany', component: resolve => require(['../components/pages/onlineMarket/decorationCompanyContent/searchDecorationCompany'], resolve) }, //装修公司搜索
        { path: '/brandChoiceContent', component: resolve => require(['../components/pages/onlineMarket/brandChoiceContent'], resolve) }, //品牌列表
        { path: '/brandDetail', component: resolve => require(['../components/pages/onlineMarket/brandChoiceContent/brandDetail'], resolve) }, //品牌详情
        { path: '/decorationEncyclopedia', component: resolve => require(['../components/pages/decorationSchool/decorationEncyclopedia'], resolve) }, //装修百科
        { path: '/decorationEncyclopediaDetail', component: resolve => require(['../components/pages/decorationSchool/decorationEncyclopedia/decorationEncyclopediaDetail'], resolve) }, //装修百科详情
        { path: '/materialEncyclopedia', component: resolve => require(['../components/pages/decorationSchool/materialEncyclopedia'], resolve) }, //材料百科
        { path: '/materialEncyclopediaDetail', component: resolve => require(['../components/pages/decorationSchool/materialEncyclopedia/materialEncyclopediaDetail'], resolve) }, //材料百科详情
        { path: '/marketMap', component: resolve => require(['../components/pages/onlineMarket/marketMap'], resolve) }, //市场地图
        { path: '/ownerDiaryContent', component: resolve => require(['../components/pages/decorationSchool/ownerDiaryContent'], resolve) }, //业主日记
        { path: '/addDiary', component: resolve => require(['../components/pages/decorationSchool/ownerDiaryContent/addDiary'], resolve) }, //业主日记详情
        { path: '/addDiaryStep2', component: resolve => require(['../components/pages/decorationSchool/ownerDiaryContent/addDiaryStep2'], resolve) }, //新建日记
        { path: '/diaryDetail', component: resolve => require(['../components/pages/decorationSchool/ownerDiaryContent/diaryDetail'], resolve) }, //日记详情
        { path: '/reportPage', component: resolve => require(['../components/pages/decorationSchool/ownerDiaryContent/reportPage'], resolve) }, //举报
        { path: '/decorationStrategy', component: resolve => require(['../components/pages/decorationSchool/decorationStrategy'], resolve) }, //装修攻略
    ]
})