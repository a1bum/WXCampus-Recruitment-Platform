// pages/search/search.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  // 



  // 搜素事件
  search: function (e) {
    var vm = this;
    var keyword = e.detail.value;
    wx.showLoading({
      title: '请稍等',
    });
    wx.request({
      url: 'https://xiaoyuan.shixiseng.com/wx/xj/criteria?k=' + keyword + '&pageSize=15&p=1',
      headers: {
        'Context-Type': 'application/json'
      },
      success: function (res) {
        console.log('搜索请求成功');
        vm.setData({
          list: res.data.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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