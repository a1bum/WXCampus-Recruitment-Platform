Page({
  data: {
    inputShowed: false,
    inputVal: ""
  },
  onLoad: function (options){
    this.visitInterface()
  },
  // 下拉刷新功能
  onPullDownRefresh:function(){
   this.visitInterface();
  },
  // 访问接口获取数据
  visitInterface:function(){
    var vm = this;
    var page = Math.ceil(Math.random() * 13);
    wx.showToast({
      title: 'loading',
      icon: 'loading'
    })
    wx.request({
      url: 'https://xiaoyuan.shixiseng.com/wx/xj/criteria?pageSize=15&p=' +page ,
      headers: {
        'Context-Type': 'application/json'
      },
      success: function (res) {
        console.log('请求主页接口信息成功');
        vm.setData({
          list: res.data.data,
        });
        wx.showToast({
          title: '加载成功',
          icon: 'success'
        });
      },
      fail:function(){
        wx.showNavigationBarLoading();
      },
      complete: function(){
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }
    })
  },
  // 跳转到search界面
  toSearch:function(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }
});