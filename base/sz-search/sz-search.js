// sz-search

Component({
    properties: {
        placeholder: {
            type: String
        },
        height: {
            type: Number,
            value: 60
        },
        disabled: {
            type: Boolean,
            value: false
        },
        focus: {
            type: Boolean,
            value: false
        }
    },
    data: {
        inputVal: '',
        currentFocus: null,
        cancelFlag: false
    },
    ready () {
        this.setData({
            currentFocus: this.data.focus
        })
    },
    methods: {
        jumpSearch (e) {
            if (!this.data.disabled) return;
            wx.navigateTo({
                url: '/pages/card-search/card-search'
            })
        },
        inputCheck (e) {
            this.setData({
                inputVal: e.detail.value
            });
            const detail = {
                val: e.detail.value
            };
            const option = {};
            this.triggerEvent('val', detail, option);
        },
        inputFocus (e) {
            this.setData({
                cancelFlag: true
            })
        },
        inputBlur (e) {
            this.setData({
                cancelFlag: false
            })
        },
        delVal () {
            this.setData({
                inputVal: '',
                currentFocus: true
            })
        },
        leaveSearch () {
            wx.navigateBack({
                delta: 1
            })
        }
    }
})