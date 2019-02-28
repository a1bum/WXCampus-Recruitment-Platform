// pages/detail/detaill.js
var WxParse = require('../../utils/wxParse/wxParse.js');
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var vm = this;
    var uuid = options.uuid;
    wx.request({
      url: 'https://xiaoyuan.shixiseng.com/wx/xjd/detail?uuid=' + uuid,
      headers: {
        'Context-Type': 'application/json'
      },
      success: function (res) {
        if(res.data.msg){
          // 错误请求处理
          wx.showToast({
            title: '获取链接失败',
            icon: 'none',
          });
        }else{
          vm.setData({
            detail: res.data.data,
          });
        }
      }
    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})