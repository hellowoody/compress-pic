/**
 * Created by woody on 2015/10/7.
 */
angular.module('app').factory('Init', ['$http','$rootScope',function($http,$rootScope){
    var userInit = function(data)
    {
        
    };
    var initRes = {
        iwbhttp : function(url,data,success,error){
            $http({
                url:url,
                data: "params="+JSON.stringify(data),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' },
                method: 'POST'
                //method:'GET'
            }).success(function(data,header,config,status){
                console.log('========success==============');
                success(data,header,config,status);
            }).error(function(data,header,config,status){
                console.log('========error==============');
                error(data,header,config,status);
            });
        }
    };
    return initRes;
}]);
