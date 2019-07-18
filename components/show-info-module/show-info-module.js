// show-info-module

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
        gray: {
            type: Boolean,
            value: false
        },
        listData: {
            type: Object
        },
    }
})