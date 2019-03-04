## WXCampus-Recruitment-Platform（微信小程序校招平台）

&emsp;&emsp;微信小程序与微信账户体系高度集成，用户无需注册即可使用。相较于传统APP的独立账户体系或被切割化的第三方授权，微信小程序的授权过程简单、友好、快速，对于用户而言，不需要懂太多网络知识，操作简单且极为方便。此外，微信小程序打开速度比H5还快，接近原生APP，用户体验感好。本毕业设计题目基于微信小程序技术实现一个校园招聘信息平台，可以查询校园宣讲会信息，提供最新、最详细、最准确的企业校招信息，帮助学生实时了解校招宣讲会动态，洞悉企业校招热度。要求选题学生具备良好的学习能力，具备扎实的前端技术基本功，快速掌握微信小程序的开发原理，以及良好的界面设计能力。

## 目录结构

```shell
WXCampisRecuitmentPlatform/
├── images  # 图片文件夹，包含各种图标
├── pages	# 页面文件夹，包含小程序中的所有界面
│   ├── account
│   ├── calendar
│   ├── detail
│   ├── index
│   └── search
├── utils	# 小程序中用到的公用资源
│   ├── common.wxss
│   └── weui.wxss
├── app.js	# 全局 js
├── app.json  # 全局配置文件
└── app.wxss	# 全局样式表
```

## 更新日志

### 2019-03-04

1. 修复“更换 view 为 picker 后布局变化”
2. 删除“preMonth 和 nextMonth 的 view 组件”
3. 添加“日期更改时日历跟随变化”
4. 修复“调用 getDateList 函数时日历为空”（[JavaScript parseInt() 函数](http://www.w3school.com.cn/js/jsref_parseInt.asp)）
5. 修复“闰年条件不规范”
6. 提升“搜索历史”体验（[微信小程序官方文档--wx.getStorageSync(string key)](https://developers.weixin.qq.com/miniprogram/dev/api/wx.getStorageSync.html)）

### 2019-03-03

1. 添加“搜索历史”功能（[拉勾小程序](https://github.com/zengkaii/wxapp)）
2. 修复“搜索历史重复”（[JavaScript 高性能数组去重](https://www.cnblogs.com/wisewrong/p/9642264.html)）
3. 调整“校招日历”界面月份为可自行设定
4. 删除部分无用 wxss 样式

### 2019-03-02

1. 修复“detail 界面的下拉刷新”
2. 优化 javascript 代码写法，减少代码体积

### 2019-03-01

1. 修复“解析的json数据为html代码，在数据绑定中显示不正常”（[WxParse](https://github.com/icindy/wxParse)）
2. 修复“因手机宽度小，而造成手机端网页表格显示不正常”（[CSS ul 横向滑动并超出屏幕可滑动](https://www.jianshu.com/p/8e27b663b70f)）
3. 优化"主页、搜索页组件布局"（[多个view左右对齐的巧用方法](https://blog.csdn.net/Wu_shuxuan/article/details/78224426)）
4. 使用 rich-text 原生组件替换 WxParse减少小程序体积（[微信小程序官方文档--rich-text](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html)）

### 2019-02-28

1. 修复“调用接口后有些没有校徽图片”（[使用默认图片](https://blog.csdn.net/YanzYan/article/details/54573007)）
2. 修复“公司名字过长导致的校徽变形或者不显示”（[设置宽度多余用省略号代替](https://blog.csdn.net/YanzYan/article/details/54573007)）
3. 添加首页下拉刷新时完成后进行 **wx.showToast **提示（[微信小程序官方文档-wx.showToast](https://developers.weixin.qq.com/miniprogram/dev/api/wx.showToast.html)） 
4. 修复“点击多次搜索，第二次以及之后获取input框值为undefined”
5. 修复“没有输入值的情况下，调用接口却出现数据”
6. 修复“因输入框高度不够造成的搜索体验不佳”
7. 添加“校招信息详情”界面，并调用接口进行解析

### 2019-02-27

1. 使用实习僧接口并解析数据（[用fiddler抓包小程序](https://blog.csdn.net/qq_32563571/article/details/79570841)）
2. 解决“校徽图片大小不一变形”问题（[将组件设置为圆形](https://blog.csdn.net/qq_34589749/article/details/53192466)）
3. 实现搜索功能
4. 搜索页面与首页分离，使用圆形搜索框代替方形搜索框（[仿小米商城](https://github.com/JoeWrights/wxapp-mi-mall)）
5. 解决“进入搜索页面后界面没有返回键”问题（[微信小程序去掉左上角的返回箭头](https://blog.csdn.net/qq_33210042/article/details/85295851)）
6. 实现首页下拉刷新功能（[微信小程序实战篇-下拉刷新与加载更多](https://www.jianshu.com/p/8c98af820fea)）

### 2019-02-26

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