// im-materiel

Component({
    properties: {
        
    },
    data: {
        messageVal: ''
    },
    methods: {

        // 拨打电话
        callPhone () {
            const detail = {};
            const option = {};
            this.triggerEvent('callPhone', detail, option);
        },

        // 发送消息
        sendMsg (e) {
            const val = e.detail.value;
            const message = {
                messageType: 'normal',
                type: 'me',
                avatar: '',
                date: '2018年5月16日 11:04',
                message: val
            };
            const detail = {
                    message
                };
            const option = {};
            this.triggerEvent('sendMsg', detail, option);
            this.setData({
                messageVal: ''
            })
        }

    }
})