// card-search

Page({
    data: {
        searchVal: '',
        emptyFlag: false,
        searchResult: [],
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
        ]
    },
    
    getSearchVal (e) {
        this.setData({
            searchVal: e.detail.val
        })
    }

})