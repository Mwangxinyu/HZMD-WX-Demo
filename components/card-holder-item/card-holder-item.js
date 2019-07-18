// card-holder-item

Component({
    properties: {
        info: {
            type: Object
        }
    },
    data: {
        currentStar: null,
        currentDisabled: null,
        moreFlag: true
    },
    ready () {
        this.setData({
            currentStar: this.data.info.star,
            currentDisabled: this.data.info.disabled
        });
    },
    methods: {
        showMoreBox () {
            const flag = !this.data.moreFlag;
            this.setData({
                moreFlag: flag
            })
        },
        disabledCheck () {
            const flag = !this.data.currentDisabled;
            this.setData({
                currentDisabled: flag
            })
        },
        starCheck () {
            const flag = !this.data.currentStar;
            this.setData({
                currentStar: flag
            })
        }
    }
})