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
    if(company_name == ''){
      console.log('输入的公司名称为空');
      this.setData({
        'isNExist': true,
        'isExist': false,
      });
    }else{
      wx.request({
        url: 'http://127.0.0.1:8080/WXMiniProgram/company/isExist?company_name=' + company_name,
        success: function(res) {
          vm.setData({
            'isNExist': res.data.result == true ? false : true,
            'isExist': res.data.result == true ? true : false,
          })
        },
        fail:function(res){
          console.log('请求接口失败，失败原因 ' + e);
        },
      });
    }
  },
  // 点击下一步键光标跳入下一个input
  isComanyNameFinished:function(e){
    this.setData({'companyNameFinished': true,})
  },
  // 点击下一步键光标跳入下一个input
  isCompanyOfficialFinished:function(e){
    this.setData({'companyOfficialFinished': true});
  },
  // 检查是否符合url格式
  checkUrlFormat:function(e){
    let url = e.detail.value.replace(/\s+/g, "");
    if(url == ''){
      console.log('输入的url为空');
      this.setData({
        'isUrl': false,
        'isNUrl': true,
      });
    }else{
      let result = !!url.match(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g);
      console.log(result);
    }
  },
  // 点击下一步键光标跳入下一个input
  isHoldTimeFinished: function(e){
    this.setData({'holdTimeFinished': true});
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
    let vm = this;
    let university_name = e.detail.value.replace(/\s+/g, "");
    if(university_name == ''){
      console.log('输入的学校名称为空');
      this.setData({
        'isRegular': false,
        'isNRegular': true,
      });
    }else{
      console.log('学校查询接口被调用 ' + e.detail.value);
      wx.request({
        url: 'http://127.0.0.1:8080/WXMiniProgram//university/isExist?university_name=' + e.detail.value,
        success: function (res) {
          vm.setData({
            'isRegular': res.data.result == true ? false : true,
            'isNRegular': res.data.result == true ? true : false,
          });
        },
      });
    }  
  },
  // 点击下一步键光标跳入下一个input
  isUniversityNameFinished: function(e){
    this.setData({'universityNameFinished': true});
  },
  // 非空判断
  isEmpty:function(e){
    let location = e.detail.value.replace(/\s+/g, "");
    if(location == ''){
      console.log('输入的详细地址为空');

    }else{
      this.setData({

      });
    }
  },
  // 判断多选框
  checkboxChange: function(e) {
    if (e.detail.value == '') {
      // console.log('用户没有看')
      this.setData({
        'agree': true,
        'disagree': false,
      })
    } else {
      // console.log('用户看了')
      this.setData({
        'agree': false,
        'disagree': true,
      })
    }
  },
  // 表单提交事件
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为' + e);
  },
})