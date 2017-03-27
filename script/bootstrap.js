/* global require, layui */

var API_URL = 'http://localhost/service/public/index.php/';
var API_URL = 'https://service.cuci.cc/';
var API_AUTH = 'user/api/token.html';

var script = document.scripts[document.scripts.length - 1].src, baseUrl = script.substring(0, script.lastIndexOf("/"));

/**
 * 应用启动文件
 *
 * @author Anyon <zoujingli@qq.com>
 * @date 2016/11/04 16:10
 */
require.config({
    waitSeconds: 0,
    baseUrl: './',
    map: {'*': {'css': '//cdn.bootcss.com/require-css/0.1.8/css.min.js'}},
    paths: {
        'app.config': ['script/config'],
        'debug': ['script/plugs/debug'],
        'myView': ['script/provider/my-view'],
        'myForm': ['script/provider/my-form'],
        'myDialog': ['script/provider/my-dialog'],
        'layui': ['script/plugs/layui/layui'],
        'pace': ['//cdn.bootcss.com/pace/1.0.2/pace.min'],
        'jquery': ['//cdn.bootcss.com/jquery/1.12.4/jquery.min'],
        'supersized': ['script/plugs/supersized/js/supersized.3.2.7'],
        'angular': ['//cdn.bootcss.com/angular.js/1.5.9/angular.min'],
        'ngCookies': ['//cdn.bootcss.com/angular.js/1.5.7/angular-cookies.min'],
        'ngSanitize': ['//cdn.bootcss.com/angular-sanitize/1.5.8/angular-sanitize.min'],
        'ngRoute': ['//cdn.bootcss.com/angular.js/1.5.8/angular-route.min'],
        'ui.bootstrap': ['//cdn.bootcss.com/angular-ui-bootstrap/1.3.3/ui-bootstrap-tpls.min']
    },
    shim: {
        'angular': {exports: 'angular'},
        'supersized': {deps: ['jquery', 'css!script/plugs/supersized/css/supersized.css']},
        'ui.bootstrap': {deps: ['angular', 'css!//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css']},
        'pace': {deps: ['css!//cdn.bootcss.com/pace/1.0.2/themes/green/pace-theme-flash.min.css']},
        'layui': {deps: ['css!script/plugs/layui/css/layui.css', 'jquery']},
        'debug': {deps: ['jquery']},
        'myView': {deps: ['angular']},
        'myForm': {deps: ['angular', 'myDialog', 'jquery']},
        'myDialog': {deps: ['angular', 'layui']},
        'ngRoute': {deps: ['angular']},
        'ngCookies': {deps: ['angular']},
        'ngSanitize': {deps: ['angular']},
    },
    deps: ['angular'],
    urlArgs: "v=" + (new Date()).getTime()
});

/**
 * 加载进度显示
 * @returns {undefined}
 */
require(['pace'], function (pace) {
    pace.start({document: false});
});

/**
 * 应用启动器
 * @param {type} angular
 * @returns {undefined}
 */
require(['angular', 'ngRoute', 'ngCookies', 'myView', 'myForm', 'myDialog', 'layui'], function (angular) {

    // Layui 初始化
    layui.config({dir: baseUrl + '/plugs/layui/'});
    layui.use(['layer', 'laydate', 'element']);

    // 创建APP应用
    var app = angular.module('app', ['ngRoute', 'myView', 'myDialog', 'myForm', 'ngCookies']);

    // 应用启动配置
    app.config(['$routeProvider', '$viewProvider', '$locationProvider', function ($routeProvider, $viewProvider, $locationProvider) {
            $locationProvider.html5Mode(false);
            $viewProvider.registerView('login.html');
            $routeProvider.otherwise('login.html');
        }]);

    // 应用初始化动作
    app.run(['$location', '$view', '$form', '$rootScope', '$templateCache', '$cookies', '$http', '$httpParamSerializerJQLike', '$dialog',
        function ($location, $view, $form, $rootScope, $templateCache, $cookies, $http, $httpParamSerializerJQLike, $dialog) {
            // 模块初始化赋值
            angular.$view = $view;
            angular.$http = $http;
            angular.$dialog = $dialog;
            angular.$location = $location;
            angular.$cookies = $cookies;
            angular.$rootScope = $rootScope;
            angular.$form = $form;
            $rootScope.$location = $location;
            angular.$httpParamSerializerJQLike = $httpParamSerializerJQLike;

            // 页面全局属性定义
            $rootScope.app = {
                layout: {
                    class: {body: 'body'}
                },
                site: {
                    url: "http://www.cuci.cc ",
                    title: 'YS',
                    icon: 'http://static.cdn.cuci.cc/2016/0421/3586e898350c0890cf41a4828175d468.ico',
                    copyright: '' + new Date().getFullYear() + ' ',
                    company: ''
                },
                menuLeft: true,
                menu: [
                    {id: 1, icon: '', 'title': '首页', 'href': 'javascript:void(0);', active: true, sub: [
                            {id: 10, icon: '', 'title': '第二页', 'href': '#user/index.html', active: true},
                            {id: 11, icon: '', 'title': '第二页', 'href': 'javascript:void(0);', active: false, sub: [
                                    {id: 110, icon: '', 'title': '第三页', 'href': 'javascript:void(0);', active: false},
                                    {id: 111, icon: '', 'title': '第三页', 'href': 'javascript:void(0);', active: false},
                                ]
                            },
                            {id: 12, icon: '', 'title': '第一页', 'href': 'javascript:void(0);', active: false},
                            {id: 13, icon: '', 'title': '第一页', 'href': 'javascript:void(0);', active: false},
                        ]
                    },
                    {id: 2, icon: '', 'title': '资料修改', 'href': '#user/form.html', active: false},
                    {id: 3, icon: '', 'title': '我', 'href': 'javascript:void(0);', active: false, sub: [
                            {id: 30, icon: '', 'title': '第二页', 'href': 'javascript:void(0);', active: true, sub: [
                                    {id: 301, icon: '', 'title': '第三页', 'href': 'javascript:void(0);', active: false},
                                    {id: 301, icon: '', 'title': '第三页', 'href': 'javascript:void(0);', active: false},
                                ]
                            },
                            {id: 31, icon: '', 'title': '第二页', 'href': 'javascript:void(0);', active: false},
                            {id: 32, icon: '', 'title': '第二页', 'href': 'javascript:void(0);', active: false},
                        ]
                    },
                ]
            };

            // 顶部菜单点击
            $rootScope.topMenuOnClick = function (menu) {
                var index = parseInt(menu.$index);
                if ($rootScope.app.menu[index].href && $rootScope.app.menu[index].href.indexOf('javascript') < 0) {
                    $rootScope.app.menuLeft = false;
                    return window.location.href = $rootScope.app.menu[index].href;
                }
                $rootScope.app.menuLeft = true;
                for (var i in $rootScope.app.menu) {
                    $rootScope.app.menu[i].active = (parseInt(i) === parseInt(index));
                    if ($rootScope.app.menu[i].sub) {
                        for (var m in $rootScope.app.menu[i].sub) {
                            console.log($rootScope.app.menu[i].sub[m].href);
                            if ($rootScope.app.menu[i].sub[m].href && $rootScope.app.menu[i].sub[m].href.indexOf('javascript') < 0) {
                                window.location.href = $rootScope.app.menu[i].sub[m].href;
                                break;
                            }
                            if ($rootScope.app.menu[i].sub[m].sub) {
                                for (var n in $rootScope.app.menu[i].sub[m].sub) {
                                    if ($rootScope.app.menu[i].sub[m].sub[n].href && $rootScope.app.menu[i].sub[m].sub[n].href.indexOf('javascript') < 0) {
                                        window.location.href = $rootScope.app.menu[i].sub[m].sub[n].href;
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                    }
                }
            };

            // 全局退出登录
            $rootScope.logout = function () {
                $dialog.confirm('确定要退出登录吗？', function () {
                    $cookies.remove('token');
                    window.location.href = 'index.html';
                });
            };

            // 页面跳转前的处理
            $rootScope.$on("$locationChangeStart", function () {
                console.log('Start Location : ' + $location.$$path);
                if ($location.$$path.length > 0) {
                    // 动态注册路由
                    $view.registerView($location.$$path);
                    // 需要登录的场景
                    if ($location.$$path !== '/login.html' && !angular.$cookies.get('token')) {
                        $dialog.tips('抱歉，需要登录后才能进入！');
                        window.location.href = 'index.html';
                    } else if (angular.$cookies.get('token') && $location.$$path === '/login.html') {
                        if (window.location.href.indexOf('admin.html') > 0) {
                            angular.$view.goto('user/index.html');
                        } else {
                            window.location.href = 'admin.html';
                        }
                    }
                }
            });

            // 页面跳转成功后清除缓存
            $rootScope.$on('$locationChangeSuccess', function () {
                $templateCache.removeAll();
                layui.use(['element'], function (element) {
                    element().init();
                });
            });

            // 页面标题修正，兼容苹果设备
            $rootScope.$watch('app.site.title', function (title) {
                document.title = title;
                var iframe = document.createElement("iframe");
                iframe.title = '', iframe.width = 0, iframe.height = 0;
                iframe.setAttribute("src", "empty.html");
                iframe.addEventListener('load', function () {
                    setTimeout(function () {
                        document.body.removeChild(iframe);
                    }, 0);
                });
                document.body.appendChild(iframe);
            });
        }
    ]);
    // 启动应用
    angular.bootstrap(document, [app.name]);
});