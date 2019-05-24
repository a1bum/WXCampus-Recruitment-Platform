const app = getApp()
// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let vm = this;

    wx.request({
      url: 'https://a1bum.top/WXMiniProgram/collect/all',
      data: {
        wx_id: app.globalData.openid
      },
      success: res => {
        let array = res.data.cries.list;
        for (i = 0; i < array.length; i++) {
          let today = new Date();
          let realMonth = today.getMonth()+1;
          let formatDate = today.getDate()+'';
          // 格式处理
          realMonth = realMonth.toString.length==2?realMonth:'0'+realMonth;
          formatDate = formatDate.length==2?formatDate:'0'+formatDate;
          let date = today.getFullYear() + '-' + realMonth + '-' + formatDate;
          let time = today.getHours()+':' + today.getMinutes()+':'+today.getSeconds();
          array[i].isExpired = (date+' '+time)>(array[i].hold_date+' '+array[i].start_time)?true:false;
        }
        vm.setData({
          list: array,
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})