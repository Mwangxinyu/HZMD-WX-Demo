// im 
import { callTel } from '../../utils/util.js';

Page({
    data: {
        customerServiceInfo: {
            name: '刘雨萌',
            tel: '18688886666'
        },
        messageList: [
            {
                messageType: 'normal',
                type: 'service',
                avatar: '',
                date: '2018年5月16日 11:04',
                message: '您好，我是哨子科技的销售主管刘雨萌。请问有什么可以帮到您的？'
            },
            {
                messageType: 'normal',
                type: 'me',
                avatar: '',
                date: '12:00',
                message: '你好！'
            },
            {
                messageType: 'normal',
                type: 'service',
                avatar: '',
                date: '',
                message: '您好，请问有什么可以帮到您的？'
            },
            {
                messageType: 'productRemind',
                date: '12:00',
                img: '',
                title: '人事管理-多维度对比 花名册自动分类多维度对比花名册自动分',
                salePrice: '888',
                transPrice: '666'
            },
            {
                messageType: 'productCard',
                type: 'me',
                date: '',
                img: '',
                title: '人事管理-多维度对比 花名册自动分类多维度对比花名册自动分',
                salePrice: '888',
                transPrice: '666'
            }
        ],
    },
    onLoad (options) {
        wx.setNavigationBarTitle({
            title: this.data.customerServiceInfo.name
        })
    },

    // 下拉刷新
    onPullDownRefresh () {
        setTimeout(() => {
            wx.stopPullDownRefresh();
        }, 1000);
    },

    // 拨打电话
    callPhone () {
        const tel = this.data.customerServiceInfo.tel;
        callTel(tel);
    },

    // 发送消息
    sendMsg (option) {
        const message = option.detail.message;
        const messageList = this.data.messageList.slice(0);
        messageList.push(message);
        this.setData({
            messageList
        })
    } 

})