//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'http://47.112.16.146/WXMiniProgram/user/isExist?jscode=' + res.code,
          success: res2 => {
            if (res2.data.user.personal_statement == 'false') {
              console.log("后台程序判断该用户还没有注册到数据库")
              // 获取用户信息
              if (res2.data.user.wx_id != null) {
                wx.getSetting({
                  success: res3 => {
                    if (res3.authSetting["scope.userInfo"]) {
                      // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                      wx.getUserInfo({
                        success: res4 => {
                          // 可以将 res 发送给后台解码出 unionId
                          wx.request({
                            url: 'http://47.112.16.146/WXMiniProgram/user/add?wx_id=' + res2.data.user.wx_id + '&user_name=' + res4.userInfo.nickName,
                            success: res5 => {
                              console.log('调用添加用户接口成功');
                            },
                            fail: res5 => {
                              console.log('调用添加用户接口失败')
                            }
                          })
                          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                          // 所以此处加入 callback 以防止这种情况
                          if (this.userInfoReadyCallback) {
                            this.userInfoReadyCallback(res)
                          }
                        }
                      });
                    }else{
                      console.log('获取授权状态失败')
                    }
                  }
                });
              } else {
                console.log('传入的jscode不规范')
              }
            } else {
              console.log('后台程序判断该用户已注册到数据库')
            }
          },
          fail: res2 => {
            console.log('请求解密用户openid接口失败，携带信息为 ' + res2.data)
          }
        })
      }
    })

  },
  globalData: {
    jscode: '',
    openid: ''
  }
})