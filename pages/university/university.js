var app = getApp();
var QQMapWX = require('../../utils/js/qqmap-wx-jssdk.js');
var qqmapsdk;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    province: '',
    city: '',
    cate_nav_list: [
      { name: "北京", id: "beijing" },
      { name: "上海", id: "shanghai" },
      { name: "天津", id: "tianjin" },
      { name: "重庆", id: "chongqing" },
      { name: "河北", id: "hebei" },
      { name: "山西", id: "shanxi1" },
      { name: "辽宁", id: "liaoning" },
      { name: "吉林", id: "kids" },
      { name: "黑龙江", id: "lignts" },
      { name: "江苏", id: "adapter" },
      { name: "浙江", id: "headset" },
      { name: "安徽", id: "voicebox" },
      { name: "福建", id: "life" },
      { name: "江西", id: "service" },
      { name: "山东", id: "card" },
      { name: "河南", id: "liaoning" },
      { name: "湖北", id: "kids" },
      { name: "湖南", id: "lignts" },
      { name: "广东", id: "adapter" },
      { name: "海南", id: "headset" },
      { name: "四川", id: "voicebox" },
      { name: "贵州", id: "life" },
      { name: "云南", id: "service" },
      { name: "陕西", id: "card" },
      { name: "甘肃", id: "service" },
      { name: "青海", id: "card" },
    ],
    curIndex: 0,
    toView: "new",
    detail: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  switchCategory(e) {
    // console.log(e.currentTarget.dataset.id);
    const curIndex = e.currentTarget.dataset.index ? e.currentTarget.dataset.index : 0;
    this.setData({
      toView: e.currentTarget.dataset.id,
      curIndex
    });
  },
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'GNUBZ-G6LK5-YYAIC-Q5MQI-R7DQ3-BHBB3',
    });
  },
  onShow:function(){
    let vm = this;
    vm.getUserLocation();
  },
  getUserLocation: function () {
    let vm = this;
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用wx.getLocation的API
                      vm.getLocation();
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          //调用wx.getLocation的API
          vm.getLocation();
        }
        else {
          //调用wx.getLocation的API
          vm.getLocation();
        }
      }
    })
  },
  // 微信获得经纬度
  getLocation: function () {
    let vm = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        // console.log(JSON.stringify(res))
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy;
        vm.getLocal(latitude, longitude)
      },
      fail: function (res) {
        console.log('fail' + JSON.stringify(res))
      }
    })
  },
  // 获取当前地理位置
  getLocal: function (latitude, longitude) {
    let vm = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        // console.log(JSON.stringify(res));
        let province = res.result.ad_info.province
        let city = res.result.ad_info.city
        vm.setData({
          province: province,
          city: city,
          latitude: latitude,
          longitude: longitude
        })

      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }
    });
  }
})