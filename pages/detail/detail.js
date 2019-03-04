// pages/detail/detaill.js
Page({
  // 请求接口函数
  visitInterface: function(uuid){
    let vm = this;
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
          let title = res.data.data.preach_context != ''?'表格可滑动':'貌似没有正文';
          vm.setData({
            detail: res.data.data,
          });
          wx.showToast({
            title: title,
            icon: "none",
          });
        }
      },
      fail:function(){
        wx.showNavigationBarLoading();
      },
      complete: function(){
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }
    });
  },
  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    let uuid = options.uuid;
    let vm = this;
    this.visitInterface(uuid);
  },
  // 下拉窗口函数
  onPullDownRefresh:function(){
    var vm = this;
    var uuid = this.data.detail.uuid;
    this.visitInterface(uuid);
  }
})