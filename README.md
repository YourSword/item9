Angular.Admin --- 大道至简 重剑无锋
--

[Angular.Admin](http://zoujingli.oschina.io/angular.admin) 是一个基于 `RequireJs`+`AngluarJs`+`Layui` 搭建的`Web`前端开发平台。

模块清晰简洁，易于学习上手，让高端`WEB`搭建起步变得更简单。

项目对`Layui`组件部分进行了重新封装，基于`Angular`方式实现。

**关于重构**：项目基于新架构进行重构，旧版本已经切换到 [old-master](https://git.oschina.net/zoujingli/Angular.Admin/tree/old-master/) 分支。

参考文档：
--
* [Angular](http://www.runoob.com/angularjs/angularjs-tutorial.html)
* [Layui](http://www.layui.com/doc)

更新日志
--
```
2016-12-08
-------------------------------------------------
1. 整合 Layui
 
2. 封装 select checkbox radio 组件

2016-11-23
-------------------------------------------------

1. 合并模块

2. 分离 provider与 plugs ，优化页面依赖


2016-11-20
-------------------------------------------------

1. 完成表单自定义组件 myForm ,支持自动验证与提交
   
   在form元素上添加属性 data-auto=true ，绑定自动提交事件
   
   input元素上可设置 data-tips 属性，用于指定错误时的显示内容


2016-11-19
-------------------------------------------------

1. 完成 require 与 angular 组合启动应用

2. 完成基于 ngRoute 的自动路由机制

3. 完成 angular 模块自定加载与注册

``` 

使用方法
--
##### 1. 下载代码到你的`webroot`目录
```shell
git clone http://git.oschina.net/zoujingli/Angular.Admin.git

cd Angular.Admin
```

##### 2. 使用`HTTP`访问项目中的`index.html`
```link
http://zoujingli.oschina.io/angular.admin
```