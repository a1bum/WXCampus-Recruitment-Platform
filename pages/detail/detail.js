// pages/detail/detaill.js
Page({
  // 请求接口函数
  visitInterface: function(uuid){
    let vm = this;
    wx.request({
      url: 'https://a1bum.top/wx/info/detail?criId=' + criId,
      success: function (res) {
        if(res.data.msg){
          // 错误请求处理
          wx.showToast({
            title: '获取链接失败',
            icon: 'none',
          });
        }else{
          vm.setData({
            criId: uuid,
            detail: res.data.data,
            isCollect: '/images/alarm.png'
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
  },
  // 收藏事件
  collect:function(e){
    let vm = this;
    var isCollect = vm.data.isCollect;
    if (isCollect == '/images/alarm.png'){
      wx.request({
        url: '/WxMiniProgram/collect/add',
        data: {
          criId: vm.data.criId,
          company_name: vm.data.detail.company_name,
          hold_date: vm.data.detail.begin_datetime.split(' ')[0],
          start_time: vm.data.detail.begin_datetime.split('')[1]
        },
        success:function(res){
          wx.showToast({
            title: '已收藏',
          })
        },
        fail:function(res){
          console.log("失败")
        }
      })
      vm.setData({
        isCollect: '/images/alarm-selected.png'
      })
    }else{
      vm.setData({
        isCollect: '/images/alarm.png'
      })
    }
  }
})