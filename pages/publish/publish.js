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
    'isRegular': true,
    'isNRegular': true,
    'isExist': true,
    'isNExist': true,
    'isEmpty': true,
    'isNEmpty': true,
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
        url: 'http://47.112.16.146/WXMiniProgram/company/isExist?company_name=' + company_name,
        success: function(res) {
          vm.setData({
            'isNExist': res.data.result == true ? false : true,
            'isExist': res.data.result == true ? true : false,
          });
          console.log('http://47.112.16.146/WXMiniProgram/company/isExist?company_name=' + company_name);

        },
        fail: function(res) {
          console.log('请求接口失败，失败原因 ' + e);
        },
      });
    }
  },
  // 点击下一步键光标跳入下一个input
  isComanyNameFinished: function(e) {
    this.setData({
      'companyNameFinished': true,
    })
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
  // 光标在学校框内时隐藏图标显示
  hiddenUniversityIcon: function(e) {
    this.setData({
      'isRegular': true,
      'isNRegular': true,
    });
  },
  // 查看输入的是不是正规学校，与公司名称原理一致
  isRegular: function(e) {
    let university_name = e.detail.value.replace(/\s+/g, "");
    let vm = this;
    if (university_name == '') {
      console.log('输入的学校名称为空');
      vm.setData({
        'isRegular': false,
        'isNRegular': true,
      });
    } else {
      console.log('学校查询接口被调用 ' + university_name);
      wx.request({
        url: 'http://47.112.16.146/WXMiniProgram//university/isExist?university_name=' + university_name,
        success: function(res) {
          vm.setData({
            'isRegular': res.data.result == true ? false : true,
            'isNRegular': res.data.result == true ? true : false,
          });
        },
        fail: function(res) {
          console.log('接口请求失败，错误信息 ' + res.data);
        }
      });
    }
  },
  // 点击下一步键光标跳入下一个input
  isUniversityNameFinished: function(e) {
    this.setData({
      'universityNameFinished': true
    });
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
    console.log('form发生了submit事件，携带数据为' + e);
  },
})