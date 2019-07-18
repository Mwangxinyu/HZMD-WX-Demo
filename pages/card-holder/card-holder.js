// card-holder
// 获取应用实例
const app = getApp()

Page({
    data: {
        cardList: [
            {   
                avatar: '',
                from: '2018.08.08 09:30 来自扫码',
                firstName: '雨萌',
                lastName: '刘',
                position: '销售主管',
                tel: '18688886666',
                email: 'Shaozi@sz.com',
                company: '厦门哨子科技有限公司',
                star: true,
                disabled: false
            },
            {   
                avatar: '',
                from: '2018.08.08 09:30 来自扫码',
                firstName: '雨萌',
                lastName: '刘',
                position: '销售主管',
                tel: '18688886666',
                email: 'Shaozi@sz.com',
                company: '厦门哨子科技有限公司',
                star: false,
                disabled: false
            },
            {   
                avatar: '',
                from: '2018.08.08 09:30 来自扫码',
                firstName: '雨萌',
                lastName: '刘',
                position: '销售主管',
                tel: '18688886666',
                email: 'Shaozi@sz.com',
                company: '厦门哨子科技有限公司',
                star: false,
                disabled: true
            },
        ],

        modalFlag: null,

        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')

    },

    onLoad () {

        if(app.globalData.modal !== null) {
            this.setData({
                modalFlag: app.globalData.modal
            })
        } else {
            app.modalCallback = boolean => {
                this.setData({
                    modalFlag: boolean
                })
            }
        }

        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }

    },
    
    jumpCard () {
        wx.switchTab({
            url: '/pages/card/card'
        })
    },

    // 关闭 modal
    modalCancel (e) {
        setTimeout(() => {
            this.setData({
                modalFlag: false
            })
        }, 400)
    },

    getUserInfo: function(e) {
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }

})