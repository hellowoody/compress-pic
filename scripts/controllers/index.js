angular.module('app').controller('IndexCtrl',['$scope','$rootScope',function($scope,$rootScope){
    console.log('=====>>index js html');
    Reveal.initialize({
    	controls:false,
		center: true,
		// rtl: true,
		transition: 'linear',
		touch: false,
		keyboard:false
		// transitionSpeed: 'slow',
		// backgroundTransition: 'slide'
	});
	console.log(Reveal);
	$scope.nextBtn = function(){
		Reveal.next();
	};
	$scope.prevBtn = function(){
		Reveal.prev();
	};
	$scope.reset = function(){
		$rootScope.mysrc = "";
		Reveal.left();
	};
	$scope.help = function(){
		if($rootScope.help_back_flag == 0)
		{
			$rootScope.help_back_flag = 1;
			$rootScope.help_back_img = 'imgs/back.png';
			Reveal.down();
		}else{
			$rootScope.help_back_flag = 0;
			$rootScope.help_back_img = 'imgs/help.png';
			Reveal.up();
		}
		
	};
	$scope.up = function(){
		Reveal.up();
	};
	// $scope.downloadImg = function(){
	// 	var blob = new Blob([$rootScope.mysrc]);
	// 	var a = document.createElement("a");
	// 	a.href = window.URL.createObjectURL(blob);
	// 	a.download = "a.jpeg";
	// 	a.textContent = "Download";	
	// 	document.getElementById("aaa").appendChild(a);
	// 	console.log(a);
	// 	console.log(a.href);
	// 	var aaa = a.href;
	// 	console.log(aaa.substr(5));
	// 	//var objecturl =  window.URL.createObjectURL($rootScope.mysrc);
	// 	window.URL.revokeObjectURL(aaa.substr(5));
	// }
	$scope.downloadImg = function(){
		// var imgsrc = document.getElementById('userImg-User-Selector').src;
		var imgsrc = $rootScope.mysrc;
		var newdata = imgsrc.replace(/^data:image\/png/, 'data:application/octet-stream');
		$('#downloader').attr('download','小图片_smallpic.png' ).attr('href', newdata);
	}
	$scope.upload = function(){
		document.getElementById("file").click();
	}
}]);