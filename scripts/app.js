/**
 * Created by woody on 2015/10/5.
 * app 入口
 */
var app = angular.module('app',['ui.router']);
app.config(['$httpProvider','$stateProvider','$urlRouterProvider',function($httpProvider,$stateProvider,$urlRouterProvider){
    $stateProvider
        .state('index',{
            url:'/index',
            templateUrl:'views/index.html',
            params: {'data': null}
        });
    $urlRouterProvider.otherwise("index");
    $httpProvider.interceptors.push(['$rootScope',function($rootScope){
        return {
            'request':function(config){
                return config;
            },
            'response': function (config) {
                return config;
            }
        };
    }]);
}]);
app.run(['$state','$rootScope',function($state,$rootScope){
    console.log('===========>>app.js');
    $rootScope.mysrc = ''; //图片base64
    $rootScope.inputFileIsShow = true;
    $rootScope.firstBtnName = '上传/upload';
    $rootScope.help_back_img = 'imgs/help.png';
    $rootScope.help_back_flag = 0; //0-help 1-back
    // $state.go("index");
}]);
