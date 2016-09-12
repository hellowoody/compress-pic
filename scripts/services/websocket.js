/**
 * Created by woody on 2015/12/12.
 */
angular.module('app').factory('WebSocket', ['$websocket', '$rootScope','$cordovaLocalNotification', function($websocket, $rootScope,$cordovaLocalNotification) {
//  var ws = $websocket('ws://localhost:9001/wobowebsocket');
  var wsurl = $rootScope.websocketUrlController+'?userId='+$rootScope.userId;
  var ws = $websocket(wsurl);
  var collection = [];
  ws.onMessage(function(event) {
    console.log('message: ', event);
    var res;
    try {
      res = (new Function("return " + event.data))();
    } catch(e) {
      res = {
          'userId': $rootScope.userId,
          'message': event.data
      };
    }
    $cordovaLocalNotification.schedule([
      {
          id: res.id,
          title: res.title,
          text: res.text
      }
    ]).then(function (result) {
      //to do
    });
//    collection.push({
//      userId: res.userId,
//      content: res.message,
//      timeStamp: event.timeStamp
//    });
  });
  $rootScope.$on('$cordovaLocalNotification:click',function (event, notification, state) {
    //to do
  });
  ws.onError(function(event) {
    console.log('connection Error', event);
  });
  ws.onClose(function(event) {
    console.log('connection closed', event);
  });
  ws.onOpen(function() {
    console.log('connection open');
//    ws.send('Hello woody');
  });
  return {
    collection: collection,
    status: function() {
      return ws.readyState;
    },
    send: function(message) {
      if (angular.isString(message)) 
      {
        ws.send(message);
      }
      else if (angular.isObject(message)) 
      {
        ws.send(JSON.stringify(message));
      }
    }
  };
}]);