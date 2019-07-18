// card-materiel

Component({
    properties: {
        callerData: {
            type: Object
        },
        likeData: {
            type: Object
        }
    },
    methods: {
        // 转发名片
        transCard () {
            const detail = {};
            const option = {};
            this.triggerEvent('transCard', detail, option)
        },
        // 添加通信录
        addContact () {
            const detail = {};
            const option = {};
            this.triggerEvent('addContact', detail, option)
        }
    }
})