Page({
  // 搜索历史记录
  historySearch: function(e){
    
  },

  // 实时搜索
  searchInputing:function(){
    
  },

  // 点击取消返回主页
  returnHome: function(){
    wx.navigateBack();
  },
  
  searchInput: function(e){
    let vm = this;
    let keyword = e.detail.value;
    vm.isEmpty(keyword);
  },

  // 检测是否非空
  isEmpty: function(keyword){
    let vm = this;
    if (keyword == '') {
      wx.showToast({
        title: '没有输入',
        icon: 'none',
      });
    } else {
      vm.search(keyword);
      // 搜索历史记录缓存
      vm.data.history.unshift(keyword);
      wx.setStorage({
        key: "history",
        data: vm.data.history,
        success: function(res){
          vm.setData({
            history: vm.data.history,
            status: true
          })
        },
      })
    }
  },

  // 搜素事件
  search: function (keyword) {
    let vm = this;
    wx.showLoading({
      title: '请稍等',
    });
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
        });
      }
    });
  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})