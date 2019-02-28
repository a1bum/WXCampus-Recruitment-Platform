## 更新日志

### 2018-02-28

1. 修复“调用接口后有些没有校徽图片”（[使用默认图片](https://blog.csdn.net/YanzYan/article/details/54573007)）
2. 修复“公司名字过长导致的校徽变形或者不显示”（[设置宽度多余用省略号代替](https://blog.csdn.net/YanzYan/article/details/54573007)）
3. 添加首页下拉刷新时完成后进行**wx.showToast**提示（[微信小程序官方文档-wx.showToast](https://developers.weixin.qq.com/miniprogram/dev/api/wx.showToast.html)） 
4. 修复“点击多次搜索，第二次以及之后获取input框值为undefined”
5. 修复“没有输入值的情况下，调用接口却出现数据”
6. 修复“因输入框高度不够造成的搜索体验不佳”
7. 添加“校招信息详情”界面，并调用接口进行解析
8. 优化渲染条件，加快渲染速度

### 2018-02-27

1. 使用实习僧接口并解析数据（[用fiddler抓包小程序](https://blog.csdn.net/qq_32563571/article/details/79570841)）
2. 解决“校徽图片大小不一变形”问题（[将组件设置为圆形](https://blog.csdn.net/qq_34589749/article/details/53192466)）
3. 实现搜索功能
4. 搜索页面与首页分离，使用圆形搜索框代替方形搜索框（[仿小米商城](https://github.com/JoeWrights/wxapp-mi-mall)）
5. 解决“进入搜索页面后界面没有返回键”问题（[微信小程序去掉左上角的返回箭头](https://blog.csdn.net/qq_33210042/article/details/85295851)）
6. 实现首页下拉刷新功能（[微信小程序实战篇-下拉刷新与加载更多](https://www.jianshu.com/p/8c98af820fea)）

### 2018-02-26

1. 实现“界面底部tab切换”功能（[仿网易云音乐APP的微信小程序]()）
2. 实现“个人中心”显示微信头像功能
3. 实现“校招日历界面的日历”功能，并可以根据点击日期不同进行热度推荐
4. 优化首页组件布局（[weui cells](https://github.com/Tencent/weui/wiki/Cell)）

## 图片来源

[1]: https://img.icons8.com/ios/80/000000/home-page.png	"白色主页图标"
[2]: https://img.icons8.com/ios/80/000000/home-page-filled.png	"黑色主页图标"
[3]: https://img.icons8.com/ios/50/000000/today.png	"白色日历图标"
[4]: https://img.icons8.com/ios/50/000000/today-filled.png	"黑色日历图标"
[5]: https://img.icons8.com/ios/50/000000/contacts.png	"白色个人中心图标"
[6]: https://img.icons8.com/ios/50/000000/user-filled.png	"黑色个人中心图标"
[7]: https://img.icons8.com/ios/50/000000/back-filled.png	"左箭头图标"
[8]: https://img.icons8.com/ios/50/000000/forward-filled.png	"右箭头图标"
[9]: https://img.icons8.com/ios/50/000000/graduation-cap.png	"毕业帽图标"
[10]: https://img.icons8.com/ios/50/000000/alarm-on.png	"闹钟图标"