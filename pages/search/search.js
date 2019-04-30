Page({
  data: {
    status: true,
    history: ["北京", "上海", "广州"],
    page: 1,
    list: []
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
    this.setData({
      history: [],
    })
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
    let vm = this;
    vm.setData({
      history: vm.distinct(vm.data.history),
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
      vm.search(keyword, this.data.page);
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
        fail: function(res) {
          console.log("fail" + res);
        },
        complete: function(res) {
          console.log("complete" + res)
        },
      });
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
  search: function(keyword, page) {
    let vm = this;
    wx.showLoading({
      title: '请稍等',
    });
    // 访问接口
    let today = new Date().toLocaleDateString().replace(/[/]/g, '-');
    let year = today.split('-')[0];
    let month = today.split('-')[1];
    let day = today.split('-')[2];
    month = month.length == 2 ? month : '0' + month;
    day = day.length == 2 ? day : '0' + day;
    today = year + '-' + month + '-' + day;
    wx.request({
      url: 'https://a1bum.top/WXMiniProgram/info/query?key=' + keyword + '&today=' + today + '&p=' + page,
      success: function(res) {
        const cries = res.data.cri.list;
        wx.hideLoading();
        vm.setData({
          keyword: keyword,
          list: vm.data.list.concat(cries),
          pages: res.data.cri.pages,
        });
      },
      fail: function(res) {
        console.log('请求失败' + res)
      }
    });

  },
  // 触底事件
  onReachBottom: function() {
    if (this.data.page < this.data.pages) {
      this.search(this.data.keyword, this.data.page + 1);
      this.data.page += 1;
    }
  },
})