// person-tag-module

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
        }
    }
})