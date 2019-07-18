// trans-panel

Component({
    data: {
        animation: false
    },
    ready () {
        this.setData({
            animation: true
        })
    },
    methods: {
        
        jumpCardTans () {
            wx.navigateTo({
                url: '/pages/card-trans/card-trans'
            })
        },

        cancel() {
            this.setData({
                animation: false
            }, () => {
                const detail = {};
                const option = {};
                this.triggerEvent('cancel', detail, option);
            }) 
        },

    }
})