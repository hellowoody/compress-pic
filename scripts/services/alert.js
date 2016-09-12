/**
 * Created by woody on 2015/11/10.
 */
angular.module('app').factory('Alert', ['$ionicPopup',function($ionicPopup){
    var alertRes = {
        alertTemplate : function(data){
            $ionicPopup.alert({
                title: data.title,
                template: '<div align="center">'+data.content+'</div>',
                okType: 'button-iwb'
            }).then(function (res) {
            });
        }
    };
    return alertRes;
}]);

