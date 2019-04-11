// pages/publish/publish.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    'isExpired': true,
    'isNExpired': true,
    'isUrl': true,
    'isNUrl': true,
    'agree': true,
    'disagree': false,
    'isExist': true,
    'isNExist': true,
    'isEmpty': true,
    'isNEmpty': true,
    'holdTime': '',
    'startTime': '',
    'endTime': ''
  },
  //当光标在框内时隐藏图标
  hiddenCompanyIcon: function(e) {
    this.setData({
      'isExist': true,
      'isNExist': true,
    });
  },
  // 当光标离开时ajax判断是否在数据库中存在
  isExist: function(e) {
    console.log(e.detail.value)
    let vm = this;
    let company_name = e.detail.value.replace(/\s+/g, "");
    if (company_name == '') {
      console.log('输入的公司名称为空');
      this.setData({
        'isNExist': true,
        'isExist': false,
      });
    } else {
      console.log('公司名称查询接口贝被调用 ' + company_name);
      wx.request({
        url: 'http://127.0.0.0.1/WXMiniProgram/company/isExist?company_name=' + company_name,
        success: function(res) {
          vm.setData({
            'isNExist': res.data.result == true ? false : true,
            'isExist': res.data.result == true ? true : false,
          });
          console.log('http://127.0.0.0.1/WXMiniProgram/company/isExist?company_name=' + company_name);

        },
        fail: function(res) {
          console.log('请求接口失败，失败原因 ' + e);
        },
      });
    }
  },
  // 检查是否符合url格式
  checkUrlFormat: function(e) {
    let url = e.detail.value.replace(/\s+/g, "");
    if (url == '') {
      console.log('输入的url为空');
      this.setData({
        'isUrl': false,
        'isNUrl': true,
      });
    } else {
      let result = !!url.match(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g);
      this.setData({
        'isUrl': url == '' || result == false ? false : true,
        'isNUrl': url == '' || result == false ? true : false,
      })
    }
  },
  // 非空判断
  isEmpty: function(e) {
    let location = e.detail.value.replace(/\s+/g, "");
    this.setData({
      'isEmpty': location == '' ? false : true,
      'isNEmpty': location == '' ? true : false,
    })
  },
  // 判断多选框
  checkboxChange: function(e) {
    this.setData({
      'agree': e.detail.value == '' ? true : false,
      'disagree': e.detail.value == '' ? false : true,
    });
  },
  // 表单提交事件
  formSubmit: function(e) {
    let info = e.detail.value;
    let company_name = info.company_name;
    let hold_date = info.hold_date;
    let start_time = info.start_time;
    let end_time = info.end_time;
    let university_name = info.university_name;
    let locations = info.locations;
    if(company_name == '' || hold_date=='' || start_time=='' || end_time==''||university_name==''||locations==''){
      wx.showToast({
        title: '输入信息不合法',
        icon: 'none'
      })
    }else{
      wx.request({
        url: 'http://127.0.0.1/WXMiniProgram/info/add?company_name=' + company_name + '&company_official=' + company_official + '&hold_date=' + + '&start_time=' + start_time + '&end_time=' + end_time + '&locations=' + locations,
        success: res => {
          console.log('请求添加信息接口成功');
        },
        fail: res => {
          console.log('请求接口信息接口失败')
        },
      })
    }
  },
  // 设置日期
  setHoldTime:function(e){
    console.log('举办日期事件发生，携带的数据为 ' + e.detail.value);
    this.setData({
      'holdTime': e.detail.value,
    });
  },
  // 设置开始时间
  setStartTime:function(e){
    console.log('开始时间事件发生，携带的数据为 '+ e.detail.value);
    this.setData({
      'startTime': e.detail.value
    })
  },
  // 设置结束时间
  setEndTime:function(e){
    this.setData({
      'endTime': e.detail.value
    })
  },
  //跳转至学校选择页面
  toUniverstiy:function(e){
    wx.navigateTo({
      url: '/pages/university/university',
    })
  },
})