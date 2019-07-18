// card-main
import { callTel, setClip } from '../../utils/util.js'

Component({
    properties: {
        info: {
            type: Object
        },
        qr: {
            type: Boolean,
            value: false   
        }
    },
    data: {
        moreFlag: true,
        addClass: 'hidden'
    },
    methods: {
        getMoreInfo() {
            this.setData({
                moreFlag: !this.data.moreFlag,
                addClass: this.data.addClass === 'hidden' ? 'show' : 'hidden'
            })
        },
        callPhone(e) {
            const tel = e.currentTarget.dataset.val;
            callTel(tel)
        },
        setClip,
    }
})