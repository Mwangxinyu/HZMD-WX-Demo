// product-card

Component({
    properties: {
        info: {
            type: Object
        },
        shadow: {
            type: Boolean,
            value: false
        }
    },
    data: {
        currentShadow: null
    },
    ready () {
        this.setData({
            currentShadow: this.data.shadow ? 'shadow' : ''
        })
    }
})