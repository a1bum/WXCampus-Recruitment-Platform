// pages/detail/detaill.js
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
          wx.showToast({
            title: '表格可滑动',
          });
        }
      }
    });
    
  },
})