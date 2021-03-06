import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: resolve => require(['../components/common/home'], resolve),
            children: [{
                    path: '/',
                    component: resolve => require(['../components/pages/index'], resolve)
                }, //首页
                {
                    path: '/onlineMarket',
                    component: resolve => require(['../components/pages/onlineMarket'], resolve)
                }, //网上商场
                {
                    path: '/decorationSchool',
                    component: resolve => require(['../components/pages/decorationSchool'], resolve)
                }, //装修学堂
                {
                    path: '/my',
                    component: resolve => require(['../components/pages/my'], resolve)
                } //我的
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/pages/login'], resolve)
        },
        {
            path: '/mapCity',
            component: resolve => require(['../components/pages/mapCity'], resolve)
        },
        {
            path: '/decorationBeauty',
            component: resolve => require(['../components/pages/index/decorationBeauty/index'], resolve)
        }, //装修美图
        {
            path: '/specialTitleDetail',
            component: resolve => require(['../components/pages/index/decorationBeauty/specialTitleDetail'], resolve)
        }, //装修美图
        {
            path: '/boutiqueShop',
            component: resolve => require(['../components/pages/index/boutiqueShop/index'], resolve)
        }, //精品店铺
        {
            path: '/productClassif',
            component: resolve => require(['../components/pages/index/productClassif/index'], resolve)
        }, //商品分类
        {
            path: '/salesPromotion',
            component: resolve => require(['../components/pages/index/salesPromotion/index'], resolve)
        }, //促销活动
        {
            path: '/marketAD',
            component: resolve => require(['../components/pages/index/salesPromotion/marketAD'], resolve)
        },
        {
            path: '/storeAD',
            component: resolve => require(['../components/pages/index/salesPromotion/storeAD'], resolve)
        },
        {
            path: '/searchSalesPro',
            component: resolve => require(['../components/pages/index/salesPromotion/searchSalesPro'], resolve)
        }, //促销搜索
        {
            path: '/indexNew',
            component: resolve => require(['../components/pages/index/indexNew'], resolve)
        }, //首页汇头条
        {
            path: '/headerNewDetail',
            component: resolve => require(['../components/pages/index/indexNew/headerNewDetail'], resolve)
        },
        {
            path: '/searchIndexNew',
            component: resolve => require(['../components/pages/index/indexNew/searchIndexNews'], resolve)
        },
        {
            path: '/productChoiceContent',
            component: resolve => require(['../components/pages/index/productChoiceContent'], resolve)
        }, //商品精选
        {
            path: '/productDetail',
            component: resolve => require(['../components/pages/index/productChoiceContent/productDetail'], resolve)
        }, //商品详情
        {
            path: '/searchProductChoice',
            component: resolve => require(['../components/pages/index/productChoiceContent/searchProductChoice'], resolve)
        }, //商品精选搜索
        {
            path: '/storeChoiceContent',
            component: resolve => require(['../components/pages/index/storeChoiceContent'], resolve)
        }, //店铺精选
        {
            path: '/storeDetail',
            component: resolve => require(['../components/pages/index/storeChoiceContent/storeDetail'], resolve)
        }, //店铺详情
        {
            path: '/storeIntroduction',
            component: resolve => require(['../components/pages/index/storeChoiceContent/storeIntroduction'], resolve)
        },
        {
            path: '/searchStoreChoice',
            component: resolve => require(['../components/pages/index/storeChoiceContent/searchStoreChoice'], resolve)
        }, //店铺精选搜索
        {
            path: '/discountAreaContent',
            component: resolve => require(['../components/pages/index/discountAreaContent'], resolve)
        }, //折扣专区
        {
            path: '/searchDiscountArea',
            component: resolve => require(['../components/pages/index/discountAreaContent/searchDiscountArea'], resolve)
        }, //折扣商品搜索
        {
            path: '/decorationCaseContent',
            component: resolve => require(['../components/pages/index/decorationCaseContent'], resolve)
        }, //装修案例
        {
            path: '/caseDetail',
            component: resolve => require(['../components/pages/index/decorationCaseContent/caseDetail'], resolve)
        },
        {
            path: '/myMessage',
            component: () =>
                import ('../components/pages/my/message')
        },
        {
            path: '/systemMessage',
            component: () =>
                import ('../components/pages/my/systemMessage')
        },
        {
            path: '/decorationRoom',
            component: () =>
                import ('../components/pages/my/decorationRoom')
        },
        {
            path: '/promotion',
            component: () =>
                import ('../components/pages/my/promotion')
        },
        {
            path: '/systemMessageDetail',
            component: () =>
                import ('../components/pages/my/systemMessageDetail')
        },
        {
            path: '/myHome',
            component: () =>
                import ('../components/pages/my/home')
        },
        {
            path: '/myHomeNew',
            component: () =>
                import ('../components/pages/my/homeNew')
        },
        {
            path: '/myFocus',
            component: () =>
                import ('../components/pages/my/focus')
        },
        {
            path: '/mySetting',
            component: () =>
                import ('../components/pages/my/setting')
        },
        {
            path: '/myAboutUs',
            component: () =>
                import ('../components/pages/my/aboutUs')
        },
        {
            path: '/myEditPassword',
            component: () =>
                import ('../components/pages/my/editPassword')
        },
        {
            path: '/myOinion',
            component: () =>
                import ('../components/pages/my/opinion')
        },
        {
            path: '/myCollection',
            component: () =>
                import ('../components/pages/my/collection')
        },
        {
            path: '/myDiray', //我的日记
            component: () =>
                import ('../components/pages/my/myDiray')
        },
        {
            path: '/marketList',
            component: resolve => require(['../components/pages/index/marketList'], resolve)
        }, //市场列表
        {
            path: '/decorationCompanyContent',
            component: resolve => require(['../components/pages/onlineMarket/decorationCompanyContent'], resolve)
        }, //装修公司
        {
            path: '/decorationCompanyDetail',
            component: resolve => require(['../components/pages/onlineMarket/decorationCompanyContent/decorationCompanyDetail'], resolve)
        },
        {
            path: '/searchDecorationCompany',
            component: resolve => require(['../components/pages/onlineMarket/decorationCompanyContent/searchDecorationCompany'], resolve)
        }, //装修公司搜索
        {
            path: '/companyIntroduction',
            component: resolve => require(['../components/pages/onlineMarket/decorationCompanyContent/companyIntroduction'], resolve)
        }, //装修公司简介
        {
            path: '/brandChoiceContent',
            component: resolve => require(['../components/pages/onlineMarket/brandChoiceContent'], resolve)
        }, //品牌列表
        {
            path: '/brandDetail', 
            component: resolve => require(['../components/pages/onlineMarket/brandChoiceContent/brandDetail'], resolve)
        }, //品牌详情
        {
            path: '/marketInfo',
            component: resolve => require(['../components/pages/onlineMarket/marketInfo'], resolve)
        }, //市场简介
        // {
        //     path: '/designerContent',
        //     component: resolve => require(['../components/pages/onlineMarket/designerContent'], resolve)
        // }, //设计师
        {
            path: '/designerDetail',
            component: resolve => require(['../components/pages/onlineMarket/designerContent/designerDetail'], resolve)
        }, //设计师详情
        {
            path: '/decorationEncyclopedia',
            component: resolve => require(['../components/pages/decorationSchool/decorationEncyclopedia'], resolve)
        }, //装修百科
        {
            path: '/decorationEncyclopediaDetail',
            component: resolve => require(['../components/pages/decorationSchool/decorationEncyclopedia/decorationEncyclopediaDetail'], resolve)
        }, //装修百科详情
        {
            path: '/materialEncyclopedia',
            component: resolve => require(['../components/pages/decorationSchool/materialEncyclopedia'], resolve)
        }, //材料百科
        {
            path: '/materialEncyclopediaDetail',
            component: resolve => require(['../components/pages/decorationSchool/materialEncyclopedia/materialEncyclopediaDetail'], resolve)
        }, //材料百科详情
        {
            path: '/marketMap',
            component: resolve => require(['../components/pages/onlineMarket/marketMap'], resolve)
        }, //市场地图
        {
            path: '/ownerDiaryContent',
            component: resolve => require(['../components/pages/decorationSchool/ownerDiaryContent'], resolve)
        }, //业主日记
        {
            path: '/addDiary',
            component: resolve => require(['../components/pages/decorationSchool/ownerDiaryContent/addDiary'], resolve)
        }, //业主日记详情
        {
            path: '/addDiaryStep2',
            component: resolve => require(['../components/pages/decorationSchool/ownerDiaryContent/addDiaryStep2'], resolve)
        }, //新建日记
        {
            path: '/diaryDetail',
            component: resolve => require(['../components/pages/decorationSchool/ownerDiaryContent/diaryDetail'], resolve)
        }, //日记详情
        {
            path: '/reportPage',
            component: resolve => require(['../components/pages/decorationSchool/ownerDiaryContent/reportPage'], resolve)
        }, //举报
        {
            path: '/decorationStrategy',
            component: resolve => require(['../components/pages/decorationSchool/decorationStrategy'], resolve)
        }, //装修攻略
        {
            path: '/video',
            component: resolve => require(['../components/pages/decorationSchool/video'], resolve)
        }, //装修攻略
        {
            path: '/videoLearnContent',
            component: resolve => require(['../components/pages/decorationSchool/videoLearnContent'], resolve)
        },
        {
            path: '/myCoupon',
            component: resolve => require(['../components/pages/my/myCoupon'], resolve)
        }, //我的优惠券
        {
            path: '/updateMemberInfo',
            component: resolve => require(['../components/pages/my/updateMemberInfo'], resolve)
        }, //编辑资料
        {
            path: '/updateMemberName',
            component: resolve => require(['../components/pages/my/updateMemberName'], resolve)
        }, //编辑用户的姓名
        {
            path: '/focusContentCompany',
            component: resolve => require(['../components/pages/my/focusContentCompany'], resolve)
        }, //我的关注装修公司
        {
            path: '/focusContentDesigner',
            component: resolve => require(['../components/pages/my/focusContentDesigner'], resolve)
        }, //我的关注设计师
        {
            path: '/focusContentStore',
            component: resolve => require(['../components/pages/my/focusContentStore'], resolve)
        }, //我的关注店铺
        {
            path: '/myDecorationBeauty',
            component: resolve => require(['../components/pages/my/myCollection/myDecorationBeauty'], resolve)
        }, //我的收藏装修美图
        {
            path: '/myDecorationEncyclopedia',
            component: resolve => require(['../components/pages/my/myCollection/myDecorationEncyclopedia'], resolve)
        }, //我的收藏装修百科
        {
            path: '/myMaterialEncyclopedia',
            component: resolve => require(['../components/pages/my/myCollection/myMaterialEncyclopedia'], resolve)
        }, //我的收藏材料百科
        {
            path: '/myDecorationCase',
            component: resolve => require(['../components/pages/my/myCollection/myDecorationCase'], resolve)
        }, //我的收藏装修案例
        {
            path: '/mySalesPromotion',
            component: resolve => require(['../components/pages/my/myCollection/mySalesPromotion'], resolve)
        }, //我的收藏促销活动
        {
            path: '/registerDetail',
            component: resolve => require(['../components/pages/my/registerDetail'], resolve)
        }, //金币
    ]
})