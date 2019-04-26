Page({
  data: {
    inputShowed: false,
    inputVal: ""
  },
  // onLoad函数
  onLoad: function(options) {
    this.visitInterface()
  },
  // 下拉刷新功能
  onPullDownRefresh: function() {
    this.visitInterface();
  },
  // 访问接口获取数据
  visitInterface: function() {
    let vm = this;
    let page = Math.ceil(Math.random() * 10);
    wx.request({
      url: 'https://a1bum.top/WXMiniProgram/info/page',
      success: res=> {
        vm.setData({
          list: res.data.cri,
        });
      },
      fail: function() {
        wx.showNavigationBarLoading();
      },
      complete: function() {
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }
    })
  },
  // 跳转到search界面
  toSearch: function() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }
});