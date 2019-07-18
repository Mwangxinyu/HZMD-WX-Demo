// card-panel

Component({
    options: {
        multipleSlots: true,  // 启动多 slot 支持
    },
    properties: {
        title: {
            type: String
        },
        titleCenter: {
            type: Boolean,
            value: false
        },
        // 模块间隙样式名
        gapClassName: {
            type: String,
            value: 'h-gap'
        },
        gray: {
            type: Boolean,
            value: false
        },
        // 模块底部 padding
        bottomNum: {
            type: Number,
            value: 0
        },
        bg: {
            type: String,
            value: ''
        }
    }
})