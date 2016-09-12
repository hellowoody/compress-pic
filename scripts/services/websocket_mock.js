/**
 * Created by woody on 2015/12/12.
 */
angular.module('app').factory('WebSocket', ['$websocket', '$rootScope', function($websocket, $rootScope) {
//  var ws = $websocket('ws://localhost:9001/wobowebsocket');
  var wsurl = $rootScope.websocketUrlController+'?userId='+$rootScope.userId;
  var ws = $websocket(wsurl);
  var collection = [];
  ws.onMessage(function(event) {
    console.log('message: ', event);
    var res;
    try {
      res = JSON.parse(event.data);
    } catch(e) {
      res = {
          'userId': $rootScope.userId,
          'message': event.data
      };
    }
    collection.push({
      userId: res.userId,
      content: res.message,
      timeStamp: event.timeStamp
    });
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