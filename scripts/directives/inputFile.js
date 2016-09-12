/**
 * Created by woody on 2015/11/8.
 */
angular.module('app').directive('uploadImg',['$document','Init','$rootScope',function($document,Init,$rootScope){
    var uploadImg = function(obj){
        var postData={imgBase64:obj};
        Init.iwbhttp('/user/uploadImg',postData,function(data,header,config,status){
        },function(data,header,config,status){
        });
    }
    var setBase64 = function(obj){
        $rootScope.mysrc = obj;
    }
    return {
        restrict: 'E',
        template:'<input accept="image/jpg,image/jpeg,image/png" id="file" type="file"/>',
        link:function($scope, $element, $attr){
            document.querySelector('#file').addEventListener('change', function () {
                var that = this;
                if (that.files.length === 0) return;
                lrz(that.files[0], {
                    width: 800
                })
                .then(function (rst) {
                    // console.log(rst.base64);
                    // $('#userImg-User-Selector').attr("src",rst.base64);
                    // console.log(document.getElementById("userImg-User-Selector").src);
                    //uploadImg(rst.base64);
                    setBase64(rst.base64);
                    Reveal.right();
                    return rst;
                });
            });
        }
    };
}]);