Page({
  data: {
    status: true,
    history: wx.getStorageSync("history"),
  },
  onLoad:function(options){
   
  },
  // 搜索历史记录
  historySearch: function(e) {
    let keyword = e.target.dataset.text;
    let vm = this;
    vm.isEmpty(keyword);
  },
  // 清楚历史搜索记录
  clearHistory: function() {
    wx.clearStorageSync("history");
  },
  // 点击取消返回主页
  returnHome: function() {
    wx.navigateBack();
  },
  // 失去焦点时隐藏搜索历史记录
  leaveFocus: function() {
    this.setData({
      status: false,
    });
  },
  // 获得焦点时显示搜索历史记录
  onFocus: function() {
    this.setData({
      list: [],
      status: true,
    });
  },
  // 执行搜索
  searchInput: function(e) {
    let vm = this;
    let keyword = e.detail.value;
    vm.isEmpty(keyword);
  },
  // 检测是否非空
  isEmpty: function(keyword) {
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
        data: vm.distinct(vm.data.history),
        success: function(res) {
          vm.setData({
            history: vm.distinct(vm.data.history),
          });
        },
      })
    }
  },
  // 数组去重
  distinct: function(arr) {
    let result = []
    let obj = {}
    for (let i of arr) {
      if (!obj[i]) {
        result.push(i)
        obj[i] = 1
      }
    }
    return result
  },

  // 搜素事件
  search: function(keyword) {
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
      success: function(res) {
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
  onShareAppMessage: function() {

  }
})