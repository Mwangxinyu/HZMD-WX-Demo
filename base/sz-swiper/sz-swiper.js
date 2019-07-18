// sz-swiper

Component({
    properties: {
        height: {
            type: Number
        },
        imgList: {
            type: Object
        },
        circular: {
            type: Boolean
        },
        autoplay: {
            type: Boolean
        },
        indicatorDots: {
            type: Boolean
        },
        indicatorDotsColor: {
            type: String
        },
        indicatorDotsSelectColor: {
            type: String
        },
        interval: {
            type: Number
        },
        duration: {
            type: Number
        },
        tip: {
            type: Boolean,
            value: false
        }
    },
    data: {
        currentIndex: 0,
    },
    methods: {
        getSwiperChange (e) {
            if (!this.data.tip) return;
            const index = e.detail.current;
            this.setData({
                currentIndex: index
            })
        }
    }
})