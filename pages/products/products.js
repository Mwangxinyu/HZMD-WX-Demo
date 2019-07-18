// products.js

Page({
    data: {
        productList: [
            {
                img: '',
                title: '数字化管理',
                salePrice: '888',
                transPrice: '666'
            },
            {
                img: '',
                title: '人事管理-多维度对比 花名册自动分类 多人事管理-多维度对比 花名册自动分类 多',
                salePrice: '8888',
                transPrice: '6666'
            },
            {
                img: '',
                title: '数字化管理',
                salePrice: '888',
                transPrice: '666'
            },
            {
                img: '',
                title: '人事管理-多维度对比 花名册自动分类 多人事管理-多维度对比 花名册自动分类 多',
                salePrice: '8888',
                transPrice: '6666'
            }
        ]
    },
    
    getphone (e) {
        console.log(e,'嘻嘻')
    },

    jumpProductDetailPage () {
        wx.navigateTo({
            url: '/pages/product-detail/product-detail'
        })
    }
    
})