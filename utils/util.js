const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

const callTel = tel => {
    wx.makePhoneCall({
        phoneNumber: tel
    })
}

const setClip =  e => {
    const val = e.currentTarget.dataset.val;
    wx.setClipboardData({
        data: val,
        success: function(res) {}
    })
}

module.exports = {
    formatTime,
    callTel,
    setClip
}