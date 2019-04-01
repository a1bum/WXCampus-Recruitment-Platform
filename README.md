## WXCampus-Recruitment-Platform（微信小程序校招平台）

&emsp;&emsp;微信小程序与微信账户体系高度集成，用户无需注册即可使用。相较于传统APP的独立账户体系或被切割化的第三方授权，微信小程序的授权过程简单、友好、快速，对于用户而言，不需要懂太多网络知识，操作简单且极为方便。此外，微信小程序打开速度比H5还快，接近原生APP，用户体验感好。本毕业设计题目基于微信小程序技术实现一个校园招聘信息平台，可以查询校园宣讲会信息，提供最新、最详细、最准确的企业校招信息，帮助学生实时了解校招宣讲会动态，洞悉企业校招热度。要求选题学生具备良好的学习能力，具备扎实的前端技术基本功，快速掌握微信小程序的开发原理，以及良好的界面设计能力。

## 目录结构

```shell
WXCampisRecuitmentPlatform/
├── images  # 图片文件夹，包含各种图标
├── pages	# 页面文件夹，包含小程序中的所有界面
│   ├── account
│   ├── agreement
│   ├── calendar
│   ├── detail
│   ├── feedback
│   ├── github
│   ├── index
│   ├── publish
│   └── search
├── utils	# 小程序中用到的公用资源
│   ├── common.wxss
│   └── weui.wxss
├── app.js	  # 全局 js
├── app.json  # 全局配置文件
└── app.wxss  # 全局样式表
```

## 更新日志

### 2019-03-30

1. 项目部署到服务器，数据库迁移到服务器，部分数据通信通过与服务器端交互，一部分功能摆脱本地限制；
2. 解决“mariadb本地可以连接，但是java项目连接access deny”问题（[修改数据库 plugin 为 mysql_native_password 而不是 unix_socket](https://mariadb.com/kb/en/library/authentication-plugin-unix-socket/) ）；
3. 获取微信个人标识openid和用户名存储到后端数据库；
4. 解决“app.js里面通过jscode获取openid，response 打印不出”问题（[小程序端是不行的，必须放在后端](https://cloud.tencent.com/developer/article/1026882)）；

### 2019-03-28

1. 实现“发布日期选择”；
2. 实现“学校名称检验是否存在于教育部公布的名单”；
3. 实现“网址 url 前端 js 校验”（[更靠谱一些的正则表达式验证JS URL](https://soulteary.com/2014/12/05/better-url-regexp-in-js.html)）；
4. 实现“输入框的内容去掉空格之后当做正确值”（[JS去掉字符串中的空格](https://www.jianshu.com/p/b4045ac4893d)）；
5. 实现“input输入完之后点击下一步光标可以直接跳入下一个input”
6. 解决“获取到的form data为Object”问题；

### 2019-03-27

1. 实现“发布信息表单重置”功能（微信公众平台--小程序form](https://developers.weixin.qq.com/miniprogram/dev/component/form.html)）；
2. 解决“获取不到checkbox是否选中的状态”（[关于微信小程序中获取单个checkbox是否被选中状态的值](https://blog.csdn.net/Candy_mi/article/details/80107449)）；
3. 实现“知晓《网络言论的法律边界》两种状态的submit按钮样式切换”；
4. 优化代码结构（使用三目运算符代替简单的if……else），减少代码体积；

### 2019-03-26

1. 实现“公司名称是否已经存在”功能（[微信公众平台--小程序icon](https://developers.weixin.qq.com/miniprogram/dev/component/icon.html)）；

### 2019-03-25

1. 实现“信息发布页面 publish.wxml”设计；
2. 实现“学校名称从下拉框中选择”；
3. 尝试微信开发者工具模拟器可以使用 github 进行意见反馈。

### 2019-03-06

- 完善前端查询功能
- 着手构思后端，涉及数据库设计，java项目构建
  - ~~目标在一周之内添加“可以发布校招信息的功能”~~
  - 将前端解析接口全部由后台解析并存入数据库
  - 多个接口去重选优后增强查询和发布校招信息体验
  - 必要时可以自己写爬虫，设置定时计划抓取第三方或官方校招信息，存入数据库

### 2019-03-05

1. 实现“意见反馈”（[微信官方文档--button设置open-type为feedback](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)）
2. 修复“日期点击 selectedDate 函数”
3. 修复“calendar 页面组件布局不协调”
4. 修复“搜索历史删除后历史记录失效”

### 2019-03-04

1. 修复“更换 view 为 picker 后布局变化”
2. 删除“preMonth 和 nextMonth 的 view 组件”
3. 添加“日期更改时日历跟随变化”
4. 修复“调用 getDateList 函数时日历为空”（[JavaScript parseInt() 函数](http://www.w3school.com.cn/js/jsref_parseInt.asp)）
5. 修复“闰年条件不规范”
6. 提升“搜索历史”体验（[微信小程序官方文档--wx.getStorageSync(string key)](https://developers.weixin.qq.com/miniprogram/dev/api/wx.getStorageSync.html)）
7. 修复“搜索历史组件块背景色与页面背景色一致”（[CSS border 属性](http://www.w3school.com.cn/cssref/pr_border.asp)）
8. 修复“搜索历史组件块重叠”

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
[11]: http://www.shejiye.com/index.php?m=content&amp;c=index&amp;a=show&amp;catid=22&amp;id=124908	"下箭头图标 "

