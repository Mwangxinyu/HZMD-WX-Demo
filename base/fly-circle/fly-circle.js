// service-materiel

Component({
    properties: {
        title: {
            type: String
        },
        validation: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        jumpChat () {
            const detail = {
                info: null
            };
            const option = {};
            this.triggerEvent('getphone', detail, option)
        },
        getPhoneNumber (e) {
            const detail = {
                info: e.detail
            };
            const option = {};
            this.triggerEvent('getphone', detail, option)
        }
    }
})