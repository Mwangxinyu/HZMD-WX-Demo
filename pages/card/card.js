//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        userData: {
            avatar: '',
            firstName: '雨萌',
            lastName: '刘',
            position: '销售主管',
            tel: '18688886666',
            companyName: '厦门哨子科技有限公司',
            wechat: '18688886666',
            email: 'shaozi@sz.com',
            address: '福建省厦门市思明区福兴国际中心'
        },
        cardMaterielData: {
            callerData: {
                list: ['','','',''],
                totalNum: 9999
            },
            likeData: {
                list: ['','','',''],
                totalNum: 666
            },
        },
        recommendData: {
            list: [
                {
                    id: 1,
                    img: '',
                    title: '数字化管理',
                    salePrice: '888',
                    transPrice: '666'
                },
                {
                    id: 2,
                    img: '',
                    title: '人事管理-多维度对比 花名册自动分类 多人事管理-多维度对比 花名册自动分类 多',
                    salePrice: '8888',
                    transPrice: '6666'
                }
            ],
            title: '推荐产品',
            bottomNum: 42
        },
        resumeData: {
            info: `
                大家好，我是厦门哨子科技的刘雨萌。<br> 
                感谢您百忙之中抽空关注了我的名片，您可以在此详细地了解本公司的产品，还可以通过查看官网来更加具体的认识哨子科技。<br> 
                希望我们的服务能让您感到满意。<br><br> 
                哨子科技，大数据打造企业智能CEO
            `,
            title: '个人简介',
            bottomNum: 35
        },
        personTapData: {
            list: [
                {
                    name: '专业可靠',
                    like: 6666,
                },
                {
                    name: '活泼可爱',
                    like: 123,
                },
                {
                    name: '贴心',
                    like: 0,
                }
            ],
            title: '我的标签',
            bottomNum: 40
        },
        showInfoData: {
            list:  ['', '', ''],
            title: '展示信息'
        },

        shareFlag: false,

    },
    onLoad () {
        
    },

    onShareAppMessage(res) {
        return {
            title: `
                您好，我是${ this.data.userData.companyName }${ this.data.userData.lastName }${ this.data.userData.firstName }。这是我的名片，请惠存
            `,
            path: '/pages/index/index'
        }
    },

    // 跳转名片夹
    jumpCardHolder () {
        wx.navigateTo({
            url: '../card-holder/card-holder'
        })
    },

    // 转发名片
    transCard () {
        this.setData({
            shareFlag: true
        })
    },
    
    getphone (e) {
        console.log(e,'嘻嘻')
    },

    // 添加通讯录
    addContact () {
        wx.addPhoneContact({
            firstName: this.data.userData.firstName,
            lastName: this.data.userData.lastName,
            workPhoneNumber: this.data.userData.tel,
            organization: this.data.userData.companyName
        })
    },

    // 隐藏分享 action sheet
    hideShareAction () {
        setTimeout(() => {
            this.setData({
                shareFlag: false
            })
        }, 400)
    }

})