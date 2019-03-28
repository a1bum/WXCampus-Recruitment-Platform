// pages/agreement/agreement.js
Page({
  onLoad: function (options) {
    wx.showModal({
      title: '用户须知',
      content: '本文旨在说明发布校招信息时请确认来源，随意捏造事实出现问题将会承担法律责任。',
    })
  },
})