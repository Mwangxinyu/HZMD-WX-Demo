// website.js

Page({
    data: {
        empty: false,
        swiperData: {
            imgList: ['', '', ''],
            circular: true,
            autoplay: true,
            indicatorDots: true,
            indicatorDotsColor: '#F2F2F2',
            indicatorDotsSelectColor: '#D9D9D9',
            interval: 5000,
            duration: 1000,
            height: 550
        },
        companyResumeData: {
            list: [
                '厦门哨子科技有限公司是一家专注于中小企业',
                '互联网办公服务的创新型科技企业',
                '旗下哨子办公室一款基于大数据的多端企业协同办公平台',
                '哨子智能名片联通企业和客户',
                '打造全新企业销售和沟通管理的模式',
                '大数据打造企业智能CEO'
            ],
            title: '公司简介',
            bottomNum: 40
        },
        coreMemberData: {
            list: [
                {
                    img: '',
                    name: '庄良基',
                    position: '二五八集团董事长'
                },
                {
                    img: '',
                    name: '郑观生',
                    position: '哨子科技董事长'
                },
            ],
            title: '核心成员',
            bottomNum: 40
        },
        serviceCustomerData: {
            list: ['', '', '','', '', '','', '', ''],
            title: '服务客户',
            bottomNum: 22
        },
        contactData: {
            info: {
                qr: '/images/qr.png',
                address: '福建厦门思明区台南路73号',
                date: '周一至周五 08:00-20:00',
                email: 'weizhenghui@shaozi.com',
                tel: '0592-2335979'
            },
            title: '联系我们',
            bottomNum: 40
        }
    },

    getphone (e) {
        console.log(e,'嘻嘻')
    },

})