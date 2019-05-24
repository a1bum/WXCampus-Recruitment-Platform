// pages/detail/detaill.js
var app = getApp();
Page({
  data:{
    isCollect: 'submit'
  },
  // 请求接口函数
  visitInterface: function(cri_id) {
    let vm = this;
    wx.request({
      url: 'https://a1bum.top/WXMiniProgram/info/detail?id=' + cri_id,
      success: function(res) {
        vm.setData({
          cri: res.data.cri == null ? '' : res.data.cri,
          isCollect: res.data.cri == null ? '' : 'submit'
        });
      },
      fail: function() {
        wx.showNavigationBarLoading();
      },
      complete: function() {
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }
    });
  },
  // 生命周期函数--监听页面加载
  onLoad: function(options) {
    let id = options.cri_id;
    this.visitInterface(id);
  },
  // 下拉窗口函数
  onPullDownRefresh: function() {
    var vm = this;
    var id = this.data.detail.cri.id;
    this.visitInterface(id);
  },
  // 收藏事件
  collect: function(e) {
    let vm = this;
    var isCollect = vm.data.isCollect;
    if (isCollect == 'submit') {
      wx.request({
        url: 'https://a1bum.top/WXMiniProgram/wxuser/collect',
        data: {
          openid: app.globalData.openid,
          formId: e.detail.formId,
          company_name: vm.data.cri.company_name,
          university_name: vm.data.cri.university_name,
          hold_date: vm.data.cri.hold_date,
          start_time: vm.data.cri.start_time,
          locations: vm.data.cri.locations,
        },
        success: function(res) {
          let title = res.data.code == 0 ? "已收藏" : "收藏失败";
          wx.showToast({
            title: title
          });
          vm.setData({
            isCollect: ''
          });
          wx.request({
            url: 'https://a1bum.top/WXMiniProgram/collect/add',
            data:{
              wx_id: app.globalData.openid,
              cri_id: vm.data.cri.id,
              company_name: vm.data.cri.company_name,
              university_name: vm.data.cri.university_name,
              hold_date: vm.data.cri.hold_date,
              start_time: vm.data.cri.start_time,
              location: vm.data.cri.locations,
              logo_url: vm.data.cri.logo_url
            },
            success:function(result){
              console.log(result.data);
            }
          })
        },
        fail: function(res) {
          console.log("失败")
        }
      })
    } else {
      vm.setData({
        isCollect: 'submit'
      })
    }
  }
})