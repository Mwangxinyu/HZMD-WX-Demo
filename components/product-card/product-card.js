// product-card

Component({
    properties: {
        info: {
            type: Object
        },
        width: {
            type: Number,
            value: 315
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