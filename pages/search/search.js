// pages/search/search.js
Page({
  // 实时搜索
  searchInputing:function(){

  },

  // 点击取消返回主页
  returnHome: function(){
    wx.navigateBack();
  },
  
  searchInput: function(e){
    var vm = this;
    var keyword = e.detail.value;
    vm.isEmpty(keyword);
  },

  // 检测是否非空
  isEmpty: function(keyword){
    var vm = this;
    if (keyword == '') {
      wx.showToast({
        title: '没有输入',
        icon: 'none',
      });
    } else {
      vm.search(keyword);
    }
  },

  // 搜素事件
  search: function (keyword) {
    var vm = this;
    wx.showLoading({
      title: '请稍等',
    });
    console.log('https://xiaoyuan.shixiseng.com/wx/xj/criteria?k=' + keyword)
    // 访问接口
    wx.request({
      url: 'https://xiaoyuan.shixiseng.com/wx/xj/criteria?k=' + keyword,
      headers: {
        'Context-Type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading();
        vm.setData({
          keyword: keyword,
          list: res.data.data
        })
      }
    })
  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})