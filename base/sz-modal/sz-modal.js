// sz-modal

const app = getApp();

Component({
    properties: {
        type: {
            type: String,
            value: 'userInfo'
        }
    },
    data: {
        animation: false
    },
    ready () {
        this.setData({
            animation: true
        })
    },
    methods: {
        getInfo() {
            const detail = {};
            const option = {};
            this.triggerEvent('cancel', detail, option);
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
        onGotUserInfo (e) {
            app.globalData.userInfo = e.detail.userInfo;
        }
    }
})