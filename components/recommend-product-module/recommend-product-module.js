// recommend-product-module

Component({
    properties: {
        title: {
            type: String
        },
        more: {
            type: Boolean,
            value: false
        },
        bottomNum: {
            type: Number,
            value: 0
        },
        // 模块间隙样式名
        gapClassName: {
            type: String,
            value: 'h-gap'
        },
        listData: {
            type: Object
        },
    },
    methods: {

        // 跳转产品详情
        jumpProductDetail (e) {
            const id = e.currentTarget.dataset.productId;
            wx.navigateTo({
                url: `/pages/product-detail/product-detail?id=${ id }`
            })
        },
        
        // 跳转产品页面
        jumpProducts () {
            wx.switchTab({
                url: '/pages/products/products'
            })
        }

    }
})