// product-detail-materiel

Component({
    methods: {
        jumpProductPage () {
            wx.switchTab({
                url: '/pages/products/products'
            })
        }
    }
})